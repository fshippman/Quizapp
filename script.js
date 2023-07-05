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
        "question": "Was ist 1?",
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

    },
    {
        "question": "Was ist 1?",
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

function init(){
    document.getElementById('all-questions').innerHTML = questions.length;
    showQuestion();
}

function showQuestion(){
    let question = questions[curentQuestion];
    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function answer(selection){  // Die Funktion sagt ich brauch was um zu funktionieren! deshalb (selection)
                            // auf den Karten ist ein onclick mit dem Text (string) der übergeben wird onclick="answer('answer_1')"
                            // wenn onclick führe diese Funktion aus mit diesem Parameter der wird in die Funktion gesteckt      
    let question = questions[curentQuestion]; // currentQuestion = 0  ----  questions[curentQuestion] = questions[0]
    console.log('selected answer is', selection);
    let selectedQuestionNumber = selection.slice(-1); // .slice(-1) nimmt das letzte Zeichen eines Worts, mit der Zeile wird erkannt welche Antwort gewählt wurde
    console.log ('selectedQuestionNumber is' , selectedQuestionNumber)
    console.log('current question is', question['question']);

    if(selectedQuestionNumber == question['right_answer']) {
        console.log('Richtige Antwort!');
    } else {
        console.log('Falsche Antwort!!!');
    }
}