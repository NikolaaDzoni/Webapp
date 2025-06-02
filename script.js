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
    },
    {
        id: 7, // Assign new unique IDs starting after the last existing one (6)
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Основе', // Assuming a generic lecture name, you can change this if needed
        tags: ['C', 'Програмирање'],
        question: 'Заокружите број испред кључне речи којом се при кодирању у програмском језику Ц, у наредби вишеструког гранања обележавају вредности за које се улази у поједине гране:',
        options: [
            'switch',
            'break',
            'return',
            'case'
        ],
        correctAnswer: 3,
        points: 1
    },
    {
        id: 8,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Основе',
        tags: ['C', 'Програмирање', 'Datoteke'],
        question: 'У програмском језику Ц декларисане су променљивe и дат је део кода програма:\n<pre><code><span class="code-keyword">FILE</span> *fp;\n<span class="code-keyword">char</span> str[150];\nfp=fopen(<span class="code-string">"primer.txt"</span>, <span class="code-string">"r"</span>);\nfgets(str, 80, fp);</code></pre>\nОдредити шта је последица извршавања датог кода. Заокружити број испред очекиваног одговора:',
        options: [
            'Учитава 80 карактера из датотеке и смешta у стринг str.',
            'Учитава максимално 150 карактера из датотеке и смешta у стринг str.',
            'Учитава стринг из датотеке све док се не учита знак за нови ред или 80 карактера',
            'Учитава стринг из датотеке све док се не учита знак за нови ред или 150 карактера'
        ],
        correctAnswer: 2,
        points: 1
    },
    {
        id: 9,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Основе',
        tags: ['C', 'Програмирање', 'I/O'],
        question: 'У програму написаном у програмском језику Ц декларисана је променљива <span class="code-bold">pod</span> типа <span class="code-bold">int</span>. Употребом функције <span class="code-bold">fprintf(...)</span> уписати декларисан податак у <span class="code-bold">стандардну излазну датотеку</span>.\nЗаокружите број испред исправно написане наредбе:',
        options: [
            '<span class="code-bold">fprintf(pod);</span>',
            '<span class="code-bold">fprintf("<span class="code-format-specifier">%d</span>", pod);</span>',
            '<span class="code-bold">fprintf("<span class="code-format-specifier">%d</span>", pod, stdin);</span>',
            '<span class="code-bold">fprintf(stdout, "<span class="code-format-specifier">%d</span>", pod);</span>',
        ],
        correctAnswer: 3,
        points: 1
    },
    {
        id: 10,
        group: 'ПРОГРАМИРАЊЕ – ПРОГРАМСКИ ЈЕЗИК C',
        lecture: 'Структуре',
        tags: ['C', 'Програмирање', 'Структуре'],
        question: 'У програмском језику Ц декларисани су структурни типови података Tacka3D (који дефинише тачку у простору) и Lopta (одређена центром и полупречником):\n<div class="code-blocks-container">\n  <div class="code-block">\n    <pre><code><span class="code-bold code-keyword">typedef struct</span>\n{\n  <span class="code-keyword">float</span> x, y, z;\n}<span class="code-bold">Tacka3D;</span></code></pre>\n  </div>\n  <div class="code-block">\n    <pre><code><span class="code-bold code-keyword">typedef struct</span>\n{\n  Tacka3D centar;\n  <span class="code-keyword">float</span> R;\n}<span class="code-bold">Lopta;</span></code></pre>\n  </div>\n</div>\nЗаокружите број испред исправно написане наредбе декларације и иницијализације променљиве x типа Lopta, тако да јој центар буде у тачки O(2,2,2), а полупречник 10цм:',
        options: [
            'Lopta x={10, {2, 2, 2}};',
            'Lopta x={2, 2, 2, 10};',
            'Lopta x={2, 2, 2}, {10};',
            'Lopta x={{2, 2, 2}, 10};'
        ],
        correctAnswer: 3,
        points: 1
    }
];

class QuizApp {
    constructor(questions) {
        this.currentQuestion = 0;
        this.score = 0;
        this.flaggedQuestions = new Set();
        this.filteredQuestions = questions;
        this.userAnswers = {};
        this.initializeElements();
        this.setupEventListeners();
        this.loadQuestion();
    }

