const express = require('express');
const authMiddleware = require('../middleware/authMiddleware.jsx');
const { submitResignation, getResignations, updateResignationStatus } = require('../controllers/resignationController.jsx');

const router = express.Router();

// Employee submits resignation
router.post('/submit', authMiddleware, submitResignation);

// HR fetches all resignations
router.get('/', authMiddleware, getResignations);

// HR updates resignation status (approve/reject)
router.put('/:id', authMiddleware, updateResignationStatus);

module.exports = router;
