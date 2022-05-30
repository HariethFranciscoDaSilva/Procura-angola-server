const {
    Province
} = require("../models/models")


exports.all = async (req, res) => {


    const Provinces = await Province.findAll().then(data => data).catch(e => e)

    res.json(Provinces);

}

exports.one = async (req, res) => {


    const province = await Province.findOne({
        where: {
            id: req.body.id
        }
    }).then(data => data).catch(e => e)

    res.json(province);

}

exports.update = async (req, res) => {


    const province = await Province.update(req.body, {
        where: {
            id: req.body.id
        }
    }).then(data => data).catch(e => e)

    res.json(province);

}

exports.create = async (req, res) => {


    const Provinces = await Province.create(req.body).then(data => data).catch(e => e)

    res.json(Provinces);

}