// Ensure namespace
var Squabble = Squabble || {};
Squabble.Screen = Squabble.Screen || {};
Squabble.Screen.Board = Squabble.Screen.Board || {};

// Squabble Board TileBag Class. Used to represent a bag of tiles used to supply players with Tiles.
Squabble.Screen.Board.TileBag = function(game, element) { 
	
	// Store the game reference
	this.game = game;

	// Store the container
	this.element = element;

	// This is a letter distribution as per this page:
	// http://www.donaldsauter.com/counting-scrabble-tiles.htm
	this.distribution = {
		'A' : 9, 'J' : 1, 'S' : 4,
		'B' : 2, 'K' : 1, 'T' : 6,  
		'C' : 2, 'L' : 4, 'U' : 4,  
		'D' : 4, 'M' : 2, 'V' : 2,  
		'E' : 2, 'N' : 6, 'W' : 2,  
		'F' : 2, 'O' : 8, 'X' : 1,  
		'G' : 3, 'P' : 2, 'Y' : 2,  
		'H' : 2, 'Q' : 1, 'Z' : 1,  
		'I' : 9, 'R' : 6, 'BLANK' : 2
	};

	// This is the letter points as per this page:
	// http://www.scrabblepages.com/scrabble/rules/
	this.points = {
		'A' : 1, 'J' : 8, 'S' : 1,
		'B' : 3, 'K' : 5, 'T' : 1,  
		'C' : 3, 'L' : 1, 'U' : 1,  
		'D' : 2, 'M' : 3, 'V' : 4,  
		'E' : 1, 'N' : 1, 'W' : 4,  
		'F' : 4, 'O' : 1, 'X' : 8,  
		'G' : 2, 'P' : 3, 'Y' : 4,  
		'H' : 4, 'Q' : 10, 'Z' : 10,  
		'I' : 1, 'R' : 1, 'BLANK' : 0
	};

	// Store tile state
	this.tiles = [];

	// Fill the bag
	this.initTiles();

	// Update the bag capacity
	this.capacity = this.tiles.length;

};

// Fill the bag to capacity ready to start
Squabble.Screen.Board.TileBag.prototype.initTiles = function() {

	// Loop the tiles as per the distribution list
	for (var tile in this.distribution) {

		// Create this tile as many times as required
		for (var i = 0, l = this.distribution[tile]; i < l; i++) {
		
			var tileObject = new Squabble.Screen.Board.Tile(this.game, tile, this.points[tile]);
			this.tiles.push(tileObject);
			tileObject.moveTo(this.element);

		}

	};

	// The tiles array is currently pretty ordered so shuffle it up
	this.shuffleTiles();

}

// Randomise the order of the tiles. Algorithm from:
// http://stackoverflow.com/a/962890
Squabble.Screen.Board.TileBag.prototype.shuffleTiles = function() {
    
    var tmp, current, top = this.tiles.length;

    if(top) while(--top) {
    	current = Math.floor(Math.random() * (top + 1));
    	tmp = this.tiles[current];
    	this.tiles[current] = this.tiles[top];
    	this.tiles[top] = tmp;
    }

}

// Remove and return the given amount of tiles
Squabble.Screen.Board.TileBag.prototype.popTiles = function(count) {

	// Collect the removed tiles
	var poppedTiles = [];
	for (var i = 0; i < count; i++) {

		poppedTiles.push(this.tiles.pop());

	}

	// Return them
	return poppedTiles;

}
