import React from 'react';

const AdminDashboard = ({ user, onLogout, navigateTo }) => {
  return (
    <div className="dashboard-container">
      <nav className="navbar">
        <h2>CampusEventHub Admin</h2>
        <div>
          <span>Welcome, {user?.name || "Admin"}</span>
          <button onClick={() => navigateTo('create-event')}>Create Event</button>
          <button onClick={() => navigateTo('manage-participants')}>Participants</button>
          <button onClick={() => navigateTo('feedback-analysis')}>Feedback Analysis</button>
          <button onClick={onLogout}>Logout</button>
        </div>
      </nav>
      <div className="dashboard-content">
        <h3>College Admin Dashboard</h3>
        <p>Manage your college's events and registrations.</p>
        <div className="stats-cards">
          <div className="card">
            <h4>Total Events Hosted</h4>
            <p>0</p>
          </div>
          <div className="card">
            <h4>Pending Registrations</h4>
            <p>0</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
