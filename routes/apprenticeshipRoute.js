const express = require('express');
const apprenticeshipController = require('../controllers/apprenticeshipController');

const router = express.Router();

router
    .route('/')
    .get(apprenticeshipController.getAllApprenticeships)
    .post(apprenticeshipController.createApprenticeship);

router
    .route('/:id')
    .get(apprenticeshipController.getApprenticeship)
    .delete(apprenticeshipController.deleteApprenticeship)
    .patch(apprenticeshipController.updateApprenticeship);

module.exports = router;
