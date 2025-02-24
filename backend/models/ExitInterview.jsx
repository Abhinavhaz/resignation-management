const mongoose = require('mongoose');

const ExitInterviewSchema = new mongoose.Schema({
    employee: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    feedback: { type: String, required: true },
    suggestions: { type: String }
});

module.exports = mongoose.model('ExitInterview', ExitInterviewSchema);
