// Ensure namespace
var Squabble = Squabble || {};

// Squabble Util Class. Used to perform useful, non game related, JS functions
Squabble.Util = function() {};

// Merge 2 simple JS objects. Very nieve and not nearly as robust as jQuery extend().
// objectA will be written to. objectB can be seen as the 'defaults'.
Squabble.Util.mergeObjects = function(objectA, objectB, mergeAllFromRight) {
	for (var prop in objectB) {
		
		// If it doesn't exist in A then get from B
		// Else if it exists in A and is an object then recurse
		// Note: This check is not exaustive and things like document, window etc will go through
		if (!objectA[prop] || mergeAllFromRight) {
			objectA[prop] = objectB[prop];
		} else if (typeof(objectA[prop]) === "object") {
			Squabble.Util.mergeObjects(objectA[prop], objectB[prop]);
		}
		
	}
};