import React from 'react';

const UserDashboard = ({ user, onLogout, navigateTo }) => {
  return (
    <div className="dashboard-container">
      <nav className="navbar">
        <h2>CampusEventHub</h2>
        <div>
          <span>Welcome, {user?.name || "Student"}</span>
          <button onClick={() => navigateTo('events')}>Browse Events</button>
          <button onClick={onLogout}>Logout</button>
        </div>
      </nav>
      <div className="dashboard-content">
        <h3>Student Dashboard</h3>
        <p>Welcome to your dashboard. From here you can browse and register for events.</p>
        <div className="stats-cards">
          <div className="card">
            <h4>Registered Events</h4>
            <p>0</p>
          </div>
          <div className="card">
            <h4>Upcoming Events</h4>
            <p>0</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
