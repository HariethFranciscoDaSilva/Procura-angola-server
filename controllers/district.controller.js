const {
    District
} = require("../models/models")


exports.all = async (req, res) => {


    const towns = await District.findAll().then(data => data).catch(e => e)

    res.json(towns);

}

exports.one = async (req, res) => {


    const district = await District.findOne({
        where: {
            id: req.body.id
        }
    }).then(data => data).catch(e => e)

    res.json(district);

}

exports.update = async (req, res) => {


    const district = await District.update(req.body, {
        where: {
            id: req.body.id
        }
    }).then(data => data).catch(e => e)

    res.json(district);

}

exports.create = async (req, res) => {


    const towns = await District.create(req.body).then(data => data).catch(e => e)

    res.json(towns);

}