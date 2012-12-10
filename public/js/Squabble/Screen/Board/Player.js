// Ensure namespace
var Squabble = Squabble || {};
Squabble.Screen = Squabble.Screen || {};
Squabble.Screen.Board = Squabble.Screen.Board || {};

// Squabble Board Player Class. Used to represent a player of the game
Squabble.Screen.Board.Player = function(game, number, startingTiles, bench) { 
	
	// Store the game reference
	this.game = game;

	// Set up the player's identity
	this.active = false;
	this.number = number;
	this.name = "Player " + this.number;

	// Set up the player's current tiles
	this.tiles = startingTiles;

	// Create a container for our tiles
	this.tilecontainer = document.createElement('div');
	this.tilecontainer.setAttribute('id', 'player-' + this.number + '-tiles');
	this.tilecontainer.setAttribute('class', 'player-tiles');

	// Add the container to the tile bench
	bench.appendChild(this.tilecontainer);

	// Add the tiles to this container
	for (var t = 0; t < this.tiles.length; t++) {

		// Wrap the tile in a space
		var space = document.createElement('div');
		space.setAttribute('class', 'space');
		this.tilecontainer.appendChild(space);
		this.tiles[t].moveTo(space);
	
	}
	
};

// Mark this player as active or inactive
Squabble.Screen.Board.Player.prototype.setActive = function(active) {

	// Apply the property
	this.active = !!(active);

	// Mark the change on our tile container
	if (this.active) {
		this.game.dom.addClass(this.tilecontainer, 'active-player-tiles');
	} else {
		this.game.dom.removeClass(this.tilecontainer, 'active-player-tiles');
	}

}