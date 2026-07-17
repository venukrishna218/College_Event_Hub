import React, { useState } from 'react';

const ParticipantManagement = ({ navigateTo }) => {
  const [participants, setParticipants] = useState([
    { id: 1, name: 'John Doe', event: 'Tech Hackathon', status: 'pending' },
    { id: 2, name: 'Jane Smith', event: 'Cultural Fest', status: 'approved' },
  ]);

  const handleStatusChange = (id, newStatus) => {
    setParticipants(participants.map(p => p.id === id ? { ...p, status: newStatus } : p));
  };

  return (
    <div className="management-container">
      <h2>Participant Management</h2>
      <button onClick={() => navigateTo('dashboard')} className="back-btn">Back to Dashboard</button>
      <table className="participants-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Event</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {participants.map(p => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.event}</td>
              <td><span className={`status ${p.status}`}>{p.status}</span></td>
              <td>
                {p.status === 'pending' && (
                  <>
                    <button onClick={() => handleStatusChange(p.id, 'approved')} className="approve-btn">Approve</button>
                    <button onClick={() => handleStatusChange(p.id, 'rejected')} className="reject-btn">Reject</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ParticipantManagement;
