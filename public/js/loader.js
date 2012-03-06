// Set up the game namespace
var squabble = {
	screens : {},
	settings : {
		rows : 15,
		columns : 15
	},
	controls : {
		KEY_UP : "moveUp",
		KEY_DOWN : "moveDown",
		KEY_LEFT : "moveLeft",
		KEY_RIGHT : "moveRight",
		KEY_ENTER : "selectTile",
		KEY_SPACE : "selectTile",
		CLICK : "selectTile",
		TOUCH : "selectTile"
	}
};

// Start to load our game scripts when the page is finished doing it's thing
window.addEventListener("load", function() { 

	Modernizr.load([{ 

		// Dynamically load game scripts 
		load : [
			"js/lib/sizzle-github.js",
			"js/dom.js", 
			"js/board.js",
			"js/display.js",
			"js/input.js",
			"js/screen.game.js", 
			"js/screen.menu.js", 
			"js/screen.score.js",
			"js/screen.splash.js",   
			"js/game.js",
		], 
		
		// Once they're loaded
		complete : function() {
			
			// Show the start screen
			squabble.game.showScreen("splash-screen");
			
		}
	
	}]);
	
}, false);
