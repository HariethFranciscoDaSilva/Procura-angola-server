const fs = require('fs');
const path = require('path');


exports.video = async (req, res) => {
	res.sendFile(`informations/${req.params.appeal_video}`, {
		root: 'public/uploads'
	})
}

exports.avatar = async (req, res) => {
	res.sendFile(`informations/${req.params.avatar}`, {
		root: 'public/uploads'
	})
}