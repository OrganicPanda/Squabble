// Set up the game namespace
var squabble = {
	screens : {}
};

// Start load our game scripts when the page is finished doing it's thing
window.addEventListener("load", function() { 

	Modernizr.load([{ 

		// Dynamically load game scripts 
		load : ["js/lib/sizzle-github.js", "js/dom.js", "js/game.js"], 
		
		// Once they're loaded
		complete : function() {
			
			// Show the start screen
			squabble.game.showScreen("splash-screen");
			
		}
	
	}]);
	
}, false);
