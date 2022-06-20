const {
    Notification,
    User
} = require("../models/models")




exports.all = async (req, res) => {

    const notifications = await Notification.findAll({
        order: [
            ["updatedAt", "DESC"]
        ],
        where: {
            isActive: true,
            userId: req.params.id
        },
        include: [{
            model: User,
            as: 'user'
        }]
    }).then(data => data).catch(e => e)

    res.json(notifications)

}

exports.desactivateNotification = async (req, res) => {

    const notification = await Notification.findOne({
        where: {
            isActive: true,
            userId: req.params.id
        }
    }).then(data => data).catch(e => e)

    notification.isActive = false;

    await Notification.update(notification, {where: {
        id: notification.id
    }}).then(data => data).catch(e => e)

    const notifications = await Notification.findAll({
        order: [
            ["updatedAt", "DESC"]
        ],
        where: {
            isActive: true,
            userId: req.params.id
        },
        include: [{
            model: User,
            as: 'user'
        }]
    }).then(data => data).catch(e => e)

    res.json(notifications)
}