// DOM elements saved as variables
const questionNumb = document.getElementById('question-number');
const questionOpt = document.getElementById('question');
const choiceButtonRef = document.getElementsByClassName("answer-opt");
const nextBtn = document.getElementById('next-btn');
const score = document.getElementById('score');
const totalScore = document.getElementById('total-score');

// Global DOM elements saved as variables
const disableOptions = choiceButtonRef.length;
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
];

/**
 * Makes sure the elements in the DOM is loaded before the event listener function (click function for when user selects an answer)
 * 
 */
document.addEventListener('DOMContentLoaded', function() {
    for (let i=0; i < choiceButtonRef.length; i++) {
        choiceButtonRef[i].addEventListener("click", function () {
            checkAnswer(this);
        });
    }
});

/**
 * When next button is clicked, the questions/options/question number functions are called and continues to the next index
 */
function continueGame() {
    showQuestions(questionCount);
    changeOptions(optionCount);
    changeQuestionNumb(questionNumber);
}

/**
 * Changes question by displaying the next index of the text content
 */
function showQuestions(index) {
    for (let i = 0; i < questions.length; i++) {
        questionOpt.innerHTML = `${questions[index].question}`;
    }
}

/**
 * Changes all the options by displaying the next index of the text content
 */
function changeOptions(index) {
    for (let i = 0; i < choiceButtonRef.length; i++) {
        choiceButtonRef[i].innerHTML = `${questions[index].options[i]}`;
    }
}

/**
 * Changes question number by displaying the next index of the text content
 */
function changeQuestionNumb(index) {
    questionNumb.innerHTML = `${index}`;
}

/**
 * An onclick function for the Next button to iterate (by 1, shown with ++ after variable) through the questions, question number and options after each click
 * If at the end of all questions when clicking button, the finishQuiz function runs
 * Or the continueGame function runs again
 * After the first checkAnswer function has run, the disabled answer options are enabled with each button click
 */
nextBtn.onclick = function () {
    questionCount++;
    optionCount++;
    questionNumber++;

    // Calls on end of quiz popup when questions run out
    if (questionNumber === questions.length) {
        finishQuiz();
    } else {
        // or continues the game again
        continueGame();
    }

    // Enables answers again after clicking the next button after the first checkAnswer function has ru
    for (let i = 0; i < disableOptions; i++) {
        choiceButtonRef[i].classList.remove('disabled');
        choiceButtonRef[i].classList.remove('correct-answer');
        choiceButtonRef[i].classList.remove('incorrect-answer');
    }
};

/**
 * Checks if users selected answer is correct (it then adds class tag with green CSS properties)
 * or incorrect (it then adds class tag with red CSS properties)
 * Adds 1 point to the score if correct answer and then disables all the options
 * (Credit: Codehal)
 */
function checkAnswer(answer) {
    let userAnswer = answer.textContent;
    let correctAnswer = questions[questionCount].answer;

    if (userAnswer === correctAnswer) {
        // Update global score variable and add new score to the DOM
        scoreSum++;
        score.textContent = scoreSum;

        // Add correct answer class tags for CSS properties
        answer.classList.add('correct-answer');
    } else {
        // Add incorrect answer class tags for CSS properties
        answer.classList.add('incorrect-answer');
    }

    // Disable answers after user selection
    for (let i = 0; i < disableOptions; i++) {
        choiceButtonRef[i].classList.add('disabled');
    }
}

/**
 * Remove the quiz area box and display the end of quiz box by changing CSS properties
 * Update the total score variable with the global score variable at end of quiz showing final score
 */
function finishQuiz() {
    document.getElementById('quiz-area').style.display = 'none';
    document.getElementById('end-popup').style.display = 'flex';
    // Shows final score
    totalScore.textContent = scoreSum;
}