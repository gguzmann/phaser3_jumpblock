class Scene2 extends Phaser.Scene {
	constructor(){
		super("GamePlay");
	}

	create(){
		this.add.text(20, 20, "Play Game", {font: "25px Arial", fill: "yellow"});

  const map = this.make.tilemap({ key: "map" });
  const tileset = map.addTilesetImage("tiled2", "tiles");
  const test1 = map.createStaticLayer("test", tileset, 0, 0);
  const piso = map.createStaticLayer("piso", tileset, 0, 0);
  const enemy = map.createStaticLayer("enemy", tileset, 0, 0);
  const wallright = map.createStaticLayer("wallright", tileset, 0, 0);
  const wallleft = map.createStaticLayer("wallleft", tileset, 0, 0);

	var savex = 130;
	var savey = 110;
	var dead = false;
	var textdead = this.add.text(0, 0, 'DEAD', {fontsize: 50});
	textdead.setVisible(false);

	const spawnPlayer = map.findObject("spawn", obj => obj.name === "spawn player");
	this.player = this.physics.add.sprite(spawnPlayer.x, spawnPlayer.y, "block1").setScale(0.5);
	this.player.setVelocityX(200);
	this.player.setGravityY(1400);

	const spawnRock = map.findObject("spawn", obj => obj.name === "spawn save");
	this.save = this.physics.add.sprite(spawnRock.x, spawnRock.y, "block2").setScale(2);
	this.save.visible = false;


		this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
		piso.setCollisionByProperty({collides: true});
		test1.setCollisionByProperty({collides: true});
		enemy.setCollisionByProperty({collides: true});
		wallright.setCollisionByProperty({collides: true});
		wallleft.setCollisionByProperty({collides: true});
		this.physics.add.collider(this.player, piso);
		this.physics.add.collider(this.player, test1, hitBomb, null, this);
		this.physics.add.collider(this.player, enemy, hitBomb, null, this);
		this.physics.add.collider(this.player, wallright, changeDir, null, this);
		this.physics.add.collider(this.player, wallleft, changeDirb, null, this);
		this.physics.add.collider(this.player, this.save, saveGame, null, this);

		function saveGame (player, save){
        save.disableBody(true, true);
			savex = this.save.x;
			savey = this.save.y;
			var textsave = this.add.text(this.save.x, this.save.y, 'SAVE');

		}

		function hitBomb (player, enemy){
				this.player.setVelocityX(0);
				dead = true;
				textdead.x = this.player.x;
				textdead.y = this.player.y;
				textdead.setVisible(true);
   			}
   		function changeDir (player, wall){
			this.player.setVelocityX(-200);
			if (this.player.y > 800 && this.player.x < 1500){
		this.player.setVelocityY(-450);
	}
   			}
   		function changeDirb (player, wall){
			this.player.setVelocityX(200);
			if (this.player.y > 800 && this.player.x < 1500){
		this.player.setVelocityY(-450);
	}
   			}


	
	    this.cameras.main.setBounds(0, 0, 3000, 2000);
    	this.cameras.main.startFollow(this.player);
    	this.cameras.main.setZoom(2);

    	this.input.on('pointerdown', function (pointer) {
    	if (this.player.body.blocked.down && dead == false){
		this.player.setVelocityY(-450);
	}else if (dead == true){
			this.player.x = savex;
			this.player.y = savey;
				this.player.setVelocityX(200);
				dead = false;
				textdead.setVisible(false);
	}
 		}, this);
	}

		moveEnemy(ship, speed){
		ship.y -=speed;
	}

	update(){	
	
	if(Phaser.Input.Keyboard.JustDown(this.spacebar)){
		 var phaser2 = this.add.text(1000, 1000, 'PHASER').setFont('20px Arial').setColor('#ffff00').setAlign('center');
    phaser2.setOrigin(0.5);
    phaser2.visible = true;
   phaser2.x = this.player.x;
        phaser2.y = this.player.y;

        phaser2.setText('PHASER\nX: ' + phaser2.x + '\nY: ' + phaser2.y);
		this.player.setVelocityY(-450);
	}
	

}
}