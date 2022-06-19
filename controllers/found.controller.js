const {
    Found,
    Information,
    PersonalData,
    Town,
    User,
    Province,
    NotFound
} = require("../models/models")



exports.create = async (req, res) => {

    const information = await Information.findOne({
        where: {
            id: req.body.informationId
        }
    }).then(data => data

    ).catch(e => e)

    await Information.update({isActive: false}, { where: {
        id: information.id
    }}).then(data => data).catch(e => e);


    const found = await Found.create(req.body).then(() => res.json({
        message: 'Desejamos muitas forças',
        subtitle: 'Partilhe a nossa app para que os outros usem-na também!'
    })).catch(() => res.json({
        message: 'Erro ao cadastrar!'
    }))

}

exports.all = async (req, res) => {

    const founds = await Found.findAll({
        order: [
            ["updatedAt", "DESC"]
        ],
        include: [{
            model: Information,
            as: 'information',
            where: {
                isActive: false
            },
            include: [{
                model: PersonalData,
                as: 'personalData',
                include: [{
                    model: Town,
                    as: 'town',
                    include: [{
                        model: Province,
                        as: 'province',
                    }]
                }]
            }]
        }, {
            model: User,
            as: 'user'
        }]
    }).then(data => {

        data.map((d, i) => d.user.password = '')

        res.json(data)

    }).catch(e => res.json(e))
}

exports.one = async (req, res) => {

    const found = await Found.findOne({
        order: [
            ["updatedAt", "DESC"]
        ],
        where: {
            id: req.params.id
        },
        include: [{
            model: Information,
            as: 'information',
            where: {
                isActive: false
            },
            include: [{
                model: PersonalData,
                as: 'personalData',
                include: [{
                    model: Town,
                    as: 'town',
                    include: [{
                        model: Province,
                        as: 'province',
                    }]
                }]
            }]
        }, {
            model: User,
            as: 'user'
        }]

    }).then(data => {

        data.user.password = ''

        res.json(data)

    }).catch(e => res.status(400).json(e))

}