    initializeElements() {
        // Initialize all DOM elements
        this.pointsDisplay = document.getElementById('questionPoints');
        this.questionText = document.getElementById('questionText');
        this.imageContainer = document.getElementById('imageContainer');
        this.optionsContainer = document.getElementById('options');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.showAnswerBtn = document.getElementById('showAnswerBtn');
        this.exitBtn = document.getElementById('exitBtn');
        this.flagBtn = document.getElementById('flagQuestion');

        // Correctly initialize question number elements
        this.currentQuestionNumber = document.getElementById('currentQuestionNumber');
        this.totalQuestions = document.getElementById('totalQuestions');
        
        // Initialize Summary and Back buttons
        this.summaryBtn = document.getElementById('summaryBtn');
        this.backToQuizBtn = document.getElementById('backToQuizBtn');
        
        // Initialize Summary and Quiz containers
        this.summaryContainer = document.getElementById('summary');
        this.quizMainContainer = document.querySelector('.container'); // Assuming the main quiz content is in .container
        this.summaryTableBody = document.querySelector('#summaryContent tbody'); // Initialize table body
    }

    setupEventListeners() {
        this.prevBtn.addEventListener('click', () => this.previousQuestion());
        this.nextBtn.addEventListener('click', () => this.nextQuestion());
        this.showAnswerBtn.addEventListener('click', () => this.showAnswer());
        this.exitBtn.addEventListener('click', () => window.location.href = 'landing.html');
        this.flagBtn.addEventListener('click', () => this.toggleFlag());
        
        // Add event listener for the Summary button
        if (this.summaryBtn) {
            this.summaryBtn.addEventListener('click', () => this.showSummary());
        }
        
        // Add event listener for the Back button in the summary
        if (this.backToQuizBtn) {
            this.backToQuizBtn.addEventListener('click', () => this.hideSummary());
        }
    }

    loadQuestion() {
        const question = this.filteredQuestions[this.currentQuestion];
        if (!question) return;

        // Update progress
        this.updateProgress();

        // Set question text - Use innerHTML to interpret HTML tags
        this.questionText.innerHTML = question.question;

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

        // Dodato: Ako je korisnik već odgovorio na ovo pitanje, selektuj odgovor i prikaži boje
        const userAnswer = this.userAnswers[question.id];
        if (userAnswer) {
            const options = this.optionsContainer.children;
            // Selektuj radio dugme
            if (options[userAnswer.selectedAnswer]) {
                options[userAnswer.selectedAnswer].querySelector('input[type="radio"]').checked = true;
            }
            // Oboji odgovore
            Array.from(options).forEach(option => {
                option.classList.remove('correct', 'incorrect');
            });
            if (userAnswer.selectedAnswer === question.correctAnswer) {
                options[userAnswer.selectedAnswer].classList.add('correct');
            } else {
                options[userAnswer.selectedAnswer].classList.add('incorrect');
                options[question.correctAnswer].classList.add('correct');
            }
        }

        // Update flag button
        this.flagBtn.classList.toggle('flagged', this.flaggedQuestions.has(question.id));

        // Update navigation buttons
        this.prevBtn.disabled = this.currentQuestion === 0;
        this.nextBtn.disabled = this.currentQuestion === this.filteredQuestions.length - 1;
    }

    updateProgress() {
        // Update the current question number and total questions
        if (this.currentQuestionNumber) {
            this.currentQuestionNumber.textContent = this.currentQuestion + 1;
        }
        if (this.totalQuestions) {
            this.totalQuestions.textContent = this.filteredQuestions.length;
        }
        // Prikaz poena: saberi samo tačne odgovore
        let score = 0;
        for (const q of this.filteredQuestions) {
            const ans = this.userAnswers[q.id];
            if (ans && ans.isCorrect) score += q.points;
        }
        this.score = score;
        this.pointsDisplay.textContent = `Број поена: ${this.score}`;
    }

    selectOption(index) {
        const question = this.filteredQuestions[this.currentQuestion];
        const options = this.optionsContainer.children;

        Array.from(options).forEach(option => {
            option.classList.remove('correct', 'incorrect');
        });

        // Dodato: Pamti odgovor korisnika
        const isCorrect = index === question.correctAnswer;
        this.userAnswers[question.id] = {
            selectedAnswer: index,
            isCorrect: isCorrect
        };

        if (isCorrect) {
            options[index].classList.add('correct');
            // this.score += question.points; // Score se ne sabira više puta
        } else {
            options[index].classList.add('incorrect');
            options[question.correctAnswer].classList.add('correct');
        }
    }

    showAnswer() {
        const question = this.filteredQuestions[this.currentQuestion];
        const options = this.optionsContainer.children;
        options[question.correctAnswer].classList.add('correct');
    }

    toggleFlag() {
        const question = this.filteredQuestions[this.currentQuestion];
        if (this.flaggedQuestions.has(question.id)) {
            this.flaggedQuestions.delete(question.id);
        } else {
            this.flaggedQuestions.add(question.id);
        }
        this.flagBtn.classList.toggle('flagged');
    }

