// Access the questionBank variable from questions.js
const QUESTIONS_PER_SESSION = 50;
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let isQuizActive = false; 

// DOM Elements - Main
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');

// DOM Elements - Quiz Content
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const explanationCard = document.getElementById('explanation-card');
const explanationText = document.getElementById('explanation-text');
const explanationTitle = explanationCard.querySelector('h4');
const currentQSpan = document.getElementById('current-q');
const totalQSpan = document.getElementById('total-q');
const scoreSpan = document.getElementById('score');
const progressBar = document.getElementById('progress-bar');
const finalScoreSpan = document.getElementById('final-score');
const feedbackMsg = document.getElementById('feedback-msg');

// DOM Elements - Security Modal
const securityModal = document.getElementById('security-modal');
const securityReason = document.getElementById('security-reason');
const modalRestartBtn = document.getElementById('modal-restart-btn');

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

// Modal Restart Action
modalRestartBtn.addEventListener('click', () => {
    securityModal.classList.add('hidden'); 
    returnToStartScreen(); 
});

// ==========================================
//           ANTI-CHEAT SECURITY MODULE
// ==========================================

// 1. Detect Tab Switching
document.addEventListener("visibilitychange", () => {
    if (isQuizActive && document.hidden) {
        triggerCheatPenalty("Tab switching detected.");
    }
});

// 2. Detect Focus Loss
window.addEventListener("blur", () => {
    if (isQuizActive) {
        triggerCheatPenalty("Window focus lost.");
    }
});

// 3. Disable Context Menu
document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
});

// 4. Disable DevTools keys
document.addEventListener("keydown", (e) => {
    if (e.key === "F12" || 
       (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J")) || 
       (e.ctrlKey && e.key === "U")) {
        e.preventDefault();
        triggerCheatPenalty("Developer tools accessed.");
    }
});

function triggerCheatPenalty(reason) {
    if (!isQuizActive) return; 
    isQuizActive = false;
    securityReason.innerText = reason;
    securityModal.classList.remove('hidden');
}

function returnToStartScreen() {
    isQuizActive = false;
    quizScreen.classList.remove('active');
    resultScreen.classList.remove('active');
    startScreen.classList.add('active');
}

// ==========================================
//           CORE QUIZ LOGIC
// ==========================================

function startQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    
    // 1. Randomize the Order of Questions
    const shuffled = [...questionBank].sort(() => 0.5 - Math.random());
    currentQuestions = shuffled.slice(0, QUESTIONS_PER_SESSION);
    
    totalQSpan.innerText = currentQuestions.length;
    scoreSpan.innerText = 0;
    
    startScreen.classList.remove('active');
    resultScreen.classList.remove('active');
    quizScreen.classList.add('active');
    
    loadQuestion();

    setTimeout(() => {
        isQuizActive = true;
    }, 500);
}

function loadQuestion() {
    const qData = currentQuestions[currentQuestionIndex];
    questionText.innerText = qData.question;
    optionsContainer.innerHTML = '';
    
    explanationCard.classList.add('hidden');
    explanationCard.classList.remove('correct-feedback'); 
    nextBtn.classList.add('hidden');
    
    currentQSpan.innerText = currentQuestionIndex + 1;
    const progress = ((currentQuestionIndex) / currentQuestions.length) * 100;
    progressBar.style.width = `${progress}%`;

    // --- OPTION RANDOMIZATION LOGIC ---
    
    // 1. Map options to objects to keep track of the original correct answer
    // We attach the original index to know which one was the answer
    let shuffledOptions = qData.options.map((optionText, originalIndex) => {
        return { text: optionText, originalIndex: originalIndex };
    });

    // 2. Shuffle the options array
    shuffledOptions.sort(() => Math.random() - 0.5);

    // 3. Render the shuffled buttons
    shuffledOptions.forEach((optObj) => {
        const btn = document.createElement('button');
        btn.innerText = optObj.text;
        btn.classList.add('option-btn');
        
        // Mark the correct answer in the DOM dataset
        if (optObj.originalIndex === qData.answer) {
            btn.dataset.isCorrect = "true";
        } else {
            btn.dataset.isCorrect = "false";
        }

        btn.addEventListener('click', () => checkAnswer(btn, qData.explanation));
        optionsContainer.appendChild(btn);
    });
}

function checkAnswer(selectedBtn, explanation) {
    const allBtns = Array.from(optionsContainer.children);
    
    // Disable all buttons
    allBtns.forEach(btn => btn.disabled = true);

    explanationText.innerText = explanation;
    explanationCard.classList.remove('hidden'); 

    // Check if the clicked button was correct
    if (selectedBtn.dataset.isCorrect === "true") {
        // CORRECT
        selectedBtn.classList.add('correct');
        score++;
        scoreSpan.innerText = score;
        
        explanationCard.classList.add('correct-feedback');
        explanationTitle.innerText = "Correct! Here is why:";
    } else {
        // WRONG
        selectedBtn.classList.add('wrong');
        
        // Find the actual correct button and highlight it green
        const correctBtn = allBtns.find(btn => btn.dataset.isCorrect === "true");
        if (correctBtn) correctBtn.classList.add('correct');

        explanationCard.classList.remove('correct-feedback');
        explanationTitle.innerText = "Incorrect. Here is the logic:";
    }

    nextBtn.classList.remove('hidden');
    
    const progress = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
    progressBar.style.width = `${progress}%`;
}

function showResults() {
    isQuizActive = false;
    quizScreen.classList.remove('active');
    resultScreen.classList.add('active');
    finalScoreSpan.innerText = score;
    
    const percentage = (score / currentQuestions.length) * 100;
    if (percentage >= 80) {
        feedbackMsg.innerText = "Excellent Work! You have mastered these modules.";
        feedbackMsg.style.color = "#4ade80";
    } else if (percentage >= 50) {
        feedbackMsg.innerText = "Good effort, but review the lecture notes again.";
        feedbackMsg.style.color = "#38bdf8";
    } else {
        feedbackMsg.innerText = "Keep studying! Try again to improve your score.";
        feedbackMsg.style.color = "#f87171";
    }
}