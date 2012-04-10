// Ensure namespace
var Squabble = Squabble || {};
Squabble.Screen = Squabble.Screen || {};

// Squabble Board Screen Class. Used to manage the Board Screen
Squabble.Screen.Board = function() { 
	
	// Store our game controller
	this.game = game;
	
	console.log('Constructing Board Screen');
	
};

// Show this screen
Squabble.Screen.Board.prototype.run = function() {
	
	console.log('Running Board Screen');
	
};