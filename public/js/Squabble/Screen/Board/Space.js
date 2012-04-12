// Ensure namespace
var Squabble = Squabble || {};
Squabble.Screen = Squabble.Screen || {};
Squabble.Screen.Board = Squabble.Screen.Board || {};

// Squabble Board Space Class. Used to represent a space on the board
Squabble.Screen.Board.Space = function(game, element) { 
	
	// Store the game reference
	this.game = game;
	
	// Apply our DOM element
	this.element = element;
	
	// Start with no tile
	this.tile = null;
	
};

// Init the drop events for this space
Squabble.Screen.Board.Space.prototype.initDrop = function() {

	this.game.dom.bind(this.element, 'dragenter', this.handleDragEnter, this);
	this.game.dom.bind(this.element, 'dragover', this.handleDragOver, this);
	this.game.dom.bind(this.element, 'dragleave', this.handleDragLeave, this);
	this.game.dom.bind(this.element, 'drop', this.handleDrop, this);

}

// This handles any drag is over our element
Squabble.Screen.Board.Space.prototype.handleDragOver = function(e) {
	
	console.log('drag over: ', this, e.target);

	if (e.preventDefault) {
		e.preventDefault(); // Allows us to drop.
	}

	e.dataTransfer.dropEffect = 'move';
	return false;
};

// This handles a drag that has moved over our element
Squabble.Screen.Board.Space.prototype.handleDragEnter = function(e) {
	
	// Add a class to show we're being hovered
	this.game.dom.addClass(this.element, 'space-hovered');
	
};

// This handles a drag that leaves our element
Squabble.Screen.Board.Space.prototype.handleDragLeave = function(e) {
	
	// Remove the hover class
	this.game.dom.removeClass(this.element, 'space-hovered');
	
};

// Handle a drop that happens over our element
Squabble.Screen.Board.Space.prototype.handleDrop = function(e) {
	// this/e.target is current target element.

	console.log('drop: ', e.target);

	if (e.stopPropagation) {
		e.stopPropagation(); // stops the browser from redirecting.
	}

	// Don't do anything if we're dropping on the same column we're dragging.
	//if (dragSrcEl_ != e.target) {
		//dragSrcEl_.innerHTML = e.target.innerHTML;
		this.element.innerHTML = e.dataTransfer.getData('text/html');
	//}

	return false;
};

// Do we have a tile?
Squabble.Screen.Board.Space.prototype.hasTile = function() {

	return !this.tile == null;

}

// Get our tile
Squabble.Screen.Board.Space.prototype.getTile = function() {

	return this.tile;

}

// Set our tile
Squabble.Screen.Board.Space.prototype.setTile = function(tile) {

	this.tile = tile;

}
