import React from 'react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import RafikiChatbot from './RafikiChatbot'; // Import the chatbot component
import './ProviderDashboard.css'; // Import the CSS for card styling
import { Link } from 'react-router-dom';
import analytics from '../../assets/Analytics is Worth Looking at Even for Interior Design Firms - Dig This Design (1).jpeg'
import patient from '../../assets/Tips on Improving Patient Education as a Nurse.jpeg';
import practice from '../../assets/Female doctor consultation in the.jpeg';


const ProviderDashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="dashboard-container">
        <div className="dashboard-columns">
          
          {/* Card 1: Practice Management */}
          <div className="dashboard-column">
            <Link to="/practice" className="card-link">
              <div className="card practice-management">
                <h2 className="card__title">Practice Management</h2>
                <img className='practice' src={practice} alt='practice' />
                <p className="card__subtitle">
                  Streamline appointment scheduling, patient communication, billing, and EMR management.
                </p>
                <p className='features'>Features</p>
                <ul className="card__form">
                  <li>Appointment Scheduling</li>
                  <li>Patient Communication</li>
                  <li>Billing</li>
                  <li>EMR Management</li>
                </ul>
              </div>
            </Link>
          </div>
          
          {/* Card 2: Patient Engagement */}
          <div className="dashboard-column">
            <Link to="/AiDiagnosis" className="card-link">
              <div className="card patient-engagement">
                <h2 className="card__title">AI Diagnosis</h2>
                <img className='patient' src={patient} alt='patient' />
                <p className="card__subtitle">
                  Enhance patient tratment using Ai.
                </p>
                <p className='features'>Features</p>
                <ul className="card__form">
                  <li>Assisted diagnosis </li>
                  
                </ul>
              </div>
            </Link>
          </div>
          
          {/* Card 3: Data Analytics */}
          <div className="dashboard-column">
            <Link to="/analytics" className="card-link">
              <div className="card data-analytics">
                <h2 className="card__title">Data Analytics</h2>
                <img className='analytics' src={analytics} alt='analytics' />
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
            </Link>
          </div>
          
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProviderDashboard;
