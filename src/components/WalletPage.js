import React, { useEffect, useState } from 'react';
import axios from 'axios';

const WalletPage = () => {
  const [user, setUser] = useState(null);
  const [peers, setPeers] = useState([]);
  const [amount, setAmount] = useState('');
  const [selectedPeer, setSelectedPeer] = useState('');

  useEffect(() => {
      axios.get("http://localhost:5000/api/users/me").then(res => setUser(res.data));

  
    axios.get("http://localhost:5000/api/users").then(res => setPeers(res.data));
  }, []);

  const handleTransaction = () => {
    axios.post(`/api/transactions`, {
      senderId: user?._id,
      receiverId: selectedPeer,
      amount: amount
    }).then(response => {
      alert('Transaction successful!');
    }).catch(err => alert('Transaction failed'));
  };

  return (
    <div>
      <h1>Welcome, {user?.name}</h1>
      <h2>Wallet Balance: ${user?.walletBalance}</h2>

      <h3>Send Money</h3>
      <select onChange={(e) => setSelectedPeer(e.target.value)}>
        {peers.map(peer => <option key={peer?._id} value={peer?._id}>{peer.name}</option>)}
      </select>

      <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <button onClick={handleTransaction}>Send</button>
    </div>
  );
};

export default WalletPage;
