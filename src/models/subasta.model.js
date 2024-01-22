const mongoose = require('../configs/db');
const Schema = mongoose.Schema;

const subastaSchema = new Schema({
  title: String,
  description: String,
  currentBid: Number,
  bids: [{ user: String, amount: Number }],
});

module.exports = mongoose.model('Subasta', subastaSchema);
