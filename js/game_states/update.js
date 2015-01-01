define(["global_variables", "global_constants", "global_methods"], function (globalVariables, globalConstants, globalMethods) {
    var update = function (game) {
        // Add collision between fluttershy and the ground
        game.physics.arcade.collide(globalVariables.fluttershy, globalVariables.ground);
        // Add collide between fluttershy and the obstacles
        game.physics.arcade.collide(globalVariables.fluttershy, globalVariables.obstacles, gameOver);
        // Do an overlap check between fluttershy and the obstacles for when she passes through the obstacles
        game.physics.arcade.overlap(globalVariables.fluttershy, globalVariables.obstacles, overlapCheck);
        // Add collision between fluttershy and the animal collectibles
        game.physics.arcade.collide(globalVariables.fluttershy, globalVariables.animalCollectible, collectAnimal);
        
        // Jump when the spacebar is pressed
        globalVariables.spacebar.onDown.add(globalMethods.jump);
        
        // If no input is being received, stop moving
        stopMoving();
        
        // Controls to move left and right
        if (globalVariables.rightKey.isDown || globalVariables.d.isDown || globalVariables.rightButton.isDown) {
            moveRight();
        }
        if (globalVariables.leftKey.isDown || globalVariables.a.isDown || globalVariables.leftButton.isDown) {
            moveLeft();
        }
        // Checks if fluttershy is touching the ground while she is flying through the air; if so, then load the gallop texture and set the set her size to that texture
        if (globalVariables.fluttershy.isJumping && globalVariables.fluttershy.body.touching.down) {
            globalVariables.fluttershy.isJumping = false;
            globalVariables.fluttershy.loadTexture("gallop");
            globalVariables.fluttershy.body.setSize(globalConstants.FLUTTERSHY_RUNNING_WIDTH, globalConstants.FLUTTERSHY_RUNNING_HEIGHT);
            globalVariables.fluttershy.animations.add("gallop", globalConstants.RUNNING_FRAMES, globalConstants.FRAME_RATE, globalConstants.LOOP);
            globalVariables.fluttershy.animations.play("gallop");
        }
        
        // Method that checks if fluttershy is overlapping an obstacle (this only happens when the bug occurs while she is changing size)
        function overlapCheck () {
            // If she passes over the right side of the bottom obstacle...
            if (globalVariables.fluttershy.x > (globalVariables.bottomObstacle.x - globalVariables.bottomObstacle.width)) {
                // ... set her to go backwards
                globalVariables.fluttershy.x = (globalVariables.bottomObstacle.x - globalVariables.bottomObstacle.width * 4);
            }
        }
        
        // Method to move fluttershy to the left
        function moveLeft () {
            globalVariables.fluttershy.body.velocity.x = globalConstants.LEFT_VELOCITY;
        }
        
        // Method to move fluttershy to the right
        function moveRight () {
            globalVariables.fluttershy.body.velocity.x = globalConstants.RIGHT_VELOCITY;
        }
        
        // Method used to stop moving fluttershy
        function stopMoving () {
            globalVariables.fluttershy.body.velocity.x = globalConstants.STOPPED;
        }
        
        // Method that is used to collect the animal collectibles
        function collectAnimal () {
            globalVariables.animalCollectible.kill();
            globalVariables.score += 1;
            globalVariables.scoreText.text = globalVariables.score;
        }
        
        // Method called when fluttershy hits an obstacle
        function gameOver () {
            globalVariables.gameOver = true;
            // Stop the timer and stop everything from moving
            globalVariables.obstacleGenerator.timer.stop();
            globalVariables.ground.stopScroll();
            globalVariables.obstacles.setAll("body.velocity.x", globalConstants.STOPPED);
            globalVariables.animalCollectible.body.velocity.x = globalConstants.STOPPED;
            globalVariables.fluttershy.loadTexture("ouch");
            // Disable input from the keys
            game.input.keyboard.removeKey(Phaser.Keyboard.SPACEBAR);
            game.input.keyboard.removeKey(Phaser.Keyboard.F);
            game.input.keyboard.removeKey(Phaser.Keyboard.LEFT);
            game.input.keyboard.removeKey(Phaser.Keyboard.RIGHT);
            game.input.keyboard.removeKey(Phaser.Keyboard.A);
            game.input.keyboard.removeKey(Phaser.Keyboard.D);
        }
    };
    return update;
});