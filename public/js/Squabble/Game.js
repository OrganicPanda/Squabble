// Ensure namespace
var Squabble = Squabble || {};

// Squabble Game Class. Used to start and manage a game of Squabble
Squabble.Game = function(gameElementSelector, settings) {
	
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
	this.element = this.selector(gameElementSelector)[0];
	this.util = Squabble.Util;
	this.dom = Squabble.Dom;
	this.screen = {
		splash : new Squabble.Screen.Splash(this, this.selector('#splash-screen', this.element)[0]),
		menu : new Squabble.Screen.Menu(this, this.selector('#menu-screen', this.element)[0]),
		score : new Squabble.Screen.Score(this, this.selector('#score-screen', this.element)[0]),
		board : new Squabble.Screen.Board.Board(this, this.selector('#board-screen', this.element)[0])
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
	this.currentScreenId = screenId;

};
