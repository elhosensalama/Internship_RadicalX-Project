const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema(
    {
        roleDescription: {
            title: {
                type: String
            },
            description: {
                type: String
            },
            jobType: {
                type: String,
            },
            employmentType: {
                type: String,
            },
            numberOfOpenings: Number,
            salary: {
                paid: {
                    type: Boolean,
                    default: true
                },
                count: Number,
                term: {
                    type: String
                }
            },
            location: {
                type: String
            }
        },
        candidatePreferances: {
            yearsOfExprience: {
                type: Number
            },
            yearsOfExprienceWithSkill: [
                {
                    skill: String,
                    yearsOfExp: Number
                }
            ],
            backgroundCheck: {
                type: String,
            },
            certifications: [
                {
                    certificate: String,
                    answer: {
                        type: String,
                    }
                }
            ],
            languages: [
                {
                    lang: String,
                    yearsOfExp: Number
                }
            ]
        }
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    }
);

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
