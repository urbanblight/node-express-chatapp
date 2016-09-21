// create a write stream (in append mode) 
var fs = require("fs");
var accessLogStream = fs.createWriteStream(__dirname + '/access.log', 
	{flags: 'a'});

module.exports = require("morgan")("combined", {stream: accessLogStream});
