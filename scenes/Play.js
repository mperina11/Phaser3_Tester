class Play extends Phaser.Scene {
    constructor() {
        super("playscene");
    }
        
    preload () {
        this.load.image('block', 'assets/block.png');
        this.load.image('platform', 'assets/platform.png');
    }

    create () {
        // create block
        this.block = this.matter.add.image(400, 100, 'block');        

        // set attributes
        this.block.setFriction(0.05);
        this.block.setFrictionAir(0.0005);
        this.block.setBounce(0.6);

        // create platforms
        this.ground = this.matter.add.image(400, 550, 'platform', null, { restitution: 0.4, isStatic: true });
        this.ground2 = this.matter.add.image(50, 350, 'platform', null, { restitution: 0.4, isStatic: true });
        this.ground3 = this.matter.add.image(800, 250, 'platform', null, { restitution: 0.4, isStatic: true });

        // Key input
        this.keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        this.keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        this.keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);  
    }

    update () {
        // check if key pressed
        if(this.keyLEFT.isDown) {
            this.block.setVelocityX(-4); // move negative x-axis
        }
        if(this.keyRIGHT.isDown) {
            this.block.setVelocityX(4); // move positive x-axis
        }
        if(this.keyUP.isDown) {
            this.block.setVelocity(0, -10); // move up y-axis
        }

        // console.log("Block x cor:", this.block.x);
        // console.log("Block y cor:", this.block.y);
        // reset block if it fell off
        // y-axis: -35 to 635
        // x-axis: -35 to 800
        if (this.block.x <= -35 || this.block.x >= 800 || this.block.y <= -35 || this.block.y >= 635 ) {
            // put block at start again
            this.block.x = 400;
            this.block.y = 100;
        }
    }


}