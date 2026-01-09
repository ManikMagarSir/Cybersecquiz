// Access the questionBank variable from questions.js
const QUESTIONS_PER_SESSION = 50;
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

// DOM Elements
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');

const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const explanationCard = document.getElementById('explanation-card');
const explanationText = document.getElementById('explanation-text');
const explanationTitle = explanationCard.querySelector('h4'); // Grab the H4 inside the card

const currentQSpan = document.getElementById('current-q');
const totalQSpan = document.getElementById('total-q');
const scoreSpan = document.getElementById('score');
const progressBar = document.getElementById('progress-bar');
const finalScoreSpan = document.getElementById('final-score');
const feedbackMsg = document.getElementById('feedback-msg');

// Event Listeners
startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuestions.length) {
        loadQuestion();
    } else {
        showResults();
    }
});
restartBtn.addEventListener('click', startQuiz);

// Functions

function startQuiz() {
    // Reset state
    score = 0;
    currentQuestionIndex = 0;
    
    // --- RANDOMIZATION LOGIC ---
    // This shuffles the master bank and slices the first 50 every time you start/restart
    const shuffled = [...questionBank].sort(() => 0.5 - Math.random());
    currentQuestions = shuffled.slice(0, QUESTIONS_PER_SESSION);
    
    // Update UI
    totalQSpan.innerText = currentQuestions.length;
    scoreSpan.innerText = 0;
    
    // Switch screens
    startScreen.classList.remove('active');
    resultScreen.classList.remove('active');
    quizScreen.classList.add('active');
    
    loadQuestion();
}

function loadQuestion() {
    // Reset UI for new question
    const qData = currentQuestions[currentQuestionIndex];
    questionText.innerText = qData.question;
    optionsContainer.innerHTML = '';
    
    // Hide explanation and Next button for the new question
    explanationCard.classList.add('hidden');
    explanationCard.classList.remove('correct-feedback'); // Reset color
    nextBtn.classList.add('hidden');
    
    // Update Header stats
    currentQSpan.innerText = currentQuestionIndex + 1;
    const progress = ((currentQuestionIndex) / currentQuestions.length) * 100;
    progressBar.style.width = `${progress}%`;

    // Create Options
    qData.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.innerText = opt;
        btn.classList.add('option-btn');
        btn.addEventListener('click', () => checkAnswer(index, qData.answer, qData.explanation, btn));
        optionsContainer.appendChild(btn);
    });
}

function checkAnswer(selectedIndex, correctIndex, explanation, selectedBtn) {
    // 1. Disable all buttons to prevent changing answer
    const allOptions = optionsContainer.children;
    for (let btn of allOptions) {
        btn.disabled = true;
    }

    // 2. Prepare the Explanation Text
    explanationText.innerText = explanation;
    explanationCard.classList.remove('hidden'); // SHOW CARD (Logic Requirement Met)

    // 3. Check Logic
    if (selectedIndex === correctIndex) {
        // CORRECT ANSWER
        selectedBtn.classList.add('correct');
        score++;
        scoreSpan.innerText = score;
        
        // Turn the card GREEN
        explanationCard.classList.add('correct-feedback');
        explanationTitle.innerText = "Correct! Here is why:";
        
    } else {
        // WRONG ANSWER
        selectedBtn.classList.add('wrong');
        // Highlight the correct one so they know
        allOptions[correctIndex].classList.add('correct');
        
        // Turn the card YELLOW (Default style, remove green if present)
        explanationCard.classList.remove('correct-feedback');
        explanationTitle.innerText = "Incorrect. Here is the logic:";
    }

    // 4. Show Next Button
    nextBtn.classList.remove('hidden');
    
    // Update progress bar
    const progress = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
    progressBar.style.width = `${progress}%`;
}

function showResults() {
    quizScreen.classList.remove('active');
    resultScreen.classList.add('active');
    finalScoreSpan.innerText = score;
    
    const percentage = (score / currentQuestions.length) * 100;
    if (percentage >= 80) {
        feedbackMsg.innerText = "Excellent Work! You have mastered these modules.";
        feedbackMsg.style.color = "#27ae60";
    } else if (percentage >= 50) {
        feedbackMsg.innerText = "Good effort, but review the lecture notes again.";
        feedbackMsg.style.color = "#f39c12";
    } else {
        feedbackMsg.innerText = "Keep studying! Try again to improve your score.";
        feedbackMsg.style.color = "#c0392b";
    }
}