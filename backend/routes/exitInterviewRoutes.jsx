const express = require('express');
const authMiddleware = require('../middleware/authMiddleware.jsx');
const { submitFeedback, getFeedbacks } = require('../controllers/exitInterviewController.jsx');

const router = express.Router();

// Employee submits exit interview feedback
router.post('/submit', authMiddleware, submitFeedback);

// HR fetches all exit interviews
router.get('/', authMiddleware, getFeedbacks);

module.exports = router;
