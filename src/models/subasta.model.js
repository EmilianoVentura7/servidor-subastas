const mongoose = require('../configs/db');
const Schema = mongoose.Schema;

const subastaSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  currentBid: {
    type: Number,
    required: true
  },
  bids: [{ user: String, amount: Number }],
});

module.exports = mongoose.model('Subasta', subastaSchema);
