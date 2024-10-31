// app.js
const express = require('express');
const userRoutes = require('./src/routes/userRoutes');
const { errorHandler } = require('./utils/errorHandler');

const app = express();

// Middleware
app.use(express.json()); // Parse JSON bodies

// Routes
app.use('/api/users', userRoutes);

// Error handling middleware
app.use(errorHandler);

module.exports = app;
