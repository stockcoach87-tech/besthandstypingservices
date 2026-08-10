document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            alert("Thank you for contacting BEST HANDS TYPING SERVICE. We will get back to you shortly.");
            form.reset();
        });
    }
});
