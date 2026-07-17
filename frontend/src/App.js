import React, { useState } from 'react';
import LoginSignup from './components/LoginSignup/LoginSignup.js';
import Registration from './components/Registration/Registration.js';
import UserDashboard from './components/Dashboard/UserDashboard.js';
import AdminDashboard from './components/Dashboard/AdminDashboard.js';
import EventList from './components/Event/EventList.js';
import EventForm from './components/Event/EventForm.js';
import EventDetail from './components/Event/EventDetail.js';
import ParticipantManagement from './components/Admin/ParticipantManagement.js';
import FeedbackAnalysis from './components/Admin/FeedbackAnalysis.js';
import './App.css';

function App() {
  // Views: login, register, dashboard, events, event-detail-id, create-event, manage-participants, feedback-analysis
  const [currentView, setCurrentView] = useState('login');
  const [user, setUser] = useState(null);

  const navigateTo = (view) => {
    setCurrentView(view);
  };

  const handleLogin = (userData) => {
    setUser(userData);
    setCurrentView('dashboard');
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentView('login');
  };

  const renderView = () => {
    if (currentView === 'login') return <LoginSignup onToggleView={() => navigateTo('register')} onLogin={handleLogin} />;
    if (currentView === 'register') return <Registration onToggleView={() => navigateTo('login')} />;
    
    if (user && currentView === 'dashboard') {
      return user.role === 'college_admin' ? 
        <AdminDashboard user={user} onLogout={handleLogout} navigateTo={navigateTo} /> : 
        <UserDashboard user={user} onLogout={handleLogout} navigateTo={navigateTo} />;
    }

    if (currentView === 'events') return <EventList navigateTo={navigateTo} />;
    if (currentView.startsWith('event-detail')) return <EventDetail navigateTo={navigateTo} />;
    if (currentView === 'create-event') return <EventForm navigateTo={navigateTo} />;
    if (currentView === 'manage-participants') return <ParticipantManagement navigateTo={navigateTo} />;
    if (currentView === 'feedback-analysis') return <FeedbackAnalysis navigateTo={navigateTo} />;

    return <LoginSignup onToggleView={() => navigateTo('register')} onLogin={handleLogin} />;
  };

  return (
    <div className="App">
      {renderView()}
    </div>
  );
}

export default App;