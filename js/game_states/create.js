define(["global_variables", "global_constants", "buttons_to_hold", "global_methods"], function (globalVariables, globalConstants, holdingButton, globalMethods) {
    var create = function (game) {
        globalVariables.gameOver = false;
        
        // Add the background and scale it to fit the game
        globalVariables.background = game.add.image(globalConstants.ORIGIN, globalConstants.ORIGIN, "background");
        globalVariables.background.scale.setTo(globalConstants.BACKGROUND_SCALE_FACTOR, globalConstants.BACKGROUND_SCALE_FACTOR);
        
        // Add the score and the text for the score
        globalVariables.score = 0;
        globalVariables.scoreText = game.add.text(game.world.centerX, 100, globalVariables.score.toString(), {font: "30px Verdana"});
        
        // Add the fullscreen icon, scale it, enable input on it, and make fullscreen mode have an exact fit
        globalVariables.fullscreenIcon = game.add.sprite(globalConstants.FULLSCREEN_ICON_X_POS, globalConstants.FULLSCREEN_ICON_Y_POS, "fullscreen");
        globalVariables.fullscreenIcon.scale.setTo(globalConstants.FULLSCREEN_SCALE_FACTOR, globalConstants.FULLSCREEN_SCALE_FACTOR);
        globalVariables.fullscreenIcon.inputEnabled = true;
        globalVariables.fullscreenIcon.hasBeenPressed = false;
        globalVariables.fullscreenIcon.events.onInputDown.add(fullscreen, this);
        game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
        
        // Start the obstacle timer and add the obstacles group
        globalVariables.obstacleGenerator = game.time.events.loop(Phaser.Timer.SECOND * globalConstants.TIME_INTERVAL, generateObstacles, this);
        globalVariables.obstacleGenerator.timer.start();
        globalVariables.obstacles = game.add.group();
        globalVariables.obstacles.enableBody = true;
        
        // Create the ground tile-sprite and add physics stuff to it
        globalVariables.ground = game.add.tileSprite(globalConstants.ORIGIN, globalVariables.background.height, globalConstants.GROUND_WIDTH, globalConstants.GROUND_HEIGHT, "ground");
        globalVariables.ground.autoScroll(globalConstants.AUTO_SCROLL_SPEED_X, globalConstants.AUTO_SCROLL_SPEED_Y);
        game.physics.arcade.enable(globalVariables.ground);
        globalVariables.ground.body.immovable = true;
        
        // Create the fluttershy sprite and do some physics stuff on it, too
        globalVariables.fluttershy = game.add.sprite(globalConstants.FLUTTERSHY_X_POS, globalConstants.FLUTTERSHY_Y_POS, "walk");
        game.physics.arcade.enable(globalVariables.fluttershy);
        globalVariables.fluttershy.body.collideWorldBounds = true;
        globalVariables.fluttershy.body.gravity.y = globalConstants.GRAVITY;
        
        // Add the walk animation and play it
        globalVariables.fluttershy.animations.add("walk", globalConstants.WALKING_FRAMES, globalConstants.FRAME_RATE, globalConstants.LOOP);
        globalVariables.fluttershy.animations.play("walk");
        
        // Add the mobile buttons and add functionality for them
        globalVariables.upButton = game.add.button(globalConstants.UP_BUTTON_X_POS, globalConstants.UP_BUTTON_Y_POS, "up arrow", globalMethods.jump);
        globalVariables.upButton.scale.setTo(globalConstants.BUTTON_SCALE_FACTOR, globalConstants.BUTTON_SCALE_FACTOR);
        
        globalVariables.rightButton = game.add.button(globalConstants.RIGHT_BUTTON_X_POS, globalConstants.RIGHT_BUTTON_Y_POS, "right arrow");
        globalVariables.rightButton.scale.setTo(globalConstants.BUTTON_SCALE_FACTOR, globalConstants.BUTTON_SCALE_FACTOR);
        holdingButton(globalVariables.rightButton);
        
        globalVariables.leftButton = game.add.button(globalConstants.LEFT_BUTTON_X_POS, globalConstants.LEFT_BUTTON_Y_POS, "left arrow");
        globalVariables.leftButton.scale.setTo(globalConstants.BUTTON_SCALE_FACTOR, globalConstants.BUTTON_SCALE_FACTOR);
        holdingButton(globalVariables.leftButton);
        
        // Add the keys which will be used for input
        globalVariables.spacebar = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        globalVariables.f = game.input.keyboard.addKey(Phaser.Keyboard.F);
        globalVariables.leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        globalVariables.rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
        globalVariables.a = game.input.keyboard.addKey(Phaser.Keyboard.A);
        globalVariables.d = game.input.keyboard.addKey(Phaser.Keyboard.D);
        
        // Array of the animals' indexes so that a random animal is chosen for each new set of obstacles
        var animals = ["angel bunny", "bird", "duckling", "ferret", "mr_beaverton_beaverteeth", "squirrel"];
        
        // Method used to generate obstacles every interval of the obstacle timer
        function generateObstacles () {
            // Choose random-range integers for the obstacles' y values
            var topRandomRange = game.rnd.integerInRange(globalConstants.TOP_RANDOM_RANGE_MINIMUM, globalConstants.TOP_RANDOM_RANGE_MAXIMUM);
            var bottomRandomRange = game.rnd.integerInRange(globalConstants.BOTTOM_RANDOM_RANGE_MINIMUM, globalConstants.BOTTOM_RANDOM_RANGE_MAXIMUM);
            
            // Add the obstacles and enable physics on them
            globalVariables.topObstacle = globalVariables.obstacles.create(game.width, topRandomRange, "obstacle");
            globalVariables.bottomObstacle = globalVariables.obstacles.create(game.width, bottomRandomRange, "obstacle");
            globalVariables.obstacles.setAll("body.immovable", true);
            globalVariables.obstacles.setAll("body.velocity.x", globalConstants.LEFT_VELOCITY);
            
            // Animals' variables
            var animalsLocation = (globalVariables.bottomObstacle.y - globalVariables.topObstacle.y) / 2;
            var randomAnimal = Math.round(Math.random() * globalConstants.ANIMAL_INDEX);
            
            // Add an animal collectible with each new set of obstacles
            globalVariables.animalCollectible = game.add.sprite(game.width, animalsLocation, animals[randomAnimal]);
            globalVariables.animalCollectible.scale.setTo(globalConstants.ANIMAL_SCALE_FACTOR, globalConstants.ANIMAL_SCALE_FACTOR);
            game.physics.arcade.enable(globalVariables.animalCollectible);
            globalVariables.animalCollectible.body.velocity.x = globalConstants.LEFT_VELOCITY;
        }
        
        // Method that gets called when the fullscreen icon gets pressed
        function fullscreen () {
            globalVariables.fullscreenIcon.hasBeenPressed = true;
            if (game.scale.isFullScreen) {
                game.scale.stopFullScreen();
                globalVariables.fullscreenIcon.loadTexture("fullscreen");
            } else if (!game.scale.isFullScreen && globalVariables.fullscreenIcon.hasBeenPressed) {
                game.scale.startFullScreen();
                globalVariables.fullscreenIcon.loadTexture("unfullscreen");
            }
        }
    };
    return create;
});