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

// Quiz functionality
function checkQuiz() {
    const form = document.getElementById('quiz-form');
    if (!form) return;
    const result = document.getElementById('result');
    let score = 0;

    const answers = {
        q1: 'a', // Smallest planet: Mercury
        q2: 'b', // Hottest planet: Venus
        q3: 'c', // Earth has 1 moon
        q4: 'a', // Mars known as: Red Planet
        q5: 'b', // Largest planet: Jupiter
        q6: 'c', // Saturn famous for: Rings
        q7: 'a', // Uranus spins: Sideways
        q8: 'b', // Neptune color: Blue
        q9: 'c', // Planets in solar system: 8
        q10: 'a' // Gas giants: Jupiter, Saturn
    };

    const formData = new FormData(form);
    for (let [key, value] of formData.entries()) {
        if (answers[key] === value) {
            score++;
        }
    }

    result.innerHTML = `You scored ${score} out of 10! Keep exploring the solar system! 🚀`;
}