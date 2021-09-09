// document.querySelectorAll("button")[0].addEventListener("click", handleClick);
// document.querySelectorAll("button")[1].addEventListener("click", handleClick);
// document.querySelectorAll("button")[2].addEventListener("click", handleClick);
// document.querySelectorAll("button")[3].addEventListener("click", handleClick);
// document.querySelectorAll("button")[4].addEventListener("click", handleClick);
// document.querySelectorAll("button")[5].addEventListener("click", handleClick);
// document.querySelectorAll("button")[6].addEventListener("click", handleClick);

for(var i = 0; i < document.querySelectorAll(".drum").length; i++){
	document.querySelectorAll(".drum")[i].addEventListener("click", function(){
		
		var btnInner = this.innerHTML;
		makeSound(btnInner);
		buttonAnimation(btnInner);
	});
}

document.addEventListener('keypress', function(event){
	makeSound(event.key);
	buttonAnimation(event.key);
});

function makeSound(key) {
	switch (key) {
			case "w":
				var crash = new Audio('sounds/crash.mp3');
	 			crash.play();
	 			break;
				

	 		case "a":
	 			var bass = new Audio('sounds/kick-bass.mp3');
	 			bass.play();
	 			break;
	 			

	 		case "s":
	 			var snare = new Audio('sounds/snare.mp3');
	 			snare.play();
	 			break;
	 			

	 		case "d":
	 			var tom1 = new Audio('sounds/tom-1.mp3');
	 			tom1.play();
	 			break;
	 			

	 		case "j":
	 			var tom2 = new Audio('sounds/tom-2.mp3');
	 			tom2.play();
	 			break;

	 		case "k":
	 			var tom3 = new Audio('sounds/tom-3.mp3');
	 			tom3.play();
	 			break;

	 		case "l":
	 			var tom4 = new Audio('sounds/tom-4.mp3');
	 			tom4.play();
	 			break;

	 			default: console.log(btnInner);
		}

}

function buttonAnimation(currentKey){
	var activeBtn = document.querySelector('.' + currentKey);
	activeBtn.classList.add('pressed');

	setTimeout(function() {
		activeBtn.classList.remove('pressed');
	}, 100);
}