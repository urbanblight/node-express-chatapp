var express = require('express');
var app = express();
var bodyParser = require("body-parser");

app.set('view engine', 'pug');

app.use(express.static("public"));
app.use(express.static("node_modules/bootstrap/dist"));
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', function(req, res){
	res.render('index', {title: "Home"});
});

var adminRouter = require("./admin");
app.use(adminRouter);

app.listen(3000, function() {
	console.log("Chat app listening on port 3000");
});
