var skullVisible = false;
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
var width = canvas.getAttribute('width');
var height = canvas.getAttribute('height');

var bgImage = new Image();
var logoImage = new Image();
var playImage = new Image();
var instructImage = new Image();
var settingsImage = new Image();
var creditsImage = new Image();
var skullImage = new Image();
var moon = new Image();


skullImage.src = "Graphics/skull.png";
bgImage.src = "Graphics/backdrop.png";
logoImage.src = "Graphics/logo.png";
playImage.src = "Graphics/play.png";
instructImage.src = "Graphics/instructions.png";
moon.src = "Graphics/bg.png";
// settingsImage.src = "Images/settings.png";
// creditsImage.src = "Images/credits.png";

var buttonX = [192, 110, 149, 160];
var buttonY = [100, 140, 180, 220];
var buttonWidth = [96, 260, 182, 160];
var buttonHeight = [40, 40, 40, 40];


bgImage.onload = function () {
    context.drawImage(bgImage, 0, 0);
};
logoImage.onload = function () {
    context.drawImage(logoImage, 50, -10);
}
playImage.onload = function () {
    context.drawImage(playImage, buttonX[0], buttonY[0]);
}
instructImage.onload = function () {
    context.drawImage(instructImage, buttonX[1], buttonY[1]);
}
settingsImage.onload = function () {
    context.drawImage(settingsImage, buttonX[2], buttonY[2]);
}
creditsImage.onload = function () {
    context.drawImage(creditsImage, buttonX[3], buttonY[3]);
}

var frames = 30;
var timerId = 0;

timerId = setInterval(update, 1000 / frames);


function update() {
    clear();
    move();
    draw();
}


function clear() {
    context.clearRect(0, 0, width, height);
}


var backgroundX = 20;
var speed = 1;

function move() {
    backgroundX -= speed;
    if (backgroundX == -1 * width) {
        backgroundX = 0;
    }

    if (skullSize == skullWidth) {
        skullRotate = -1;
    }
    if (skullSize == 0) {
        skullRotate = 1;
    }
    skullSize += skullRotate;
}

function draw() {

    context.drawImage(moon,0,0);
    context.drawImage(bgImage, backgroundX,0 );
    context.drawImage(logoImage, 50, -10);
    context.drawImage(playImage, buttonX[0], buttonY[0]);
    context.drawImage(instructImage, buttonX[1], buttonY[1]);
    context.drawImage(settingsImage, buttonX[2], buttonY[2]);
    context.drawImage(creditsImage, buttonX[3], buttonY[3]);

    if (skullVisible == true) {
        context.drawImage(skullImage, skullX[0] - (skullSize / 2), skullY[0], skullSize, skullHeight);
        context.drawImage(skullImage, skullX[1] - (skullSize / 2), skullY[1], skullSize, skullHeight);
    }


}


var mouseX;
var mouseY;
canvas.addEventListener("mousemove", checkPos);


function checkPos(mouseEvent) {

    if (mouseEvent.pageX || mouseEvent.pageY == 0) {
        mouseX = mouseEvent.pageX - this.offsetLeft;
        mouseY = mouseEvent.pageY - this.offsetTop;
    } else if (mouseEvent.offsetX || mouseEvent.offsetY == 0) {
        mouseX = mouseEvent.offsetX;
        mouseY = mouseEvent.offsetY;
    }


    for (i = 0; i < buttonX.length; i++) {
        if (mouseX > buttonX[i] && mouseX < buttonX[i] + buttonWidth[i]) {
            if (mouseY > buttonY[i] && mouseY < buttonY[i] + buttonHeight[i]) {
                skullVisible = true;


                skullX[0] = buttonX[i] - (skullWidth / 2) - 2;
                skullY[0] = buttonY[i] + 2;
                skullX[1] = buttonX[i] + buttonWidth[i] + (skullWidth / 2);
                skullY[1] = buttonY[i] + 2;
            }
        } else {
            skullVisible = false;
        }
    }


}
var skullX = [0, 0];
var skullY = [0, 0];
var skullWidth = 35;
var skullHeight = 40;

var skullSize = skullWidth;
var skullRotate = 0;


var fadeId = 0;
canvas.addEventListener("mouseup", checkClick);

function checkClick(mouseEvent) {
    for (i = 0; i < buttonX.length; i++) {
        if (mouseX > buttonX[i] && mouseX < buttonX[i] + buttonWidth[i]) {
            if (mouseY > buttonY[i] && mouseY < buttonY[i] + buttonHeight[i]) {

                fadeId = setInterval("fadeOut()", 1000 / frames);
                clearInterval(timerId);
                canvas.removeEventListener("mousemove", checkPos);
                canvas.removeEventListener("mouseup", checkClick);

                window.location.href = "game.html";

            }
        }
    }
}


var time = 0.0;

function fadeOut() {
    context.fillStyle = "rgba(0,0,0, 0.2)";
    context.fillRect(0, 0, width, height);
    time += 0.1;
    if (time >= 2) {
        clearInterval(fadeId);
        time = 0;
        timerId = setInterval("update()", 1000 / frames);
        canvas.addEventListener("mousemove", checkPos);
        canvas.addEventListener("mouseup", checkClick);
    }
}