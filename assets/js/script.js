// Variables
const questionNumb = document.getElementById('question-number');
const questionOpt = document.getElementById('question');
const choiceButtonRef = document.getElementsByClassName("answer-opt");
const answers = document.getElementsByClassName('answers');
const nextBtn = document.getElementById('next-btn');
const score = document.getElementById('score');
let questionNumber = 1;
let questionCount = 0;
let optionCount = 0;
let scoreSum = 0;

// Quiz questions, options and correct answer
const questions = [{
    question: 'Who is known as the "King of Pop"?',
    answer: "Michael Jackson",
    options: [
        "Chris Brown",
        "Elvis Presley",
        "Sean Paul",
        "Michael Jackson"
    ]
},
{
    question: 'What is the largest planet in our solar system?',
    answer: "Jupiter",
    options: [
        "Pluto",
        "Jupiter",
        "Uranus",
        "Earth"
    ]
},
{
    question: 'What is the capital city of Australia?',
    answer: "Canberra",
    options: [
        "Canberra",
        "Sydney",
        "Melbourne",
        "Brisbane"
    ]
},
{
    question: 'What is the currency of Japan?',
    answer: "Yen",
    options: [
        "Rupiah",
        "Yuan",
        "Yen",
        "Won"
    ]
},
{
    question: 'Who was the first President of the United States?',
    answer: "George Washington",
    options: [
        "Thomas Jefferson",
        "Jimmy Carter",
        "Abraham Lincoln",
        "George Washington"
    ]
},
{
    question: 'Who was the first woman to win a Nobel Prize?',
    answer: "Marie Curie",
    options: [
        "Jane Goodall",
        "Marie Curie",
        "Malala Yousafzai",
        "Wangari Maathai"
    ]
},
{
    question: 'What is the chemical symbol for gold?',
    answer: "Au",
    options: [
        "Mg",
        "Ag",
        "Au",
        "Rb"
    ]
},
{
    question: 'What is the longest river in the world?',
    answer: "Nile River",
    options: [
        "Nile River",
        "Amazon River",
        "Niger River",
        "Missouri River"
    ]
},
{
    question: 'What is the capital city of South Korea?',
    answer: "Seoul",
    options: [
        "Hong Kong",
        "Incheon",
        "Busan",
        "Seoul"
    ]
},
{
    question: 'Which scientist formulated the laws of motion and universal gravitation?',
    answer: "Sir Isaac Newton",
    options: [
        "Nikola Tesla",
        "Albert Einstein",
        "Sir Isaac Newton",
        "Charles Darwin"
    ]
}
]

/**
 * Change questions and answers when pressing Next button
 */
function showQuestions(index) {
    for (let i = 0; i < questions.length; i++) {
        questionOpt.innerHTML = `${questions[index].question}`;
    }
}

function changeOptions(index) {
    for (let i = 0; i < choiceButtonRef.length; i++) {
        choiceButtonRef[i].innerHTML = `${questions[index].options[i]}`;
    }
}

function changeQuestionNumb(index) {
    questionNumb.innerHTML = `${index}`;
}

/**
 * Next button (Credit: Codehal)
 */
nextBtn.onclick = function () {
    questionCount++;
    optionCount++;
    questionNumber++;
    showQuestions(questionCount);
    changeOptions(optionCount);
    changeQuestionNumb(questionNumber);
    // setInterval();

    if (questionNumber === questions.length) {
        finishQuiz();
    }
}

/**
 * Check answer (Credit: Codehal)
 */
function checkAnswer(answer) {
    let userAnswer = answer.innerHTML;
    let correctAnswer = questions[questionCount].answer;
    let disableOptions = choiceButtonRef.length;

    if (userAnswer === correctAnswer) {
        scoreSum++;
        score.textContent = scoreSum;
        answer.classList.add('correct-answer')
    } else {
        answer.classList.add('incorrect-answer')
    }

    // Disable answers after user selected
    for (let i = 0; i < disableOptions; i++) {
        choiceButtonRef[i].classList.add('disabled');
    }
}

/*
let time = 15;
let timer = setInterval(function() {
    document.getElementById('timer').textContent = time;
    time--;
    if (time === 0) {
        clearInterval(timer);
        time = 0;
        console.log("Oh no, you're out of time!");
    }
}, 1000);
*/

/**
 * End of Quiz popup
 */
function finishQuiz() {
    document.getElementById('quiz-area').style.display = 'none';
    document.getElementById('end-popup').style.display = 'flex';
    // Score not showing?????
    const totalScore = document.getElementById('total-score');
    totalScore.textContent = scoreSum;
}