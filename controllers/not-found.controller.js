const {
    NotFound,
    Information,
    PersonalData,
    Town,
    User,
    Province
} = require("../models/models")



exports.all = async (req, res) => {

    const notFounds = await NotFound.findAll({
        order: [["updatedAt", "DESC"]],
        include: [{
            model: Information,
            as: 'information',
            where: {
                isActive: true
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
    }).then(data => data).catch(e => e)

    notFounds.map(data => data.user.password = '')

    res.json(notFounds);

}