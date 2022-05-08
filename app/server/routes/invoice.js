const express = require('express');

const invoiceController = require('../controllers/invoice');

const router = express.Router();

router.post('/invoice', invoiceController.createInvoice);

module.exports = router;