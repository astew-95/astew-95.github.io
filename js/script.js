// script.js

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    // Placeholder for form submission logic
    console.log("Message sent:", {
      name,
      email,
      message
    });

    alert("Thank you for your message!");
    form.reset();
  });
});