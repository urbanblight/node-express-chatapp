var express = require('express');
var app = express();

app.use(express.static("public"));

app.get('/', function(req, res){
	res.send('Hello world!');
});

app.listen(3000, function() {
	console.log("Chat app listening on port 3000");
});
