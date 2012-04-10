// Ensure namespace
var Squabble = Squabble || {};
Squabble.Screen = Squabble.Screen || {};

// Squabble Menu Screen Class. Used to manage the Menu Screen
Squabble.Screen.Menu = function(game) {
	
	// Construct super
	Squabble.Screen.Base.apply(this, arguments);
	
	/* Wire up the buttons
	dom.bind("#menu-go-game", "click", function() {
	
		// Show the game screen
		squabble.game.showScreen("game-screen");
	
	});
	dom.bind("#menu-go-score", "click", function() {
	
		// Show the high score screen
		squabble.game.showScreen("score-screen");
	
	}); */
	
};

// Extend the Base screen
Squabble.Screen.Menu.prototype = new Squabble.Screen.Base;
