const {
    NotFound
} = require("../models/models")



exports.all = async (req, res) => {

    const notFounds = await NotFound.findAll().then(data => data).catch(e => e)

    res.json(notFounds);

}