// Variables
const choiceButtonRef = document.getElementsByClassName("answer-opt");
const questionCount = 0;
const optionCount = 0;
const nextBtn = document.getElementById('next-btn');

/*
// Event listeners
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-answer")) {
                alert(`You clicked ${dataAnswer}`);
            } else {
                let dataAnswer = this.getAttribute("data-answer");
                alert(`You clicked ${dataAnswer}`);
            }
        })
    }
})
/*/

// Quiz questions, options and correct answer
// Credit: Codehal YT video: https://www.youtube.com/watch?v=Vp8x8-reqZA&ab_channel=Codehal
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
    question.textContent = `${questions[index].question}`;
    changeOptions(index);
}

function changeOptions(index) {
    for (let i = 0; i < choiceButtonRef.length; i++) {
        choiceButtonRef[i].textContent = `${questions[index].options[i]}`
    }
}
/*
function changeQuestionNumb() {
    let questionNumb = parseInt(document.getElementById('question-number').innerText);
    for (let i) {

    }
}
*/

/**
 * Next button
 */
nextBtn.onclick = function () {
    questionCount++;
    optionCount++;
    showQuestions(questionCount, optionCount);
}

/**
 * Check answer
 */
function checkAnswer() {

}

/**
 * Correct answer
 */
function correctAnswer() {

}
/**
 * Wrong answer
 */
function wrongAnswer() {

}
/**
 * Score calculation
 */
function incrementCorrectScore() {

}
/**
 * End of Quiz popup
 */
function finishQuiz() {

}