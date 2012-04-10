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
	this.Selector = this.settings.selector || Sizzle;
	this.Util = Squabble.Util;
	this.Dom = Squabble.Dom;
	this.Screen = {
		Splash : new Squabble.Screen.Splash(this),
		Menu : new Squabble.Screen.Menu(this),
		Score : new Squabble.Screen.Score(this),
		Board : new Squabble.Screen.Board(this)
	};
	
};

// Start the game
Squabble.Game.prototype.start = function() {
	
	console.log('Game started!');
	console.log(this);

};

// Switch to a game screen
Squabble.Game.prototype.switchScreen = function(screenId) {
	
	console.log('Game started!');
	console.log(this);

};