const express = require('express');
const internshipController = require('../controllers/internshipController');

const router = express.Router();

router
    .route('/')
    .get(internshipController.getAllInternships)
    .post(internshipController.createInternship);

router
    .route('/:id')
    .get(internshipController.getInternship)
    .delete(internshipController.deleteInternship)
    .patch(internshipController.updateInternship);

module.exports = router;
