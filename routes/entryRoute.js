const express = require('express');

const entryController = require('../controllers/entryController');

const router = express.Router();


router.route('/').post(entryController.createEntry);
router.route('/').get(entryController.getAllEntries);
router.route('/:slug').get(entryController.getEntry);

module.exports = router;