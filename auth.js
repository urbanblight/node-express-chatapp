var express = require('express');
var passport = require("passport");

var router = express.Router();
module.exports = router;

router.route('login/')
	.get(function(req, res){res.render('login');})
	.post(passport.authenticate('local') {
		successRedirect: '/',
		failureRedirect: '/login'
	});
