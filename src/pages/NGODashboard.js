// src/pages/NGODashboard.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/NGODashboard.css';

const NGODashboard = () => {
  // === STATE ===
  const [donations, setDonations] = useState([]);
  const [requests, setRequests] = useState([]);
  const [impactStats, setImpactStats] = useState({});
  const [newRequest, setNewRequest] = useState({ foodType: '', quantity: '', urgency: 'medium' });
  const [newsletterEmail, setNewsletterEmail] = useState('');

  // === INIT & PERSISTENCE ===
  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    const savedRequests = JSON.parse(localStorage.getItem('foodSaver_ngo_requests')) || generateDemoRequests();
    const savedDonations = JSON.parse(localStorage.getItem('foodSaver_ngo_donations')) || [];
    const savedImpact = JSON.parse(localStorage.getItem('foodSaver_ngo_impact')) || generateDemoImpact();
    setRequests(savedRequests);
    setDonations(savedDonations);
    setImpactStats(savedImpact);
  };

  const saveData = () => {
    localStorage.setItem('foodSaver_ngo_requests', JSON.stringify(requests));
    localStorage.setItem('foodSaver_ngo_donations', JSON.stringify(donations));
    localStorage.setItem('foodSaver_ngo_impact', JSON.stringify(impactStats));
  };

  // === DEMO DATA ===
  const generateDemoRequests = () => [
    { id: 1, foodType: 'Vegetarian Meals', quantity: 20, urgency: 'high', status: 'pending', date: '2025-11-13' },
    { id: 2, foodType: 'Dry Rations', quantity: 15, urgency: 'medium', status: 'fulfilled', date: '2025-11-10' },
  ];

  const generateDemoImpact = () => ({
    mealsServed: 1240,
    familiesHelped: 87,
    co2Saved: 320,
    avgResponseTime: 4.2
  });

  // === REQUEST ACTIONS ===
  const addRequest = (e) => {
    e.preventDefault();
    if (!newRequest.foodType || !newRequest.quantity) return;
    const request = {
      id: Date.now(),
      ...newRequest,
      status: 'pending',
      date: new Date().toISOString().split('T')[0]
    };
    setRequests([request, ...requests]);
    setNewRequest({ foodType: '', quantity: '', urgency: 'medium' });
    saveData();
  };

  const cancelRequest = (id) => {
    setRequests(requests.filter(r => r.id !== id));
    saveData();
  };

  const markAsFulfilled = (id) => {
    setRequests(requests.map(r => 
      r.id === id ? { ...r, status: 'fulfilled' } : r
    ));
    // Add to donations log
    const req = requests.find(r => r.id === id);
    if (req) {
      setDonations([
        {
          id: Date.now(),
          foodType: req.foodType,
          quantity: req.quantity,
          date: new Date().toISOString().split('T')[0],
          restaurant: 'Spice Garden'
        },
        ...donations
      ]);
    }
    saveData();
  };

  const resetData = () => {
    if (window.confirm('Reset all data to demo state?')) {
      const demoRequests = generateDemoRequests();
      setRequests(demoRequests);
      setDonations([]);
      const demoImpact = generateDemoImpact();
      setImpactStats(demoImpact);
      localStorage.setItem('foodSaver_ngo_requests', JSON.stringify(demoRequests));
      localStorage.setItem('foodSaver_ngo_donations', JSON.stringify([]));
      localStorage.setItem('foodSaver_ngo_impact', JSON.stringify(demoImpact));
    }
  };

  // === KPI CALCULATIONS ===
  const activeRequests = requests.filter(r => r.status === 'pending').length;
  const fulfilledRequests = requests.filter(r => r.status === 'fulfilled').length;
  const totalMeals = impactStats.mealsServed || 0;
  const familiesHelped = impactStats.familiesHelped || 0;

  // === NEWSLETTER ===
  const submitNewsletter = (e) => {
    e.preventDefault();
    if (!newsletterEmail || !/\S+@\S+\.\S+/.test(newsletterEmail)) return;
    const emails = JSON.parse(localStorage.getItem('foodSaver_ngo_emails') || '[]');
    if (!emails.includes(newsletterEmail)) {
      emails.push(newsletterEmail);
      localStorage.setItem('foodSaver_ngo_emails', JSON.stringify(emails));
    }
    setNewsletterEmail('');
    alert(`Thank you! Updates will be sent to ${newsletterEmail}.`);
  };

  return (
    <div className="ngo-dashboard">
      {/* Header */}
      <header className="dashboard-header">
        <div>
          <h1 className="dashboard-title">NGO Dashboard</h1>
          <p className="dashboard-subtitle">Manage food requests, track impact, and serve your community</p>
        </div>
        <div className="header-actions">
          <button onClick={resetData} className="btn btn-outline">
            <i className="fas fa-redo"></i> Reset Data
          </button>
          <Link to="/donate" className="btn btn-donate">
            <i className="fas fa-hands-helping"></i> REQUEST FOOD
          </Link>
        </div>
      </header>

      {/* KPI Cards */}
      <div className="kpi-grid">
        <KPICard 
          title="Active Requests" 
          value={activeRequests} 
          subtitle="Awaiting fulfillment"
          icon="📢"
        />
        <KPICard 
          title="Fulfilled Requests" 
          value={fulfilledRequests} 
          subtitle="Successfully received"
          icon="✅"
        />
        <KPICard 
          title="Meals Served" 
          value={totalMeals.toLocaleString()} 
          subtitle="This month"
          icon="🍲"
        />
        <KPICard 
          title="Families Helped" 
          value={familiesHelped} 
          subtitle="Impact this quarter"
          icon="👨‍👩‍👧‍👦"
        />
      </div>

      <div className="dashboard-body">
        {/* Left Column: Requests + Impact + Quick Actions */}
        <div className="main-column">
          {/* Requests Table */}
          <section className="card">
            <div className="section-header">
              <h2>Food Requests</h2>
            </div>
            <div className="table-container">
              <table className="requests-table">
                <thead>
                  <tr>
                    <th>Food Needed</th>
                    <th>Qty</th>
                    <th>Urgency</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {requests.length === 0 ? (
                    <tr>
                      <td colSpan="6" className="no-data">No active requests. Create your first food request!</td>
                    </tr>
                  ) : (
                    requests.map(req => (
                      <tr key={req.id} className={req.status === 'fulfilled' ? 'fulfilled' : ''}>
                        <td>{req.foodType}</td>
                        <td>{req.quantity} meals</td>
                        <td>
                          <span className={`urgency-badge ${req.urgency}`}>
                            {req.urgency.charAt(0).toUpperCase() + req.urgency.slice(1)}
                          </span>
                        </td>
                        <td>
                          <span className={`status-badge ${req.status}`}>
                            {req.status.charAt(0).toUpperCase() + req.status.slice(1)}
                          </span>
                        </td>
                        <td>{new Date(req.date).toLocaleDateString()}</td>
                        <td className="action-cell">
                          {req.status === 'pending' ? (
                            <>
                              <button 
                                onClick={() => markAsFulfilled(req.id)}
                                className="btn-icon btn-success"
                                title="Mark as fulfilled"
                              >
                                ✓
                              </button>
                              <button 
                                onClick={() => cancelRequest(req.id)}
                                className="btn-icon btn-danger"
                                title="Cancel request"
                              >
                                ✕
                              </button>
                            </>
                          ) : (
                            <span>✅ Done</span>
                          )}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </section>

          {/* Impact Stats */}
          <section className="card">
            <div className="section-header">
              <h2>Impact Overview</h2>
            </div>
            <div className="impact-grid">
              <div className="impact-metric">
                <div className="metric-icon">🌱</div>
                <div>
                  <div className="metric-value">{impactStats.co2Saved || 0} kg</div>
                  <div className="metric-label">CO₂ Saved</div>
                </div>
              </div>
              <div className="impact-metric">
                <div className="metric-icon">⏱️</div>
                <div>
                  <div className="metric-value">{impactStats.avgResponseTime || 0} hrs</div>
                  <div className="metric-label">Avg. Response Time</div>
                </div>
              </div>
              <div className="impact-metric">
                <div className="metric-icon">📍</div>
                <div>
                  <div className="metric-value">12</div>
                  <div className="metric-label">Areas Served</div>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Actions */}
          <section className="card quick-actions-card">
            <h2>Quick Actions</h2>
            <div className="quick-actions-grid">
              <button 
                onClick={() => setNewRequest({ ...newRequest, urgency: 'high' })}
                className="quick-action urgent"
              >
                <div className="icon">❗</div>
                <span>Urgent Request</span>
              </button>
              <Link to="/map" className="quick-action">
                <div className="icon">🗺️</div>
                <span>Live Donation Map</span>
              </Link>
              <Link to="/reports" className="quick-action">
                <div className="icon">📊</div>
                <span>Impact Reports</span>
              </Link>
            </div>
          </section>
        </div>

        {/* Right Column: Request Form + Donations Log + Newsletter */}
        <div className="sidebar-column">
          {/* Request Form */}
          <section className="card">
            <div className="section-header">
              <h2>New Food Request</h2>
            </div>
            <form onSubmit={addRequest} className="request-form">
              <input
                type="text"
                value={newRequest.foodType}
                onChange={(e) => setNewRequest({ ...newRequest, foodType: e.target.value })}
                placeholder="e.g., Cooked Vegetarian Meals"
                required
              />
              <div className="form-row">
                <input
                  type="number"
                  value={newRequest.quantity}
                  onChange={(e) => setNewRequest({ ...newRequest, quantity: e.target.value })}
                  placeholder="Meals needed"
                  min="1"
                  required
                />
                <select
                  value={newRequest.urgency}
                  onChange={(e) => setNewRequest({ ...newRequest, urgency: e.target.value })}
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High (Urgent)</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary full-width">
                Submit Request
              </button>
            </form>
          </section>

          {/* Donations Log */}
          <section className="card">
            <h2>Recent Donations Received</h2>
            <div className="donations-list">
              {donations.length === 0 ? (
                <p className="no-data">No donations received yet.</p>
              ) : (
                donations.slice(0, 4).map(donation => (
                  <div key={donation.id} className="donation-item">
                    <div className="donation-info">
                      <strong>{donation.foodType}</strong>
                      <span>{donation.quantity} meals</span>
                    </div>
                    <div className="donation-meta">
                      <span className="restaurant">{donation.restaurant}</span>
                      <span className="date">
                        {new Date(donation.date).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>
            {donations.length > 0 && (
              <Link to="/donations" className="view-all">View All ({donations.length})</Link>
            )}
          </section>

          {/* Newsletter */}
          <section className="card">
            <h2>Stay Updated</h2>
            <p>Get NGO success stories & FoodSaver alerts</p>
            <form onSubmit={submitNewsletter} className="newsletter-form">
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="contact@yourngo.org"
                required
              />
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

// Reusable KPICard Component
const KPICard = ({ title, value, subtitle, icon }) => (
  <div className="kpi-card">
    <div className="kpi-icon">{icon}</div>
    <div className="kpi-content">
      <div className="kpi-value">{value}</div>
      <div className="kpi-title">{title}</div>
      <div className="kpi-subtitle">{subtitle}</div>
    </div>
  </div>
);

export default NGODashboard;