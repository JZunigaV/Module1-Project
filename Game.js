window.onload = function () {

	var frame = document.getElementById("canvas");
	var graphics = frame.getContext('2d');


	document.addEventListener("mousedown", click);

	var points = 0;
	var scoreTime = 0;
	var animationTime = 0;
	var playerFrame = 0;
	var backImage = new Image();



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


	
	var asset1 = {
		x: 10,
		y: 560,
		size: 2313,
		speed: 6,
		image: new Image()
	};


	var asset2 = {
		x: 2314,
		y: 560,
		size: 1155,
		speed: 6,
		image: new Image()
	};



	//Motor del juego

	function update() {

		requestAnimationFrame(update);
		draw();



	}

	function draw() {

	}


	//Start this shit
	update();


};