const express = require('express');
const pageController = require('../controllers/pageController');

const router = express.Router();


router.route('/').get(pageController.getIndexPage);
router.route('/about').get(pageController.getAboutPage);
router.route('/contact').get(pageController.getContactPage);
router.route('/portfolio').get(pageController.getPortfolioPage);
router.route('/single').get(pageController.getSinglePage);


module.exports = router;