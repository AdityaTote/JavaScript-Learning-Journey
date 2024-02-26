
// detect button
let noOfDrumBut = document.querySelectorAll(".drum").length;

for(let i=0;i<noOfDrumBut;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        
        let but = this.innerHTML;
        check(but);
        anim(but);
        
    });
    
}

//detect keypress

document.addEventListener("keypress",function(event){
            console.log(event.key);   
            check(event.key);
            anim(event.key);

})

function check(n){
    switch(n){
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;


        default: console.log(but);
        
    }
}


function anim(currentKey){
    
    let activeKey = document.querySelector("."+currentKey)
    activeKey.classList.add("pressed")
    setTimeout(function() {
        activeKey.classList.remove("pressed");
        
    }, 200);
}

