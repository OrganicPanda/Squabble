// Ensure namespace
var Squabble = Squabble || {};
Squabble.Screen = Squabble.Screen || {};
Squabble.Screen.Board = Squabble.Screen.Board || {};

// Squabble Board Tile Class. Used to represent a letter tile
Squabble.Screen.Board.Tile = function(game, letter, points) { 
	
	// Store the game reference
	this.game = game;

	// Apply our letter
	this.letter = letter;
	this.points = points;

	// Create the tile in the container
	this.element = document.createElement('div');
	this.element.setAttribute('class', 'tile');
	this.element.appendChild(document.createTextNode(this.letter));
	
};

// Move to the given container
Squabble.Screen.Board.Tile.prototype.moveTo = function(container) {

	container.appendChild(this.element);

}

// Init the drag events
Squabble.Screen.Board.Tile.prototype.initDrag = function() {

	// Enable dragging
	//this.element.setAttribute('draggable', 'true');
	
	// Listen for drags
	//this.game.dom.bind(this.element, 'dragstart', this.handleDragStart, this);
	//this.game.dom.bind(this.element, 'dragend', this.handleDragEnd, this);

}

// Handles the start of a drag
Squabble.Screen.Board.Tile.prototype.handleDragStart = function(e) {
	
	/*console.log('drag start: ', e.target);

	e.dataTransfer.effectAllowed = 'move';
	e.dataTransfer.setData('text/html', this.element.innerHTML);

	this.game.dom.addClass(this.element, 'tile-moving');*/
	
};

// Handles the end of a drag
Squabble.Screen.Board.Tile.prototype.handleDragEnd = function(e) {
	
	/*console.log('drag end: ', e.target);	
	this.game.dom.removeClass(this.element, 'tile-moving');*/

};
