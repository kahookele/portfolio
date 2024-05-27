document.addEventListener('DOMContentLoaded', function() {
  // Initialize EmailJS
  (function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({
      publicKey: "aPKRulvKJBrL00iA2",
    });
  })();

  window.onload = function() {
    document.getElementById('email-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm('service_1c1t3hj', 'template_wcccj75', this)
            .then(() => {
                console.log('SUCCESS!');
            }, (error) => {
                console.log('FAILED...', error);
            });
    });
  }

  // modal function
  function openModal() {
    const modal = document.getElementById('modal');
    const sent = document.getElementById('sent');

    sent.addEventListener('click', () => {
      modal.style.display = 'block';
    });
  };

  function closeModal() {
    const modal = document.getElementById('modal');
    const x = document.getElementById('x');

    x.addEventListener('click', () => {
      modal.style.display = 'none';
      window.location.reload();
    });
  };

  openModal();
  closeModal();
});