require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const connectDB = require("./config/db.jsx");

const authRoutes = require('./routes/authRoutes.jsx');
const resignationRoutes = require('./routes/resignationRoutes.jsx');
const exitInterviewRoutes = require('./routes/exitInterviewRoutes.jsx');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(helmet());

// Database Connection
connectDB();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/resignation', resignationRoutes);
app.use('/api/exitInterview', exitInterviewRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
