// Ensure namespace
var Squabble = Squabble || {};
Squabble.Screen = Squabble.Screen || {};

// Squabble Menu Screen Class. Used to manage the Menu Screen
Squabble.Screen.Menu = function(game) {
	
	// Store our game controller
	this.game = game;
	
	/* Wire up the buttons
	dom.bind("#menu-go-game", "click", function() {
	
		// Show the game screen
		squabble.game.showScreen("game-screen");
	
	});
	dom.bind("#menu-go-score", "click", function() {
	
		// Show the high score screen
		squabble.game.showScreen("score-screen");
	
	}); */
	
};

// Show this screen
Squabble.Screen.Menu.prototype.run = function() {
	
	console.log('Running Menu Screen');
	
};
