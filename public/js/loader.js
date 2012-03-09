// Start to load our game scripts when the page is finished doing it's thing
window.addEventListener("load", function() { 

	Modernizr.load([{ 

		// Dynamically load game scripts 
		load : [
			"js/lib/sizzle-github.js",
			"js/Squabble/Util.js",
			"js/Squabble/Screen/Splash.js",
			"js/Squabble/Screen/Board.js",
			"js/Squabble/Game.js",
			/*"js/dom.js", 
			"js/board.js",
			"js/display.js",
			"js/input.js",
			"js/screen.game.js", 
			"js/screen.menu.js", 
			"js/screen.score.js",
			"js/screen.splash.js",   
			"js/game.js",*/
		], 
		
		// Once they're loaded
		complete : function() {
			
			// Show the start screen
			//squabble.game.showScreen("splash-screen");
			
			// define the Student class
			SuperSplash = function() {
				
				// Call the parent constructor
				Squabble.Screen.Splash.call(this);
				console.log('Constructing Super Splash Screen');
				
			}

			// Extend the original splash screen
			SuperSplash.prototype = new Squabble.Screen.Splash();
			SuperSplash.prototype.constructor = SuperSplash;
			
			// Show this screen
			SuperSplash.prototype.run = function() {
	
				console.log('Running Super Splash Screen');
	
			}
			
			// Show this screen
			SuperSplash.prototype.sprint = function() {
	
				console.log('Sprinting Super Splash Screen');
	
			}
			
			// Create the game
			var game = new Squabble.Game({}, {
				Screen : {
					Splash : SuperSplash
				}
			});
			
			// Start the game
			game.start();
			
			
		}
	
	}]);
	
}, false);
