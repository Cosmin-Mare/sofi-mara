document.addEventListener("DOMContentLoaded", function () {
    const score = localStorage.getItem("score");
    let level = "";

    if (score >= 20) {
        level = "👑 Geniu Comic!";
    } else if (score >= 10) {
        level = "😂 Semi-Deștept!";
    } else {
        level = "🤡 Clovn Certificat!";
    }

    document.getElementById("score-text").innerHTML = `Ai obținut ${score} puncte! Nivelul tău: <b>${level}</b>`;

    startConfetti();
});

function startConfetti() {
    const confetti = document.getElementById("confetti");
    const ctx = confetti.getContext("2d");
    confetti.width = window.innerWidth;
    confetti.height = window.innerHeight;

    const colors = ["#ffb6c1", "#87cefa", "#fffacd"];

    function drawConfetti() {
        for (let i = 0; i < 100; i++) {
            ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
            ctx.fillRect(Math.random() * confetti.width, Math.random() * confetti.height, 10, 10);
        }
    }

    setInterval(drawConfetti, 100);
}
