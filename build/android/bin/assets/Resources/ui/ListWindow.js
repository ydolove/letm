var platform = Ti.Platform.osname;

//A window object which will be associated with the stack of windows
exports.ListWindow = function(args) {
	
	var AddWindow = require('ui/AddWindow').AddWindow;
	var TroopsWindow = require('ui/TroopsWindow').TroopsWindow;
	var self = Ti.UI.createWindow({
		title: "My Little Empire Accounts",
	});
	
	var tableview = Ti.UI.createTableView({
		modal: true,
		backgroundColor: "#fff"
	});
	
	tableview.setData(getTableData());
	
	var tabledata = tableview.data;
	
	if (tabledata.length == 0) {
		alert("0");
		var emptylabel = Ti.UI.createLabel({
			objName: 'label',
			color: '#000',
			text: 'No Accounts Yet'
		});
	} else {
		alert("1");
		self.add(tableview);
	}
	
	return self;
	
};

var getTableData = function() {
	
	var db = require('db');
	var data = [];
	var row = null;
	var accounts = db.getAccounts();
	
	for (var i = 0; i < accounts.length; i++) {
		
		alert(accounts[i].id);
		alert(accounts[i].username);
		
		row = Ti.UI.createTableViewRow({
			className: 'row',
    		objName: 'row',
		});
		
		var label = Ti.UI.createLabel({
			shadowColor: '#aaa',
			shadowOffset: {x:5, y:5},
			shadowRadius: 3,
		    color: '#000',
		    objName: 'label',
		    id: accounts[i].id,
		    text: accounts[i].username,
		    textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
		});
		
		row.add(label);
		
		label.addEventListener('click', function() {
				new TroopsWindow().open();
		});
		
		data.push(row);
		
	}
	
	return data;
};

/*
var createConfirmDialog = function(id, title, isDone) {
	var db = require('db');
	var buttons, doneIndex, clickHandler;

	if (isDone) {
		buttons = ['Delete', 'Cancel'];
		clickHandler = function(e) {
			if (e.index === 0) {
				deleteItem(db, id, isDone);
				Ti.App.fireEvent('app:updateTables');
			}
		};
	} else {
		buttons = ['Done', 'Delete', 'Cancel'];
		clickHandler = function(e) {
			if (e.index === 0) {
				db.updateItem(id, 1);
				Ti.App.fireEvent('app:updateTables');
			} else if (e.index === 1) {
				deleteItem(db, id, isDone);
				Ti.App.fireEvent('app:updateTables');
			}
		};
	}

	var confirm = Ti.UI.createAlertDialog({
		title: 'Change Task Status',
		message: title,
		buttonNames: buttons
	});
	confirm.addEventListener('click', clickHandler);

	return confirm;
};

var deleteItem = function(db, id, isDone) {
	if (platform === 'mobileweb') {
		db.deleteItem(id, isDone);
	}
	else {
		db.deleteItem(id);
	}
};
*/