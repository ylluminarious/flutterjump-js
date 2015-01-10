define(function () {
    var preload = function (game) {
        game.load.image("background", "sprites/game_world/background.png");
        game.load.image("fullscreen", "sprites/fullscreen_icons/go_fullscreen.png");
        game.load.image("unfullscreen", "sprites/fullscreen_icons/un_fullscreen.png");
        game.load.image("obstacle", "sprites/game_world/Rectangle.png");
        game.load.image("ground", "sprites/game_world/ground.png");
        
        game.load.image("up arrow","sprites/mobile_buttons/up_arrow.png");
        game.load.image("right arrow", "sprites/mobile_buttons/right_arrow.png");
        game.load.image("left arrow", "sprites/mobile_buttons/left_arrow.png");
        
        game.load.image("angel bunny", "sprites/animals/angel_bunny.png");
        game.load.image("bird", "sprites/animals/bird.png");
        game.load.image("duckling", "sprites/animals/duckling.png");
        game.load.image("ferret", "sprites/animals/ferret.png");
        game.load.image("mr_beaverton_beaverteeth", "sprites/animals/mr_beaverton_beaverteeth.png");
        game.load.image("squirrel", "sprites/animals/squirrel.png");
        
        game.load.atlas("walk", "sprites/fluttershy/fluttershy_walking.png", "sprites/fluttershy/fluttershy_walking.json");
        game.load.atlas("fly", "sprites/fluttershy/fluttershy_flying.png", "sprites/fluttershy/fluttershy_flying.json");
        game.load.image("ouch", "sprites/fluttershy/fluttershy_ouch.png");
    };
    return preload;
});