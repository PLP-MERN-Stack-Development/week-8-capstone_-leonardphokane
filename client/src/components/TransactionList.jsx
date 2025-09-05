import React from 'react';

const TransactionList = ({ transactions }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Transactions</h2>
      {transactions.length === 0 ? (
        <p className="text-sm text-gray-500 italic">No transactions found. Start by adding one above.</p>
      ) : (
        <ul className="divide-y divide-gray-200">
          {transactions.map((tx) => (
            <li
              key={tx.id}
              className="py-3 px-2 flex justify-between items-center text-sm text-gray-700 hover:bg-gray-50 rounded transition"
            >
              <span>{tx.description}</span>
              <span
                className={`font-medium ${
                  tx.amount < 0 ? 'text-red-500' : 'text-green-600'
                }`}
              >
                R{tx.amount}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TransactionList;
