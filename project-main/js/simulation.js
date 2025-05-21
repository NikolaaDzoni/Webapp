// simulation.js - Logika za simulaciju ispita
// Autor: [Tvoje ime]

let questions = [];
let current = 0;
let answers = [];
let timer;
let timeLeft = 120 * 60; // 120 minuta u sekundama

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        const min = String(Math.floor(timeLeft / 60)).padStart(2, '0');
        const sec = String(timeLeft % 60).padStart(2, '0');
        document.getElementById('timer').textContent = `${min}:${sec}`;
        if (timeLeft <= 0) finishSim();
    }, 1000);
}

function showQuestion(idx) {
    if (!questions[idx]) return;
    document.getElementById('sim-question').textContent = `Pitanje ${idx+1}: ${questions[idx].question_text}`;
    const opts = questions[idx].options.split(',');
    document.getElementById('sim-options').innerHTML = opts.map((opt, i) =>
        `<div><input type='radio' name='simOpt' value='${i}' ${answers[idx]==i?'checked':''}> ${opt}</div>`
    ).join('');
}

document.getElementById('prevSimQ').onclick = () => {
    saveAnswer();
    if (current > 0) {
        current--;
        showQuestion(current);
    }
};
document.getElementById('nextSimQ').onclick = () => {
    saveAnswer();
    if (current < questions.length-1) {
        current++;
        showQuestion(current);
    }
};
document.getElementById('finishSim').onclick = finishSim;

function saveAnswer() {
    const val = document.querySelector('input[name="simOpt"]:checked');
    answers[current] = val ? Number(val.value) : null;
}

function finishSim() {
    clearInterval(timer);
    saveAnswer();
    let correct = 0, total = 0;
    questions.forEach((q, i) => {
        if (answers[i] === Number(q.correct_answer)) correct += Number(q.points);
        total += Number(q.points);
    });
    let percent = (correct/total)*100;
    let grade = 1;
    if (percent > 87.5) grade = 5;
    else if (percent > 75.5) grade = 4;
    else if (percent > 63.5) grade = 3;
    else if (percent > 50.5) grade = 2;
    document.getElementById('sim-result').style.display = '';
    document.getElementById('sim-result').innerHTML = `Rezultat: ${correct}/${total} bodova<br>Ocena: ${grade}`;
}

// TODO: Dohvati pitanja sa servera (dummy podaci za sada)
window.onload = function() {
    // Dummy pitanja
    questions = [
        {question_text:'Koliko je 2+2?', options:'3,4,5', correct_answer:1, points:2},
        {question_text:'Koji je glavni grad Srbije?', options:'Novi Sad,Beograd,Niš', correct_answer:1, points:2}
    ];
    answers = Array(questions.length).fill(null);
    showQuestion(0);
    startTimer();
}; 