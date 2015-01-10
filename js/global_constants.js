define(function () {
    var globalConstants = {
        // Constants pertaining to the game world
        GAME_WIDTH: 800,
        GAME_HEIGHT: 600,
        ORIGIN: 0,
        
        // Scaling constants
        BACKGROUND_SCALE_FACTOR: 1,
        ANIMAL_SCALE_FACTOR: 0.05,
        
        // Fullscreen icon constants
        FULLSCREEN_ICON_X_POS: 800 - 70,
        FULLSCREEN_ICON_Y_POS: 10,
        FULLSCREEN_SCALE_FACTOR: 0.5,
        
        // Mobile buttons' constants
        BUTTON_SCALE_FACTOR: 0.7,
        UP_BUTTON_X_POS: 355.2,
        UP_BUTTON_Y_POS: 507,
        RIGHT_BUTTON_X_POS: 600,
        RIGHT_BUTTON_Y_POS: 507,
        LEFT_BUTTON_X_POS: 110.4,
        LEFT_BUTTON_Y_POS: 507,
        
        // Constants pertaining to the fluttershy sprite
        FLUTTERSHY_X_POS: 270,
        FLUTTERSHY_Y_POS: 420,
        FLUTTERSHY_WALKING_WIDTH: 102,
        FLUTTERSHY_WALKING_HEIGHT: 86,
        FLUTTERSHY_FLYING_WIDTH: 104,
        FLUTTERSHY_FLYING_HEIGHT: 94,
        FLUTTERSHY_OUCH_WIDTH: 102,
        FLUTTERSHY_OUCH_HEIGHT: 68,
        GRAVITY: 300,
        
        // Velocity constants
        JUMP_VELOCITY: -300,
        LEFT_VELOCITY: -300,
        RIGHT_VELOCITY: 300,
        
        // Constants pertaining to the animation of the fluttershy sprite
        WALKING_FRAMES: [ "frame_000.png", "frame_001.png", "frame_002.png", "frame_003.png", "frame_004.png", "frame_005.png", "frame_006.png", "frame_007.png", "frame_008.png", "frame_009.png", "frame_010.png", "frame_011.png", "frame_012.png", "frame_013.png", "frame_014.png", "frame_015.png" ],
        FLYING_FRAMES: [ "frame_000.png", "frame_001.png", "frame_002.png", "frame_003.png", "frame_004.png", "frame_005.png", "frame_006.png", "frame_007.png", "frame_008.png", "frame_009.png", "frame_010.png", "frame_011.png", "frame_012.png", "frame_013.png", "frame_014.png", "frame_015.png" ],
        FRAME_RATE: 20,
        LOOP: true,
        
        // Constants pertaining to the random-range positions of the obstacles
        TOP_RANDOM_RANGE_MINIMUM: -150,
        TOP_RANDOM_RANGE_MAXIMUM: -100,
        BOTTOM_RANDOM_RANGE_MINIMUM: 600 - 200,
        BOTTOM_RANDOM_RANGE_MAXIMUM: 600 - 275,
        
        // Random animal index
        ANIMAL_INDEX: 5,
        
        // Time interval between each new obstacle
        TIME_INTERVAL: 3.5,
        
        // Ground constants
        GROUND_WIDTH: 800,
        GROUND_HEIGHT: 94,
        AUTO_SCROLL_SPEED_X: -300,
        AUTO_SCROLL_SPEED_Y: 0
    };
    return globalConstants;
});