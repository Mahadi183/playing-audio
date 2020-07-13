var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "a":
      var sound1 = new Audio("sounds/titanic.mp3");
      sound1.play();
      break;

    case "b":
      var sound2 = new Audio("sounds/you-are-the-reason.mp3");
      sound2.play();
      break;

    case "c":
      var sound3 = new Audio('sounds/you-are-the-reason-violin.mp3');
      sound3.play();
      break;

    case "d":
      var sound4 = new Audio('sounds/i-am-alive.mp3');
      sound4.play();
      break;

    case "e":
      var sound5 = new Audio('sounds/because-you-love-me.mp3');
      sound5.play();
      break;

    case "f":
      var sound6 = new Audio('sounds/amar-ekla-akash.mp3');
      sound6.play();
      break;

    case "g":
      var sound7 = new Audio('sounds/a-thousand-year.mp3');
      sound7.play();
      break;

    case "h":
      var sound8 = new Audio('sounds/titanic.mp3');
      sound8.play();
      break;

    case "i":
      var sound9 = new Audio('sounds/you-are-the-reason.mp3');
      sound9.play();
      break;
    case "j":
      var sound10 = new Audio('sounds/you-are-the-reason-violin.mp3');
      sound10.play();
      break;

    case "k":
      var sound11 = new Audio('sounds/i-am-alive.mp3');
      sound11.play();
      break;

    case "l":
      var sound12 = new Audio('sounds/because-you-love-me.mp3');
      sound12.play();
      break;

    case "m":
      var sound13 = new Audio('sounds/amar-ekla-akash.mp3');
      sound13.play();
      break;

    case "n":
      var sound14 = new Audio('sounds/a-thousand-year.mp3');
      sound14.play();
      break;

    case "o":
      var sound15 = new Audio('sounds/titanic.mp3');
      sound15.play();
      break;

    case "p":
      var sound16 = new Audio('sounds/you-are-the-reason.mp3');
      sound16.play();
      break;

    case "q":
      var sound17 = new Audio('sounds/you-are-the-reason-violin.mp3');
      sound17.play();
      break;

    case "r":
      var sound18 = new Audio('sounds/i-am-alive.mp3');
      sound18.play();
      break;

    case "s":
      var sound19 = new Audio('sounds/because-you-love-me.mp3');
      sound19.play();
      break;

    case "t":
      var sound20 = new Audio('sounds/amar-ekla-akash.mp3');
      sound20.play();
      break;

    case "u":
      var sound21= new Audio('sounds/a-thousand-year.mp3');
      sound21.play();
      break;

    case "v":
      var sound22 = new Audio('sounds/titanic.mp3');
      sound22.play();
      break;

    case "w":
      var sound23 = new Audio('sounds/you-are-the-reason.mp3');
      sound23.play();
      break;

    case "x":
      var sound24 = new Audio('sounds/you-are-the-reason-violin.mp3');
      sound24.play();
      break;

    case "y":
      var sound25 = new Audio('sounds/i-am-alive.mp3');
      sound25.play();
      break;

    case "z":
      var sound26= new Audio('sounds/because-you-love-me.mp3');
      sound26.play();
      break;


    default:
      console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
