const Notification = require('../models/Notification');

exports.getNotifications = async (req, res) => {
    const { userId } = req.params;
    try {
        const notifications = await Notification.find({ userId });
        res.json(notifications);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};