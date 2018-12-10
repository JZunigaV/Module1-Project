var enemieFrame = 0;
	var enemies = [];


	//Constructor
	function Enemie(x) {
		this.x = x;
		this.y = 475;
		this.size = 130;
		this.speed = 11;
		this.image = new Image();
	}





	//Animation of enemie
	var enemieAnimation = [];
	for (var i = 0; i < 4; i++) {
		enemieAnimation[i] = new Image();
	}
	enemieAnimation[0].src = "Graphics/1.png";
	enemieAnimation[1].src = "Graphics/2.png";
	enemieAnimation[2].src = "Graphics/3.png";
	enemieAnimation[3].src = "Graphics/4.png";
    // enemieAnimation[4].src = "Graphics/dog5.png";
    
