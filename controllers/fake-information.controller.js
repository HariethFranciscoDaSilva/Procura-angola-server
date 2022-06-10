const {FakeInformation} = require('../models/models')

exports.FakeInformation = async (req, res) => {

    const response = await FakeInformation.create({
        description: req.body.description,
        userId: req.body.userId,
        informationId: req.body.informationId,
    })
    res.json((response))
}

exports.listAllFakeInformation = async (req, res) => {

    const response = await FakeInformation.findAll({include:[{association:'user'},{association:'information'}]})
    res.json((response))
}

