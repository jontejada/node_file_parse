var fs = require('fs');
var filename = process.argv[2];
fs.readFile(filename,function(err,data){
	if (err) {
		console.log('read error: ' + err);}
	var dataArr = data.toString().split('\n');
	var uniqDates = {};
	for (i=0; i<dataArr.length-1; i++) {
		var date = dataArr[i].slice(4,14);
		if (!uniqDates[date]) {
			uniqDates[date] = 1;
		} else {
			uniqDates[date] = uniqDates[date] + 1;
		}
	}
	console.log('* For each date, how many log messages were added?');
	for (var prop in uniqDates) {
		console.log(prop + " " + uniqDates[prop]);
	}
});