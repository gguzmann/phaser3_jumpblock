class Scene2 extends Phaser.Scene {
	constructor(){
		super("GamePlay");
	}
	create(){
		gameSetting.playerJump = 1;
		gameSetting.spaceMoved = 1;
		gameSetting.score = 0;
		this.add.text(20, 20, "Play Game", {font: "25px Arial", fill: "yellow"});

		this.background = this.add.tileSprite(0, 0, config.width,config.height, "space"); 
		this.background.setOrigin(0,0);


	//	this.platforms = this.physics.add.staticGroup();
//        this.platforms.create(300, 200, 'block2');
  //      this.platforms.create(200, 350, 'block2');

        this.tests = this.physics.add.group();
        this.test = this.tests.create(Phaser.Math.Between(20, config.width - 20),300, "asd").setImmovable().setScale(2);
        this.test = this.tests.create(Phaser.Math.Between(20, config.width - 20),100, "asd").setImmovable().setScale(2);
        this.test = this.tests.create(Phaser.Math.Between(20, config.width - 20),-100, "asd").setImmovable().setScale(2);


		//this.test2 = this.physics.add.sprite(200,200, "block4").setImmovable();

		this.piso = this.physics.add.sprite(200,520, "asd").setScale(8).setImmovable();

		this.player = this.physics.add.sprite(config.width/2 - 50, config.height - 20, "player").setBounce(0);
		this.player.setGravityY(500);
			this.player.setVelocityX(0);

		this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
		this.cursorKeys = this.input.keyboard.createCursorKeys();   

        this.scoreText = this.add.text(16,16, 'Score: 0');
		this.physics.add.collider(this.player, this.piso);
		this.physics.add.collider(this.player, this.tests,test,null,this);
			function test(player, test){
					this.player.y +=2;
					gameSetting.playerJump = 1;
				}
			



		this.input.on('pointerdown', function (pointer) {
   				this.scene.start("bootGame");
 		}, this);
	}
moveShip(ship, speed){
		ship.y +=speed;
	}

	update(){
    this.physics.world.wrap(this.player, 10);
	this.movePlayer();

	if(gameSetting.spaceMoved == 2){
	this.background.tilePositionY -= 1;
	        			this.scoreText.setText('Score: ' + gameSetting.score);
	Phaser.Actions.Call(this.tests.getChildren(), function(go) {
	 go.y +=gameSetting.pisoSpeed;
	 if (go.y > 500){
	 	go.y = -100;
	 	gameSetting.score +=1;
	 		if (gameSetting.score > 5 && gameSetting.score < 20){
		 		go.setScale(1);
		 		gameSetting.pisoSpeed = 2;
	 		}else if (gameSetting.score > 20 ){
		 		go.setScale(0.5);
	 		}
	 	go.x = Phaser.Math.Between(20, config.width - 20);
	  }
})
}

	if(Phaser.Input.Keyboard.JustDown(this.spacebar) && gameSetting.playerJump == 1 && this.player.body.touching.down){
			if(this.piso){
				this.piso.destroy();
			}
		gameSetting.playerJump = 2;
		gameSetting.spaceMoved = 2;
		this.player.setVelocityY(-350);
		
	}
	if (this.player.y > 500){
		this.scene.restart();
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
