const {

    InformationRemark,
    Information,
    User,
    Notification,
    HelpInformationUser

} = require("../models/models")

exports.create = async (req, res) => {

    const comment = await InformationRemark.create(req.body).then(data => data).catch(e => null)

    if (comment) {

        const informationData = await Information.findOne({
            where: {
                id: req.body.informationId
            },
            include: [{
                model: User,
                as: 'user'
            }]
        }).then(data => data).catch(e => e)

        const userData = await User.findOne({
            where: {
                id: req.body.userId
            }
        }).then(data => data).catch(e => e)

        const notificationData = {
            informationId: req.body.informationId,
            link: 'losted_peoples',
            description: 'Mais um comentário de ' + userData.fullName + ' no Post de ' +
                informationData.user.fullName
        }

        const helpers = await HelpInformationUser.findAll({
            where: {
                informationId: req.body.informationId
            }
        }).then(data => data).catch(e => e)

        for (let i = 0; i < helpers.length; i++) {

            notificationData.userId = helpers[i].userId

            await Notification.create(notificationData).then(data => data).catch(e => e)

        }

        res.json(comment);

    }

}

exports.deleteOneInformationRemark = async (req, res) => {

    const comments = await InformationRemark.destroy({
        where: {
            id: req.params.remarkId,
            informationId: req.params.informationId
        }
    }).then(data => data).catch(e => e)

    res.json(comments);

}

exports.informationIdRemarks = async (req, res) => {

    const comments = await InformationRemark.findAll({
        order: [
            ["updatedAt", "DESC"]
        ],
        where: {
            informationId: req.params.id
        },
        include: [{
                model: Information,
                as: 'information'
            },
            {
                model: User,
                as: 'user'
            }
        ]
    }).then(data => data.map(d => {

        d.user.password = ''

        return d

    })).catch(e => e)

    res.json(comments);

}