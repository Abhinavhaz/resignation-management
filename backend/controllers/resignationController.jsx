const Resignation = require('../models/Resignation.jsx');
const sendEmail = require('../utils/emailService.jsx');

// Employee submits resignation
exports.submitResignation = async (req, res) => {
    try {
        const { lastWorkingDay, reason } = req.body;
        const resignation = new Resignation({
            employee: req.user.id,
            lastWorkingDay,
            reason
        });

        await resignation.save();
        res.status(201).json({ message: 'Resignation submitted' });

        // Notify HR via email
        await sendEmail('hr@example.com', 'New Resignation Request', `Employee ${req.user.id} submitted a resignation.`);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};

// HR fetches all resignations
exports.getResignations = async (req, res) => {
    try {
        if (req.user.role !== 'hr') return res.status(403).json({ message: 'Unauthorized' });

        const resignations = await Resignation.find().populate('employee', 'username');
        res.json(resignations);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};

// HR updates resignation status
exports.updateResignationStatus = async (req, res) => {
    try {
        if (req.user.role !== 'hr') return res.status(403).json({ message: 'Unauthorized' });

        const { status } = req.body;
        if (!['approved', 'rejected'].includes(status)) return res.status(400).json({ message: 'Invalid status' });

        const resignation = await Resignation.findById(req.params.id);
        if (!resignation) return res.status(404).json({ message: 'Resignation not found' });

        resignation.status = status;
        resignation.exitDate = status === 'approved' ? resignation.lastWorkingDay : null;
        await resignation.save();

        res.json({ message: `Resignation ${status}` });

        // Notify Employee
        await sendEmail(resignation.employee.email, 'Resignation Update', `Your resignation has been ${status}.`);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};
