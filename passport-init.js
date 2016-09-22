var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy();
var users = require("./data/users.json");
var _ = require("lodash");

passport.use(new LocalStrategy(function(username, password, done){
	var user = _.find(users, u => u.name == username);
	if (!user) {
		done(null, false);
		return;
	}
	done(null, user);
}));