const express = require('express');
const entryController = require('../controllers/entryController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();


router.route('/').post(entryController.createEntry);
router.route('/').get(authMiddleware, entryController.getAllEntries);
router.route('/:slug').get(entryController.getEntry);
router.route('/delete').get(entryController.deleteEntry);

module.exports = router;