import React from 'react';

const FeedbackAnalysis = ({ navigateTo }) => {
  const feedbackData = [
    { id: 1, event: 'Tech Hackathon', averageRating: 4.5, totalFeedback: 120 },
    { id: 2, event: 'Cultural Fest', averageRating: 4.8, totalFeedback: 300 },
  ];

  return (
    <div className="analysis-container">
      <h2>Feedback Analysis</h2>
      <button onClick={() => navigateTo('dashboard')} className="back-btn">Back to Dashboard</button>
      <div className="stats-cards">
        <div className="card">
          <h4>Total Feedback Received</h4>
          <p>420</p>
        </div>
        <div className="card">
          <h4>Average Rating</h4>
          <p>4.65 / 5</p>
        </div>
      </div>
      <table className="feedback-table">
        <thead>
          <tr>
            <th>Event Name</th>
            <th>Average Rating</th>
            <th>Total Reviews</th>
          </tr>
        </thead>
        <tbody>
          {feedbackData.map(f => (
            <tr key={f.id}>
              <td>{f.event}</td>
              <td>{f.averageRating} / 5</td>
              <td>{f.totalFeedback}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeedbackAnalysis;
