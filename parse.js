// include the fs module
var fs = require("fs");

// handle a command line argument for the filename
var filename = process.argv[2];

fs.readFile(filename, function(err, data) {
  if (err) throw err;
  //console.log(data);
  //console.log(data.toString());
}); 


//run this:
//node parse.js ./data/log.log

//console.log(process.argv);
//returns this array:
// [ '/usr/local/bin/node',
//   '/Users/jon/GalvanizeProjects/node/js-node-log-file-parsing/parse.js',
//   './data/log.log' ]