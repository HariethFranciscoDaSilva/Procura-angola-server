const nodemailer = require('nodemailer')
require('dotenv').config()



/*let transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 465,
    secure: true,
    auth: {
        user: 'myemail@gmail.com',
        pass: 'mypass'
    }
});*/

exports.welcomeMail = async ({email, passGen, fullName}) => {

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: false,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASS
        }
    });

    const info = await transporter.sendMail({
        from: process.env.EMAIL, // sender address
        to: email, // list of receivers
        subject: "Credenciais de Acessso",
        html: `Seja Bem-Vindo ao <h4>Procura-Angola</h4> <strong>${fullName}!</strong> <br />  Estas são as suas credencias de acesso: <br /> Emai: ${email} <br /> Password: ${passGen}, faça já o login!`,
    })

    return info  

}