const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema(
    {
        roleDescription: {
            title: {
                type: String,
                required: [true, 'A Job must have a title']
            },
            description: {
                type: String,
                required: [true, 'A Job must have a description']
            },
            jobType: {
                type: String,
                enum: {
                    values: ['Internship', 'Volunteer', 'Experiential Learning', 'Job', 'Fellowship', 'On-site'],
                    message:
                        'A Job type must be on of (Internship, Volunteer, Experiential Learning, Job, Fellowship, On-site) '
                },
                required: [true, 'A Job must have a type']
            },
            employmentType: {
                type: String,
                enum: {
                    values: ['Full Time', 'Part Time'],
                    message: 'An employment type must be on of (Full Time , Part Time)'
                },
                required: [true, 'A Job must have a employment type']
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
                type: String,
                required: [true, 'A Job must have a location']
            }
        },
        candidatePreferances: {
            yearsOfExprience: {
                type: Number,
                required: [true, 'the field of years of exprience can not be empty!']
            },
            yearsOfExprienceWithSkill: [
                {
                    skill: String,
                    yearsOfExp: Number
                }
            ],
            backgroundCheck: {
                type: String,
                enum: ['yes', 'no']
            },
            certifications: [
                {
                    certificate: String,
                    answer: {
                        type: String,
                        enum: ['yes', 'no']
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
