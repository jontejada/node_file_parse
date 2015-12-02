var fs = require('fs');
var filename = process.argv[2];
fs.readFile(filename,function(err,data){
	if (err) {
		console.log('read error: ' + err);}
	var dataArr = data.toString().split('\n');
	var uniqDates = {};
	for (i=0; i<dataArr.length-1; i++) {
		var date = dataArr[i].slice(4,14);
		uniqDates[date] = true;
	}
	var uniqDatesArr = Object.keys(uniqDates);
	console.log('* What are all the dates the log covers?');
	for (i=0; i<uniqDatesArr.length; i++) {
		console.log(uniqDatesArr[i]);
	}
});