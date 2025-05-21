-- Kreiranje baza za svaku lekciju
CREATE DATABASE c_programming_db;
CREATE DATABASE csharp_programming_db;
CREATE DATABASE java_programming_db;
CREATE DATABASE web_design_db;
CREATE DATABASE web_programming_db;
CREATE DATABASE databases_db;

-- Zajednička struktura za svaku bazu
-- Koristićemo USE komandu za svaku bazu

-- C Programming Database
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

-- Web Programming Database
USE web_programming_db;

-- Kreiranje istih tabela
CREATE TABLE questions (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    question_text TEXT NOT NULL,
    question_type ENUM('multiple_choice', 'fill_in') NOT NULL,
    difficulty_level INTEGER DEFAULT 1,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE multiple_choice_questions (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    question_id INTEGER NOT NULL,
    options JSON NOT NULL,
    correct_answer_index INTEGER NOT NULL,
    FOREIGN KEY(question_id) REFERENCES questions(id)
);

CREATE TABLE fill_in_questions (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    question_id INTEGER NOT NULL,
    correct_answer TEXT NOT NULL,
    alternative_answers JSON,
    hint TEXT,
    FOREIGN KEY(question_id) REFERENCES questions(id)
);

-- C# Programming Database
USE csharp_programming_db;

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

-- Ponoviti istu strukturu za ostale baze
USE java_programming_db;
-- Kopirati strukturu tabela i dodati specifične primere

USE web_design_db;
-- Kopirati strukturu tabela i dodati specifične primere

USE databases_db;
-- Kopirati strukturu tabela i dodati specifične primere

-- Za multiple choice pitanje:
INSERT INTO questions (question_text, question_type, difficulty_level) VALUES 
('Vaše pitanje?', 'multiple_choice', 1);

INSERT INTO multiple_choice_questions (question_id, options, correct_answer_index) VALUES 
(LAST_INSERT_ID(), '["opcija1", "opcija2", "opcija3", "opcija4"]', 0);

-- Za fill-in pitanje:
INSERT INTO questions (question_text, question_type, difficulty_level) VALUES 
('Vaše pitanje _____?', 'fill_in', 1);

INSERT INTO fill_in_questions (question_id, correct_answer, alternative_answers, hint) VALUES 
(LAST_INSERT_ID(), 'tačan_odgovor', '["alt1", "alt2"]', 'hint ako je potreban'); 