class Scene2 extends Phaser.Scene {
	constructor(){
		super("GamePlay");
	}
	create(){
		this.add.text(20, 20, "Play Game", {font: "25px Arial", fill: "yellow"});

		this.background = this.add.tileSprite(0, 0, config.width,config.height, "space"); 
		this.background.setOrigin(0,0);


	//	this.platforms = this.physics.add.staticGroup();
//        this.platforms.create(300, 200, 'block2');
  //      this.platforms.create(200, 350, 'block2');

        this.tests = this.physics.add.group();
        this.test = this.tests.create(Phaser.Math.Between(20, config.width - 20),550, "asd").setImmovable();
        this.test = this.tests.create(Phaser.Math.Between(20, config.width - 20),350, "asd").setImmovable();
        this.test = this.tests.create(Phaser.Math.Between(20, config.width - 20),150, "asd").setImmovable();



		//this.test2 = this.physics.add.sprite(200,200, "block4").setImmovable();

		this.player = this.physics.add.sprite(config.width/2 - 50, config.height - 50, "player").setBounce(0);
		this.player.setGravityY(500);

		this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
		this.cursorKeys = this.input.keyboard.createCursorKeys();   

		this.physics.add.overlap(this.player, this.tests,test,null,this);
			function test(player, test){
				if(player.body.touching.down){
				var asd = this.physics.add.collider(player, test);
				gameSetting.playerJump = 1;
				}
			}

	



		this.input.on('pointerdown', function (pointer) {
   				this.scene.start("bootGame");
 		}, this);
	}
moveShip(ship, speed){
		ship.y +=speed;
	}

	update(){
    this.physics.world.wrap(this.player, 5);

 

	this.movePlayer();
	if(gameSetting.playerJump == 2){
	this.background.tilePositionY -= 1;
	Phaser.Actions.Call(this.tests.getChildren(), function(go) {
	 go.y +=2;
	 if (go.y > 500){
	 	go.y = -50;
	 	go.x = Phaser.Math.Between(20, config.width - 20);
	  }
})
}

	if(Phaser.Input.Keyboard.JustDown(this.spacebar)){
		gameSetting.playerJump = 2;
		this.player.setVelocityY(-300);
		
	}
	}



	movePlayer(){

		if(this.cursorKeys.left.isDown){
			this.player.setVelocityX(-gameSetting.playerSpeed);
		}else if(this.cursorKeys.right.isDown){
			this.player.setVelocityX(gameSetting.playerSpeed);
		}else{
			this.player.setVelocityX(0);
		}
	}
}