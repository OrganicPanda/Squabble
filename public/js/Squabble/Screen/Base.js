// Ensure namespace
var Squabble = Squabble || {};
Squabble.Screen = Squabble.Screen || {};

// Squabble Base Screen Class. Extend to create a screen
Squabble.Screen.Base = function(game) { 
	
	// Store our game controller
	this.game = game;
	
};

// Show this screen
Squabble.Screen.Base.prototype.open = function() {
	
	console.log('Opening Screen: ', this);
	
};

// Hide this screen
Squabble.Screen.Base.prototype.close = function() {
	
	console.log('Closing Screen: ', this);
	
};