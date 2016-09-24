var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var passport = require("passport");
require("./passport-init.js");

app.set('view engine', 'pug');

app.use(require('./logging.js'));

app.use(express.static("public"));
app.use(express.static("node_modules/bootstrap/dist"));
app.use(express.static("node_modules/jquery/dist"));

require('express-debug')(app, {});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(require('express-session')({
	secret: 'keyboard cat', resave: false, saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(function(req, res, next) {
	console.log(`Incoming request: ${req.url}`);
	next();
});

app.route('/')
	.get(function(req, res, next){
		console.log(req);
		res.render('home', {title: "Home"});
	});

app.use("/admin", function(req, res, next){
	console.log("admin request: " + req.url);
	next();
});

var authRouter = require("./auth");
app.use(authRouter);

var adminRouter = require("./admin");
app.use("/admin", adminRouter);

var apiRouter = require("./api");
app.use("/api", apiRouter);

app.use(function(error, req, res, next) {
	console.log(error);
	res.send(error.message);
});

app.listen(3000, function() {
	console.log("Chat app listening on port 3000");
});
