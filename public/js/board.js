// Represent the Squabble board
squabble.board = (function() { 
	
	// Easy access
	var settings; 
	var tiles;
		
	// Get the board ready
	function initialize() {
		
		// Store a reference to settings
		settings = squabble.settings;
		
		// Start setting up the board positions
		fillBoard();
	
	} 
	
	// Print out the current board state
	function print() {
	
		// Store the state in a string
		var output = "";
	
		// Loop the cells
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
