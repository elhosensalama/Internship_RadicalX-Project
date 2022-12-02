const express = require('express');
const morgan = require('morgan');

const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');

const AppError = require('./utls/appError');
const errorController = require('./controllers/errorController');

const apprenticeshipRoute = require('./routes/apprenticeshipRoute');
const internshipRoute = require('./routes/internshipRoute');
const jobRoute = require('./routes/jobRoute');

const app = express();

// Setting Security http headers
app.use(helmet());

// Development Logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}
// Implement Rate Limiting
const limiter = rateLimit({
    max: 100,
    windowMs: 60 * 60 * 1000,
    message: 'to many requests from this IP, Please try again in one hour!'
});
app.use('/api', limiter);

// Get Data From body into req.body
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// Data sanitization (NoSQL query injection)
app.use(mongoSanitize());

// Data sanitization (XSS)
app.use(xss());

// Prevent http paramter pollution
app.use(
    hpp({
        whitelist: []
    })
);

// Routes

app.use('/api/v1/apprenticeships', apprenticeshipRoute);
app.use('/api/v1/internships', internshipRoute);
app.use('/api/v1/jobs', jobRoute);

// unhandled Routes
app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// Error Handle Middleware
app.use(errorController);

module.exports = app;
