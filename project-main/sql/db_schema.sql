-- Tabela za korisnike
CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username VARCHAR(50) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Tabela za statistiku korisnika
CREATE TABLE user_stats (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    questions_answered INTEGER DEFAULT 0,
    correct_answers INTEGER DEFAULT 0,
    last_active DATETIME,
    FOREIGN KEY(user_id) REFERENCES users(id)
);

-- Tabela za leaderboard
CREATE TABLE leaderboard (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    score INTEGER DEFAULT 0,
    accuracy REAL DEFAULT 0,
    activity_score INTEGER DEFAULT 0,
    FOREIGN KEY(user_id) REFERENCES users(id)
);

-- Tabela za pitanja
CREATE TABLE questions (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    section VARCHAR(50) NOT NULL,
    lesson VARCHAR(100) NOT NULL,
    language VARCHAR(30) NOT NULL,
    question_text TEXT NOT NULL,
    options TEXT NOT NULL, -- JSON ili CSV format
    correct_answer INTEGER NOT NULL,
    points INTEGER DEFAULT 2
); 