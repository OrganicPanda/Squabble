// Some DOM helper functions
squabble.dom = (function() { 
	
	// Easy access
	var $ = Sizzle;
	
	// Does element have classname?
	function hasClass(el, clsName) { 
		var regex = new RegExp("(^|\\s)" + clsName + "(\\s|$)"); 
		return regex.test(el.className); 
	} 
	
	// Add classname to element
	function addClass(el, clsName) { 
		if (!hasClass(el, clsName)) { el.className += " " + clsName; } 
		return el;
	} 
	
	// Remove classname from element, if it exists 
	function removeClass(el, clsName) { 
		var regex = new RegExp("(^|\\s)" + clsName + "(\\s|$)"); 
		el.className = el.className.replace(regex, " "); 
		return el;
	} 
	
	// Bind an element event to a handler function	
	function bind(element, event, handler) { 
		if (typeof element == "string") { 
			element = $(element)[0];
		} 
		element.addEventListener(event, handler, false);
		return element;
	}
	
	// Expose public methods
	return { 
		$ : $, 
		hasClass : hasClass, 
		addClass : addClass, 
		removeClass : removeClass,
		bind : bind
	}; 
	
})();
