import React, { useState } from 'react';

const EventList = ({ navigateTo }) => {
  const [events] = useState([
    { id: 1, title: 'Annual Sports Meet', category: 'Sports', date: '2023-11-15', location: 'Main Ground' },
    { id: 2, title: 'Tech Hackathon', category: 'Hackathon', date: '2023-11-20', location: 'CS Lab 1' },
    { id: 3, title: 'Cultural Fest', category: 'Cultural', date: '2023-12-05', location: 'Auditorium' },
  ]);

  return (
    <div className="event-list-container">
      <h2>Upcoming Events</h2>
      <button onClick={() => navigateTo('dashboard')} className="back-btn">Back to Dashboard</button>
      <div className="filters">
        <input type="text" placeholder="Search events..." />
        <select>
          <option value="">All Categories</option>
          <option value="Sports">Sports</option>
          <option value="Hackathon">Hackathon</option>
          <option value="Cultural">Cultural</option>
        </select>
      </div>
      <div className="events-grid">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <h3>{event.title}</h3>
            <p><strong>Category:</strong> {event.category}</p>
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Location:</strong> {event.location}</p>
            <button onClick={() => navigateTo(`event-detail-${event.id}`)}>View & Register</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventList;
