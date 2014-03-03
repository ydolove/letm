exports.TroopsWindow = function() {
	var self = Ti.UI.createWindow({
		title: "My Troops",
		
	});
	
	var tabGroup = Ti.UI.createTabGroup({
		window:self,
		modal: true,
		backgroundColor : "#fff"
	});
	
	var tab = Ti.UI.createTab({
	    title:'Castle',
	});
	
	tabGroup.addTab(tab);
	
	var tab = Ti.UI.createTab({
	    title:'Fort',
	});
	
	tabGroup.addTab(tab);
	
	return self;
};