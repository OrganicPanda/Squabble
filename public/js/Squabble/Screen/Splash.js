// Ensure namespace
var Squabble = Squabble || {};
Squabble.Screen = Squabble.Screen || {};

// Squabble Splash Screen Class. Used to manage the Splash Screen
Squabble.Screen.Splash = function(game) { 
	
	// Construct super
	this.super = Squabble.Screen.Base;
	this.super.apply(this, arguments);
	
	// Wire up the buttons
	this.game.dom.bind(this.game.selector("#splash-go-menu", this.element)[0], "click", function() {
		
		// Show the main menu
		this.game.switchScreen('menu');
	
	}, this);
	
};

// Extend the Base screen
Squabble.Screen.Splash.prototype = new Squabble.Screen.Base;
