var gameSetting = {
	playerSpeed: 200,
	pisoSpeed: 2,
	score: 0,
	spaceMoved: 1,
	playerJump: 1
}
var config = {
	width: 400,
	height: 500,
	backgroundColor: 0x000000,
	scene: [Scene1, Scene2],
	  physics: {
    default: "arcade",
	arcade:  {
    		gravity: {y:0},
    		debug: true
    	}
}
}

var game = new Phaser.Game(config);

