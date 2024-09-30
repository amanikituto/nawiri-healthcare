const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/', {
  dbName: 'nawiri_healthcare',
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define PatientDiagnostics model
const PatientDiagnostics = mongoose.model('patient_diagnostics', new mongoose.Schema({
  diagnosis: String,
  gender: String,
  resource_usage: Number,
  treatment: String,
  visit_date: Date,
}));

// Get common conditions
app.get('/api/analytics/common-conditions', async (req, res) => {
  try {
    const conditions = await PatientDiagnostics.aggregate([
      { $group: { _id: '$diagnosis', count: { $sum: 1 } } },
      { $sort: { count: -1 } },
    ]).limit(5); // Most common 5 conditions
    res.json(conditions);
  } catch (error) {
    console.error('Error fetching common conditions:', error);
    res.status(500).send(error);
  }
});

// Get resource trends
app.get('/api/analytics/resource-trends', async (req, res) => {
  try {
    const trends = await PatientDiagnostics.aggregate([
      { $group: { _id: { year: { $year: '$visit_date' }, month: { $month: '$visit_date' } }, totalResources: { $sum: '$resource_usage' } } },
      { $sort: { '_id.year': 1, '_id.month': 1 } },
    ]);
    res.json(trends);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
