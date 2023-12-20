// Variables
const choiceButtonRef = document.getElementsByClassName("answer-opt");
const nextBtn = document.getElementById('next-btn');
const score = document.getElementById('score');
const answers = document.getElementsByClassName('answers');
const quizArea = document.getElementsByClassName('quiz-area');
const endPopup = document.getElementsByClassName('end-popup');
let questionCount = 0;
let optionCount = 0;
let questionNumber = 1;
let scoreSum = 0;

/*
// Event listeners
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-answer")) {
                checkAnswer();
            } else {
                let dataAnswer = this.getAttribute("data-answer");
            
            }
        })
    }
})
*/

// Quiz questions, options and correct answer
let questions = [{
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
}
]

/**
 * Change questions and answers when pressing Next button
 */
function showQuestions(index) {
    let question = document.getElementById('question');
    question.innerHTML = `${questions[index].question}`;
    changeOptions(index);
}

function changeOptions(index) {
    for (let i = 0; i < choiceButtonRef.length; i++) {
        choiceButtonRef[i].innerHTML = `${questions[index].options[i]}`;
    }
}

function changeQuestionNumb(index) {
    const questionNumb = document.getElementById('question-number');
    questionNumb.innerHTML = `${index}`;
}

/**
 * Next button
 */
// Credit: Codehal YT video: https://www.youtube.com/watch?v=Vp8x8-reqZA&ab_channel=Codehal
nextBtn.onclick = function () {
    if (questionCount < questions.length) {
        questionCount++;
        optionCount++;
        questionNumber++;
        showQuestions(questionCount, optionCount);
        changeQuestionNumb(questionNumber);

    } else {
        finishQuiz();
    }
}

/**
 * Check answer
 */
// Credit: Codehal YT video: https://www.youtube.com/watch?v=Vp8x8-reqZA&ab_channel=Codehal
function checkAnswer(answer) {
    let userAnswer = answer.textContent;
    let correctAnswer = questions[questionCount].answer;

    if (userAnswer === correctAnswer) {
        scoreSum++;
        score.textContent = scoreSum;
        answer.classList.add('correct-answer')
    } else {
        answer.classList.add('incorrect-answer')
    }
}

/**
 * DISABLE BUTTONS AFTER CHECKANSWER
 */


/**
 * End of Quiz popup
 */
function finishQuiz() {
    quizArea.style.display = 'none';
    endPopup.style.display = 'flex';
}
