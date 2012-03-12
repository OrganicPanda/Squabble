// Ensure namespace
var Squabble = Squabble || {};

// Squabble Game Class. Used to start and manage a game of Squabble
Squabble.Game = function(settings, namespace) {
	
	// Apply args
	this.settings = settings || {};
	var namespace = namespace || {};
	
	// Supply any missing settings from our defaults
	Squabble.Util.mergeObjects(this.settings, {
		rows : 15,
		columns : 15,
		controls : {}
	});
	
	// This is pretty much a poor mans Dependency Injection.
	// Merge namespaces
	Squabble.Util.mergeObjects(namespace, {
		selector : Sizzle,
		Util : Squabble.Util,
		Dom : Squabble.Dom,
		Screen : {
			Splash : Squabble.Screen.Splash,
			Menu : Squabble.Screen.Menu,
			Score : Squabble.Screen.Score,
			Board : Squabble.Screen.Board
		}
	});
	
	// Now apply the namespace. This time we're taking 
	Squabble.Util.mergeObjects(Squabble, namespace, true);
	
	console.log('Settings: ', this.settings);
	console.log('Squabble Namespace: ', Squabble);
	
};

// Start the game
Squabble.Game.prototype.start = function() {
	
	console.log('Game started!');

};