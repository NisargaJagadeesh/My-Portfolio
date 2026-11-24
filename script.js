const menuButton = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  menuButton.textContent = navLinks.classList.contains("open") ? "✕" : "☰";
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuButton.textContent = "☰";
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("contact-form").addEventListener("submit", event => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const status = document.getElementById("form-status");
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !message) {
    status.textContent = "Please fill in all fields.";
    status.style.color = "#c43c4b";
    return;
  }

  if (!validEmail.test(email)) {
    status.textContent = "Please enter a valid email address.";
    status.style.color = "#c43c4b";
    return;
  }

  status.textContent = `Thank you, ${name}! Your form is valid. This demo does not send messages yet.`;
  status.style.color = "#17845a";
  event.target.reset();
});