const jwt = require('jsonwebtoken');

require('dotenv').config();


exports.generateUserAuthToken = ({
    email,
    ip
}) => {
    let token = 'Bearer ' + jwt.sign({
        email,
        ip
    }, process.env.TOKENSECRETKEY);

    return token;
}

exports.userVerifyToken = (req, res) => {

    if (!(req.body.token == undefined))
        jwt.verify(req.body.token.split(' ')[1], process.env.TOKENSECRETKEY,
            async (err, decode) => {

                if (err)
                    res.status(200).end('Sessão expirada');
                else {
                    req.decode = decode
                    if (decode.ip == Main.ip(req))
                        res.status(200).json(
                            req.body.token
                        )
                    else
                        res.status(200).end('Sessão expirada');
                }
            }
        );
    else
        res.status(200).end('Sessão expirada');

}

exports.userSetToken = (req, res) => {

    let user = req.user;

    user.ip = req.headers['x-forwarded-for'] ||
    req.connection.remoteAddress;

    let token = this.generateUserAuthToken(user)

    res.status(200).json({
        user: {
            id: user.id,
            email: user.email,
            userName: user.fullName,
            avatar: user.avatar
        },

        token: token,
        error: false,
        status: 200
    });
}

exports.authorization = async (req, res, next) => {

    next()

}


exports.setToken = async (req, res, next) => {

    next()

}