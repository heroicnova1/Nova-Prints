document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('orderForm');
  const messageDiv = document.getElementById('orderMessage');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Simple validation handled by HTML5 'required', so here just simulate success:
    messageDiv.style.color = 'green';
    messageDiv.textContent = 'Thank you! Your order has been received. We will contact you soon.';

    // Reset form after submission
    form.reset();
  });
});
