// var div = document.getElementById("answer");
// var display = 0;

// function check_ans() {
//     if(display ==1)
//     {
//         div.style.display ="block";
//         display = 0;
//     }
//     else
//     {
//         div.style.display = "none";
//         display =1;
//     }
// }
        //Question bank
var questionBank= [
    {
        question : 'Where do we cook?',
        option : ['Hall','Bathroom','Bedroom','Kitchen'],
        answer : 'Kitchen'
    },
    {
        question : 'What color is considered to be a symbol of peace?',
        option : ['Yellow','White','Purple','Black'],
        answer : 'White'
    },
    {
        question : 'What is the world’s most popular favorite color?',
        option : ['Blue','White','Purple','Black'],
        answer : 'Blue'
    },
    {
        question : 'What does the color black represent in China?',
        option : ['Wealth','prosperity','Wealth and prosperity','Health'],
        answer : 'Wealth and prosperity'
    },
    {
        question : 'What color is a Giraffe’s tongue?',
        option : ['Green','Yellow','Blue','Red'],
        answer : 'Blue'
    }
]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

//function to display questions
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();

