document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");

  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(open));
    });

    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => nav.classList.remove("open"));
    });
  }

  const form = document.getElementById("whatsapp-form");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const name = document.getElementById("name").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const email = document.getElementById("email").value.trim();
      const service = document.getElementById("service").value;
      const message = document.getElementById("message").value.trim();
      const status = document.getElementById("form-status");

      if (!name || !message) {
        status.textContent = "Please enter your name and message.";
        return;
      }

      const text = [
        "Hello Amit, I would like to enquire about your services.",
        "",
        `Name: ${name}`,
        `Phone / WhatsApp: ${phone || "Not provided"}`,
        `Email: ${email || "Not provided"}`,
        `Service: ${service || "Not selected"}`,
        "",
        `Requirement: ${message}`
      ].join("\n");

      status.textContent = "Opening WhatsApp...";
      window.open(
        `https://wa.me/916354178889?text=${encodeURIComponent(text)}`,
        "_blank",
        "noopener"
      );
    });
  }
});