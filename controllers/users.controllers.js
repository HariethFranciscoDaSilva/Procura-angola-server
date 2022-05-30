const passHash = require("../application/generate-password/passHash")

const fs = require('fs')

const {
    User
} = require("../models/models")


exports.create = async (req, res) => {

    const password = await passHash()

    req.body.password = password.passGen

    if (req.file)
        req.body.avatar = req.file.filename

    await User.create(req.body).then(data => {

        console.log(password.passGen)

        res.status(200).json({
            message: 'Usuário criado com sucesso, por favor, aguarde a confirmação por meio de seu email!'
        });
    }).catch(e => {

        if (req.file)
            deleteLastAvatar(req.file.filename)

        if (e.fields.email)
            return res.status(400).json({
                message: 'Email introduzido já está sendo usado!'
            });

        if (e.fields.telephone)
            return res.status(400).json({
                message: 'Número de telefone introduzido já está sendo usado!'
            });

        return res.status(400).json({
            message: 'Erro ao cadastrar'
        });

    })
}

function deleteLastAvatar(name) {
    fs.unlink("public/uploads/images/" + name, (data, err) => {
        if (err) throw err;
    });
}

exports.all = async (req, res) => {


    const users = await User.findAll().then(data => data).catch(e => e)

    res.json(users);

}

exports.one = async (req, res) => {

    const user = await User.findOne({
        where: {
            id: req.body.id
        }
    }).then(data => data).catch(e => e)

    res.json(user);

}

exports.update = async (req, res) => {

    const user = await User.update(req.body, {
        where: {
            id: req.body.id
        }
    }).then(data => data).catch(e => e)

    res.json(user);

}

exports.authenticate = async (req, res) => {




}