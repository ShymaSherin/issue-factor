const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const issueRoutes = require('./routes/issueRoutes');

const app = express();
const PORT = 5000;

app.use(express.json());

// Connect MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.error('MongoDB Error:', err));

app.get('/', (req, res) => {
  res.send('Welcome to the Community Issue Tracker API 🚀');
});

// Routes
app.use('/api/issues', issueRoutes);

app.listen(PORT, () => {
    console.log(`Server is running: http://localhost:${PORT}`);
});
