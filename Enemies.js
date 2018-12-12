var enemieFrame = 0;
var enemies = [];


//Constructor
function Enemie(x) {
	this.x = x;
	this.y = 475;
	this.size = 110;
	this.speed = 11;
	this.image = new Image();
}

//Animation of enemie
var enemieAnimation = [];
for (var i = 0; i < 6; i++) {
	enemieAnimation[i] = new Image();
}


enemieAnimation[0].src = "Graphics/esqueleto/1.png"
enemieAnimation[1].src = "Graphics/esqueleto/2.png"
enemieAnimation[2].src = "Graphics/esqueleto/3.png"
enemieAnimation[3].src = "Graphics/esqueleto/4.png"
enemieAnimation[4].src = "Graphics/esqueleto/5.png"
enemieAnimation[5].src = "Graphics/esqueleto/6.png"
