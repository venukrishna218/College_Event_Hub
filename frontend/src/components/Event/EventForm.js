import React, { useState } from 'react';

const EventForm = ({ navigateTo }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    location: '',
    start_date: '',
    end_date: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Event Created Successfully!');
    navigateTo('dashboard');
  };

  return (
    <div className="form-container">
      <h2>Create New Event</h2>
      <button onClick={() => navigateTo('dashboard')} className="back-btn">Back</button>
      <form onSubmit={handleSubmit} className="event-form">
        <input type="text" name="title" placeholder="Event Title" onChange={handleChange} required />
        <textarea name="description" placeholder="Event Description" onChange={handleChange} required></textarea>
        <select name="category" onChange={handleChange} required>
          <option value="">Select Category</option>
          <option value="Sports">Sports</option>
          <option value="Hackathon">Hackathon</option>
          <option value="Cultural">Cultural</option>
          <option value="Workshop">Workshop</option>
        </select>
        <input type="text" name="location" placeholder="Location/Venue" onChange={handleChange} required />
        <label>Start Date & Time:</label>
        <input type="datetime-local" name="start_date" onChange={handleChange} required />
        <label>End Date & Time:</label>
        <input type="datetime-local" name="end_date" onChange={handleChange} required />
        <button type="submit">Create Event</button>
      </form>
    </div>
  );
};

export default EventForm;
