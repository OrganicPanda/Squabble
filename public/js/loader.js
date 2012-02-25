var squabble = {};

window.addEventListener("load", function() { 

	Modernizr.load([{ 

		// Dynamically load game scripts 
		load : ["js/lib/sizzle-github.js", "js/dom.js", "js/game.js"], 
		
		complete : function() { 
			console.log("All files loaded!");
			
			//squabble.game.showScreen("splash-screen");
			squabble.game.showScreen("board-screen");
			
		}
	
	}]);
	
}, false);