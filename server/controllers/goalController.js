const Goal = require('../models/Goal');

exports.createGoal = async (req, res) => {
  try {
    const { title, targetAmount, deadline } = req.body;
    const goal = new Goal({
      userId: req.userId,
      title,
      targetAmount,
      deadline
    });
    await goal.save();
    res.status(201).json(goal);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create goal' });
  }
};

exports.getGoals = async (req, res) => {
  try {
    const goals = await Goal.find({ userId: req.userId }).sort({ deadline: 1 });
    res.json(goals);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch goals' });
  }
};

exports.updateGoal = async (req, res) => {
  try {
    const updated = await Goal.findOneAndUpdate(
      { _id: req.params.id, userId: req.userId },
      req.body,
      { new: true }
    );
    if (!updated) return res.status(404).json({ error: 'Goal not found' });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update goal' });
  }
};

exports.deleteGoal = async (req, res) => {
  try {
    const deleted = await Goal.findOneAndDelete({ _id: req.params.id, userId: req.userId });
    if (!deleted) return res.status(404).json({ error: 'Goal not found' });
    res.json({ message: 'Goal deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete goal' });
  }
};