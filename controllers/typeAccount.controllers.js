const { TypeAccount } = require("../models/models")


exports.all = async (req, res) => {


    const typeAccounts = await TypeAccount.findAll().then(data => data).catch(e => e)

     res.json(typeAccounts);

}

exports.create = async (req, res) => {


    const typeAccounts = await TypeAccount.create(req.body).then(data => data).catch(e => e)

     res.json(typeAccounts);

}