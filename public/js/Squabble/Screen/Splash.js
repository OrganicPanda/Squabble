// Ensure namespace
var Squabble = Squabble || {};
Squabble.Screen = Squabble.Screen || {};

// Squabble Splash Screen Class. Used to manage the Splash Screen
Squabble.Screen.Splash = function(game) { 
	
	// Construct super
	Squabble.Screen.Base.apply(this, arguments);
	
	// Wire up the buttons
	/*Squabble.Dom.bind("#splash-go-menu", "click", function() {
		
		// Show the main menu
		squabble.game.showScreen("menu-screen");
		
	});	*/
	
};

// Extend the Base screen
Squabble.Screen.Splash.prototype = new Squabble.Screen.Base;
