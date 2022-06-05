const {

    HelpInformationUser, Op

} = require("../models/models")

exports.create = async (req, res) => {

    const helpUser = await HelpInformationUser.create(req.body).then(data => data || []).catch(e => e)

    res.json(helpUser);

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
