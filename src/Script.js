let boy = document.getElementById("boy");
let idleImageNumber = 1;
let idleAnimationNumber = 0;


var Background = new Audio("resources/audio/beforeStart.mp3");

var deadMusic = new Audio("resources/audio/Dead1.mp3");
var damaged = new Audio("resources/audio/damaged.mp3");


var runMusic = new Audio("resources/audio/running-on-footstep.mp3");

var jump = new Audio("resources/audio/jump.mp3");




function idleAnimation() {
    idleImageNumber = idleImageNumber + 1;
   onkeypress(Background.play());
    if (idleImageNumber == 10) {
        idleImageNumber = 1;
    }
    boy.src = "resources/Idle__00" + idleImageNumber + ".png";


}

function idleAnimationStart() {
    idleAnimationNumber = setInterval(idleAnimation, 200);

}

let runImageNumber = 1;
let runAnimationNumber = 0;

function runAnimation() {

    runImageNumber = runImageNumber + 1;

    if (runImageNumber == 10) {
        runImageNumber = 1;
    }

    boy.src = " resources/Run__00" + runImageNumber + ".png";
Background.pause();
runMusic.play();
}

function runAnimationStart() {
    runAnimationNumber = setInterval(runAnimation, 100);

    clearInterval(idleAnimationNumber);
}

let jumpAnimationNumber = 0;
let jumpImageNumber =0;
let boyMarginTop = 347;

function jumpAnimation(){
    jumpImageNumber = jumpImageNumber+1;
    jump.play();
    runMusic.pause();
    if ( jumpImageNumber <= 5){
        boyMarginTop = boyMarginTop - 37;
        boy.style.marginTop = boyMarginTop + "px";

    }

    if (jumpImageNumber >= 6){
        boyMarginTop = boyMarginTop + 37;
        boy.style.marginTop = boyMarginTop + "px";
    }

    if (jumpImageNumber == 10){
        jumpImageNumber =0;
        clearInterval(jumpAnimationNumber);
        jumpAnimationNumber =0;
        runImageNumber = 0;
        runAnimationStart();

    }

    boy.src = "resources/Jump__00" + jumpImageNumber + ".png";
}

function jumpAnimationStart(){
    clearInterval(idleAnimationNumber);
    runImageNumber = 0;
    clearInterval(runAnimationNumber);
   jumpAnimationNumber =  setInterval(jumpAnimation,100);
}




function keyCheck(event) {
    // alert(event.which);
    // enter=13;
    //space =32;

    let keyCode = event.which;

    /*Enter - Run*/
    if (keyCode == 13) {
        if (runAnimationNumber == 0) {
            runAnimationStart();
        }
        if (moveBackgroundAnimationID == 0) {
            moveBackgroundAnimationID = setInterval(moveBackground, 100);
        }

        if (boxAnimationId==0){
            boxAnimationId=setInterval(boxAnimation,100);
        }
    }

    /*Space - Jump*/
    if (keyCode == 32) {
        if (jumpAnimationNumber == 0){
            jumpAnimationStart();
        }

        if (moveBackgroundAnimationID == 0) {
            moveBackgroundAnimationID = setInterval(moveBackground, 100);
        }

        if (boxAnimationId==0){
            boxAnimationId=setInterval(boxAnimation,100);
        }
    }

}

let backgroundImagePositionX = 0;
let moveBackgroundAnimationID = 0;
let score = 0;

function moveBackground() {
    backgroundImagePositionX = backgroundImagePositionX - 20;

    document.getElementById("background").style.backgroundPositionX = backgroundImagePositionX + "px";


    score = score+1;

    document.getElementById("score").innerHTML=score;
}

  let  boxMarginLeft =1540;



// Barrier  Creation

function createBoxes(){
    for (let i = 0; i <= 10; i++) {

    let box = document.createElement("div");
    box.className = "box";
    document.getElementById("background").appendChild(box);
    box.style.marginLeft = boxMarginLeft + "px";
    box.id = "box" + i;

    // boxMarginLeft= boxMarginLeft+500;

        if (i<5){
            boxMarginLeft = boxMarginLeft +2000;
        }
        if (i>=5){
            boxMarginLeft = boxMarginLeft+ 1000;
        }
    }

}



// Barrier  Animation

let boxAnimationId =0;

function boxAnimation(){
    for (let i = 0; i < 10; i++) {
    let box = document.getElementById("box"+i);
    let currentMarginLeft = getComputedStyle(box).marginLeft;
    let newMarginLeft = parseInt(currentMarginLeft)-35;
    box.style.marginLeft=newMarginLeft+"px";

        if (newMarginLeft >= -110 & newMarginLeft <= 100){
            if (boyMarginTop>300){
                clearInterval(boxAnimationId);

                clearInterval(runAnimationNumber);
                runAnimationNumber =-1;

                clearInterval(jumpAnimationNumber);
                jumpAnimationNumber =-1;

                clearInterval(moveBackgroundAnimationID);
                moveBackgroundAnimationID =-1;

             deadAnimationNumber = setInterval(boyDeadAnimation,100);

            }
        }
    }
}

// Dead Animation

let deadImageNumber =0;

let deadAnimationNumber =0;


function boyDeadAnimation(){

    deadImageNumber = deadImageNumber +1;

    if (deadImageNumber == 10){
        deadImageNumber=9;
        damaged.play();
        runMusic.pause();
        setTimeout(() => { damaged.pause(); }, 2800);

        Background.play();

        document.getElementById("end").style.visibility = "visible";
        document.getElementById("endScore").innerHTML = score;

    }

    deadMusic.play();

    setTimeout(() => { deadMusic.pause(); }, 1000);

    boy.src = "resources/Dead__00"+deadImageNumber+".png";

}


function reload(){
    location.reload();

}
