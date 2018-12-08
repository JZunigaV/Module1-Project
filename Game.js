window.onload = function () {

var frame = document.getElementById("canvas");
var graphics = frame.getContext('2d');





//Objeto de jugador

var player = {
	size: 64,
	x: 400,
	y: 250,
	jumping: false,
	falling: true,
	maxJumpSpeed: 0,
	jumpOriginalValue: 12,
	jumpSpeed: 12,
	jumpAcceleration: 0.4,
	fallSpeed: 0,
	fallAcceleration: 0.6,
	alive: false,
	image: new Image(),
	light: new Image()
};


//Backgrounds
var backDrop = {
	x: 10,
	y: 150,
	size: 960,
	speed: 0.5,
	image: new Image()
}

var backDrop2 = {
	x: 970,
	y: 150,
	size: 960,
	speed: 0.5,
	image: new Image()
}


var backDrop3 = {

	x: 10,
	y: 300,
	size: 1000,
	speed: 1,
	image: new Image()

}


var backDrop4 = {
	x: 500,
	y: 350,
	size: 1000,
	speed: 1,
	image: new Image()
}


//Motor del juego

function update(){

    requestAnimationFrame(update);
    draw();



}

function draw() {

}


//Start this shit
update();


};