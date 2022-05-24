const num1=Math.ceil(Math.random()*10);
const num2=Math.ceil(Math.random()*10);

const question1=document.getElementById("question");

question1.innerText=`What is ${num1} multiply by ${num2} ?`; 

const correctans=num1*num2;

// console.log(correctans);

const formE1=document.getElementById("form");
const inputE1=document.getElementById("input");

let score1=JSON.parse(localStorage.getItem("score1"));
if(!score1){
    score1=0;
}
const scoreE1=document.getElementById("score");

scoreE1.innerText=`score: ${score1 }`;
 

formE1.addEventListener("submit",()=>{
    const userAns= +inputE1.value; 
    if(userAns===correctans){
        score1++;
        updatelocalstorage();
    }else{
        score1--;
        updatelocalstorage(); 
    } 
     
});
function updatelocalstorage(){
    localStorage.setItem("score1",JSON.stringify(score1))
}

