document.addEventListener("DOMContentLoaded", function () {
    const questions = [
        { question: "Ce se întâmplă dacă legi o felie de pâine unsă de o pisică?", answers: ["Se creează o gaură neagră", "Pisica levitează", "Universul se resetează"], correct: 1 },
        { question: "Cine ar câștiga o luptă între Superman și Goku?", answers: ["Superman", "Goku", "Cine stă să se bată când există Netflix?"], correct: 2 },
        { question: "De ce Batman nu își pune gard la Gotham?", answers: ["Nu vrea să termine distracția", "E prea scump", "Îi place să alerge după răufăcători"], correct: 0 },
        { question: "Dacă un zombie mușcă un vampir, ce se întâmplă?", answers: ["Zombie devine vampir", "Vampirul devine zombie", "Încep să joace șah"], correct: 1 },
        { question: "Ce faci dacă vezi un extraterestru?", answers: ["Fug", "Îl salut și-i cer un autograf", "Îl învăț să joace FIFA"], correct: 2 },
        { question: "Dacă un pește ar putea vorbi, ce ar spune prima dată?", answers: ["Am nevoie de WiFi", "De ce oamenii mănâncă sushi?", "Apa e overrated"], correct: 1 },
        { question: "Ce se întâmplă dacă apeși toate butoanele unui lift?", answers: ["Se transformă în avion", "Te urăște toată lumea", "Începe un rave party"], correct: 1 },
        { question: "Dacă pisicile conduc lumea, ce ar interzice prima dată?", answers: ["Munca", "Câinii", "Baia"], correct: 2 },
        { question: "De ce păsările nu merg la sală?", answers: ["Arată deja bine", "Nu au bani", "Zboară pentru cardio"], correct: 2 },
        { question: "Dacă am avea superputeri, ce ar fi cel mai inutil?", answers: ["Să vezi prin perne", "Să vorbești cu furnicile", "Să alergi doar înapoi"], correct: 0 }
    ];

    const quizContainer = document.getElementById("quiz-container");

    questions.forEach((q, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question");
        questionDiv.innerHTML = `<h3>${index + 1}. ${q.question}</h3>`;

        q.answers.forEach((answer, i) => {
            questionDiv.innerHTML += `
                <label>
                    <input type="radio" name="question${index}" value="${i}"> ${answer}
                </label><br>
            `;
        });

        quizContainer.appendChild(questionDiv);
    });

    document.getElementById("submitBtn").addEventListener("click", function () {
        let score = 0;

        questions.forEach((q, index) => {
            const selected = document.querySelector(`input[name="question${index}"]:checked`);
            if (selected) {
                let selectedAnswer = parseInt(selected.value);
                if (selectedAnswer === q.correct) {
                    score += 5; // 5 puncte pentru fiecare răspuns corect
                }
            }
        });

        localStorage.setItem("score", score); // Salvăm scorul în localStorage
        window.location.href = "result.html"; // Redirecționare la result.html
    });
});

function calculateScore() {
    let score = 0;
    const questions = document.querySelectorAll(".question");

    questions.forEach((q, index) => {
        const selected = document.querySelector(`input[name="question${index}"]:checked`);
        if (selected && parseInt(selected.value) === parseInt(q.dataset.correct)) {
            score += 10; // Fiecare răspuns corect = 10 puncte
        }
    });

    console.log("Scor calculat:", score);  // 🔹 DEBUG: Vezi scorul în consola browserului

    localStorage.setItem("score", score);
    window.location.href = "result.html"; // Redirecționează spre result.html
}

