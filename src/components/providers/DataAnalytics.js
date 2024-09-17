import React from 'react';
import analytics from '../../assets/Analytics is Worth Looking at Even for Interior Design Firms - Dig This Design (1).jpeg'
import './ProviderDashboard.css';

function DataAnalytics() {
  return (
    <div className="card data-analytics">
      <h2 className="card__title">Data Analytics</h2>
      <img className='analytics' src={analytics} alt='analytics'/>
      <p className="card__subtitle">
        Gain insights into patient populations, track health outcomes, and identify areas for quality improvement.
      </p>
      <p className='features'>Features</p>
      <ul className="card__form">
        <li>Patient Population Insights</li>
        <li>Health Outcomes Tracking</li>
        <li>Quality Improvement Identification</li>
      </ul>
    </div>
  );
}

export default DataAnalytics;
