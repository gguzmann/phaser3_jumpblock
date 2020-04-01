class Scene1 extends Phaser.Scene {
	constructor(){
		super("bootGame");
	}

	preload(){
		this.load.image('space', 'assets/space.png');
		this.load.image('player', 'assets/block1.png');
		this.load.image('block2', 'assets/block2.png');
		this.load.image('block3', 'assets/block3.png');
		this.load.image('block4', 'assets/block4.png');

}

	create(){
		this.add.text(30, 100, "Mini Games", {fontSize: "50px", fill: "yellow"});
		this.add.text(30, 200, "Click to start game...", {fontSize: "20px "});
		    this.input.on('pointerdown', function (pointer) {
   				this.scene.start("GamePlay");
 }, this);
	}
}