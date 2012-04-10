// Start to load our game scripts when the page is finished doing it's thing
window.addEventListener("load", function() { 

	Modernizr.load([{ 

		// Dynamically load game scripts 
		load : [
			"js/lib/sizzle-github.js",
			"js/Squabble/Util.js",
			"js/Squabble/Dom.js",
			"js/Squabble/Screen/Splash.js",
			"js/Squabble/Screen/Menu.js",
			"js/Squabble/Screen/Score.js",
			"js/Squabble/Screen/Board.js",
			"js/Squabble/Input.js",
			"js/Squabble/Game.js"
		], 
		
		// Once they're loaded
		complete : function() {
			
			// Create the game
			var game = new Squabble.Game();
			
			// Start the game
			game.start();
			
		}
	
	}]);
	
}, false);
