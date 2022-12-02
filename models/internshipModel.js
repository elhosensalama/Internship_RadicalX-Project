const mongoose = require('mongoose');

const intershipSchema = new mongoose.Schema(
    {
        internshipTitle: {
            type: String
        },
        internshipDescription: {
            category: {
                type: [String]
            },
            description: {
                type: String
            },
            location: {
                type: String
            },
            benefits: {
                type: String
            },
            introVideo: {
                type: String
            },
            mentor: {
                name: {
                    type: String
                },
                photo: {
                    type: String
                },
                email: {
                    type: String
                },
                linkedinUrl: {
                    type: String
                }
            },
            recommendedRoles: {
                type: [String]
            },
            webLinkes: {
                type: [String]
            }
        },
        internshipGuide: {
            overview: {
                brief: {
                    description: {
                        type: String
                    },
                    video: {
                        type: String
                    }
                },
                requirements: {
                    description: {
                        type: String
                    },
                    video: {
                        type: String
                    }
                },
                milestones: {
                    description: {
                        type: String
                    },
                    video: {
                        type: String
                    }
                }
            },
            schedule: {
                duration: {
                    description: {
                        type: String
                    },
                    video: {
                        type: String
                    }
                },
                timeline: {
                    description: {
                        type: String
                    },
                    video: {
                        type: String
                    }
                },
                deliverables: {
                    description: {
                        type: String
                    },
                    video: {
                        type: String
                    }
                }
            },
            resources: {
                curated: {
                    description: {
                        type: String
                    },
                    video: {
                        type: String
                    }
                },
                events: {
                    description: {
                        type: String
                    },
                    video: {
                        type: String
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
                    type: String
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
