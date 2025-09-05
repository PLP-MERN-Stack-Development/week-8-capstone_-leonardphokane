import React from 'react';

const GoalTracker = ({ goals }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Financial Goals</h2>
      {goals.length === 0 ? (
        <p className="text-sm text-gray-500 italic">No goals set yet. Define your first savings milestone.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {goals.map((goal) => (
            <div
              key={goal.id}
              className="border p-4 rounded-md hover:border-indigo-500 transition duration-200"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">{goal.name}</span>
                <span className="text-xs text-gray-500">{goal.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-indigo-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${goal.progress}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GoalTracker;
