const Notification = require('../models/notificaciones.model');

module.exports = {
  getAllNotifications: async (req, res) => {
    try {
      const notifications = await Notification.find().populate('createdBy', 'name');
      res.json(notifications);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createNotification: async (req, res) => {
    try {
      const { body, createdBy } = req.body;
      const newNotification = new Notification({ body, createdBy });
      await newNotification.save();
      res.status(201).json(newNotification);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
