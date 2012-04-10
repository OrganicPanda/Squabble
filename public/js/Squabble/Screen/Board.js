// Ensure namespace
var Squabble = Squabble || {};
Squabble.Screen = Squabble.Screen || {};

// Squabble Board Screen Class. Used to manage the Board Screen
Squabble.Screen.Board = function(game) { 
	
	// Construct super
	Squabble.Screen.Base.apply(this, arguments);
	
	// Store our game controller
	this.game = game;
	
	console.log('Constructing Board Screen');
	
};

// Extend the Base screen
Squabble.Screen.Board.prototype = new Squabble.Screen.Base;