const { Notification } = require("../models/models")




exports.all = async (req, res) => {

    const notifications = await Notification.findAll({
        order: [
            ["updatedAt", "DESC"]
        ],
        where: {
            isActive: true,
            userId: req.params.id
        }
    }).then(data => data).catch(e => e)

    res.json(notifications)

}

exports.desactivateNotification = async (req, res) => {
    

} 