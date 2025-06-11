// login.js
document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Simple hardcoded check (for demo only — not secure)
  if (email === 'user@example.com' && password === 'password123') {
    document.getElementById('loginMessage').style.color = 'green';
    document.getElementById('loginMessage').textContent = 'Login successful!';
    // Redirect or show user dashboard
    setTimeout(() => window.location.href = 'dashboard.html', 1000);
  } else {
    document.getElementById('loginMessage').textContent = 'Invalid email or password.';
  }
});
