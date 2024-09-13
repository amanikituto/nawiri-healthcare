// src/components/sponsors/ClaimsManagement.js
import React, { useState } from 'react';


function ClaimsManagement() {
  const [claims, setClaims] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const claimId = e.target.claimId.value;
    const claimAmount = e.target.claimAmount.value;
    setClaims([...claims, { claimId, claimAmount }]);
    e.target.reset();
  };

  return (
    <div className="claims-management">
      <h2>Claims Management</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Claim ID:
          <input type="text" name="claimId" required />
        </label>
        <label>
          Claim Amount:
          <input type="number" name="claimAmount" required />
        </label>
        <button type="submit">Submit Claim</button>
      </form>

      <h3>Submitted Claims</h3>
      <ul>
        {claims.map((claim, index) => (
          <li key={index}>Claim ID: {claim.claimId}, Amount: ${claim.claimAmount}</li>
        ))}
      </ul>
    </div>
  );
}

export default ClaimsManagement;
