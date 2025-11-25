let gameSeq = [];
let userSeq = [];
// create array
let btns = ["yellow", "red", "purple" , "green"];

let started = false;
let level =0;

let h2 = document.querySelector("h2");


// start game
document.addEventListener("keypress" , function () {
    if(started == false) {
        console.log("game is started");
        started = true;

        levelUp();
    }
});

// create game flash
function gameFlash(btn) {
    btn.classList.add("gameFlash");
    setTimeout(function () {
     btn.classList.remove("gameFlash");
    } , 250);
}

 // create btn flash
function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function ()  {
    btn.classList.remove("userFlash");
    },250);
}

// level  up karne  ke liye
function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
// random  number generate & color & button
   let randIdx = Math.floor(Math.random() * 3);
   let randColor = btns[randIdx];
   let randBtn = document.querySelector(`.${randColor}`);
//    console.log(randIdx);
//    console.log(randColor);
//    console.log(randBtn);
   gameSeq.push(randColor);
   console.log(gameSeq);
   gameFlash(randBtn);
}

// check correct press or   not
function checkAns(idx) {
    // console.log("curr level :", level);
  

   if (userSeq[idx] === gameSeq[idx]) {
    if(userSeq.length == gameSeq.length) {
        setTimeout(levelUp , 1000);
    }
   }else {
    h2.innerHTML = `game Over! Your score was <b>${level}</b> <br> Press any key to start.`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function() {
        document.querySelector("body").style.backgroundColor = "white";
    } , 150);
    reset();
   }
}

// create btn press
function btnPress() {
    // console.log(this);
    let btn = this;
    userFlash(btn);// calling button functin

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);// calling

}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click",btnPress);
}


function reset () {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}