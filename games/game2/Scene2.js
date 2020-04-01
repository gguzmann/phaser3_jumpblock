class Scene2 extends Phaser.Scene {
	constructor(){
		super("GamePlay");
	}
	create(){
		this.add.text(20, 20, "Play Game", {font: "25px Arial", fill: "yellow"});

		this.background = this.add.tileSprite(0, 0, config.width,config.height, "space"); 
		this.background.setOrigin(0,0);
		this.block1 = this.add.image(Phaser.Math.Between(20, config.width - 20),0, "block2");
		this.block2 = this.add.image(Phaser.Math.Between(20, config.width - 20),-50, "block3");
		this.block3 = this.add.image(Phaser.Math.Between(20, config.width - 20),0, "block4");


		this.player = this.physics.add.sprite(config.width/2 - 50, config.height - 50, "player");
		this.player.setCollideWorldBounds(true);

		this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
		this.cursorKeys = this.input.keyboard.createCursorKeys();   

		this.input.on('pointerdown', function (pointer) {
   				this.scene.start("bootGame");
 		}, this);
	}


		moveShip(ship, speed){
		ship.y +=speed;
		if (ship.y > config.height){
			this.resetShipPos(ship);
		}
	}

	resetShipPos(ship){
	ship.y = 0;
	var randomX = Phaser.Math.Between(20, config.width - 20);
	ship.x = randomX;
	}


	update(){

	this.movePlayer();

		this.moveShip(this.block1, 2);
		this.moveShip(this.block2, 4);
		this.moveShip(this.block3, 6);
		this.background.tilePositionY -= 1;

	if(Phaser.Input.Keyboard.JustDown(this.spacebar)){
		console.log("Fire!");
		this.shootFire();
		
	}
	}

shootFire(){
			var fire = new Fire(this);
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