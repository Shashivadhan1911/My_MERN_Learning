import { useState } from 'react';

export default function Dashboard({ user, onLogout }) {
  const [balance, setBalance] = useState(user.balance);

  const logout = () => {
    localStorage.removeItem('token');
    onLogout();
  };

  return (
    <div>
      <h2>Welcome, {user.name || 'User'}</h2>
      <p>Phone: {user.phone}</p>
      <p>Balance: ${balance}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
