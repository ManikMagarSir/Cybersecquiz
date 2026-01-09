// --- START OF FILE script.js ---

// Configuration
// We set specific targets, but the code below is "safe" 
// (it won't crash if you have fewer questions).
const CONFIG = {
    includeEasy: false,   // Set to true if you want Easy questions mixed in
    maxQuestions: 50      // Max number of questions to show in one quiz
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

// --- UTILITY: Unbiased Fisher-Yates Shuffle ---
function fisherYatesShuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}

// --- QUIZ LOGIC ---

function startQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    
    // 1. Get copies of questions by difficulty
    // (Using optional chaining ?. just in case difficulty is missing in your file)
    const easyQs = questionBank.filter(q => q.difficulty === "Easy");
    const mediumQs = questionBank.filter(q => q.difficulty === "Medium");
    const hardQs = questionBank.filter(q => q.difficulty === "Hard");

    // 2. Build the pool based on your preference
    // Prioritize Hard and Medium for university level
    let pool = [...hardQs, ...mediumQs];
    
    // If you want Easy questions mixed in, add them
    if (CONFIG.includeEasy) {
        pool = [...pool, ...easyQs];
    }

    // 3. Shuffle the ENTIRE pool together
    // This ensures Hard and Medium are completely mixed, not sequential
    pool = fisherYatesShuffle(pool);

    // 4. Slice to max count (e.g., 50 questions or however many exist)
    // This prevents errors if you have fewer questions than the max
    currentQuestions = pool.slice(0, CONFIG.maxQuestions);
    
    // Safety check: If no questions found
    if (currentQuestions.length === 0) {
        alert("No questions found! Check your questions.js file.");
        return;
    }

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
    
    // Debugging badge (Optional - remove if you want a clean look)
    // questionText.innerHTML = `<span style="font-size: 0.7rem; background: #eee; padding: 2px 6px; border-radius: 4px; color: #555;">${qData.difficulty}</span><br><br>${qData.question}`;
    questionText.innerText = qData.question;
    
    optionsContainer.innerHTML = '';
    explanationCard.classList.add('hidden');
    explanationCard.classList.remove('correct-feedback'); 
    nextBtn.classList.add('hidden');
    
    currentQSpan.innerText = currentQuestionIndex + 1;
    const progress = ((currentQuestionIndex) / currentQuestions.length) * 100;
    progressBar.style.width = `${progress}%`;

    // Shuffle Options (preserving correct answer mapping)
    let optionsWithIndices = qData.options.map((text, idx) => ({ text, originalIndex: idx }));
    let shuffledOptions = fisherYatesShuffle(optionsWithIndices);

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
    if (percentage >= 70) {
        feedbackMsg.innerText = "Solid performance. You have a good grasp of the concepts.";
        feedbackMsg.style.color = "#4ade80";
    } else if (percentage >= 40) {
        feedbackMsg.innerText = "Fair effort. Review the specific scenarios you missed.";
        feedbackMsg.style.color = "#38bdf8";
    } else {
        feedbackMsg.innerText = "Study required. Focus on understanding the 'Why' behind the answers.";
        feedbackMsg.style.color = "#f87171";
    }
}