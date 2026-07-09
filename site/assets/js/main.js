(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  var year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();

  var countdown = document.querySelector('[data-countdown]');
  if (countdown) {
    var target = new Date(countdown.getAttribute('data-countdown')).getTime();
    var elDays = countdown.querySelector('[data-days]');
    var elHours = countdown.querySelector('[data-hours]');
    var elMins = countdown.querySelector('[data-mins]');
    var elSecs = countdown.querySelector('[data-secs]');
    var pad = function (n) { return (n < 10 ? '0' : '') + n; };
    var timer;
    var tick = function () {
      var diff = target - new Date().getTime();
      if (isNaN(target) || diff <= 0) {
        countdown.classList.add('is-past');
        countdown.textContent = 'The celebration is here! Join us today.';
        if (timer) clearInterval(timer);
        return;
      }
      var days = Math.floor(diff / 86400000);
      var hours = Math.floor((diff % 86400000) / 3600000);
      var mins = Math.floor((diff % 3600000) / 60000);
      var secs = Math.floor((diff % 60000) / 1000);
      if (elDays) elDays.textContent = days;
      if (elHours) elHours.textContent = pad(hours);
      if (elMins) elMins.textContent = pad(mins);
      if (elSecs) elSecs.textContent = pad(secs);
    };
    tick();
    timer = setInterval(tick, 1000);
  }

  var form = document.querySelector('form.contact');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var status = form.querySelector('.form-status');
      var get = function (name) {
        var el = form.querySelector('[name="' + name + '"]');
        return el ? el.value.trim() : '';
      };
      var first = get('first_name');
      var last = get('last_name');
      var email = get('email');
      var message = get('message');
      if (!first || !last || !email || !message) {
        if (status) status.textContent = 'Please fill in your first name, last name, email, and message.';
        return;
      }
      var subject = 'Website message from ' + first + ' ' + last;
      var body =
        'Name: ' + first + ' ' + last + '\n' +
        'Phone: ' + (get('phone') || 'not provided') + '\n' +
        'Email: ' + email + '\n\n' +
        message;
      window.location.href =
        'mailto:21stccwc@gmail.com?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(body);
      if (status) {
        status.textContent =
          'Your email app should now open with your message ready to send. If it does not, please email us at 21stccwc@gmail.com or call 447-284-8227.';
      }
    });
  }
})();
