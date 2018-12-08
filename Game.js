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

	backImage.src = "Graphics/bg.png";
	backDrop.image.src = "Graphics/backdrop.png";
	backDrop2.image.src = "Graphics/backdrop.png";
	backDrop3.image.src = "Graphics/backdrop_ground.png";
	backDrop4.image.src = "Graphics/backdrop_ground.png";
	asset1.image.src = "Graphics/asset1.png";
	asset2.image.src = "Graphics/asset2.png";




	//Motor del juego

	function update() {

		requestAnimationFrame(update);
		draw();
		if (player.alive) {

			updatePlayer();
			updateBackDrop();
			updateBackDropGround();
			updateBuilding();
			checkBottomCollision();
			checkPlayerCollision();
			trackTime();
		}

	}

	function draw() {


		graphics.clearRect(0, 0, frame.width, frame.height);
		graphics.drawImage(backImage, 0, 0, frame.width, frame.height);
		graphics.drawImage(backDrop.image, backDrop.x, backDrop.y);
		graphics.drawImage(backDrop2.image, backDrop2.x, backDrop2.y);
		graphics.drawImage(backDrop3.image, backDrop3.x, backDrop3.y);
		graphics.drawImage(backDrop4.image, backDrop4.x, backDrop4.y);
		graphics.drawImage(asset1.image, asset1.x, asset1.y);
		graphics.drawImage(asset2.image, asset2.x, asset2.y);
		graphics.drawImage(player.image, player.x, player.y);
		graphics.font = "bold 20px Helvetica";
		graphics.fillStyle = "white";
		graphics.textAlign = "center";
		graphics.fillText("Score: " + points, frame.width / 2, 100);

		if (!player.alive) {

			graphics.fillText("TryAgain", frame.width / 2, 300);

		}
	}

	

	function checkBottomCollision() {
		if (player.y + player.size >= asset1.y) {
			player.y = asset1.y - player.size;
			player.falling = false;
			player.fallSpeed = 0;
			player.jumpSpeed = player.jumpOriginalValue;
		}
	}


	//Start this shit
	update();


};