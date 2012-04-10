// Ensure namespace
var Squabble = Squabble || {};
Squabble.Screen = Squabble.Screen || {};

// Squabble Score Screen Class. Used to manage the Score Screen
Squabble.Screen.Score = function(game) {
	
	// Store our game controller
	this.game = game;	
	
	/* Wire up the buttons
	dom.bind("#score-go-menu", "click", function() {
		
		// Show the menu screen
		squabble.game.showScreen("menu-screen");
	
	}); */
	
};

// Show this screen
Squabble.Screen.Score.prototype.run = function() {
	
	console.log('Running Score Screen');
	
};