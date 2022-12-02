const Apprenticeship = require('../models/apprenticeshipModel');
const factory = require('./factory');

exports.getAllApprenticeships = factory.getAll(Apprenticeship);

exports.getApprenticeship = factory.getOne(Apprenticeship);

exports.createApprenticeship = factory.createOne(Apprenticeship);

exports.deleteApprenticeship = factory.deleteOne(Apprenticeship);

exports.updateApprenticeship = factory.updateOne(Apprenticeship);
