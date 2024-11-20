for(let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    
    document.querySelectorAll(".drum")[i].addEventListener("click", buttonFunction);

    function buttonFunction() {
    

    // let buttonClicks = this.innerHTML;

    keypressing(this.innerHTML);
    buttonAnimation(this.innerHTML);
}


}

document.addEventListener("keypress", function(event) {

    keypressing(event.key);
    buttonAnimation(event.key);
})

function keypressing(key) {

    switch (key) {
        case "w":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();

        case "d":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "k":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "l":
            let kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
    
        default: console.log(key);
    }
}

function buttonAnimation(currentKey) {

    let pressedKey = document.querySelector("." + currentKey);
    pressedKey.classList.add("pressed");
    
    setTimeout(function() {
        pressedKey.classList.remove("pressed");
    }, 200);

    
}