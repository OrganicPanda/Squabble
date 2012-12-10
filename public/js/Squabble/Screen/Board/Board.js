// Ensure namespace
var Squabble = Squabble || {};
Squabble.Screen = Squabble.Screen || {};
Squabble.Screen.Board = Squabble.Screen.Board || {};

// Squabble Board Screen Class. Used to manage the Board Screen
Squabble.Screen.Board.Board = function(game) { 
	
	// Construct super
	this.super = Squabble.Screen.Base;
	this.super.apply(this, arguments);
	
	// Store the list of players and the current player
	this.players = [];
	this.player = null;

	// Build up our board spaces
	this.spaces = [];
	this.rowcount = null;
	this.columncount = null;
	//this.initSpaces();
	//this.initSpacesDrop();
	
	// Initialise our tiles
	this.tilebag = null;

	// Get hold of the tile bench
	this.bench = this.game.selector('#bench', this.element)[0];

	//this.initTiles();
	//this.initTilesDrag();
	
	// Wire up the buttons
	this.game.dom.bind(this.game.selector("#board-go-menu", this.element)[0], "click", function() {
		
		// Show the main menu
		this.game.switchScreen('menu');
	
	}, this);
	
};

// Extend the Base screen
Squabble.Screen.Board.Board.prototype = new Squabble.Screen.Base;

// Show this screen
Squabble.Screen.Board.Board.prototype.open = function() {
	
	// Call super
	this.super.prototype.open.apply(this, arguments);

	// Start a new game
	this.start(2);
	
};

// Start a new game
Squabble.Screen.Board.Board.prototype.start = function(players) {

	// Create the tile bag
	this.tilebag = new Squabble.Screen.Board.TileBag(this.game, this.game.selector('#tilebag', this.element)[0]);

	// Create some players
	for (var i = 0; i < players; i++) {

		this.players.push(new Squabble.Screen.Board.Player(
			this.game, 
			i + 1,
			this.tilebag.popTiles(7),
			this.bench
		));

	}

	// Start with the first player
	this.setActivePlayer(this.players[0]);

	console.log(
		'game started', {
			'this' : this,  
			'players' : this.players, 
			'tilebag' : this.tilebag
		}
	);

}

// Change from the current player to the given player
Squabble.Screen.Board.Board.prototype.setActivePlayer = function(newPlayer) {

	// Set the current player as inactive, if there is one
	if (this.player) {
		this.player.setActive(false);
	}

	// Change player
	this.player = newPlayer;

	// Set them as active
	this.player.setActive(true);

}

// Find our spaces and build a 3d array to represent them
Squabble.Screen.Board.Board.prototype.initSpaces = function() {

	// Get our board rows
	var rows = this.game.selector('#board .row', this.element);
	
	// Store the row count for easy access later
	this.rowcount = rows.length;
	
	// Loop them
	for (var r = 0, rl = this.rowcount; r < rl; r++) {
	
		// Get the spaces on this row
		var domspaces = this.game.selector('.space', rows[r]);
		var spaces = [];
	
		// Store the column count for easy access later on
		if (this.columncount == null) { this.columncount = domspaces.length; }
	
		// Loop the spaces
		for (var c = 0, cl = this.columncount; c < cl; c++) {
		
			// Create the space and make sure it's listening for drop events
			var space = new Squabble.Screen.Board.Space(this.game, domspaces[c]);
			//space.initDrop();
			spaces.push(space);
		
		}
		
		// Add this row to our main array
		this.spaces.push(spaces);
	
	}

}

// Get the spaces ready to accept a tile drop
Squabble.Screen.Board.Board.prototype.initSpacesDrop = function() {
	
	// Loop the rows
	for (var r = 0, rl = this.spaces.length; r < rl; r++) {
	
		// Loop the spaces
		for (var c = 0, cl = this.spaces[r].length; c < cl; c++) {
			
			// Record the current position of this space so we can bounds-check later
			this.spaces[r][c].updateBounds();		
		
		}
	
	}

}

// Find our tiles and get them ready to play
Squabble.Screen.Board.Board.prototype.initTiles = function() {

	// Get our bench tiles
	var dombenchtiles = this.game.selector('#bench .tile', this.element);
	var benchtiles = [];
	
	// Loop the tiles
	for (var t = 0, tl = dombenchtiles.length; t < tl; t++) {
		
		// Create the tile
		var tile = new Squabble.Screen.Board.Tile(this.game, dombenchtiles[t], dombenchtiles[t].innerHtml);
		tile.initDrag();
		benchtiles.push(tile);
		
	}
	
	// Apply our tiles
	this.benchtiles = benchtiles;

}


