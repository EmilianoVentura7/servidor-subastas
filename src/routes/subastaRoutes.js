const express = require('express');
const router = express.Router();
const subastaController = require('../controllers/subastaController');
const subastaController = require('../controllers/subastaController');

router.get('/subastas', subastaController.getAllSubastas);
router.post('/subastas', subastaController.createSubasta);
router.post('/subastas/:id/bid', subastaController.placeBid);

module.exports = router;
