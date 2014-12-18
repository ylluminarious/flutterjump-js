define(["global_variables", "global_constants"], function (globalVariables, globalConstants) {
    var globalMethods = {
        // Method that gets called to make fluttershy jump
        jump: function () {
            // `isJuming` check is set to true while fluttershy is in the air. Also set her to go up when the jump method is called.
            globalVariables.fluttershy.isJumping = true;
            globalVariables.fluttershy.body.velocity.y = globalConstants.JUMP_VELOCITY;
            
            // Load the flying texture when she is jumping / flying through the air
            globalVariables.fluttershy.loadTexture("fly");
            globalVariables.fluttershy.animations.add("fly", globalConstants.FLYING_FRAMES, globalConstants.FRAME_RATE, globalConstants.LOOP);
            globalVariables.fluttershy.body.setSize(globalConstants.FLUTTERSHY_FLYING_WIDTH, globalConstants.FLUTTERSHY_FLYING_HEIGHT);
            globalVariables.fluttershy.animations.play("fly");
        }
    };
    return globalMethods;
});