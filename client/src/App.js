import React from 'react';
import TransactionList from './components/TransactionList';
import GoalTracker from './components/GoalTracker';

function App() {
  return (
    <div className="App">
      <h1>🚀 Community Finance Dashboard</h1>
      <p>Welcome, Leonard. Your legacy-grade UI is loading...</p>
      <TransactionList />
      <GoalTracker />
    </div>
  );
}

export default App;
