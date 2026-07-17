import React, { useState } from 'react';

const EventDetail = ({ navigateTo }) => {
  const [registered, setRegistered] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(5);

  const handleRegister = () => {
    setRegistered(true);
    alert('Registration Request Submitted! Status: Pending');
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    alert(`Feedback Submitted! Rating: ${rating}/5`);
    setFeedback('');
  };

  return (
    <div className="event-detail-container">
      <button onClick={() => navigateTo('events')} className="back-btn">Back to Events</button>
      <h2>Annual Sports Meet</h2>
      <p><strong>Date:</strong> 2023-11-15 | <strong>Location:</strong> Main Ground</p>
      <p><strong>Category:</strong> Sports</p>
      <p className="description">Join us for the annual inter-college sports meet featuring athletics, football, and basketball.</p>
      
      <div className="registration-section">
        <h3>Registration</h3>
        {registered ? (
          <p className="status pending">Status: Pending Approval</p>
        ) : (
          <button onClick={handleRegister} className="register-btn">Book Slot</button>
        )}
      </div>

      <div className="feedback-section">
        <h3>Event Discussion & Feedback</h3>
        <form onSubmit={handleFeedbackSubmit}>
          <div className="rating">
            <label>Rating (1-5): </label>
            <input type="number" min="1" max="5" value={rating} onChange={(e) => setRating(e.target.value)} required />
          </div>
          <textarea 
            placeholder="Add a comment or feedback..." 
            value={feedback} 
            onChange={(e) => setFeedback(e.target.value)} 
            required 
          ></textarea>
          <button type="submit">Submit Feedback</button>
        </form>
      </div>
    </div>
  );
};

export default EventDetail;
