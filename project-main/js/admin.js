// admin.js - Logika za unos pitanja
// Autor: [Tvoje ime]

document.getElementById('questionForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const section = document.getElementById('section').value;
    const lesson = document.getElementById('lesson').value;
    const language = document.getElementById('language').value;
    const question_text = document.getElementById('question_text').value;
    const options = document.getElementById('options').value;
    const correct_answer = document.getElementById('correct_answer').value;
    const points = document.getElementById('points').value;

    // TODO: Slanje podataka na backend (C# server, SQL baza)
    document.getElementById('adminMsg').textContent = 'Pitanje je uspešno dodato! (Simulacija)';
    this.reset();
}); 