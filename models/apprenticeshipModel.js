const mongoose = require('mongoose');

const apprenticeshipSchema = new mongoose.Schema(
    {
        apprenticeshipTitle: {
            type: String
        },
        companyLogo: {
            type: String
        },
        companyDescription: {
            type: String
        },
        apprenticeshipDescription: {
            type: String
        },
        introVideo: {
            type: String
        },
        teamType: {
            type: String
        },
        teamRoles: [
            {
                role: {
                    type: String
                },
                description: {
                    type: String
                },
                requiredSkills: {
                    type: [String]
                },
                complimentraySkills: {
                    type: [String]
                },
                minimumHoursPerWeek: {
                    type: Number
                },
                locationPrefereces: {
                    type: [String]
                }
            }
        ],
        teamAdmin: [
            {
                name: {
                    type: String
                },
                photo: {
                    type: String
                },
                email: {
                    type: String
                },
                linkedinURL: {
                    type: String
                }
            }
        ],
        startDate: {
            type: Date,
            default: Date.now()
        },
        endDate: {
            type: Date,
            default: Date.now()
        }
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    }
);

const Apprenticeship = mongoose.model('Apprenticeship', apprenticeshipSchema);

module.exports = Apprenticeship;
