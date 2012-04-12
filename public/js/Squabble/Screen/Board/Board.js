// Ensure namespace
var Squabble = Squabble || {};
Squabble.Screen = Squabble.Screen || {};
Squabble.Screen.Board = Squabble.Screen.Board || {};

// Squabble Board Screen Class. Used to manage the Board Screen
Squabble.Screen.Board.Board = function(game) { 
	
	// Construct super
	Squabble.Screen.Base.apply(this, arguments);
	
	// Build up our board spaces
	this.spaces = [];
	this.rowcount = null;
	this.columncount = null;
	this.initSpaces();
	
	// Initialise our tiles
	this.initTiles();
	
	// Wire up the buttons
	this.game.dom.bind(this.game.selector("#board-go-menu", this.element)[0], "click", function() {
		
		// Show the main menu
		this.game.switchScreen('menu');
	
	}, this);
	
};

// Extend the Base screen
Squabble.Screen.Board.Board.prototype = new Squabble.Screen.Base;

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
			space.initDrop();
			spaces.push(space);
		
		}
		
		// Add this row to our main array
		this.spaces.push(spaces);
	
	}

}

// Find our tiles and get them ready to play
Squabble.Screen.Board.Board.prototype.initTiles = function() {

	// Get our bench tiles
	var dombenchtiles = this.game.selector('#bench .tile', this.element);
	var benchtiles = [];	
	
	// Record the state of dragging
	var dragging = false;
	var draggingtile = null;
	var floatingtilecontainer = this.game.selector('#floating-tile', this.element)[0];
	var floatingtile = null;
	
	// Loop the tiles
	for (var t = 0, tl = dombenchtiles.length; t < tl; t++) {
		
		// Create the tile
		var tile = new Squabble.Screen.Board.Tile(this.game, dombenchtiles[t], dombenchtiles[t].innerHtml);
		tile.initDrag();
		benchtiles.push(tile);
		
		// Listen for dragging
		var hackydom = this.game.dom;
		var hackyelem = this.element;
		this.game.dom.bind(dombenchtiles[t], 'mousedown', function(e) { 

			// If the mouse is down on this tile then assume we're dragging
			dragging = true;
			draggingtile = this;
			
			// Put the tile in the floating container that will follow the mouse
			floatingtilecontainer.appendChild(draggingtile);
			floatingtilecontainer.style.display = 'block';
			
			console.log(
				'click x:', e.pageX, 'y:', e.pageY, 
				' offsetWidth = ', floatingtilecontainer.offsetWidth, ' offsetHeight = ', floatingtilecontainer.offsetHeight,
				' left = ', (e.pageX - (floatingtilecontainer.offsetWidth / 2)) + 'px',
				' top = ', (e.pageY - (floatingtilecontainer.offsetHeight / 2)) + 'px'
			);
			
			boardoffset = hackydom.getOffsetRect(hackyelem);
			
			floatingtilecontainer.style.left = (e.pageX - (floatingtilecontainer.offsetWidth / 2) - boardoffset.left) + 'px';
			floatingtilecontainer.style.top = (e.pageY - (floatingtilecontainer.offsetHeight / 2) - boardoffset.top) + 'px';
		
		}, dombenchtiles[t]);
		
	}
	
	// Any time the mouse is up the dragging has stopped
	this.game.dom.bind(document, 'mouseup', function() { 
	
		// Reset the dragging state
		dragging = false; 
		draggingtile = null;
	
	}, this);
	
	// Listen for the user dragging a tile
	this.game.dom.bind(document, 'mousemove', function(e) { 
		
		// Are we currently dragging?
		if (dragging && draggingtile) { 
			floatingtilecontainer.style.left = e.pageX + 'px';
			floatingtilecontainer.style.top = e.pageY + 'px';
		}
		
	}, this);	
	
	// Apply our tiles
	this.benchtiles = benchtiles;

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
