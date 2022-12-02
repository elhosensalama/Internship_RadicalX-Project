const Internship = require('../models/internshipModel');
const factory = require('../controllers/factory');

exports.getAllInternships = factory.getAll(Internship);

exports.getInternship = factory.getOne(Internship);

exports.createInternship = factory.createOne(Internship);

exports.deleteInternship = factory.deleteOne(Internship);

exports.updateInternship = factory.updateOne(Internship);
