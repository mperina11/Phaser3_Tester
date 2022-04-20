class Play extends Phaser.scene {
    constructor() {
        super("playscene");
    }

preload ()
{
    this.load.image('block', 'assets/sprites/block.png');
    this.load.image('platform', 'assets/sprites/platform.png');
}

create ()
{
    var block = this.matter.add.image(400, 100, 'block');

    block.setFriction(0.05);
    block.setFrictionAir(0.0005);
    block.setBounce(0.9);

    var ground = this.matter.add.image(400, 550, 'platform', null, { restitution: 0.4, isStatic: true });

    this.input.on('pointerdown', function (pointer) {

        if (pointer.y > 300)
        {
            block.setVelocity(0, -10);
        }
        else if (pointer.x < 400)
        {
            block.setVelocityX(-8);
        }
        else
        {
            block.setVelocityX(8);
        }

    });
}
}