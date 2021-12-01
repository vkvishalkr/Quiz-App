const quizData = [
    {
        question: 'How old is Vishal?',
        a: '10',
        b: '17',
        c: '20',
        d: '39',
        correct: 'c'
    }, {
         question: 'What is the most used programming language in 2019?',
         a: 'java',
         b: 'C',
         c: 'python',
         d: 'Javascript',
         correct: 'd'
    }, {
        question: 'Who is the president of india?',
        a: 'Vishal Kumar',
        b: 'Narendra Modi',
        c: 'Donald Trump',
        d: 'sri shyam kishor',
        correct: 'b'
    }, {
        question: 'What does HTML stands for?',
        a: 'HyperText Markup language',
        b: 'Cascading style sheets',
        c: 'Jason object notation',
        d: 'Application programming interface',
        correct: 'a'
    }, {
        question: 'What year was Javascript launched?',
        a: '1995',
        b: '1995',
        c: '1994',
        d: 'none of the above',
        correct: 'b'
    }
];

const answerEls  = document.querySelectorAll('.answer');
const quiz  = document.getElementById('quiz');
const questionEl = document.getElementById('question');

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');

const submitBtn = document.getElementById('submit');


let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c; 
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    const answerEls  = document.querySelectorAll('.answer');

    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected();

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
    
        if(currentQuiz < quizData.length){
            loadQuiz();
        } else{
            quiz.innerHTML = `
            <h2>You answered correctly at ${score}/${quizData.length} questions.</h2> 
            <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});