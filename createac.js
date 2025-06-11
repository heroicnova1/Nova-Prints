// register.js
document.getElementById('registerForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const message = document.getElementById('registerMessage');

  if (password !== confirmPassword) {
    message.style.color = 'red';
    message.textContent = "Passwords do not match!";
    return;
  }

  // Simulate success
  message.style.color = 'green';
  message.textContent = "Account created successfully! Redirecting...";

  setTimeout(() => {
    window.location.href = 'login.html';
  }, 1500);
});
