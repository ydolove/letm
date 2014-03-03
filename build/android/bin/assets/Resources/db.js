var DATABASE_NAME = 'letm';

exports.createDb = function() {
	Ti.Database.install('letm.sqlite', DATABASE_NAME);
};

exports.getAccounts = function() {
	var retData = [];
	var db = Ti.Database.open(DATABASE_NAME);
	var rows = db.execute('SELECT * FROM accounts');
	
	while (rows.isValidRow()) {
		retData.push({
			username:	rows.fieldByName('username'), 
			id:			rows.fieldByName('id')
		});
		rows.next();
	}
	db.close();
	alert(retData);
	return retData;
};

exports.updateItem = function(_id, _done) { 
	var mydb = Ti.Database.open(DATABASE_NAME);
	mydb.execute('update todo set done = ? where ROWID = ?', _done, _id);
	var rows = mydb.execute('select * from todo where done = ?', _done);
	mydb.close();
	return rows;
};

exports.addItem = function(_item) {
	var mydb = Ti.Database.open(DATABASE_NAME);
	mydb.execute('insert into todo values (?,?)', _item, 0);
	mydb.close();
};

exports.deleteItem = function(_id) {
	var mydb = Ti.Database.open(DATABASE_NAME);
	mydb.execute('delete from todo where ROWID = ?', _id);
	mydb.close();
};