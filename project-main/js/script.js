// script.js - Glavna logika kviz aplikacije
// Autor: [Tvoje ime]
// Opis: Sadrži logiku za prikazivanje pitanja, bodovanje i navigaciju kroz kviz.

// Sample question data structure
const questionData = [
    {
        id: 1,
        group: 'Uvod',
        lecture: 'Šta ćete naučiti',
        tags: ['Uvod'],
        question: 'Koji su glavni ciljevi ovog kursa?',
        options: [
            'Naučiti Webflow i web dizajn od početka do kraja',
            'Samo osnovni HTML i CSS',
            'Samo teorija web dizajna',
            'Samo Figma bez praktične primene'
        ],
        correctAnswer: 0,
        points: 10
    },
    {
        id: 2,
        group: 'Uvod',
        lecture: 'Proces izrade sajta',
        question: 'Koji je pravilan redosled u procesu izrade sajta?',
        options: [
            'Dizajn → Razvoj → Planiranje → Testiranje',
            'Planiranje → Dizajn → Razvoj → Testiranje',
            'Razvoj → Planiranje → Dizajn → Testiranje',
            'Testiranje → Razvoj → Dizajn → Planiranje'
        ],
        correctAnswer: 1,
        points: 10
    },
    {
        id: 3,
        group: 'Uvod',
        lecture: 'Šta je Webflow, i zašto on',
        question: 'Koja je glavna prednost Webflow-a u odnosu na tradicionalno kodiranje?',
        options: [
            'Sporiji razvoj sajta',
            'Vizuelno programiranje bez potrebe za pisanjem koda',
            'Nemogućnost prilagođavanja dizajna',
            'Ograničene mogućnosti hostinga'
        ],
        correctAnswer: 1,
        points: 10
    },
    {
        id: 4,
        group: 'Uvod',
        lecture: 'Zašto učimo Figmu i dizajn',
        question: 'Zašto je važno učiti Figmu pre Webflow-a?',
        options: [
            'Figma nije povezana sa web dizajnom',
            'Omogućava planiranje i dizajn pre implementacije',
            'Figma je skuplja od Webflow-a',
            'Figma je teža za učenje od Webflow-a'
        ],
        correctAnswer: 1,
        points: 10
    },
    {
        id: 5,
        group: 'Uvod',
        lecture: 'Kako da pratite kurs',
        question: 'Koji je preporučeni način praćenja kursa?',
        options: [
            'Preskakanje lekcija koje deluju poznato',
            'Gledanje svih lekcija bez praktičnog rada',
            'Praćenje redosleda i praktično ponavljanje pokazanog',
            'Nasumično biranje lekcija'
        ],
        correctAnswer: 2,
        points: 10
    },
    {
        id: 6,
        group: 'Uvod',
        lecture: 'Pristup diskord grupi',
        question: 'Koja je glavna svrha Discord grupe u kursu?',
        options: [
            'Samo za zabavu',
            'Za deljenje muzike',
            'Za međusobnu pomoć i komunikaciju sa mentorima',
            'Za igranje igrica'
        ],
        correctAnswer: 2,
        points: 10
    }
];

// Klasa za rad sa kvizom
class QuizApp {
    constructor() {
        // Inicijalizacija stanja kviza
        this.currentQuestion = 0;
        this.score = 0;
        this.flaggedQuestions = new Set();
        this.filteredQuestions = [...questionData];
        this.initializeElements();
        this.setupEventListeners();
        this.loadQuestion();
    }

    // Pronalazi i čuva sve potrebne DOM elemente
    initializeElements() {
        // Initialize all DOM elements
        this.progressBar = document.getElementById('progressBar');
        this.progressText = document.getElementById('progressText');
        this.pointsDisplay = document.getElementById('points');
        this.questionText = document.getElementById('questionText');
        this.imageContainer = document.getElementById('imageContainer');
        this.optionsContainer = document.getElementById('options');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.showAnswerBtn = document.getElementById('showAnswerBtn');
        this.exitBtn = document.getElementById('exitBtn');
        this.flagBtn = document.getElementById('flagQuestion');
    }

    // Postavlja event listenere na dugmiće
    setupEventListeners() {
        this.prevBtn.addEventListener('click', () => this.previousQuestion());
        this.nextBtn.addEventListener('click', () => this.nextQuestion());
        this.showAnswerBtn.addEventListener('click', () => this.showAnswer());
        this.exitBtn.addEventListener('click', () => window.location.href = 'landing.html');
        this.flagBtn.addEventListener('click', () => this.toggleFlag());
        
        // Add review button event listener
        document.getElementById('reviewButton').addEventListener('click', () => this.showFlaggedQuestions());
    }

