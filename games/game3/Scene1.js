class Scene1 extends Phaser.Scene {
	constructor(){
		super("bootGame");
	}

	preload(){
		this.load.image('block1', 'assets/block1.png');
		this.load.image('block2', 'assets/block2.png');
  		this.load.image("tiles", "assets/tiled2.png");
  		this.load.tilemapTiledJSON("map", "assets/testmap2.json");

}

	create(){

		this.add.text(config.width/2 - 200,config.height/2-100, "Jumper Block", {fontSize: "50px", fill: "yellow"});
		this.add.text(400, 300, "Click to start game...", {fontSize: "20px "});
		    this.input.on('pointerdown', function (pointer) {
   				this.scene.start("GamePlay");
 }, this);
	}
}