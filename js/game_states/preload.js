define(function () {
    var preload = function (game) {
        game.load.image("background", "assets/sprites/game_world/background.png");
        game.load.image("fullscreen", "assets/sprites/fullscreen_icons/go_fullscreen.png");
        game.load.image("unfullscreen", "assets/sprites/fullscreen_icons/un_fullscreen.png");
        game.load.image("top obstacle", "assets/sprites/game_world/cloud.png");
        game.load.image("bottom obstacle", "assets/sprites/game_world/tree.png")
        game.load.image("ground", "assets/sprites/game_world/ground.png");
        
        game.load.image("up arrow","assets/sprites/mobile_buttons/up_arrow.png");
        game.load.image("right arrow", "assets/sprites/mobile_buttons/right_arrow.png");
        game.load.image("left arrow", "assets/sprites/mobile_buttons/left_arrow.png");
        
        game.load.image("angel bunny", "assets/sprites/animals/angel_bunny.png");
        game.load.image("bird", "assets/sprites/animals/bird.png");
        game.load.image("duckling", "assets/sprites/animals/duckling.png");
        game.load.image("ferret", "assets/sprites/animals/ferret.png");
        game.load.image("mr_beaverton_beaverteeth", "assets/sprites/animals/mr_beaverton_beaverteeth.png");
        game.load.image("squirrel", "assets/sprites/animals/squirrel.png");
        
        game.load.atlas("walk", "assets/sprites/fluttershy/fluttershy_walking.png", "assets/sprites/fluttershy/fluttershy_walking.json");
        game.load.atlas("fly", "assets/sprites/fluttershy/fluttershy_flying.png", "assets/sprites/fluttershy/fluttershy_flying.json");
        game.load.image("ouch", "assets/sprites/fluttershy/fluttershy_ouch.png");
    };
    return preload;
});