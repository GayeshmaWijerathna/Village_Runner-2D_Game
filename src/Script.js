let boy = document.getElementById("boy");
let idleImageNumber = 1;
let idleAnimationNumber = 0;

function idleAnimation() {
    idleImageNumber = idleImageNumber + 1;


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

}

function runAnimationStart() {
    runAnimationNumber = setInterval(runAnimation, 100);

    clearInterval(idleAnimationNumber);
}

let jumpAnimationNumber = 0;
let jumpImageNumber =0;
let boyMarginTop = 307;

function jumpAnimation(){
    jumpImageNumber = jumpImageNumber+1;

    if ( jumpImageNumber <= 5){
        boyMarginTop = boyMarginTop - 20;
        boy.style.marginTop = boyMarginTop + "px";
    }

    if (jumpImageNumber >= 6){
        boyMarginTop = boyMarginTop + 20;
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
    }

    /*Space - Jump*/
    if (keyCode == 32) {
        if (jumpAnimationNumber == 0){
            jumpAnimationStart();
        }

        if (moveBackgroundAnimationID == 0) {
            moveBackgroundAnimationID = setInterval(moveBackground, 100);
        }
    }

}

let backgroundImagePositionX = 0;
let moveBackgroundAnimationID = 0;

function moveBackground() {
    backgroundImagePositionX = backgroundImagePositionX - 20;

    document.getElementById("background").style.backgroundPositionX = backgroundImagePositionX + "px";
}

