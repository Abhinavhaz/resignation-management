const ExitInterview = require('../models/ExitInterview.jsx');

// Employee submits exit interview feedback
exports.submitFeedback = async (req, res) => {
    try {
        const { feedback, suggestions } = req.body;
        const exitInterview = new ExitInterview({
            employee: req.user.id,
            feedback,
            suggestions
        });

        await exitInterview.save();
        res.status(201).json({ message: 'Exit interview feedback submitted' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};

// HR fetches all exit interviews
exports.getFeedbacks = async (req, res) => {
    try {
        if (req.user.role !== 'hr') return res.status(403).json({ message: 'Unauthorized' });

        const feedbacks = await ExitInterview.find().populate('employee', 'username');
        res.json(feedbacks);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};
