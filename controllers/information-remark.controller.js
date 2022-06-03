const {

    InformationRemark

} = require("../models/models")

exports.create = async (req, res) => {

    const comment = await InformationRemark.create(req.body).then(data => data || []).catch(e => e)

    res.json(comment);

}

exports.informationIdRemarks = async (req, res) => {

    const comments = await InformationRemark.findAll({
        order: [["updatedAt", "DESC"]],
        where: {
            informationId: req.params.id
        }
    }).then(data => data).catch(e => e)

    res.json(comments);
    
}
