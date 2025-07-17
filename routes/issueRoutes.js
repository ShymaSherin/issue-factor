const express = require('express');
const router = express.Router();
const Issue = require('../models/Issue');

// Create issue
router.post('/', async (req, res) => {
    try {
        const newIssue = new Issue(req.body);
        await newIssue.save();
        res.status(201).json(newIssue);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get all issues
router.get('/', async (req, res) => {
    try {
        const issues = await Issue.find();
        res.json(issues);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update issue
// PUT /api/issues/:id
// Update issue by ID
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const updatedIssue = await Issue.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedIssue) {
            return res.status(404).json({ error: 'Issue not found' });
        }
        res.json({
            message: 'Issue updated successfully',
            issue: updatedIssue
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});



// Delete issue
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Issue.findByIdAndDelete(req.params.id);
        if (deleted) {
            res.json({ message: 'Issue deleted successfully' });
        } else {
            res.status(404).json({ error: 'Issue not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
