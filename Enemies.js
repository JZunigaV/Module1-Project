var enemieFrame = 0;
var enemies = [];


//Constructor
function Enemie(x) {
	this.x = x;
	this.y = 455;
	this.size = 110;
	this.speed = 11;
	this.image = new Image();
}

//Animation of enemie
var enemieAnimation = [];
for (var i = 0; i < 11; i++) {
	enemieAnimation[i] = new Image();
}


enemieAnimation[0].src = "Graphics/esqueleto/1.png"
enemieAnimation[1].src = "Graphics/esqueleto/2.png"
enemieAnimation[2].src = "Graphics/esqueleto/3.png"
enemieAnimation[3].src = "Graphics/esqueleto/4.png"
enemieAnimation[4].src = "Graphics/esqueleto/5.png"
enemieAnimation[5].src = "Graphics/esqueleto/6.png"
enemieAnimation[6].src = "Graphics/esqueleto/7.png"
enemieAnimation[7].src = "Graphics/esqueleto/8.png"
enemieAnimation[8].src = "Graphics/esqueleto/9.png"
enemieAnimation[9].src = "Graphics/esqueleto/10.png"
enemieAnimation[10].src = "Graphics/esqueleto/11.png"

