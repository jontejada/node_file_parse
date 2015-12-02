var fs = require('fs');
var filename = process.argv[2];
fs.readFile(filename,function(err,data){
	if (err) {
		console.log('read error: ' + err);}
	var dataArr = data.toString().split('\n');
	var uniqDates = {};
	for (i=0; i<dataArr.length-1; i++) {
		var dateAndLevel = dataArr[i].slice(4,14) + " " + dataArr[i].slice(39,44);
		if (!uniqDates[dateAndLevel]) {
			uniqDates[dateAndLevel] = 1;
		} else {
			uniqDates[dateAndLevel] = uniqDates[dateAndLevel] + 1;
		}
	}
	console.log('* How many log messages were there of each level for each day (e.g. `DEBUG`, `INFO`, `WARN`)?');
	for (var prop in uniqDates) {
		console.log(prop + " " + uniqDates[prop]);
	}
});