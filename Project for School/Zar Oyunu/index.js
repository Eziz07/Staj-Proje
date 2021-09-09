function myFunction(){
var randomNumber1 = Math.random(); // 0 - 0.999999
randomNumber1 = Math.floor(randomNumber1 * 6 + 1);  // 1 - 6

var randomDiceeImage = "dice" + randomNumber1 + ".png";  // dice1.png --- dice6.png

var randomImageSource1 = "images/" + randomDiceeImage;   //  images/dice1.png  --- images/dice6.png

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource1);





var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";  // images/dice1.png -- images/dice6.png

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);



if (randomNumber1 > randomNumber2){
	document.querySelector("h1").innerHTML = "&#128681 Player1 Won!";
}
else if (randomNumber1 == randomNumber2){
	document.querySelector("h1").innerHTML = "🤝Deuce!🤝";
}
else {
	document.querySelector("h1").innerHTML = "Player2 Won!&#128681";
}
}