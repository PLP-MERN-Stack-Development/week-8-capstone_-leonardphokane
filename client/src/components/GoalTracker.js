import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GoalTracker = () => {
  const [goals, setGoals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGoals = async () => {
      try {
        const token = localStorage.getItem('token'); // Adjust if using context or cookies
        const res = await axios.get('http://localhost:5000/api/goals', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setGoals(res.data);
      } catch (err) {
        console.error('Failed to fetch goals:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchGoals();
  }, []);

  if (loading) return <p>Loading goals...</p>;

  return (
    <div>
      <h2>🎯 Financial Goals</h2>
      {goals.length === 0 ? (
        <p>No goals set yet.</p>
      ) : (
        <ul>
          {goals.map(goal => (
            <li key={goal._id}>
              <strong>{goal.name}</strong>: R{goal.progress} / R{goal.target}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GoalTracker;
