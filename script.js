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
