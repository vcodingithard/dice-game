let btn=document.querySelector(".toss");
let div1=document.querySelector(".one");
let div2=document.querySelector(".two");
let img1=document.querySelector(".img1");
let img2=document.querySelector(".img2");
let s=document.querySelector(".score");
let player1=document.querySelector(".pone");
let player2=document.querySelector(".ptwo");
let rem=document.querySelector(".d");
rem.classList.add("none");

btn.addEventListener("click",function(){
    img1.classList.add("anim");
    setTimeout(function(){
        img1.classList.remove("anim");
    },1000);
   setTimeout(roll,1000); 
   img2.classList.add("anim");
   setTimeout(function(){
       img2.classList.remove("anim");
   },1000);
  setTimeout(roll,1000);  
});

let none=document.querySelector(".form");
let forms=document.querySelector("form");
let i1=document.querySelector("#player1");
let i2=document.querySelector("#player2");
forms.addEventListener("submit",function(){
    none.style.display="none";
    player1.innerText=`${i1.value}`;
    player2.innerText=`${i2.value}`;
    rem.classList.remove("none");

})
form2.addEventListener("submit",function(){

});

function roll(){

    let rdmNo1=Math.floor(Math.random()*6)+1;
    let rdmNo2=Math.floor(Math.random()*6)+1;
    img1.src=`images/dice${rdmNo1}.png`;
    img2.src=`images/dice${rdmNo2}.png`;
    if(rdmNo1==rdmNo2){
        s.innerHTML=`Tie Breaker<br><b>Score:</b>${rdmNo1}`;
    }
    else if(rdmNo1>rdmNo2){
        s.innerHTML=`${i1.value} wins<br><b>Score:</b>${rdmNo1}`;
    }else{
        s.innerHTML=`${i2.value} wins<br><b>Score:</b>${rdmNo2}`;
    }
}



