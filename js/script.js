// Fade in animation
window.addEventListener("scroll", function() {
    document.querySelectorAll(".fade-in").forEach(function(el) {
        const position = el.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;
        if (position < screenHeight - 100) {
            el.classList.add("show");
        }
    });
});

// Contact form alert
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    if(form){
        form.addEventListener("submit", function(e){
            e.preventDefault();
            alert("Message Sent Successfully! 🚀");
        });
    }
});
