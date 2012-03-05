// Represent the Squabble board
squabble.board = (function() { 
	
	// Store a virtual board of tiles
	var tiles;
		
	// Get the board ready
	function initialize(callback) {
		
		// Start setting up the board positions
		fillBoard();
		
		// Call callback
		callback();
	
	} 
	
	// Clear the board, ready to start
	function fillBoard() {
	
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
	function inBounds(x, y) {
	
		// Check the supplied co-ordinates
		return (x < 0 || x > (squabble.settings.columns - 1) || y < 0 || y > (squabble.settings.rows - 1)) ? false : true;
	
	}
	
	
	// Get the tile at position x,y
	// -1 means not found (out of bounds)
	// 0 means no tile
	function getTile(x, y) {
	
		// Return the tile if it's in bounds
		return inBounds(x, y) ? tiles[x][y] : -1;
	
	}
	
	// Set a tile at the given position
	function setTile(x, y, tile){
		
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
	function isAdjacent(x1, y1, x2, y2) {
	
		// Work out the Manhatten distance
		var distanceX = Math.abs(x1 - x2);
		var distanceY = Math.abs(y1 - y2);
		
		// If they equal 1 then we are adjacent
		return (distanceX + distanceY === 1);
	
	}
	
	// Return true if any moves are possible
	function hasMoves() {
		
		// TODO: Do this
		return true;
		
	}
	
	// Get a copy of the board
	function getBoard() {
		
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
	function print() {
	
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
	
	// Expose public methods 
	return { 
		initialize : initialize,
		getTile : getTile,
		setTile : setTile,
		hasMoves : hasMoves,
		getBoard : getBoard,
		print : print
	}; 
	
})();
