import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import WalletPage from './components/WalletPage.js';
import TransactionsPage from './components/TransactionsPage.js';
import './App.css';  // For any custom styling

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar for navigation between pages */}
        <nav className="navbar">
          <h1>eWallet</h1>
          <ul>
            <li>
              <Link to="/">Wallet</Link>
            </li>
            <li>
              <Link to="/transactions">Transactions</Link>
            </li>
          </ul>
        </nav>

        {/* Routes to handle different pages */}
        <Routes>
          <Route path="/" element={<WalletPage />} />
          <Route path="/transactions" element={<TransactionsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
