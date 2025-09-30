document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
    from_name: document.getElementById("name").value,
    reply_to: document.getElementById("email").value,
  };

  emailjs.send("service_6nxr96s", "template_xgl6u2t", formData)
    .then(() => {
      alert("✅ Message sent successfully!");
      document.getElementById("contact-form").reset();
    })
    .catch((error) => {
      alert("❌ Failed to send message. Please try again.");
      console.error("EmailJS Error:", error);
    });
});





