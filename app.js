const express = require('express');
const morgan = require('morgan');

const apprenticeshipRoute = require('./routes/apprenticeshipRoute');
const internshipRoute = require('./routes/internshipRoute');
const jobRoute = require('./routes/jobRoute');

const app = express();

// Development Logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Get Data From body into req.body
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// Routes

app.use('/api/v1/apprenticeships', apprenticeshipRoute);
app.use('/api/v1/internships', internshipRoute);
app.use('/api/v1/jobs', jobRoute);

module.exports = app;
