const express = require('express');

const entryController = require('../controllers/entryController');

const router = express.Router();


router.route('/').post(entryController.createEntry);

module.exports = router;