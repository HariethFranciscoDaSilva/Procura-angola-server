const { TypeAccount } = require("../models/models")


exports.create = async (req, res) => {


    const typeAccounts = await TypeAccount.create(req.body).then(data => data).catch(e => e)

     res.json(typeAccounts);

}