import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownWideShort, faArrowUpWideShort , faPills, faClockRotateLeft, faFlaskVial} from '@fortawesome/free-solid-svg-icons';
import brown from '../../assets/Premium Photo _ Young african doctor on an isolated white with a phonendoscope.jpeg';
import garcia from '../../assets/Retrato confiante jovem médica feminina em um fundo branco gerado por IA _ imagem Premium gerada com IA.jpeg';
import './PatientDashboard.css'; // Add a CSS file for styling if needed

const MedicalRecords = () => {
  const [activeTab, setActiveTab] = useState('LabResults'); // Default tab state
  const [sortOrder, setSortOrder] = useState('mostRecent'); // Default sort order
  
  // Sample data for each section
  const labResults = [
    { date: '2024-09-01', test: 'Blood Test', result: 'Normal', doctor: 'Dr. Smith' },
    { date: '2024-08-15', test: 'X-Ray', result: 'No abnormalities', doctor: 'Dr. Lee' },
  ];

  const prescriptions = [
    { date: '2024-09-05', medication: 'Amoxicillin', dosage: '500mg', doctor: 'Dr. Jones' },
    { date: '2024-08-20', medication: 'Ibuprofen', dosage: '200mg', doctor: 'Dr. Patel' },
  ];

  const medicalHistory = [
    { date: '2023-12-10', condition: 'Hypertension', doctor: 'Dr. Brown', img: brown },
    { date: '2022-06-25', condition: 'Diabetes Type II', doctor: 'Dr. Garcia', img: garcia },
  ];

  // Function to handle sorting
  const handleSort = (records) => {
    return records.sort((a, b) => {
      if (sortOrder === 'mostRecent') {
        return new Date(b.date) - new Date(a.date); // Most recent first
      }
      return new Date(a.date) - new Date(b.date); // Oldest first
    });
  };

  return (
    <div>
      {/* Header section for sorting and filtering */}
      <div className="medical-records-header">
        {/* Toggle buttons for Lab Results, Prescriptions, and Medical History */}
        <div className="medical-records-toggle">
          <button
            className={activeTab === 'LabResults' ? 'active' : ''}
            onClick={() => setActiveTab('LabResults')}
          >
            Lab Results&nbsp;&nbsp;  <FontAwesomeIcon icon={faFlaskVial} />
          </button>
          <button
            className={activeTab === 'Prescriptions' ? 'active' : ''}
            onClick={() => setActiveTab('Prescriptions')}
          >
            Prescriptions&nbsp;&nbsp;  <FontAwesomeIcon icon={faPills} />
          </button>
          <button
            className={activeTab === 'MedicalHistory' ? 'active' : ''}
            onClick={() => setActiveTab('MedicalHistory')}
          >
            Medical History&nbsp;&nbsp;  <FontAwesomeIcon icon={faClockRotateLeft} />
          </button>
        </div>

        {/* Sort button with icon */}
        <div className="sort-toggle">
          <button onClick={() => setSortOrder(sortOrder === 'mostRecent' ? 'oldest' : 'mostRecent')}>
            {sortOrder === 'mostRecent' ? 'Newest' : 'Oldest'}&nbsp;&nbsp; 
            <FontAwesomeIcon icon={sortOrder === 'mostRecent' ? faArrowDownWideShort : faArrowUpWideShort} />
          </button>
        </div>
      </div>

      {/* Medical records container */}
      <div className="medical-records-container">
        {activeTab === 'LabResults' && (
          <div className="lab-results">
            <ul className="horizontal-list">
              {handleSort(labResults).map((result, index) => (
                <li key={index}>
                  <label className="custom-checkbox">
                    <input
                      type="checkbox"
                      name={`result${index}`}
                    />
                    <span className="checkmark"></span>
                  </label>
                  <strong>Date:</strong>{result.date}&nbsp;&nbsp; 
                  <strong>&nbsp; Test:</strong> {result.test}&nbsp;&nbsp;
                  <strong>&nbsp; Result:</strong>{result.result}
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === 'Prescriptions' && (
          <div className="prescriptions">
            <ul className="horizontal-list">
              {handleSort(prescriptions).map((prescription, index) => (
                <li key={index}>
                  <label className="custom-checkbox">
                    <input
                      type="checkbox"
                      name={`prescription${index}`}
                    />
                    <span className="checkmark"></span>
                  </label>
                  <strong>Date:</strong>{prescription.date}&nbsp;&nbsp;
                  <strong> &nbsp;Medication:</strong>{prescription.medication}&nbsp;&nbsp; 
                  <strong> &nbsp;Dosage:</strong>{prescription.dosage}
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === 'MedicalHistory' && (
          <div className="medical-history">
            <ul className="horizontal-list">
              {handleSort(medicalHistory).map((history, index) => (
                <li key={index} className="medical-history-item">
                  <label className="custom-checkbox">
                    <input
                      type="checkbox"
                      name={`history${index}`}
                    />
                    <span className="checkmark"></span>
                  </label>
                  <strong>Date:</strong> {history.date}&nbsp;&nbsp; 
                  <strong>&nbsp; Condition:</strong>{history.condition}&nbsp;&nbsp; 
                  <strong>&nbsp; Doctor:</strong> {history.doctor}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default MedicalRecords;
