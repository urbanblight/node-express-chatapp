var express = require("express");
router = express.Router();
module.exports = router;

var rooms = require("./data/rooms.json");

router.route('/rooms')
	.get(function(req, res){
		res.json(rooms);	
	});