// Get the tiles ready to be dragged
Squabble.Screen.Board.Board.prototype.initTilesDrag = function() {	
	
	// Record the state of dragging
	var dragging = false;
	var draggingtile = null;
	var draggingtileparent = null;
	var floatingtilecontainer = this.game.selector('#floating-tile', this.element)[0];
	var floatingtile = null;
	
	// Return the correct position for the floating tile
	// Based on mouse position x, y
	// TODO: Could probably just do this once and use it for all events
	var hackthis = this;
	var getIdealFloatPosition = function(x, y) {
		
		// Get the offset of the board screen
		var boardoffset = hackthis.game.dom.getOffsetRect(hackthis.element);
		
		// Use that offset along with the width and height of the floating tile to 
		// work out the best place for it relative to the board screen 
		return {
			left : x - (floatingtilecontainer.offsetWidth / 2) - boardoffset.left,
			top : y - (floatingtilecontainer.offsetHeight / 2) - boardoffset.top
		}
		
	}
	
	// Loop the tiles
	for (var t = 0, tl = this.benchtiles.length; t < tl; t++) {
		
		// Listen for dragging
		var hackthis = this;
		this.game.dom.bind(this.benchtiles[t].element, 'mousedown', function(e) { 

			// If the mouse is down on this tile then assume we're dragging
			dragging = true;
			draggingtile = this;
			draggingtileparent = this.parentNode;
			
			// Put the tile in the floating container that will follow the mouse
			floatingtilecontainer.appendChild(draggingtile);
			floatingtilecontainer.style.display = 'block';
			
			// Now position the floating container			
			var pos = getIdealFloatPosition(e.pageX, e.pageY);
			floatingtilecontainer.style.left = pos.left + 'px';
			floatingtilecontainer.style.top = pos.top + 'px';
			
			// Now get the spaces ready for dropping
			// TODO: This could be done once at board open then on 
			// browser resize for better performance
			hackthis.initSpacesDrop();
		
		}, this.benchtiles[t].element);
		
	}
	
	// Any time the mouse is up the dragging has stopped
	this.game.dom.bind(document, 'mouseup', function(e) { 
	
		// Are we currently dragging?
		if (dragging && draggingtile && draggingtileparent) { 
			
			// See if we're above any spaces
			var space = this.findSpaceByDocumentOffset(e.pageX, e.pageY);
			if (space) {
			
				// Above a space so drop on to it
				space.tile = draggingtile;
				space.element.appendChild(draggingtile);
			
			} else {
				
				// No space found so return to base
				draggingtileparent.appendChild(draggingtile);
				
			}
			
			// Reset the dragging state
			floatingtilecontainer.style.display = 'none';
			dragging = false; 
			draggingtile = null;
			draggingtileparent = null;
			
		}
	
	}, this);
	
	// Listen for the user dragging a tile
	this.game.dom.bind(document, 'mousemove', function(e) { 
		
		// Are we currently dragging?
		if (dragging && draggingtile) { 
			
			// Position the floating container			
			var pos = getIdealFloatPosition(e.pageX, e.pageY);
			floatingtilecontainer.style.left = pos.left + 'px';
			floatingtilecontainer.style.top = pos.top + 'px';
			
		}
		
	}, this);

}

// Find a space based on an x, y document offset, return the space or null
Squabble.Screen.Board.Board.prototype.findSpaceByDocumentOffset = function(x, y) {

	// Loop the rows
	for (var r = 0, rl = this.spaces.length; r < rl; r++) {
	
		// Loop the spaces
		for (var c = 0, cl = this.spaces[r].length; c < cl; c++) {
			
			// Get this spaces bounds
			var bounds = this.spaces[r][c].bounds;
			
			// Check the coordinates are inside
			// TODO: We could eliminate further row / column checks if x < bounds.left or y < bounds.top and save cycles here 
			if (x > bounds.left && x < bounds.right && y > bounds.top && y < bounds.bottom) {
				
				// The coordinates are inside this space so return it 
				return this.spaces[r][c]; 
				
			}
		
		}
	
	}

}


// Clear the board, ready to start
Squabble.Screen.Board.Board.prototype.fillBoard = function() {

	// Start as an empty array
	tiles = [];

	// Loop the cells
	for (var x = 0, columns = squabble.settings.columns; x < columns; x++) {
		tiles[x] = [];
		for (var y = 0, rows = squabble.settings.rows; y < rows; y++) {
			
			tiles[x][y] = 0;
			
		}
	}

}

// Check if a given x, y is in bounds
Squabble.Screen.Board.Board.prototype.inBounds = function(x, y) {

	// Check the supplied co-ordinates
	return (x < 0 || x > (squabble.settings.columns - 1) || y < 0 || y > (squabble.settings.rows - 1)) ? false : true;

}


// Get the tile at position x,y
// -1 means not found (out of bounds)
// 0 means no tile
Squabble.Screen.Board.Board.prototype.getTile = function(x, y) {

	// Return the tile if it's in bounds
	return inBounds(x, y) ? tiles[x][y] : -1;

}

// Set a tile at the given position
Squabble.Screen.Board.Board.prototype.setTile = function(x, y, tile) {
	
	// Are we in bounds?
	if (inBounds(x, y)) {
		
		// Yes; Add it straight in
		tiles[x][y] = tile;
		return true;
		
	} else {
		
		// Out of bounds
		return false;
		
	}
	
}

// Return true if x1, y1 can be considered adjacent to x2, y2
Squabble.Screen.Board.Board.prototype.isAdjacent = function(x1, y1, x2, y2) {

	// Work out the Manhatten distance
	var distanceX = Math.abs(x1 - x2);
	var distanceY = Math.abs(y1 - y2);
	
	// If they equal 1 then we are adjacent
	return (distanceX + distanceY === 1);

}

// Return true if any moves are possible
Squabble.Screen.Board.Board.prototype.hasMoves = function() {
	
	// TODO: Do this
	return true;
	
}

// Get a copy of the board
Squabble.Screen.Board.Board.prototype.getTilesCopy = function() {
	
	// Create an array to copy to
	var copy = [];
	
	// We only need to loop x as we can get a copy of y with slice()
	for (var x = 0, columns = squabble.settings.columns; x < columns; x++) {
		
		copy[x] = tiles[x].slice(0);
		
	}
	
	// Send back the copy
	return copy;
	
}

// Print out the current board state
Squabble.Screen.Board.Board.prototype.printTiles = function() {

	// Store the state in a string
	var output = "";

	// Loop the cells (y axis first so that we print properly)
	for (var y = 0, rows = squabble.settings.rows; y < rows; y++) {
		for (var x = 0, columns = squabble.settings.columns; x < columns; x++) {
			
			output += (getTile(x, y) + " ");
			
		}
		output += "\r\n";
	}
	
	console.log(output);

}
