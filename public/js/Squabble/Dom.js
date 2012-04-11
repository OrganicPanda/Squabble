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
Squabble.Dom.bind = function(element, event, handler) { 
	element.addEventListener(event, handler, false);
	return element;
}
