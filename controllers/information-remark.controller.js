const {

    InformationRemark,
    Information,
    User

} = require("../models/models")

exports.create = async (req, res) => {

    const comment = await InformationRemark.create(req.body).then(data => data).catch(e => e)

    res.json(comment);

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