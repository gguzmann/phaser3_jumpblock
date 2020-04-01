var gameSetting = {
	playerSpeed: 200,
	enemySpeed: 1
}
var config = {
	width: 400,
	height: 400,
	backgroundColor: 0x000000,
	scene: [Scene1, Scene2],
	  physics: {
    default: "arcade",
    arcade:{
        debug: false
    }
}
}

var game = new Phaser.Game(config);

