var numOfBtn = document.querySelectorAll(".drum").length;

function makeSound(key){
  switch(key){
    case"w" :
    var crash = new Audio("crash.mp3");
    crash.play();
    case"a" :
    var kick = new Audio("kick-bass.mp3");
    kick.play();
    break;
    case"s" :
    var snare = new Audio("snare.mp3");
    snare.play();
    break;
    case"d" :
    var tom1 = new Audio("tom-1.mp3");
    tom1.play();
    break;
    case"j" :
    var tom2 = new Audio("tom-2.mp3");
    tom2.play();
    break;
    case"k" :
    var tom3 = new Audio("tom-3.mp3");
    tom3.play();
    break;
    case"l" :
    var tom4 = new Audio("tom-4.mp3");
    tom4.play();
    break;
    default:
  }
}


for (var i = 0; i < numOfBtn; i++) {
  var btnActive = document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml)
    buttonAnimation(buttonInnerHtml)
    


    })
}

document.addEventListener("keypress",function keySound(e){
  makeSound(e.key)
  buttonAnimation(e.key)
  
  

})

function buttonAnimation(currentKey){
  var btnAnimation = document.querySelector("."+currentKey)
  btnAnimation.classList.add("pressed")
  setTimeout(function(){
    btnAnimation.classList.remove("pressed")
  },100)
  
}








