var playerAnimation = [];
for (var i = 0; i < 16; i++) {
    playerAnimation[i] = new Image();
}

playerAnimation[0].src = "Graphics/Player_Walk/1.png";
playerAnimation[1].src = "Graphics/Player_Walk/2.png";
playerAnimation[2].src = "Graphics/Player_Walk/3.png";
playerAnimation[3].src = "Graphics/Player_Walk/4.png";
playerAnimation[4].src = "Graphics/Player_Walk/5.png";
playerAnimation[5].src = "Graphics/Player_Walk/6.png";
playerAnimation[6].src = "Graphics/Player_Walk/7.png";
playerAnimation[7].src = "Graphics/Player_Walk/8.png";
playerAnimation[8].src = "Graphics/Player_Walk/9.png";
playerAnimation[9].src = "Graphics/Player_Walk/10.png";
playerAnimation[10].src = "Graphics/Player_Walk/11.png";
playerAnimation[11].src = "Graphics/Player_Walk/12.png";
playerAnimation[12].src = "Graphics/Player_Walk/13.png";
playerAnimation[13].src = "Graphics/Player_Walk/14.png";
playerAnimation[14].src = "Graphics/Player_Walk/15.png";
playerAnimation[15].src = "Graphics/Player_Walk/16.png";

var player = {
    
    size: 93,
    x: 200,
    y: 250,
    jumping: false,
    falling: true,
    maxJumpSpeed: 0,
    jumpOriginalValue: 9,
    jumpSpeed: 1,
    jumpAcceleration: 0.4,
    fallSpeed: 0,
    fallAcceleration: 0.6,
    alive: true,
    image: new Image(),

};
