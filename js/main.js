/*

---------------------------------------------------------------------- TO-DO LIST ----------------------------------------------------------------------

• (PARTIALLY FIXED; WILL NEED TO GO BACK AND IMPLEMENT A BETTER SOLUTION EVENTUALLY) 
  Figure out how to fix the bug that makes fluttershy move through obstacles when she changes size
• Implement local storage for high scores
• Change the running animation of fluttershy to her walking animation
• Perhaps try to optimize mobile controls a bit more?
• Mobile fullscreen
• Get textures for the obstacles
• Implement game modes/states
• Sounds
• Parallax

---------------------------------------------------------------------------------------------------------------------------------------------------------

*/

require(["game_states/preload", "game_states/create", "game_states/update", "global_constants"], function (preload, create, update, globalConstants) {
    // New Phaser game
    var game = new Phaser.Game(globalConstants.GAME_WIDTH, globalConstants.GAME_HEIGHT, Phaser.CANVAS, "game", { preload: preload, create: create, update: update });
});