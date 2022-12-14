const express = require('express');
const jobController = require('../controllers/jobController');

const router = express.Router();

router
    .route('/')
    .get(jobController.getAllJobs)
    .post(jobController.createJob);

router
    .route('/:id')
    .get(jobController.getJob)
    .delete(jobController.deleteJob)
    .patch(jobController.updateJob);

module.exports = router;
