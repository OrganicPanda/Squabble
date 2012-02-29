// Set up the game namespace
var squabble = {
	screens : {},
	settings : {
		rows : 15,
		columns : 15
	}
};

// Start load our game scripts when the page is finished doing it's thing
window.addEventListener("load", function() { 

	Modernizr.load([{ 

		// Dynamically load game scripts 
		load : [
			"js/lib/sizzle-github.js",
			"js/dom.js", 
			"js/screen.game.js", 
			"js/screen.menu.js", 
			"js/screen.score.js",
			"js/screen.splash.js",   
			"js/game.js",
			"js/board.js"
		], 
		
		// Once they're loaded
		complete : function() {
			
			// Show the start screen
			squabble.game.showScreen("splash-screen");
			
		}
	
	}]);
	
}, false);
