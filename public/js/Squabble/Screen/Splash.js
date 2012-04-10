// Ensure namespace
var Squabble = Squabble || {};
Squabble.Screen = Squabble.Screen || {};

// Squabble Splash Screen Class. Used to manage the Splash Screen
Squabble.Screen.Splash = function(game) { 
	
	// Store our game controller
	this.game = game;
	
	console.log('Constructing Splash Screen');
	
	// Wire up the buttons
	/*Squabble.Dom.bind("#splash-go-menu", "click", function() {
		
		// Show the main menu
		squabble.game.showScreen("menu-screen");
		
	});	*/
	
};

// Show this screen
Squabble.Screen.Splash.prototype.run = function() {
	
	console.log('Running Splash Screen');
	
};
