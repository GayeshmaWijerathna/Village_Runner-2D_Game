let boy = document.getElementById("boy");
let idleImageNumber =0;
 let idleAnimationNumber=0;

function idleAnimation(){
    idleImageNumber = idleImageNumber + 1;


    if (idleImageNumber == 10){
        idleImageNumber = 1;
    }
    boy.src = "resources/Idle__00" + idleImageNumber + ".png";
}
    function idleAnimationStart(){
   idleAnimationNumber = setInterval(idleAnimation,200);

    }

    runImageNumber = 0;
    runAnimationNumber =0;

function runAnimation(){

    runImageNumber = runImageNumber+1;

    if (runImageNumber==10){
        runImageNumber=1;
    }

    boy.src = " resources/Run__00"+runImageNumber +".png";

}

    function runAnimationStart(){
      runAnimationNumber =   setInterval(runAnimation,100);

      clearInterval(idleAnimationNumber);
    }

    function keyCheck(event){
        // alert(event.which);
        // enter=13;

let keyCode = event.which;

if (keyCode ==13 ){
    if (runAnimationNumber == 0){
        runAnimationStart();
    }
}

if (moveBackgroundAnimationID == 0){
   moveBackgroundAnimationID =  setInterval(moveBackground,100);
}
    }

    var backgroundImagePositionX =0;
    var moveBackgroundAnimationID =0;

    function moveBackground(){
        backgroundImagePositionX = backgroundImagePositionX -20;

    document.getElementById("background").style.backgroundPositionX = backgroundImagePositionX + "px" ;
    }

