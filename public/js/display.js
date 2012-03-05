// Represent the Squabble board
squabble.display = (function() { 
	
	// The board DOM element
	var domBoard;
	
	// Store a reference to each board tile
	var tiles;
	
	// On first run we setup() 
	var firstRun = true;
	
	// First load setup
	function setup() {
		
		// Get the DOM game board
		domBoard = squabble.dom.$("#board")[0]; 
		
		// Start setting up the board positions
		fillBoard();
	
	}
	
	// Get the board ready
	function initialize(callback) {
		
		// First time setup
		if (firstRun) {
			setup();
			firstRun = false;			
		}
		
		// Call callback
		callback();
	
	}
	
	// Clear the board, ready to start
	function fillBoard() {
	
		// Start as an empty array
		tiles = [];
		
		var domRow;
		var domPosition;
	
		// Loop the cells
		for (var y = 0, rows = squabble.settings.rows; y < rows; y++) {
			
			// Create the row container
			domRow = squabble.dom.addClass(document.createElement("div"), 'row');
			domBoard.appendChild(domRow);
			
			for (var x = 0, columns = squabble.settings.columns; x < columns; x++) {
				
				// Because we're looping y then x we need to create the x axis on demand
				if (typeof tiles[x] === "undefined") {
					tiles[x] = [];
				}
				
				// Create the cell
				domPosition = squabble.dom.addClass(document.createElement("div"), 'position');
				domRow.appendChild(domPosition);
				
				tiles[x][y] = domPosition;
				
			}
		}
	
	} 
	
	// Draw a tile on screen
	function drawTile(x, y, tile) {
		
		
		
	}
	
	// Print out the current board state
	function print() {
	
		// Store the state in a string
		var output = "";
	
		// Loop the cells (y axis first so that we print properly)
		for (var y = 0, rows = squabble.settings.rows; y < rows; y++) {
			console.log(tiles[y]);
		}
	
	}	
	
	// Expose public methods
	return { 
		initialize : initialize,
		print : print
	}; 
	
})();
