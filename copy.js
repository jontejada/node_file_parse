var fs = require('fs');
var filename = process.argv[2];
fs.readFile(filename,function(err,data){
	if (err) {
		console.log('read error: ' + err);}
	var newFilename = filename + '.copy';
	fs.writeFile(newFilename,data,function(err){
		if (err) {
			console.log('write error: ' + err);
		}
	});
});