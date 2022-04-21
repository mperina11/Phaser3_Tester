let config = {
    type: Phaser.CANVAS,
    width: 800,
    height: 600,
    backgroundColor: '#1b1464',
    parent: 'phaser-example',
    physics: {
        default: 'matter',
        matter: {
            debug: true,
            showVelocity: true, // velocity not showing currently
            // velocityColor: #de42d6,
            showCollisions: true
        }
    },
    scene: [Play]
};

let game = new Phaser.Game(config);