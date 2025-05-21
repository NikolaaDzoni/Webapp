-- C Programming Database
CREATE DATABASE c_programming_db;
USE c_programming_db;

-- Tabela za pitanja
CREATE TABLE questions (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    question_text TEXT NOT NULL,
    question_type ENUM('multiple_choice', 'fill_in') NOT NULL,
    difficulty_level INTEGER DEFAULT 1,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Tabela za multiple choice pitanja
CREATE TABLE multiple_choice_questions (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    question_id INTEGER NOT NULL,
    options JSON NOT NULL,
    correct_answer_index INTEGER NOT NULL,
    FOREIGN KEY(question_id) REFERENCES questions(id)
);

-- Tabela za fill-in pitanja
CREATE TABLE fill_in_questions (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    question_id INTEGER NOT NULL,
    correct_answer TEXT NOT NULL,
    alternative_answers JSON,
    hint TEXT,
    FOREIGN KEY(question_id) REFERENCES questions(id)
); 