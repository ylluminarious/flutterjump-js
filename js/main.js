/*

---------------------------------------------------------------------- TO-DO LIST ----------------------------------------------------------------------

• (PARTIALLY FIXED; WILL NEED TO GO BACK AND IMPLEMENT A BETTER SOLUTION EVENTUALLY) 
  Figure out how to fix the bug that makes fluttershy move through obstacles when she changes size
• (GOING TO HAVE TO POST A QUESTION ABOUT WHY THE TEXT OF THE SCORE WON'T UPDATE)
  Implement scoring with local storage
• Change the running animation of fluttershy to her walking animation
• Perhaps try to optimize mobile controls a bit more?
• Mobile fullscreen
• Get textures for the obstacles
• Implement game modes/states
• Sounds

---------------------------------------------------------------------------------------------------------------------------------------------------------

*/

require(["game_states/preload", "game_states/create", "game_states/update", "global_constants"], function (preload, create, update, globalConstants) {
    // New Phaser game
    var game = new Phaser.Game(globalConstants.GAME_WIDTH, globalConstants.GAME_HEIGHT, Phaser.AUTO, "game", { preload: preload, create: create, update: update });
});