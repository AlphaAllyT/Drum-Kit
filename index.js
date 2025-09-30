
function buttonClicked() {
    var innerHtmlButton = this.innerHTML;

    switch (innerHtmlButton) {
      case "w":
          var tom1 = new Audio("./sounds/tom-1.mp3");
          tom1.play();
        break;
      case "a":
          var tom2 = new Audio("./sounds/tom-2.mp3");
          tom2.play();
        break;
      case "s":
          var tom3 = new Audio("./sounds/tom-3.mp3");
          tom3.play();
        break;
      case "d":
          var tom4 = new Audio("./sounds/tom-4.mp3");
          tom4.play();
        break;
      case "j":
          var snare = new Audio("./sounds/snare.mp3");
          snare.play();
        break;
      case "k":
          var crash = new Audio("./sounds/crash.mp3");
          crash.play();
        break;
      case "l":
          var kick = new Audio("./sounds/kick-bass.mp3");
          kick.play();
        break;

      default: console.log(innerHTML);
        break;
    }
    
}
var butt = document.querySelectorAll("button");
butt.forEach(function(Ally){Ally.addEventListener("click", buttonClicked )});


document.addEventListener("keydown", function(event){
  var myKeys = {
  w : "./sounds/tom-1.mp3",
  j : "./sounds/tom-2.mp3",
  a : "./sounds/tom-3.mp3",
  s : "./sounds/tom-4.mp3",
  d : "./sounds/snare.mp3",
  k : "./sounds/crash.mp3",
  l : "./sounds/kick-bass.mp3",
}
var sound = myKeys[event.key];

if(sound){
  var mySound = new Audio(sound);
  mySound.play();
}

})





