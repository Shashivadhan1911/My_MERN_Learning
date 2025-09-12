import React from 'react';

function Welcome() {
  const user = JSON.parse(localStorage.getItem('user'));

  if (!user) {
    return (
      <div className="welcome-container">
        <h2>User not logged in</h2>
        <p>Please login to see your details.</p>
      </div>
    );
  }

  return (
    <div className="welcome-container">
      <h2>Welcome, {user.name}!</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Role:</strong> {user.role}</p>
    </div>
  );
}

export default Welcome;
