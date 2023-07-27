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