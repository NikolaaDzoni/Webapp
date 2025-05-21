// login.js - Logika za prijavu korisnika
// Autor: [Tvoje ime]

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // TODO: Dodati slanje podataka na backend (C# server ili XML/SQL fajl)
    alert('Prijava je uspešno poslata! (Simulacija)');
    // Očisti formu
    this.reset();
}); 