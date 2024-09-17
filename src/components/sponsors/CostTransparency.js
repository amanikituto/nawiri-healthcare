import React from 'react';
import './SponsorDashboard.css'; // Import the CSS file

function CostTransparency() {
  const spendingData = [
    { category: 'Outpatient Care', amount: 5000 },
    { category: 'Inpatient Care', amount: 12000 },
    { category: 'Medication', amount: 3000 },
  ];

  return (
    <div className="cost-transparency">
      <h2 className="cost-head">Cost Transparency</h2>
      <ul className="spending-list">
        {spendingData.map((item, index) => (
          <li key={index} className="spending-item">
            <span className="category">{item.category}</span> - 
            <span className="amount">Kshs.{item.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CostTransparency;