    previousQuestion() {
        if (this.currentQuestion > 0) {
            this.currentQuestion--;
            this.loadQuestion();
        }
    }

    nextQuestion() {
        if (this.currentQuestion < this.filteredQuestions.length - 1) {
            this.currentQuestion++;
            this.loadQuestion();
        }
    }

    showSummary() {
        const summary = this.summaryContainer;
        const summaryContentTableBody = this.summaryTableBody;
        const quizContainer = this.quizMainContainer;

        // Clear previous summary content
        if (summaryContentTableBody) {
            summaryContentTableBody.innerHTML = '';
        }

        // Populate the table with filtered questions
        this.filteredQuestions.forEach(question => {
            const row = document.createElement('tr');

            // Question Number (može biti klikabilan, ali za sada samo tekst)
            const questionCell = document.createElement('td');
            questionCell.textContent = `Питање ${question.id}`;
            row.appendChild(questionCell);

            // Points
            const pointsCell = document.createElement('td');
            pointsCell.textContent = question.points;
            row.appendChild(pointsCell);

            // Answered Status
            const answeredCell = document.createElement('td');
            answeredCell.className = 'icon-cell';
            const userAnswer = this.userAnswers[question.id];
            if (userAnswer) {
                answeredCell.innerHTML = userAnswer.isCorrect ? '<span title="Тачно">☑</span>' : '<span title="Нетачно">☒</span>';
            } else {
                answeredCell.innerHTML = '<span title="Није одговорено">☐</span>';
            }
            row.appendChild(answeredCell);

            // Flagged Status
            const flaggedCell = document.createElement('td');
            flaggedCell.className = 'icon-cell';
            if (this.flaggedQuestions.has(question.id)) {
                flaggedCell.innerHTML = '<span title="Означено">🔖</span>';
            } else {
                flaggedCell.innerHTML = '';
            }
            row.appendChild(flaggedCell);

            if (summaryContentTableBody) {
                summaryContentTableBody.appendChild(row);
            }
        });

        // Hide quiz, show summary
        if (quizContainer) {
            quizContainer.classList.add('hidden');
        }
        if (summary) {
            summary.classList.remove('hidden');
        }
    }

    hideSummary() {
        const summary = this.summaryContainer;
        const quizContainer = this.quizMainContainer;

        // Hide summary, show quiz
        if (summary) {
            summary.classList.add('hidden');
        }
        if (quizContainer) {
             quizContainer.classList.remove('hidden');
        }
         // Optionally, scroll back to the question position
    }

    // Add method to handle flagged questions review
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

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    // Check if the current page is index.html before processing URL parameters and potentially redirecting
    if (window.location.pathname.endsWith('/index.html') || window.location.pathname === '/' || window.location.pathname === 'index.html') {
        const urlParams = new URLSearchParams(window.location.search);
        const selectedArea = urlParams.get('area');
        const selectedQuestion = urlParams.get('question');

        // Check if accessed directly without parameters
        if (!selectedArea && !selectedQuestion) {
            window.location.href = 'landing.html'; // Redirect to landing page
            return; // Stop further script execution
        }

        console.log('Selected Area from URL:', selectedArea);

        let initialQuestions = [...questionData]; 

        if (selectedArea) {
            // Filter questions based on the selected area
            initialQuestions = questionData.filter(question => question.group === selectedArea);
        }

        console.log('Initial Questions count after filtering:', initialQuestions.length); // Debugging line
        console.log('Initial Questions:', initialQuestions); // Debugging line

        const app = new QuizApp(initialQuestions);
    }
});

// Countdown dates
const examDates = {
    countdown1: new Date('2025-06-17T09:00:00')
};

function updateCountdown() {
    const now = new Date();
    const countdownElement = document.getElementById('countdown1');
    if (!countdownElement) return;

    const examDate = examDates.countdown1;
    const timeLeft = examDate - now;

    if (timeLeft <= 0) {
        countdownElement.innerHTML = '<div class="time"><span>Испит је завршен</span></div>';
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

    const daysElement = countdownElement.querySelector('.days');
    const hoursElement = countdownElement.querySelector('.hours');
    const minutesElement = countdownElement.querySelector('.minutes');

    if (daysElement) daysElement.textContent = String(days).padStart(2, '0');
    if (hoursElement) hoursElement.textContent = String(hours).padStart(2, '0');
    if (minutesElement) minutesElement.textContent = String(minutes).padStart(2, '0');
}

// Update countdown every minute
setInterval(updateCountdown, 60000);
// Initial update
updateCountdown(); 