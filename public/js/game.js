// Allow the user to switch between game screens
// Each screen module will provide a 'run' function and take care of itself 
squabble.game = (function() { 
		
	// Change the 'active' screen
	function showScreen(screenId) {
		
		var activeScreen = squabble.dom.$("#game .screen.active")[0];
		var screen = squabble.dom.$("#" + screenId)[0];
		
		// Unset the currectly 'active' screen
		if (activeScreen) { 
			squabble.dom.removeClass(activeScreen, "active"); 
		} 
		
		// Setup the screen
		squabble.screens[screenId].run();
		
		// Set the new screen as 'active'
		squabble.dom.addClass(screen, "active");
	
	} 
	
	// Expose public methods 
	return { 
		showScreen : showScreen
	}; 
	
})();
