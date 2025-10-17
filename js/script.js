// JS FILE 
document.addEventListener('DOMContentLoaded', function () {
  var toggles = document.querySelectorAll('.nav-toggle');

  toggles.forEach(function(btn) {
    btn.addEventListener('click', function () {
      var header = btn.closest('.header-inner');
      if (!header) return;

      var nav = header.parentElement.querySelector('.main-nav');
      if (!nav) return;

      nav.classList.toggle('open');

      if (nav.classList.contains('open')) {
        btn.setAttribute('aria-label', 'Close navigation');
      } else {
        btn.setAttribute('aria-label', 'Open navigation');
      }
    });
  });



  var feedbackForm = document.getElementById('feedback-form');
  if (feedbackForm) {
    feedbackForm.addEventListener('submit', function(e) {
      e.preventDefault();
      var data = new FormData(feedbackForm);
      var summary = {};
      data.forEach(function(value, key) {
        summary[key] = value;
      });
      console.log('Feedback form submitted (demo):', summary);
      alert('Thanks! Your feedback was recorded (demo). Replace this handler with your backend call to save responses.');
      feedbackForm.reset();
    });
  }
});