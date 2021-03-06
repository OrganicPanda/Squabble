// Ensure namespace
var Squabble = Squabble || {};
Squabble.Screen = Squabble.Screen || {};

// Squabble Score Screen Class. Used to manage the Score Screen
Squabble.Screen.Score = function(game) {
	
	// Construct super
	this.super = Squabble.Screen.Base;
	this.super.apply(this, arguments);	
	
	// Wire up the buttons
	this.game.dom.bind(this.game.selector("#score-go-menu", this.element)[0], "click", function() {
		
		// Show the score screen
		this.game.switchScreen('menu');
	
	}, this);
	
};

// Extend the Base screen
Squabble.Screen.Score.prototype = new Squabble.Screen.Base;
