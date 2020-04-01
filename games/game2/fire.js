class Fire extends Phaser.GameObjects.Sprite{
	constructor(scene){

		var x = scene.player.x;
		var y = scene.player.y - 40;

		super(scene, x, y, "player").setScale(0.3);
    	scene.add.existing(this);

    	scene.physics.world.enableBody(this);
    	this.body.velocity.y = - 250;
	}
}