// Ensure namespace
var Squabble = Squabble || {};

// Squabble DOM Class. Used to interact with the DOM
Squabble.Dom = function() {};
	
// Does element have classname?
Squabble.Dom.hasClass = function(el, clsName) { 
	var regex = new RegExp("(^|\\s)" + clsName + "(\\s|$)"); 
	return regex.test(el.className); 
} 

// Add classname to element
Squabble.Dom.addClass = function(el, clsName) { 
	if (!this.hasClass(el, clsName)) { el.className += " " + clsName; } 
	return el;
} 

// Remove classname from element, if it exists 
Squabble.Dom.removeClass = function(el, clsName) { 
	var regex = new RegExp("(^|\\s)" + clsName + "(\\s|$)"); 
	el.className = el.className.replace(regex, " "); 
	return el;
} 

// Bind an element event to a handler function	
Squabble.Dom.bind = function(element, event, handler, context) { 
	element.addEventListener(event, context ? function() { 
		handler.apply(context, arguments);
	} : handler, false);
	return element;
}

// Get the { top : x, left : y ] of the given element relative to the document 
Squabble.Dom.getOffsetRect = function(elem) {
	
	// Get the bounding box. This is most of the way there already
	var box = elem.getBoundingClientRect();
    
	// Get a couple of reference elements
	var body = document.body;
	var docElem = document.documentElement;
    
	// Get our scroll offsets
	var scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop;
	var scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft;
    
	// IE can move <HTML> for some unknown reason so watch out for that
	var clientTop = docElem.clientTop || body.clientTop || 0;
	var clientLeft = docElem.clientLeft || body.clientLeft || 0;
    
	// Smush that all together and we get our totals
	return {
		top : Math.round(box.top +  scrollTop - clientTop),
		left : Math.round(box.left + scrollLeft - clientLeft)
	}
	
}

