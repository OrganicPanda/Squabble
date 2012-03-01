// Represent the Squabble board
squabble.board = (function() { 
	
	// Easy access
	var settings; 
	var tiles;
		
	// Get the board ready
	function initialize(callback) {
		
		// Store a reference to settings
		settings = squabble.settings;
		
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
		for (var x = 0, columns = settings.columns; x < columns; x++) {
			tiles[x] = [];
			for (var y = 0, rows = settings.rows; y < rows; y++) {
				
				tiles[y][x] = 0;
				
			}
		}
	
	}
	
	// Get the tile at position x,y
	// -1 means not found (out of bounds)
	// 0 means no tile
	function getTile(x, y) {
	
		// Check the supplied co-ordinates
		if (x < 0 || x > (settings.columns - 1) || y < 0 || y > (settings.rows - 1)) {
		
			// Out of bounds
			return -1;
		
		} else {
		
			// In bounds
			return tiles[x][y];
		
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
	
	// Print out the current board state
	function print() {
	
		// Store the state in a string
		var output = "";
	
		// Loop the cells (y axis first so that we print properly)
		for (var y = 0, rows = settings.rows; y < rows; y++) {
			for (var x = 0, columns = settings.columns; x < columns; x++) {
				
				output += (getTile(x, y) + " ");
				
			}
			output += "\r\n";
		}
		
		console.log(output);
	
	}
	
	// Expose public methods 
	return { 
		initialize : initialize,
		print : print
	}; 
	
})();
