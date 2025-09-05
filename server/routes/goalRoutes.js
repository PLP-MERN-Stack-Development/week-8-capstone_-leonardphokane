const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/authMiddleware');
const {
  createGoal,
  getGoals,
  updateGoal,
  deleteGoal
} = require('../controllers/goalController');

// Protected routes
router.post('/', verifyToken, createGoal);
router.get('/', verifyToken, getGoals);
router.put('/:id', verifyToken, updateGoal);
router.delete('/:id', verifyToken, deleteGoal);

module.exports = router;