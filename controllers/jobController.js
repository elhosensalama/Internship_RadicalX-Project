const Job = require('../models/jobModel');
const factory = require('../controllers/factory');

exports.getAllJobs = factory.getAll(Job);

exports.getJob = factory.getOne(Job);

exports.createJob = factory.createOne(Job);

exports.deleteJob = factory.deleteOne(Job);

exports.updateJob = factory.updateOne(Job);
