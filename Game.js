window.onload = function () {

	var frame = document.getElementById("canvas");
	var graphics = frame.getContext('2d');


	document.addEventListener("mousedown", click);

	var points = 0;
	var scoreTime = 0;
	var spawnTime = 0;
	var animationTime = 0;
	var playerFrame = 0;
	var backImage = new Image();
	var startEnemieSpeed = 10
	var enemieSpeed  = 10;

	// var enemieFrame = 0;
	// var enemies = [];


	// //Animation of enemie
	// var enemieAnimation = [];
	// for (var i = 0; i < 5; i++) {
	// 	enemieAnimation[i] = new Image();
	// }
	// enemieAnimation[0].src = "Graphics/dog1.png";
	// enemieAnimation[1].src = "Graphics/dog2.png";
	// enemieAnimation[2].src = "Graphics/dog3.png";
	// enemieAnimation[3].src = "Graphics/dog4.png";
	// enemieAnimation[4].src = "Graphics/dog5.png";



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
			updateAsset();
			//update of enemie
			updateEnemies();
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
		drawEnemies();

		if (!player.alive) {


			
			player.image = playerAnimation[11];
			
			player.image = playerAnimation[12];
			
			player.image = playerAnimation[13];
			
			player.image = playerAnimation[14];
			
			player.image = playerAnimation[15];

			
			graphics.fillText("TryAgain", frame.width / 2, 300);

		}
	}

	//Draw enemies
	function drawEnemies() {
		for (i = 0; i < enemies.length; i++) {
			graphics.drawImage(enemies[i].image, enemies[i].x, enemies[i].y);
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

	function checkPlayerCollision() {

		var reduction = 10;
		for (i = 0; i < enemies.length; i++) {
			var testDog = enemies[i];
			if (testDog.x + reduction < player.x + player.size - reduction &&
				testDog.x + testDog.size - reduction > player.x + reduction &&
				testDog.y + reduction < player.y + player.size - reduction &&
				testDog.y + testDog.size - reduction > player.y + reduction) {
				player.alive = false;
			}
		}

	}

	function updatePlayer() {

		if (player.jumping) {
			if (player.jumpSpeed > player.maxJumpSpeed) {
				player.y -= player.jumpSpeed;
				player.jumpSpeed -= player.jumpAcceleration;
			} else {
				player.jumpSpeed = player.jumpOriginalValue;
				player.jumping = false;
				player.falling = true;
			}
		} else if (player.falling) {
			player.y += player.fallSpeed;
			player.fallSpeed += player.fallAcceleration;
		}
	}


	function updateAsset() {
		if (asset1.x + asset1.size < 0) {
			asset1.x = asset2.x + asset2.size;
		}
		if (asset2.x + asset2.size < 0) {
			asset2.x = asset1.x + asset1.size;
		}
		asset1.x -= asset1.speed;
		asset2.x -= asset2.speed;
	}

	function updateBackDrop() {

		if (backDrop.x + backDrop.size < 0) {
			backDrop.x = backDrop2.x + backDrop2.size;
		}
		if (backDrop2.x + backDrop2.size < 0) {
			backDrop2.x = backDrop.x + backDrop.size;
		}

		backDrop.x -= backDrop.speed;
		backDrop2.x -= backDrop2.speed;

	}

	function updateBackDropGround() {

		if (backDrop3.x + backDrop3.size < 0) {
			backDrop3.x = backDrop4.x + backDrop4.size;
		}
		if (backDrop4.x + backDrop4.size <= 0) {
			backDrop4.x = backDrop3.x + backDrop3.size;
		}

		backDrop3.x -= backDrop3.speed;
		backDrop4.x -= backDrop4.speed;

	}


	//update of enemies

	function updateEnemies() {
		if (spawnTime == 100) {
			generatePacksOfEnemies(frame,enemieSpeed);
			spawnTime = 0;
		}
		spawnTime++;
		for (i = 0; i < enemies.length; i++) {
			if (enemies[i].x + enemies[i].size < 0) {
				enemies.splice(i, 0);
			}
			enemies[i].x -= enemies[i].speed;
		}
	}


	

	function trackTime() {
		if (animationTime == 4) {
			managePlayerAnimation();
			manageEnemieAnimation();
			animationTime = 0;
		}
		if (scoreTime == 50) {
			points += 2;
			scoreTime = 0;
		}
		animationTime++;


		if(points === 20){
			enemieSpeed = 15;
		}
		

		if(points === 40){
			enemieSpeed = 20;
		}

		if(points === 60){
			enemieSpeed = 25;
		}


		


		scoreTime++;
	}

	function managePlayerAnimation() {

	

		if (player.jumping) {
			player.image = playerAnimation[14];

		} else if (player.falling) {
			player.image = playerAnimation[0];
		} else {
			player.image = playerAnimation[playerFrame];
			playerFrame++;
			if (playerFrame > playerAnimation.length - 1) {
				playerFrame = 0;
			}
		}
	}

	//Manage Dog animation
	function manageEnemieAnimation() {
		for (i = 0; i < enemies.length; i++) {
			enemies[i].image = enemieAnimation[enemieFrame];
		}
		enemieFrame++;
		if (enemieFrame > enemieAnimation.length - 1) {
			enemieFrame = 0;
		}
	}

	function restartGame() {

		player.alive = true;
		points = 0;
		enemies = [];
	}


	function click() {
		if (player.alive) {
			if (!player.jumping && !player.falling) {
				player.jumping = true;
			}
		} else {
			restartGame();
			firstDog = true;
			enemieSpeed = startEnemieSpeed;
		}
	}



	
    //Generate packs of enemies

	function generatePacksOfEnemies() {
		var numEnemies = Math.floor(Math.random() * 5);
		switch (numEnemies) {
			case 0:
				enemies.push(new Enemie(frame.width));
				break;
			case 1:
				enemies.push(new Enemie(frame.width));
				enemies.push(new Enemie(frame.width + 70));
				break;
			case 2:
				enemies.push(new Enemie(frame.width));
				enemies.push(new Enemie(frame.width + 70));
				enemies.push(new Enemie(frame.width + 140));
				break;

			case 3:
				enemies.push(new Enemie(frame.width));
				enemies.push(new Enemie(frame.width + 70));
				enemies.push(new Enemie(frame.width + 140));
				enemies.push(new Enemie(frame.width + 210));
				break;
		}
	}



	//Start this shit
	update();


};