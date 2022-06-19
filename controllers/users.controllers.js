
const nodemailer = require('nodemailer')
require('dotenv').config()

const passHash = require("../application/generate-password/passHash")

const fs = require('fs')

const bcrypt = require('bcrypt');

const {
    User
} = require("../models/models")

const MailService = require('../application/mail/sendMail.mail')

exports.create = async (req, res) => {

    const password = await passHash()

    req.body.password = password.password

    req.body.passGen = password.passGen

    if (req.file)
        req.body.avatar = req.file.filename

    await User.create(req.body).then(async (data) => {

         /*const infoMail = await MailService.welcomeMail(req.body).then(data => data.response).catch(e => e)

        console.log(infoMail, req.body.password)*/

       const transporter = nodemailer.createTransport({
            service : 'gmail',
            auth: {
                user : 'hariethfrancisco2021@gmail.com',
                pass : 'vhueiihctzvtsrms'
            }
        });
    
        //email
        const info = await transporter.sendMail({
            from: 'hariethfrancisco2021@gmail.com', // sender address
            to: req.body.email, // list of receivers
            subject: "Credenciais de Acessso",
            text: `Seu username : ${req.body.username} e a sua password ${password.passGen}`,
        })

        res.status(200).json({
            message: 'Usuário criado com sucesso, por favor, aguarde a confirmação por meio de seu email!'
        });
    }).catch(async e => {


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

    const users = await User.findAll().then(data => {

        data.map(d => d.password = '')

        return data;

    }).catch(e => e)

    res.json(users)

}

exports.allUsers = async (req, res) => {

    const users = await User.findAll().then(data => data.length).catch(e => e)


    res.json(users);

}

exports.delete = async (req, res) => {

    const users = await User.findOne({ where: { id: req.params.id } }).then(data => {

        data.isActive = false

        data.save()

        res.json({ message: 'Usuário desactivado com sucesso!' })

    }).catch(e => {

        res.json({ message: 'Falha ao desactivar usuário!' })

    })

}

exports.one = async (req, res) => {

    const user = await User.findOne({
        where: {
            id: req.body.id
        }
    }).then(data => data).catch(e => e)

    user.password = ''

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


exports.resetPassword = async (req, res, next) => {
    try {
        const password = await passHash()
        const password1 = password.password
        const password2 = password.passGen
        const user = await User.findOne({
            where: {
                email: req.body.email,
            }
        }).then(u => u).catch(err => { });

        if (!user)
            return res.status(404).json({
                error: true,
                message: "Email não encontrado",
                status: 404
            });
        user.dataValues.password = password1
        await User.update(user.dataValues, {
            where: {
                id: user.dataValues.id
            }
        }).then(data => data).catch(e => e)

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'hariethfrancisco2021@gmail.com',
                pass: 'vhueiihctzvtsrms'
            }
        });

        const info = await transporter.sendMail({
            from: process.env.EMAIL, // sender address
            to: req.body.email, // list of receivers
            subject: "Recuperação de senha",
            html: `A sua senha do procura angola foi redefinida com sucesso! <br /> Password: ${password2}, faça já o login!`,
        })
        res.status(200).json({
            message: 'Password redefina com sucesso, por favor, verifique o seu email!'
        });

    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            message: error
        });
    }
}
exports.authenticate = async (req, res, next) => {

    const user = await User.findOne({
        where: {
            email: req.body.email,
        }
    }).then(u => u).catch(err => { });

    if (!user || !(await bcrypt.compare(req.body.password, user.password)))
        return res.status(404).json({
            error: true,
            message: "Credenciais Inválidas",
            status: 404
        });

    if (user && !user.isActive)
        return res.status(401).json({
            error: true,
            message: "Credenciais Bloqueadas",
            status: 404
        });


    req.user = user;

    next();

}
