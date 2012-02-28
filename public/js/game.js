// Some game helper functions
squabble.game = (function() { 
	
	// Easy access
	var dom = squabble.dom; 
	var $ = dom.$; 
		
	// Change the 'active' screen
	function showScreen(screenId) {
		
		var activeScreen = $("#game .screen.active")[0];
		var screen = $("#" + screenId)[0];
		
		// Unset the currectly 'active' screen
		if (activeScreen) { 
			dom.removeClass(screen, "active"); 
		} 
		
		// Setup the screen
		console.log('looking for: ', screenId, ' in ', squabble.screens);
		squabble.screens[screenId].run();
		
		// Set the new screen as 'active'
		dom.addClass(screen, "active");
	
	} 
	
	// Expose public methods 
	return { 
		showScreen : showScreen
	}; 
	
})();
