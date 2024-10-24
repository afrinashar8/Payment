import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TransactionsPage = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
     axios.get("http://localhost:5000/api/users/me").then(res => setTransactions(res.data));
  }, []);

  return (
    <div>
      <h2>Your Transactions</h2>
      <ul>
        {transactions.map(t => (
          <li key={t?._id}>
            {t.senderId.name} sent ${t.amount} to {t.receiverId.name} on {new Date(t.date).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionsPage;
