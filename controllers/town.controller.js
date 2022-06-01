const {
    Town
} = require("../models/models")


exports.all = async (req, res) => {


    const towns = await Town.findAll().then(data => data).catch(e => e)

    res.json(towns);

}

exports.allByProvince = async (req, res) => {

    const towns = await Town.findAll({
        where: {
            provinceId: req.params.id
        }
    }).then(data => data).catch(e => e)

    res.json(towns);
}

exports.one = async (req, res) => {

    const Town = await Town.findOne({
        where: {
            id: req.body.id
        }
    }).then(data => data).catch(e => e)

    res.json(Town);

}

exports.update = async (req, res) => {


    const Town = await Town.update(req.body, {
        where: {
            id: req.body.id
        }
    }).then(data => data).catch(e => e)

    res.json(Town);

}

exports.create = async (req, res) => {


    const towns = await Town.create(req.body).then(data => data).catch(e => e)

    res.json(towns);

}