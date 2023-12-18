/* Credit: Codehal YT video: https://www.youtube.com/watch?v=Vp8x8-reqZA&ab_channel=Codehal */
let questions = [ {
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

function showQuestions(index) {
    let question = document.getElementById('question');
    question.textContent = `${questions[index].question}`;
}

let questionCount = 0;

let nextBtn = document.getElementById('next-btn');
nextBtn.onclick = function() {
    questionCount++;
    showQuestions(questionCount);
}

showQuestions()
nextBtn()

function checkAnswer() {

}

function correctAnswer() {

}

function wrongAnswer() {

}

function incrementCorrectScore() {

}