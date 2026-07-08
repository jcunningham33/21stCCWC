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
          'Your email app should now open with your message ready to send. If it does not, please email us at 21stccwc@gmail.com or call 447-287-8227.';
      }
    });
  }
})();
