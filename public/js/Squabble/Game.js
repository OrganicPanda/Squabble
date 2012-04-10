// Ensure namespace
var Squabble = Squabble || {};

// Squabble Game Class. Used to start and manage a game of Squabble
Squabble.Game = function(settings) {
	
	// Apply args
	this.settings = settings || {};
	
	// Supply any missing settings from our defaults
	Squabble.Util.mergeObjects(this.settings, {
		rows : 15,
		columns : 15,
		controls : {}
	});
	
	// Construct our API
	this.selector = this.settings.selector || Sizzle;
	this.util = Squabble.Util;
	this.dom = Squabble.Dom;
	this.screen = {
		splash : new Squabble.Screen.Splash(this),
		menu : new Squabble.Screen.Menu(this),
		score : new Squabble.Screen.Score(this),
		board : new Squabble.Screen.Board(this)
	};
	this.currentScreenId = null;
	
};

// Start the game
Squabble.Game.prototype.start = function() {
	
	// Start on the Splash screen
	this.switchScreen('splash');

};

// Switch to a game screen
Squabble.Game.prototype.switchScreen = function(screenId) {
	
	// Close the currently opened screen
	if (this.currentScreenId) {
		this.screen[this.currentScreenId].close();
	}
	
	// Open the new screen
	this.screen[screenId].open();

};