const {

    HelpInformationUser,
    Op

} = require("../models/models")

exports.create = async (req, res) => {

    const helpUser = await HelpInformationUser.create(req.body).then(data => data || []).catch(e => e)

    res.json(helpUser);

}

exports.all = async (req, res) => {

    const helpUsers = await HelpInformationUser.findAll().then(data => data).catch(e => e)

    res.json(helpUsers);

}

exports.allFromInformation = async (req, res) => {

    const helpUsers = await HelpInformationUser.findAll({
        where: {
            informationId: req.params.informationId
        }
    }).then(data => data.length).catch(e => 0)

    res.json(helpUsers);

}

exports.verifyHelp = async (req, res) => {

    const helpUserInformations = await HelpInformationUser.findOne({
        op: [Op.and],
        where: {
            userId: req.params.userId,
            informationId: req.params.informationId
        }
    }).then(data => {

        if (data && data.id)
            return res.json(true)

            return res.json(false)

    }).catch(e => e)

}

exports.one = async (req, res) => {

    const helpUserInformations = await HelpInformationUser.findAll({
        where: {
            userId: req.params.id
        }
    }).then(data => data || []).catch(e => e)

    res.json(helpUserInformations);

}


exports.removeHelp = async (req, res) => {

    const helpUser = await HelpInformationUser.destroy({
        Op: [Op.and],
        where: {
            informationId: req.body.informationId,
            userId: req.body.userId
        }
    }).then(data => data || []).catch(e => e)

    res.json(helpUser);

}