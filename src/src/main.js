window.addEventListener('load', function ()
{
	var game = new Phaser.Game({
		width: 1280,
		height: 720,
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

	}

	create() {

	}
}