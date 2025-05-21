// register.js - Logika za registraciju korisnika
// Autor: [Tvoje ime]

document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // TODO: Dodati slanje podataka na backend (C# server ili XML/SQL fajl)
    alert('Registracija je uspešno poslata! (Simulacija)');
    // Očisti formu
    this.reset();
}); 