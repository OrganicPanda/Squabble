// Some DOM helper functions
squabble.screens["splash-screen"] = (function() { 
	
	// Easy access
	var game = squabble.game;
	var dom = squabble.dom;
	var id = "splash-screen";
	var firstRun = true;
	
	// First load setup
	function setup() {
	
		// Wire up the buttons
		dom.bind("#splash-go-menu", "click", function() {
		
			// Show the main menu
			squabble.game.showScreen("splash-screen");
		
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
