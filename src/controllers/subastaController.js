const Subasta = require('../models/subasta.model');

module.exports = {
  getAllSubastas: async (req, res) => {
    try {
      const subastas = await Subasta.find();
      res.json(subastas);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createSubasta: async (req, res) => {
    try {
      const newSubasta = new Subasta(req.body);
      await newSubasta.save();
      res.status(201).json(newSubasta);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  placeBid: async (req, res) => {
    try {
      const { id } = req.params;
      const { user, amount } = req.body;

      const subasta = await Subasta.findById(id);
      subasta.bids.push({ user, amount });
      subasta.currentBid = amount;

      await subasta.save();

      res.json(subasta);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
