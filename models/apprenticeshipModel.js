const mongoose = require('mongoose');

const apprenticeshipSchema = new mongoose.Schema(
    {
        apprenticeshipTitle: {
            type: String,
            required: [true, 'An Apprenticeship must have a title!']
        },
        companyLogo: {
            type: String,
            required: [true, 'An Apprenticeship must have a logo!']
        },
        companyDescription: {
            type: String,
            required: [true, 'An Company must have a description!']
        },
        apprenticeshipDescription: {
            type: String,
            required: [true, 'An Apprenticeship must have a description!']
        },
        introVideo: {
            type: String,
            required: [true, 'An Apprenticeship must have a Introduction video!']
        },
        teamType: {
            type: String,
            enum: {
                values: [
                    'Web Platform',
                    'Mobile App',
                    'Growth',
                    'Marketing Website',
                    'Prototyping',
                    'Data',
                    'Custom Team'
                ],
                message:
                    'A Team Role must be Web Platform , Mobile App , Growth , Marketing Website , Prototyping , Data or Custom Team'
            },
            required: [true, 'An Apprenticeship must have a team type!']
        },
        teamRoles: [
            {
                role: {
                    type: String,
                    enum: {
                        values: [
                            'Product Manager',
                            'iOS Developer',
                            'Android Developer',
                            'Full Stack Developer',
                            'Back-end Developer',
                            'Front-end Developer'
                        ],
                        message:
                            'A Team Role must be Product Manager, iOS Developer, Android Developer, Full Stack Developer, Back-end Developer or Front-end Developer'
                    },
                    required: [
                        true,
                        'A team role must have a role from Product Manager, iOS Developer, Android Developer, Full Stack Developer, Back-end Developer or Front-end Developer !'
                    ]
                },
                description: {
                    type: String,
                    required: [true, 'A team role must have a description!']
                },
                requiredSkills: {
                    type: [String],
                    required: [true, 'A team role must have a required skills!']
                },
                complimentraySkills: {
                    type: [String],
                    required: [true, 'A team role must have a complimentray skills!']
                },
                minimumHoursPerWeek: {
                    type: Number,
                    required: [true, 'A team role must have a description!']
                },
                locationPrefereces: {
                    type: [String],
                    required: [true, 'A team role must have a prefered locations']
                }
            }
        ],
        teamAdmin: [
            {
                name: {
                    type: String,
                    required: [true, 'A team member must have a name!']
                },
                photo: {
                    type: String,
                    required: [true, 'A team member must have a photo!']
                },
                email: {
                    type: String,
                    required: [true, 'A team member must have an email!']
                },
                linkedinURL: {
                    type: String
                }
            }
        ],
        startDate: {
            type: Date,
            default: Date.now(),
            required: [true, 'An Apprenticeship must have a start date!']
        },
        endDate: {
            type: Date,
            default: Date.now(),
            required: [true, 'An Apprenticeship must have an end date!']
        }
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    }
);

const Apprenticeship = mongoose.model('Apprenticeship', apprenticeshipSchema);

module.exports = Apprenticeship;
