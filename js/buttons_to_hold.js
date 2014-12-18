define(function () {
    // Method that gets called for the left and right buttons (the buttons that get held down)
    var holdingButton = function (button) {
        // When the button is getting pressed, the button is down (used for moving left and right in update.js)
        button.events.onInputDown.add(function () {
            button.isDown = true;
        });
        // When the button is released, the button is up (used for moving left and right in update.js)
        button.events.onInputUp.add(function () {
            button.isDown = false;
        });
    };
    return holdingButton;
});