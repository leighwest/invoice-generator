const express = require('express');

const invoiceController = require('../controllers/invoiceController');

const router = express.Router();

router.get('/invoice', invoiceController.createInvoice);

module.exports = router;