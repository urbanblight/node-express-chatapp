var express = require("express");
router = express.Router();
module.exports = router;

var _ = require("lodash");
var uuid = require("node-uuid");

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
	})
	.post(function (req, res) {
		var roomId = req.params.roomId;
		var message = {
			roomId: roomId,
			text: req.body.text,
			userId: "44f885e8-87e9-4911-973c-4074188f408a",
			messageId: uuid.v4()
		};
		messages.push(message);
		res.sendStatus(200);
		
	})
	.delete(function (req, res) {
		var roomId = req.params.roomId;
	});
