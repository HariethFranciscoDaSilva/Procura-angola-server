const fs = require('fs');
const path = require('path');

const {
	User
} = require("../models/models");

exports.create = async (req, res) => {

}
exports.delete = async (req, res) => {

	await fs.unlink("public/uploads/images/" + req.body.avatar, (data, err) => {
		if (err) throw err;

		res.json(data || err);
	});
}

exports.all = async (req, res) => {}

exports.one = async (req, res) => {
	res.sendFile(`images/${req.params.avatar}`, {
		root: 'public/uploads'
	})
}

exports.update = async (req, res) => {

	const imagesType = ['.png', '.jpg', '.jpeg']

	if (req.file && imagesType.indexOf(req.file.filename.substring(req.file.filename.lastIndexOf('.'))) > -1) {

		if (req.body) {

			const user = await User.findOne({
				where: {
					id: req.body.id
				}
			}).then(t => t).catch(e => e);

			if (user) {

				if (user.avatar)
					deleteLastAvatar(user.avatar)

				req.body.avatar = req.file.filename

				await User.update(req.body, {
					where: {
						id: req.body.id
					}
				}).then(t => res.json({
					error: false,
					status: 200,
					message: 'Foto de Perfil alterada com Sucesso!',
					avatar: req.body.avatar
				})).catch(e => {

					deleteLastAvatar(req.file.filename)

					return res.json({
						error: true,
						status: 200,
						message: 'Falha ao realizar Upload!'
					})
					
				});
			} else {

				deleteLastAvatar(req.file.filename)

				return res.status(401).json({
					error: true,
					message: 'Parâmetros da requisição incorrectos',
					status: 401
				})
			}

		} else {
			return res.status(401).json({
				error: true,
				message: 'Parâmetros da requisição incorrectos',
				status: 401
			})
		}
	} else {

		if (req.file)
			deleteLastAvatar(req.file.filename)

		return res.status(401).json({
			error: true,
			message: 'Parâmetros da requisição incorrectos',
			status: 401
		})
	}
}

function deleteLastAvatar(name) {
	fs.unlink("public/uploads/images/" + name, (data, err) => {
		if (err) throw err;
	});
}