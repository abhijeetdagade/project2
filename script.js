document.getElementById('submit').addEventListener('click', function() {
    const questions = document.querySelectorAll('.quiz');
    let score = 0;

    questions.forEach(question => {
        const selectedAnswer = question.querySelector('input:checked');
        if (selectedAnswer) {
            if (selectedAnswer.value === 'paris') {
                score++;
            }
        }
    });

    alert(`Your score is ${score}/${questions.length}`);
});

// const questions=[
//     {
//         question:"I spoke to ____.",
//         answer:[
//             {
//                 text:"she",correct:false
//             },
//             {
//                 text:"her",correct:true
//             },
//             {
//                 text:"it",correct:false
//             },
//             {
//                 text:"they",correct:false
//             },
//         ]
//     },
//     {
//         question:"Where ____ you come from?",
//         answer:[
//             {
//                 text:"do",correct:true
//             },
//             {
//                 text:"are",correct:false
//             },
//             {
//                 text:"she",correct:false
//             },
//             {
//                 text:"he",correct:false
//             },
//         ]
//     },
//     {
//         question:"Where ____ you come from?",
//         answer:[
//             {
//                 text:"do",correct:true
//             },
//             {
//                 text:"are",correct:false
//             },
//             {
//                 text:"she",correct:false
//             },
//             {
//                 text:"he",correct:false
//             },
//         ]
//     },
//     {
//         question:"Where ___ he live?",
//         answer:[
//             {
//                 text:"do",correct:true
//             },
//             {
//                 text:"does",correct:false
//             },
//             {
//                 text:"is",correct:false
//             },
//             {
//                 text:"are",correct:false
//             },
//         ]
//     },
//     {
//         question:"I am not ____ this film.",
//         answer:[
//             {
//                 text:"liking",correct:false
//             },
//             {
//                 text:"enjoying",correct:true
//             },
//             {
//                 text:"liked",correct:false
//             },
//             {
//                 text:"enjoyed",correct:false
//             },
//         ]
//     },
//     {
//         question:"I am seeing her ____ three o'clock.",
//         answer:[
//             {
//                 text:"in",correct:false
//             },
//             {
//                 text:"at",correct:true
//             },
//             {
//                 text:"on",correct:false
//             },
//             {
//                 text:"is",correct:false
//             },
//         ]
//     },
//     {
//         question:"Easter is ___ March this year.",
//         answer:[
//             {
//                 text:"on",correct:true
//             },
//             {
//                 text:"at",correct:false
//             },
//             {
//                 text:"in",correct:false
//             },
//             {
//                 text:"is",correct:false
//             },
//         ]
//     },
//     {
//         question:"She's ____ work all day today.",
//         answer:[
//             {
//                 text:"at",correct:false
//             },
//             {
//                 text:"on",correct:true
//             },
//             {
//                 text:"is",correct:false
//             },
//             {
//                 text:"was",correct:false
//             },
           
//         ]
//     },
//     {
//         question:"I go ___ by bus.",
//         answer:[
//             {
//                 text:"Home",correct:false
//             },
//             {
//                 text:"to Home",correct:true
//             },
//             {
//                 text:"at Home",correct:false
//             },
//             {
//                 text:"on home",correct:false
//             },
           
//         ]
//     },
//     {
//         question:"Do you like it?",
//         answer:[
//             {
//                 text:"Yes, I like.",correct:true
//             },
//             {
//                 text:" Yes, I do.",correct:false
//             },
//             {
//                 text:"Yes, I liked.",correct:false
//             },
//             {
//                 text:"Yes, I liking",correct:false
//             },
           
//         ]
//     }
       

// ];
// const questionElement=document.getElementById("question");
// const answerButtons=document.getElementById("answer-buttons");
// const nextButton=document.getElementById("next-btn");
// let currentquestionIndex=0;
// let score=0;
// function startQuiz(){
//     currentquestionIndex=0;
//     score=0;
//     nextButton.innnerHTML="Next";
//     showQuestion();
// }
// function showQuestion(){
//     resetState();
//     let currentquestion=question[currentquestionIndex];
//     let questionNo=currentquestionIndex+1;
//     questionElement.innerHTML=questionNo+"."+currentquestion.question;
    
//     currentquestion.answer.forEach(answer=>{
//         const button=document.createElement("button");
//         button.innerHTML=answer.text;
//         button.classList.add("btn");
//         answerButtons.appendChild(button);
//         if(answer.correct){
//             button.dataset.correct=answer.correct;
//         }
//         button.addEventListener("click",selectedAnswer);
//     });
// }
// function resetState(){
//     nextButton.style.display="none";
//     while(answerButtons.firstChild){
//         answerButtons.removeChild(answerButtons.firstChild);
//     }
// }
// function selectAnswer(e){
//     const selectedBtn=e.target;
//     const isCorrect=selectedBtn.dataset.correct==="true";
//     if(isCorrect){
//         selectedBtn.classList.add("correct");
//         score++;

//     }
//     else{
//         selectedBtn.classList.add("incorrect");
//     }
//     Array.from(answerButtons.children).forEach(button=>{
//         if(button.dataset.correct==="true"){
//             button.classList.add("correct");
//         }
//         button.disabled=true;
//     });
//     nextButton.style.display="block";

// }
// function showScore(){
//     resetState();
//     questionElement.innerHTML=`You scored ${score} out of ${questions.length}!`;
//     nextButton.innerHTML="play Again";
//     nextButton.style.display="block";
// }
// function handleNextButton(){
//     currentquestionIndex++;
//     if(currentquestionIndex<questions.length){
//         showQuestion();
//     }
//     else{
//         showScore();
//     }
// }
// nextButton.addEventListener("click",()=>{
//     if(currentquestionIndex < questions.length){
//         handleNextButton();
//     }
//     else{
//         startQuiz();
//     }

// });
// startQuiz();