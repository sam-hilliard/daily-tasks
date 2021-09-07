const express = require('express');
const router = express.Router();
const Goal = require('../models/goal');

// getting all
router.get('/', async (req, res) => {
    try {
        const goals = await Goal.find();
        res.json(goals);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

// getting one
router.get('/:id', getGoal, (req, res) => {
    res.json(res.goal);
});

// creating one
router.post('/', async (req, res) => {
    const goal = new Goal({name: req.body.name});

    try {
        const newGoal = await goal.save();
        res.status(201).json(newGoal);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
});

// update one
router.patch('/:id', getGoal, async (req, res) => {
    if (req.body.name != null) {
        res.goal.name = req.body.name;
    }
    if (req.body.isComplete != null) {
        res.goal.isComplete = req.body.isComplete;
    }
    if (req.body.streak != null) {
        res.goal.streak = req.body.streak;
    }
    if (req.body.date != null) {
        res.goal.date = req.body.date;
    }

    try {
        const updatedGoal = await res.goal.save();
        res.json(updatedGoal);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// deleting one
router.delete('/:id', getGoal, async (req, res) => {
    try {
        await res.goal.remove();
        res.json({ message: 'Deleted goal' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

async function getGoal(req, res, next) {
    let goal;

    try {
       goal = await Goal.findById(req.params.id);
       
       if (goal === null) {
           return res.status(404).json({ message: 'Goal cannot be found' });
       }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.goal = goal;
    next();
}

module.exports = router;