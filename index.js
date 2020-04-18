for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", adSlc);
  document.addEventListener("keypress", adSlc);
}
function adSlc() {
  var a = this.innerHTML;
  var b = event.key;
  var audio;
  if (a === "w" || b === "w") {
    audio = new Audio("sounds/tom-1.mp3");
  } else if (a === "a" || b === "a") {
    audio = new Audio("sounds/tom-2.mp3");
  } else if (a === "s" || b === "s") {
    audio = new Audio("sounds/tom-3.mp3");
  } else if (a === "d" || b === "d") {
    audio = new Audio("sounds/tom-4.mp3");
  } else if (a === "j" || b === "j") {
    audio = new Audio("sounds/snare.mp3");
  } else if (a === "k" || b === "k") {
    audio = new Audio("sounds/crash.mp3");
  } else if (a === "l" || b === "l") {
    audio = new Audio("sounds/kick-bass.mp3");
  }
  audio.play();
}
