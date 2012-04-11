// Ensure namespace
var Squabble = Squabble || {};
Squabble.Screen = Squabble.Screen || {};

// Squabble Base Screen Class. Extend to create a screen
Squabble.Screen.Base = function(game, screenElement) { 
	
	// Store our game controller
	this.game = game;
	
	// Store the DOM element that represents this screen
	this.element = screenElement;
	
};

// Show this screen
Squabble.Screen.Base.prototype.open = function() {
	
	this.game.dom.addClass(this.element, 'active-screen');
	
};

// Hide this screen
Squabble.Screen.Base.prototype.close = function() {
	
	this.game.dom.removeClass(this.element, 'active-screen');
	
};
