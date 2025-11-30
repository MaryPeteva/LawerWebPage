// Initialize EmailJS
emailjs.init("YOUR_PUBLIC_KEY"); // <-- replace this

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", params)
        .then(() => {
            alert("Съобщението е изпратено успешно!");
            document.getElementById("contactForm").reset();
        })
        .catch((error) => {
            alert("Грешка при изпращане. Опитайте отново.");
            console.error(error);
        });
});
