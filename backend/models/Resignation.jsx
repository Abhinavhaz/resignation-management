const mongoose = require('mongoose');

const ResignationSchema = new mongoose.Schema({
    employee: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    lastWorkingDay: { type: Date, required: true },
    reason: { type: String, required: true },
    status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
    exitDate: { type: Date }
});

module.exports = mongoose.model('Resignation', ResignationSchema);
