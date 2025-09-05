import React from 'react';
import TransactionList from '../components/TransactionList';
import GoalTracker from '../components/GoalTracker';

const Dashboard = () => {
  // Sample Transactions
  const transactions = [
    { id: 1, description: 'Groceries', amount: -250 },
    { id: 2, description: 'Salary', amount: 5000 },
    { id: 3, description: 'Electricity Bill', amount: -600 },
    { id: 4, description: 'Freelance Payment', amount: 1200 },
  ];

  // Sample Financial Goals
  const goals = [
    { id: 1, name: 'Emergency Fund', progress: 60 },
    { id: 2, name: 'Laptop Upgrade', progress: 30 },
    { id: 3, name: 'Vacation Savings', progress: 80 },
    { id: 4, name: 'Community Project', progress: 45 },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 tracking-tight">Community Finance Dashboard</h1>
        <p className="text-sm text-gray-500 mt-1">Track your goals and transactions in real time</p>
      </header>

      {/* Main Grid */}
      <main className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Transactions Section */}
        <section className="bg-white shadow-md rounded-lg p-6 transition hover:shadow-lg">
          <TransactionList transactions={transactions} />
        </section>

        {/* Goals Section */}
        <section className="bg-white shadow-md rounded-lg p-6 transition hover:shadow-lg">
          <GoalTracker goals={goals} />
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-12 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} UbuntuFlow • Built with legacy-grade clarity
      </footer>
    </div>
  );
};

export default Dashboard;
