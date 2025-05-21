# Platforma za simulaciju i vežbu teorijskog ispita

## O projektu
Web aplikacija za vežbu i simulaciju teorijskog ispita iz programiranja i web tehnologija. Podržava više jezika, naprednu statistiku, rangiranje i admin panel. Pripremljena za SaaS model.

## Struktura projekta
```
project-root/
│
├── html/
│   ├── index.html
│   ├── landing.html
│   ├── question-selection.html
│   ├── register.html
│   ├── login.html
│   └── ...
│
├── css/
│   ├── styles.css
│   ├── landing.css
│   └── question-selection.css
│
├── js/
│   ├── script.js
│   ├── question-selection.js
│   ├── register.js
│   └── login.js
│
├── sql/
│   └── db_schema.sql
│
├── xml/
│   └── db_schema.xml
│
├── README.md
└── .gitignore
```

## Funkcionalnosti
- Registracija i login
- Korisnički profili i statistika
- Vizualizacija aktivnosti
- Leaderboard i rank sistem
- Simulacija ispita (50 pitanja, 120 min, automatsko ocenjivanje)
- Procentualna raspodela pitanja po sekcijama
- Višejezičnost (ćirilica, latinica, engleski...)
- Admin panel za pitanja
- Priprema za free/premium verziju

## Status i planovi
- Frontend: HTML/CSS/JS, osnovne stranice i organizacija
- Baza: SQL i XML šeme
- Sledeće: Backend u C#, povezivanje sa bazom, simulacija, napredna statistika, SaaS priprema

## TODO
- [ ] SQL tabela questions (id, section, lesson, language, question_text, options, correct_answer, points)
- [ ] Admin panel za unos pitanja
- [ ] Višejezičnost: proveriti koje jezike još dodati
- [ ] Simulacija: 50 pitanja, 257 ukupno, bodovanje do 100, 120 min
- [ ] Procentualna raspodela pitanja po sekcijama
- [ ] Ocene: 0–50 (1), 50.5–63 (2), 63.5–75 (3), 75.5–87 (4), 87.5–100 (5)
- [ ] Leaderboard: najbolje vreme za 100/100
- [ ] Leveling/rank sistem
- [ ] Free trial i premium (SaaS)
- [ ] Backend: C# + MySQL, bez frameworkova

## .gitignore primer
```
node_modules/
dist/
.env
.DS_Store
*.log
```

## Pokretanje projekta
1. Instaliraj ekstenziju **Live Server** u VS Code.
2. Desni klik na `html/index.html` i izaberi "Open with Live Server".
3. Projekat će se otvoriti u browseru i automatski osvežavati pri svakoj promeni.

## Preporučene VS Code ekstenzije
- **Live Server** – Lokalni server i automatsko osvežavanje browsera
- **Prettier** – Automatsko formatiranje HTML, CSS i JS fajlova
- **ESLint** – Pronalaženje i ispravljanje grešaka u JavaScript kodu
- **CSS Peek** – Brzi skok iz HTML-a na CSS
- **Auto Rename Tag** – Automatska promena otvarajućih/zatvarajućih HTML tagova
- **Path Intellisense** – Automatsko dovršavanje putanja do fajlova
- **Bracket Pair Colorizer 2** – Lakše praćenje zagrada 

## Changelog

### Project v1.3 – Konsolidacija strukture i UX/UI unifikacija
- Potpuna reorganizacija projekta: svi fajlovi raspoređeni u odgovarajuće foldere (`css`, `js`, `html`, `sql`, `xml`)
- Uklonjene duplirane i zastarele datoteke, pojednostavljena struktura repozitorijuma
- Svi HTML fajlovi sada koriste identičnu strukturu (sidebar, main-content, profile-header) i jedinstveni CSS (`landing.css`) za potpunu UX/UI konzistentnost
- Stilovi za dugmad i elemente objedinjeni u jedan CSS fajl
- Dodate i unapređene stranice: registracija, login, admin panel, simulacija ispita, sa osnovnom JS validacijom
- Definisana SQL i XML šema za korisnike, pitanja, statistiku i leaderboard
- Ažuriran i pojednostavljen README.md sa jasnim uputstvima, strukturom i TODO sekcijom
- Priprema za backend integraciju (C# API, povezivanje sa bazom, napredna statistika)
- Uklonjen stari dokument za kolege, sve informacije sada u README.md

### Project v1.2 – Translation Update
- Dodata podrška za više jezika
- Ispravljene greške u prevodu
- Ažuriran README.md 