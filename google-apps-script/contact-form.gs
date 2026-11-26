/**
 * 21st Century Christian Worship Center - website contact form.
 *
 * Receives messages from the Contact page and emails them to the church
 * inbox. Runs inside the church's own Google account, so no password is
 * stored anywhere. Setup steps: see google-apps-script/README.md.
 */

var TO_ADDRESS = '21stccwc@gmail.com';
var MAX_PER_10_MIN = 20; // overall cap to limit spam floods

// Opening the Web app URL in a browser shows this. It confirms the
// deployed version is current. It does not send any email.
function doGet() {
  return reply_(true, null, 'contact-form v2');
}

function doPost(e) {
  try {
    var p = (e && e.parameter) || {};

    // Spam checks: hidden "website" field must be empty, and the form
    // must have been open for at least 3 seconds before sending.
    if (p.website) return reply_(true);
    if (Number(p.elapsed || 0) < 3000) return reply_(true);

    var first = clean_(p.first_name, 60);
    var last = clean_(p.last_name, 60);
    var email = clean_(p.email, 120);
    var phone = clean_(p.phone, 40);
    var message = clean_(p.message, 5000);

    if (!first || !last || !email || !message) {
      return reply_(false, 'Please fill in your first name, last name, email, and message.');
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return reply_(false, 'Please enter a valid email address.');
    }

    // Overall rate limit.
    var cache = CacheService.getScriptCache();
    var count = Number(cache.get('count') || 0);
    if (count >= MAX_PER_10_MIN) {
      return reply_(false, 'We are receiving a lot of messages right now. Please try again in a few minutes, or call 447-284-8227.');
    }
    cache.put('count', String(count + 1), 600);

    MailApp.sendEmail({
      to: TO_ADDRESS,
      replyTo: email,
      name: '21st CCWC Website',
      subject: 'Website message from ' + first + ' ' + last,
      body:
        'New message from the church website contact form.\n\n' +
        'Name: ' + first + ' ' + last + '\n' +
        'Email: ' + email + '\n' +
        'Phone: ' + (phone || 'not provided') + '\n\n' +
        'Message:\n' + message + '\n\n' +
        '(Press Reply to respond directly to ' + first + '.)'
    });

    return reply_(true);
  } catch (err) {
    return reply_(false, 'Sorry, something went wrong. Please email us at 21stccwc@gmail.com or call 447-284-8227.');
  }
}

function clean_(value, maxLen) {
  return String(value || '').replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '').trim().slice(0, maxLen);
}

function reply_(ok, error, version) {
  var out = ok ? { ok: true } : { ok: false, error: error };
  if (version) out.version = version;
  return ContentService
    .createTextOutput(JSON.stringify(out))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Run this once from the Apps Script editor (select it in the toolbar and
 * click Run). It asks Google for permission to send email and sends a test
 * message to the church inbox.
 */
function sendTestEmail() {
  MailApp.sendEmail(TO_ADDRESS, 'Website contact form test', 'If you can read this, the contact form script can send email.');
}