    // Učitava trenutno pitanje
    loadQuestion() {
        const question = this.filteredQuestions[this.currentQuestion];
        if (!question) return;

        // Update progress
        this.updateProgress();

        // Set question text
        this.questionText.textContent = question.question;

        // Load image if exists
        this.imageContainer.innerHTML = question.image ? 
            `<img src="${question.image}" alt="Question Image">` : '';

        // Load options
        this.optionsContainer.innerHTML = '';
        question.options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            optionElement.innerHTML = `
                <input type="radio" name="answer" value="${index}">
                <label>${option}</label>
            `;
            optionElement.addEventListener('click', () => this.selectOption(index));
            this.optionsContainer.appendChild(optionElement);
        });

        // Update flag button
        this.flagBtn.classList.toggle('flagged', this.flaggedQuestions.has(question.id));

        // Update navigation buttons
        this.prevBtn.disabled = this.currentQuestion === 0;
        this.nextBtn.disabled = this.currentQuestion === this.filteredQuestions.length - 1;
    }

    // Ažurira progres bar i tekst
    updateProgress() {
        const progress = ((this.currentQuestion + 1) / this.filteredQuestions.length) * 100;
        this.progressBar.style.width = `${progress}%`;
        this.progressText.textContent = `Question ${this.currentQuestion + 1} of ${this.filteredQuestions.length}`;
        this.pointsDisplay.textContent = `Points: ${this.score}`;
    }

    // Selektuje odgovor i prikazuje rezultat
    selectOption(index) {
        const question = this.filteredQuestions[this.currentQuestion];
        const options = this.optionsContainer.children;

        Array.from(options).forEach(option => {
            option.classList.remove('correct', 'incorrect');
        });

        if (index === question.correctAnswer) {
            options[index].classList.add('correct');
            this.score += question.points;
        } else {
            options[index].classList.add('incorrect');
            options[question.correctAnswer].classList.add('correct');
        }
    }

    // Prikazuje tačan odgovor
    showAnswer() {
        const question = this.filteredQuestions[this.currentQuestion];
        const options = this.optionsContainer.children;
        options[question.correctAnswer].classList.add('correct');
    }

    // Obeležava/odbeležava pitanje
    toggleFlag() {
        const question = this.filteredQuestions[this.currentQuestion];
        if (this.flaggedQuestions.has(question.id)) {
            this.flaggedQuestions.delete(question.id);
        } else {
            this.flaggedQuestions.add(question.id);
        }
        this.flagBtn.classList.toggle('flagged');
    }

    // Navigacija na prethodno pitanje
    previousQuestion() {
        if (this.currentQuestion > 0) {
            this.currentQuestion--;
            this.loadQuestion();
        }
    }

    // Navigacija na sledeće pitanje
    nextQuestion() {
        if (this.currentQuestion < this.filteredQuestions.length - 1) {
            this.currentQuestion++;
            this.loadQuestion();
        }
    }

    // Prikazuje sumarni izveštaj
    showSummary() {
        const summary = document.getElementById('summary');
        const content = document.getElementById('summaryContent');
        
        const totalQuestions = this.filteredQuestions.length;
        const flaggedCount = this.flaggedQuestions.size;
        const maxScore = this.filteredQuestions.reduce((sum, q) => sum + q.points, 0);
        
        content.innerHTML = `
            <p>Total Questions: ${totalQuestions}</p>
            <p>Questions Completed: ${this.currentQuestion + 1}</p>
            <p>Score: ${this.score}/${maxScore}</p>
            <p>Flagged Questions: ${flaggedCount}</p>
        `;
        
        summary.classList.remove('hidden');
    }

    // Prikazuje samo obeležena pitanja
    showFlaggedQuestions() {
        const flaggedQuestions = questionData.filter(q => this.flaggedQuestions.has(q.id));
        
        if (flaggedQuestions.length === 0) {
            alert('No questions flagged for review');
            return;
        }

        this.filteredQuestions = flaggedQuestions;
        this.currentQuestion = 0;
        this.loadQuestion();
    }
}

// Inicijalizacija aplikacije
// Pokreće se kada se DOM učita
document.addEventListener('DOMContentLoaded', () => {
    const app = new QuizApp();
}); 