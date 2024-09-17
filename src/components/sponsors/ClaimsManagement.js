import React, { useState, useEffect } from 'react';
import './SponsorDashboard.css'; // Import the CSS file

function ClaimsManagement() {
  const [claims, setClaims] = useState(() => {
    // Get claims from localStorage or set an empty array
    const savedClaims = localStorage.getItem('claims');
    return savedClaims ? JSON.parse(savedClaims) : [];
  });

  const [selectedClaim, setSelectedClaim] = useState(null); // Track selected claim for dropdown
  const [showModal, setShowModal] = useState(false); // For showing the confirmation modal
  const [claimAction, setClaimAction] = useState({}); // To track which claim is being acted upon

  const handleSubmit = (e) => {
    e.preventDefault();
    const claimId = e.target.claimId.value;
    const claimAmount = e.target.claimAmount.value;
    const newClaim = { claimId, claimAmount, status: 'pending' };
    const updatedClaims = [...claims, newClaim];
    setClaims(updatedClaims);
    localStorage.setItem('claims', JSON.stringify(updatedClaims)); // Save to localStorage
    e.target.reset();
  };

  const handleCheckboxChange = (index) => {
    setSelectedClaim(selectedClaim === index ? null : index); // Toggle dropdown for the clicked checkbox
  };

  const handleMouseLeave = () => {
    setSelectedClaim(null); // Hide the dropdown when not hovering
  };

  const handleRejectClick = (claimIndex) => {
    setClaimAction({ action: 'reject', index: claimIndex });
    setShowModal(true); // Show confirmation modal
  };

  const handleAcceptClick = (claimIndex) => {
    updateClaimStatus(claimIndex, 'accepted');
  };

  const updateClaimStatus = (claimIndex, status) => {
    const updatedClaims = claims.map((claim, index) =>
      index === claimIndex ? { ...claim, status } : claim
    );
    setClaims(updatedClaims);
    localStorage.setItem('claims', JSON.stringify(updatedClaims)); // Persist updated claims to localStorage
    setSelectedClaim(null); // Close dropdown
  };

  const handleModalConfirm = () => {
    if (claimAction.action === 'reject') {
      updateClaimStatus(claimAction.index, 'rejected');
    }
    setShowModal(false); // Close the modal
  };

  const handleModalCancel = () => {
    setShowModal(false); // Close the modal
  };

  return (
    <div className="claims-management">
      <div className="form-box">
        <h2>Claims Management</h2>
        <form onSubmit={handleSubmit}>
          <label className='inputBox'>
            Claim ID:
            <input type="text" name="claimId" required />
          </label>
          <label>
            Claim Amount:
            <input type="number" name="claimAmount" required />
          </label>
          <button type="submit">Submit Claim</button>
        </form>
      </div>

      <div className="claims-box">
        <h3>Submitted Claims</h3>
        <div className="claims-list-box">
          <ul>
            {claims.map((claim, index) => (
              <li key={index} onMouseLeave={handleMouseLeave}>
                <label className="custom-checkbox">
                  <input
                    type="checkbox"
                    name={`claim${index}`}
                    onChange={() => handleCheckboxChange(index)}
                  />
                  <span className="checkmark"></span>
                </label>
                Claim ID: {claim.claimId}, Amount: Kshs.{claim.claimAmount} <br />
                Status: {claim.status}

                {selectedClaim === index && (
                  <div className="claim-dropdown-menu">
                    <ul>
                      <li onClick={() => handleAcceptClick(index)}>Accept Claim</li>
                      <li onClick={() => handleRejectClick(index)}>Reject Claim</li>
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showModal && (
        <div className="confirmation-modal">
          <div className="confirmation-modal-content">
            <p>Are you sure you want to reject this claim?</p>
            <button onClick={handleModalConfirm}>Yes</button>
            <button onClick={handleModalCancel}>No</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ClaimsManagement;
