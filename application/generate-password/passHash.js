const genPass = require('./password');

const bcrypt = require('bcrypt');

const passHash = async (newPassword="") => {

    //newPassword é uma palavra nova que o usuário define ou seja se o usuário deseja definir uma password própria o sistema não precisa gerar, default = ""

    data = {};

    const passGen = (newPassword === "") ? genPass() : newPassword;

    const password = await bcrypt.hash(passGen, 4).then(p => p).catch(err => err);

    data = {
        password: password,
        passGen: passGen
    }

    return data;
}

module.exports = passHash;