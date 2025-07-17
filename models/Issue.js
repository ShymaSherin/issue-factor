const mongoose = require('mongoose');

const issueSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    reportedBy: String,
    status: {
        type: String,
        enum: ['Open', 'In Progress', 'Resolved'],
        default: 'Open'
    }
}, { timestamps: true });

module.exports = mongoose.model('Issue', issueSchema);
