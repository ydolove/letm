if (Ti.version < 1.8 ) {
	alert('Sorry - this application template requires Titanium Mobile SDK 1.8 or later');
}
else {
	//add a single variable to the global scope to which we may choose to
	//intentionally add items to
	var globals = {};

	//create a private scope to prevent further polluting the global object
	(function() {
		var AppTabGroup = require('ui/AppTabGroup').AppTabGroup,
			ListWindow = require('ui/ListWindow').ListWindow,
			AddWindow = require('ui/AddWindow').AddWindow;
			TroopsWindow = require('ui/TroopsWindow').TroopsWindow;

		// Initialize local storage
		require('db').createDb();

		//create our global tab group
		globals.tabs = new ListWindow();

		globals.tabs.open();
	})();
}