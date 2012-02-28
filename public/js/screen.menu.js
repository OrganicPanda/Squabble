// Menu screen code
squabble.screens["menu-screen"] = (function() { 
	
	// Easy access
	var game = squabble.game;
	var dom = squabble.dom;
	var id = "menu-screen";
	var firstRun = true;
	
	// First load setup
	function setup() {
	
		// Wire up the buttons
		dom.bind("#menu-go-game", "click", function() {
		
			// Show the game screen
			squabble.game.showScreen("game-screen");
		
		});
		dom.bind("#menu-go-score", "click", function() {
		
			// Show the high score screen
			squabble.game.showScreen("score-screen");
		
		});
	
	}
	
	// Show this screen
	function run() {
	
		// Run setup on first run
		if (firstRun) {
			setup();
			firstRun = false;
		}
	
	}
	
	// Expose public methods
	return { 
		run : run
	}; 
	
})();
