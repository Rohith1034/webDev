var a = null;
document.addEventListener("keydown",collect);
function collect(event) {
    a = event.key;
     switch (a) {
            case "w":
                var audio1 = new Audio("C:\\Users\\manin\\webdev\\Drum Kit Starting Files\\sounds\\crash.mp3");
                audio1.play();
                break;
            case "a":
                var audio2 = new Audio("C:\\Users\\manin\\webdev\\Drum Kit Starting Files\\sounds\\kick-bass.mp3");
                audio2.play();
                break;
            case "s":
                var audio3 = new Audio("C:\\Users\\manin\\webdev\\Drum Kit Starting Files\\sounds\\snare.mp3");
                audio3.play();
                break;
            case "d":
                var audio4 = new Audio("C:\\Users\\manin\\webdev\\Drum Kit Starting Files\\sounds\\tom-1.mp3");
                audio4.play();
                break;
            case "j":
                var audio5 = new Audio("C:\\Users\\manin\\webdev\\Drum Kit Starting Files\\sounds\\tom-2.mp3");
                audio5.play();
                break;
            case "k":
                var audio6 = new Audio("C:\\Users\\manin\\webdev\\Drum Kit Starting Files\\sounds\\tom-3.mp3");
                audio6.play();
                break;
            case "l":
                var audio7 = new Audio("C:\\Users\\manin\\webdev\\Drum Kit Starting Files\\sounds\\tom-4.mp3");
                audio7.play();
                break;
            default:
        }
}
document.querySelectorAll("button");
for (var i = 0; i <= 6; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var inner_html = this.innerHTML;
        switch (inner_html,a) {
            case "w":
                var audio1 = new Audio("C:\\Users\\manin\\webdev\\Drum Kit Starting Files\\sounds\\crash.mp3");
                audio1.play();
                if (a =="w") {
                    audio1.play();
                }
                break;
            case "a":
                var audio2 = new Audio("C:\\Users\\manin\\webdev\\Drum Kit Starting Files\\sounds\\kick-bass.mp3");
                audio2.play();
                if (a =="a") {
                    audio2.play();
                }
                break;
            case "s":
                var audio3 = new Audio("C:\\Users\\manin\\webdev\\Drum Kit Starting Files\\sounds\\snare.mp3");
                audio3.play();
                if (a =="s") {
                    audio3.play();
                }
                break;
            case "d":
                var audio4 = new Audio("C:\\Users\\manin\\webdev\\Drum Kit Starting Files\\sounds\\tom-1.mp3");
                audio4.play();
                if (a =="d") {
                    audio4.play();
                }
                break;
            case "j":
                var audio5 = new Audio("C:\\Users\\manin\\webdev\\Drum Kit Starting Files\\sounds\\tom-2.mp3");
                audio5.play();
                if (a =="j") {
                    audio5.play();
                }
                break;
            case "k":
                var audio6 = new Audio("C:\\Users\\manin\\webdev\\Drum Kit Starting Files\\sounds\\tom-3.mp3");
                audio6.play();
                if (a =="k") {
                    audio6.play();
                }
                break;
            case "l":
                var audio7 = new Audio("C:\\Users\\manin\\webdev\\Drum Kit Starting Files\\sounds\\tom-4.mp3");
                audio7.play();
                if (a =="l") {
                    audio7.play();
                }
                break;
            default:
                console.log(inner_html); 
        }
    });
}


