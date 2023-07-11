let questions = [
    {
        "question": "Was ist 1?",
        "answer_1": "Eine Zahl",
        "answer_2": "Ein Objekt",
        "answer_3": "Ein string",
        "answer_4": "Nichts",
        "right_answer": 3

    },
    {
        "question": "Was ist 2?",
        "answer_1": "Eine Zahl",
        "answer_2": "Ein Objekt",
        "answer_3": "Ein string",
        "answer_4": "Nichts",
        "right_answer": 3

    },
    {
        "question": "Was ist 3?",
        "answer_1": "Eine Zahl",
        "answer_2": "Ein Objekt",
        "answer_3": "Ein string",
        "answer_4": "Nichts",
        "right_answer": 3

    },
    {
        "question": "Was ist 4?",
        "answer_1": "Eine Zahl",
        "answer_2": "Ein Objekt",
        "answer_3": "Ein string",
        "answer_4": "Nichts",
        "right_answer": 3

    },
    {
        "question": "Was ist 5?",
        "answer_1": "Eine Zahl",
        "answer_2": "Ein Objekt",
        "answer_3": "Ein string",
        "answer_4": "Nichts",
        "right_answer": 3

    },
    {
        "question": "Was ist 1?",
        "answer_1": "Eine Zahl",
        "answer_2": "Ein Objekt",
        "answer_3": "Ein string",
        "answer_4": "Nichts",
        "right_answer": 3

    }
];

let curentQuestion = 0;
let counter = 0

function init() {
    document.getElementById('all-questions').innerHTML = questions.length;
    showQuestion();
}

function showQuestion() {
    // Show Endscreen
    if (curentQuestion >= questions.length) { // ist 7 groesser oder gleich 7? wenn ja sound so ansonsten 
        document.getElementById('endScreen').style = '';
        document.getElementById('questionBody').style = 'display: none';

        document.getElementById('testId').innerHTML = questions.length;
        document.getElementById('rightAnswers').innerHTML = counter
        document.getElementById('header-image').src = 'img/winner.jpg';


    } else { // Show Question 

        let percent = (curentQuestion + 1) / questions.length;
        percent = Math.round(percent*100);
        console.log('Fortschritt:', percent);
        document.getElementById('progress-bar').innerHTML = `${percent} %`  ;
        document.getElementById('progress-bar').style =  `width: ${percent}%` ;



        let question = questions[curentQuestion];

        document.getElementById('question-number').innerHTML = curentQuestion + 1;
        document.getElementById('questiontext').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];
    }


}


function answer(selection) {  // Die Funktion sagt ich brauch was um zu funktionieren! deshalb (selection)
    // auf den Karten ist ein onclick mit dem Text (string) der übergeben wird onclick="answer('answer_1')"
    // wenn onclick führe diese Funktion aus mit diesem Parameter der wird in die Funktion gesteckt      
    let question = questions[curentQuestion]; // currentQuestion = 0  ----  questions[curentQuestion] = questions[0]
    let selectedQuestionNumber = selection.slice(-1); // .slice(-1) nimmt das letzte Zeichen eines Worts, mit der Zeile wird erkannt welche Antwort gewählt wurde
    let idOfRightAnswer = `answer_${question['right_answer']}`;


    if (selectedQuestionNumber == question['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-green');
        counter++
        console.log(counter)
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-red');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-green');
    }

    document.getElementById('next-button').disabled = false;
    document.getElementById('quiz').classList.add('lock-answers');
}



function nextQuestion() {
    curentQuestion++; // z.B von 0 auf 1

    document.getElementById('next-button').disabled = true;
    resetAnswerButtons();
    showQuestion();
}

function resetAnswerButtons() {
    document.getElementById('quiz').classList.remove('lock-answers');
    document.getElementById('answer_1').parentNode.classList.remove('bg-red');
    document.getElementById('answer_1').parentNode.classList.remove('bg-green');
    document.getElementById('answer_2').parentNode.classList.remove('bg-red');
    document.getElementById('answer_2').parentNode.classList.remove('bg-green');
    document.getElementById('answer_3').parentNode.classList.remove('bg-red');
    document.getElementById('answer_3').parentNode.classList.remove('bg-green');
    document.getElementById('answer_4').parentNode.classList.remove('bg-red');
    document.getElementById('answer_4').parentNode.classList.remove('bg-green');
}

function restartGame() {
    document.getElementById('header-image').src = 'img/question-mark.jpg';
    document.getElementById('questionBody').style = ''; // questionBody wieder anzeigen
    document.getElementById('endScreen').style = 'display: none'; //Endscreen ausblenden
    curentQuestion = 0;
    counter = 0
    init();
}


