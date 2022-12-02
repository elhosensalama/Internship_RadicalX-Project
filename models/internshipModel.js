const mongoose = require('mongoose');

const intershipSchema = new mongoose.Schema(
    {
        internshipTitle: {
            type: String,
            required: [true, 'An internship must have a name']
        },
        internshipDescription: {
            category: {
               type: [String],
                required: [true, 'An internship must have a category']
            },
            description: {
                type: String,
                required: [true, 'An internship must have a description']
            },
            location: {
                type: String,
                required: [true, 'An internship must have a location']
            },
            benefits: {
                type: String,
                required: [true, 'An internship must have benefits']
            },
            introVideo: {
                type: String,
                required: [true, 'An internship must have an Introduction Video']
            },
            mentor: {
                name: {
                    type: String,
                    required: [true, 'An internship mentor must have a name']
                },
                photo: {
                    type: String,
                    required: [true, 'An internship mentor must have a photo']
                },
                email: {
                    type: String,
                    required: [true, 'An internship mentor must have a email']
                },
                linkedinUrl: {
                    type: String
                }
            },
            recommendedRoles: {
                type: [String],
                required: [true, 'An internship must have a recommended roles']
            },
            webLinkes: {
                type: [String],
                required: [true, 'An internship must have a web links']
            }
        },
        internshipGuide: {
            overview: {
                brief: {
                    description: {
                        type: String,
                        required: [true, 'A Overview brief must have a description']
                    },
                    video: {
                        type: String,
                        required: [true, 'A Overview brief must have a video']
                    }
                },
                requirements: {
                    description: {
                        type: String,
                        required: [true, 'A Overview requirements must have a description']
                    },
                    video: {
                        type: String,
                        required: [true, 'A Overview requirements must have a video']
                    }
                },
                milestones: {
                    description: {
                        type: String,
                        required: [true, 'A Overview milestones must have a description']
                    },
                    video: {
                        type: String,
                        required: [true, 'A Overview milestones must have a video']
                    }
                }
            },
            schedule: {
                duration: {
                    description: {
                        type: String,
                        required: [true, 'A schedule duration must have a description']
                    },
                    video: {
                        type: String,
                        required: [true, 'A schedule duration must have a video']
                    }
                },
                timeline: {
                    description: {
                        type: String,
                        required: [true, 'A schedule timeline must have a description']
                    },
                    video: {
                        type: String,
                        required: [true, 'A schedule timeline must have a video']
                    }
                },
                deliverables: {
                    description: {
                        type: String,
                        required: [true, 'A schedule deliverables must have a description']
                    },
                    video: {
                        type: String,
                        required: [true, 'A schedule deliverables must have a video']
                    }
                }
            },
            resources: {
                curated: {
                    description: {
                        type: String,
                        required: [true, 'A resources curated must have a description']
                    },
                    video: {
                        type: String,
                        required: [true, 'A resources curated must have a video']
                    }
                },
                events: {
                    description: {
                        type: String,
                        required: [true, 'A resources events must have a description']
                    },
                    video: {
                        type: String,
                        required: [true, 'A resources events must have a video']
                    }
                }
            }
        },
        surveys: [
            {
                questions: {
                    type: [String]
                }
            }
        ],
        Settings: {
            basicSettings: {
                internshipUrl: {
                    type: String,
                    required: [true, 'A internship must have a url']
                },
                access: {
                    private: {
                        type: Boolean,
                        default: false
                    },
                    hidden: {
                        type: Boolean,
                        default: false
                    }
                },
                security: {
                    textCopying: {
                        type: Boolean,
                        default: false
                    }
                }
            },
            heroImage: String
        }
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    }
);

const Intership = mongoose.model('Intership', intershipSchema);

module.exports = Intership;
