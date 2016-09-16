var express = require("express");
router = express.Router();
module.exports = router;

_ = require("lodash");

var rooms = require("./data/rooms.json");
var messages = require("./data/messages.json");

router.route('/rooms')
	.get(function(req, res){
		res.json(rooms);	
	});

router.route('/rooms/:roomId/messages')
	.get(function(req, res){
		var roomId = req.params.roomId;
		var roomMessages = messages.filter(m => m.roomId == roomId);
		var room = _.find(rooms, r => r.id === roomId);
		if(!room){
			next(new Error("Room not found!"));
			return;
		}
		res.json({
			room: room,
			messages: roomMessages
		});
	});
