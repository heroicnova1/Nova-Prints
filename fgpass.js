  document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const emailInput = document.getElementById('email');
    const captchaInput = document.getElementById('captcha');
    const captchaQuestion = document.getElementById('captcha-question');
    const messageDiv = document.getElementById('loginMessage');

    let correctAnswer = 0;

    // Generate a simple math CAPTCHA
    function generateCaptcha() {
      const num1 = Math.floor(Math.random() * 10);
      const num2 = Math.floor(Math.random() * 10);
      correctAnswer = num1 + num2;
      captchaQuestion.textContent = `What is ${num1} + ${num2}?`;
    }

    generateCaptcha(); // Generate on page load

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const email = emailInput.value.trim();
      const captchaAnswer = parseInt(captchaInput.value.trim(), 10);

      if (!email) {
        messageDiv.textContent = 'Please enter your email.';
        messageDiv.style.color = 'red';
        return;
      }

      if (isNaN(captchaAnswer) || captchaAnswer !== correctAnswer) {
        messageDiv.textContent = 'Incorrect CAPTCHA answer. Please try again.';
        messageDiv.style.color = 'red';
        generateCaptcha(); // Regenerate CAPTCHA
        return;
      }

      // Simulate email being sent
      setTimeout(() => {
        messageDiv.textContent = 'A password reset link has been sent to your email.';
        messageDiv.style.color = 'green';
        emailInput.value = '';
        captchaInput.value = '';
        generateCaptcha();
      }, 1000);
    });
  });


