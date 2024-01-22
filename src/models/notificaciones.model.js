const mongoose = require('../configs/db');
const Schema = mongoose.Schema;

const notificationSchema = new Schema({
    body: {
        type: String,
        required: true
    },
    createdBy: {
        type: Number,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Notification', notificationSchema);
