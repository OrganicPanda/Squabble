// Ensure namespace
var Squabble = Squabble || {};
Squabble.Screen = Squabble.Screen || {};

// Squabble Board Screen Class. Used to manage the Board Screen
Squabble.Screen.Board = function(game) { 
	
	// Construct super
	Squabble.Screen.Base.apply(this, arguments);
	
	// Wire up the buttons
	this.game.dom.bind(this.game.selector("#board-go-menu", this.element)[0], "click", function() {
		
		// Show the main menu
		this.game.switchScreen('menu');
	
	}, this);
	
};

// Extend the Base screen
Squabble.Screen.Board.prototype = new Squabble.Screen.Base;
