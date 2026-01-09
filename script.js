// Access the questionBank variable from questions.js
// Configuration
const CONFIG = {
    easyCount: 10,
    mediumCount: 20,
    hardCount: 20
};

let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let isQuizActive = false; 

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
const explanationTitle = explanationCard.querySelector('h4');
const currentQSpan = document.getElementById('current-q');
const totalQSpan = document.getElementById('total-q');
const scoreSpan = document.getElementById('score');
const progressBar = document.getElementById('progress-bar');
const finalScoreSpan = document.getElementById('final-score');
const feedbackMsg = document.getElementById('feedback-msg');

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
modalRestartBtn.addEventListener('click', () => {
    securityModal.classList.add('hidden'); 
    returnToStartScreen(); 
});

// --- Security ---
document.addEventListener("visibilitychange", () => {
    if (isQuizActive && document.hidden) triggerCheatPenalty("Tab switching detected.");
});
window.addEventListener("blur", () => {
    if (isQuizActive) triggerCheatPenalty("Window focus lost.");
});
document.addEventListener("contextmenu", e => e.preventDefault());
document.addEventListener("keydown", e => {
    if (e.key === "F12" || (e.ctrlKey && (e.key === "u" || e.key === "U"))) {
        e.preventDefault();
        triggerCheatPenalty("DevTools detected.");
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

// --- QUIZ LOGIC ---

function startQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    
    // 1. Separate Questions by Difficulty
    const easyQs = questionBank.filter(q => q.difficulty === "Easy");
    const mediumQs = questionBank.filter(q => q.difficulty === "Medium");
    const hardQs = questionBank.filter(q => q.difficulty === "Hard");

    // 2. Shuffle Each Bucket
    const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);
    
    // 3. Select Specific Counts
    // Fallback: If not enough questions, take as many as possible
    const selectedEasy = shuffle(easyQs).slice(0, CONFIG.easyCount);
    const selectedMedium = shuffle(mediumQs).slice(0, CONFIG.mediumCount);
    const selectedHard = shuffle(hardQs).slice(0, CONFIG.hardCount);

    // 4. Combine into one Master List
    currentQuestions = [...selectedEasy, ...selectedMedium, ...selectedHard];
    
    totalQSpan.innerText = currentQuestions.length;
    scoreSpan.innerText = 0;
    
    startScreen.classList.remove('active');
    resultScreen.classList.remove('active');
    quizScreen.classList.add('active');
    
    loadQuestion();

    setTimeout(() => { isQuizActive = true; }, 1000);
}

function loadQuestion() {
    const qData = currentQuestions[currentQuestionIndex];
    
    // Display Difficulty Badge if you want (Optional)
    // questionText.innerHTML = `<span style="font-size:0.8rem; color:#aaa;">[${qData.difficulty}]</span><br>${qData.question}`;
    questionText.innerText = qData.question;
    
    optionsContainer.innerHTML = '';
    explanationCard.classList.add('hidden');
    explanationCard.classList.remove('correct-feedback'); 
    nextBtn.classList.add('hidden');
    
    currentQSpan.innerText = currentQuestionIndex + 1;
    const progress = ((currentQuestionIndex) / currentQuestions.length) * 100;
    progressBar.style.width = `${progress}%`;

    // Shuffle Options
    let shuffledOptions = qData.options.map((text, idx) => ({ text, originalIndex: idx }));
    shuffledOptions.sort(() => Math.random() - 0.5);

    shuffledOptions.forEach((optObj) => {
        const btn = document.createElement('button');
        btn.innerText = optObj.text;
        btn.classList.add('option-btn');
        btn.dataset.isCorrect = (optObj.originalIndex === qData.answer) ? "true" : "false";
        btn.addEventListener('click', () => checkAnswer(btn, qData.explanation));
        optionsContainer.appendChild(btn);
    });
}

function checkAnswer(selectedBtn, explanation) {
    const allBtns = Array.from(optionsContainer.children);
    allBtns.forEach(btn => btn.disabled = true);

    explanationText.innerText = explanation;
    explanationCard.classList.remove('hidden'); 

    if (selectedBtn.dataset.isCorrect === "true") {
        selectedBtn.classList.add('correct');
        score++;
        scoreSpan.innerText = score;
        explanationCard.classList.add('correct-feedback');
        explanationTitle.innerText = "Correct! Analysis:";
    } else {
        selectedBtn.classList.add('wrong');
        const correctBtn = allBtns.find(btn => btn.dataset.isCorrect === "true");
        if (correctBtn) correctBtn.classList.add('correct');
        explanationCard.classList.remove('correct-feedback');
        explanationTitle.innerText = "Incorrect. Analysis:";
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
        feedbackMsg.innerText = "Outstanding! You are ready for the exam.";
        feedbackMsg.style.color = "#4ade80";
    } else if (percentage >= 50) {
        feedbackMsg.innerText = "Good job. Focus on the Hard questions.";
        feedbackMsg.style.color = "#38bdf8";
    } else {
        feedbackMsg.innerText = "Keep practicing. Review the fundamentals.";
        feedbackMsg.style.color = "#f87171";
    }
}