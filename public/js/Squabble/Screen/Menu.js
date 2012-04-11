// Ensure namespace
var Squabble = Squabble || {};
Squabble.Screen = Squabble.Screen || {};

// Squabble Menu Screen Class. Used to manage the Menu Screen
Squabble.Screen.Menu = function(game) {
	
	// Construct super
	Squabble.Screen.Base.apply(this, arguments);
	
	// Wire up the buttons
	this.game.dom.bind(this.game.selector("#menu-go-board", this.element)[0], "click", function() {
		
		// Show the board screen
		this.game.switchScreen('board');
	
	}, this);
	this.game.dom.bind(this.game.selector("#menu-go-score", this.element)[0], "click", function() {
		
		// Show the score screen
		this.game.switchScreen('score');
	
	}, this);
	
};

// Extend the Base screen
Squabble.Screen.Menu.prototype = new Squabble.Screen.Base;
