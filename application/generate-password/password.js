let generator = require('generate-password');

let generatePassword = () => {
    var password = generator.generate({
        length: 16,
        numbers: true,
    });

    return password;
}

module.exports = generatePassword;