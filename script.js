document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const response = document.getElementById("formResponse");

  if (name && email && message) {
    response.textContent = "Thank you, " + name + "! We'll get back to you soon.";
    this.reset();
  } else {
    response.textContent = "Please fill in all fields.";
    response.style.color = "red";
  }
});
