// src/components/sponsors/CostTransparency.js
import React from 'react';

function CostTransparency() {
  const spendingData = [
    { category: 'Outpatient Care', amount: 5000 },
    { category: 'Inpatient Care', amount: 12000 },
    { category: 'Medication', amount: 3000 },
  ];

  return (
    <div className="cost-transparency">
      <h2>Cost Transparency</h2>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Amount (KES)</th>
          </tr>
        </thead>
        <tbody>
          {spendingData.map((item, index) => (
            <tr key={index}>
              <td>{item.category}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CostTransparency;
