var loadState = {

  preload: function () {

    // Gameplay stuff
    game.load.image('loading_bg', 'assets/images/loading_bg.jpg');
    game.load.image('cursor', 'assets/images/cursor.png');
    game.load.image('boxSelector', 'assets/images/boxSelector.png');
    game.load.spritesheet('hp_bar', 'assets/images/hp_bar.png', 224, 32);
    game.load.spritesheet('warning', 'assets/images/warning.png', 32, 32);

    // Tilemaps
    game.load.image('tileset', 'assets/maps/tileset.png');
    game.load.tilemap('map', 'assets/maps/tilemap.json', null, Phaser.Tilemap.TILED_JSON);
    // game.load.tilemap('map', 'assets/maps/tilemap_Background.csv');
    // game.load.tilemap('objectsMap', 'assets/maps/tilemap_Objects.csv');
    // game.load.tilemap('otherMap', 'assets/maps/tilemap_Other.csv');
    // game.load.tilemap('map', 'assets/maps/tilemap.csv');

    // Pipes
    game.load.spritesheet('pipev', 'assets/images/pipev.png', 32, 32);
    game.load.spritesheet('pipeh', 'assets/images/pipeh.png', 32, 32);
    game.load.spritesheet('pipe1', 'assets/images/pipe1.png', 32, 32);
    game.load.spritesheet('pipe2', 'assets/images/pipe2.png', 32, 32);
    game.load.spritesheet('pipe3', 'assets/images/pipe3.png', 32, 32);
    game.load.spritesheet('pipe4', 'assets/images/pipe4.png', 32, 32);

    // Obstacles
    game.load.spritesheet('sprinkler', 'assets/images/sprinkler.png', 32, 32);

    // In-Game Menu Stuff
    this.load.image('borderWindow', 'assets/images/borderWindow.png');
    this.load.image('obs_screen_sprink', 'assets/images/Obs1_Sprink.png');
    this.load.image('continueButton', 'assets/images/continueButton.jpg');
    this.load.image('darkFilter', 'assets/images/darkFilter.png');
    this.load.image('whiteFilter', 'assets/images/whiteFilter.png');
    this.load.image('pause', 'assets/images/pause.png');
    this.load.image('restart', 'assets/images/restart.png');
    this.load.image('menuButton', 'assets/images/menu.png');
    this.load.image('winButton', 'assets/images/win.png');
    this.load.image('loseButton', 'assets/images/lose.png');
  },
  create() {

    // Loads a loading screen (but right now loads too fast to show)
    game.add.sprite(0, 0, 'loading_bg');

    // Begins play state
    game.state.start('play');
  }
};
