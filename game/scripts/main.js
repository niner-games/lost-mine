window.addEventListener('load', function ()
{
	var game = new Phaser.Game({
		width: 3840,
		height: 1858,
		type: Phaser.AUTO,
		scale: {
			mode: Phaser.Scale.RESIZE,
			autoCenter: Phaser.Scale.CENTER_BOTH
		}
	});

	game.scene.add("Boot", Boot, true);
});

class Boot extends Phaser.Scene
{
	preload() {
		this.load.image('logo', 'images/boot/logo.png');
	}

	create() {
		const logo = this.add.image(0, 0, 'logo').setOrigin(0.5, 0.5);

		logo.setPosition(this.scale.width / 2, this.scale.height / 2);

		const targetSize = 1666;
		const screenW = this.scale.width;
		const screenH = this.scale.height;

		if (screenW < targetSize || screenH < targetSize) {
			const scaleFactor = Math.min(screenW / targetSize, screenH / targetSize);
			logo.setScale(scaleFactor);
		}

		this.scale.on('resize', (gameSize) => {
			logo.setPosition(gameSize.width / 2, gameSize.height / 2);

			if (gameSize.width < targetSize || gameSize.height < targetSize) {
				const scaleFactor = Math.min(gameSize.width / targetSize, gameSize.height / targetSize);
				logo.setScale(scaleFactor);
			} else {
				logo.setScale(1);
			}
		});
	}
}
