// Ensure namespace
var Squabble = Squabble || {};
Squabble.Screen = Squabble.Screen || {};

// Squabble Score Screen Class. Used to manage the Score Screen
Squabble.Screen.Score = function(game) {
	
	// Construct super
	Squabble.Screen.Base.apply(this, arguments);	
	
	/* Wire up the buttons
	dom.bind("#score-go-menu", "click", function() {
		
		// Show the menu screen
		squabble.game.showScreen("menu-screen");
	
	}); */
	
};

// Extend the Base screen
Squabble.Screen.Score.prototype = new Squabble.Screen.Base;