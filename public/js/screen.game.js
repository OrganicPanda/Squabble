// Game screen code
squabble.screens["game-screen"] = (function() { 
	
	// Easy access
	var game = squabble.game;
	var dom = squabble.dom;
	var id = "game-screen";
	var firstRun = true;
	
	// First load setup
	function setup() {
	
		// Wire up the buttons
		dom.bind("#game-go-menu", "click", function() {
		
			// Show the menu screen
			squabble.game.showScreen("menu-screen");
		
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