const mongoose = require('mongoose')

const videoSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    user: {
        id: String,
        name: String,
        email: String
    },
    category: {
        category: String,
    },
    comment: [
        {
            user: {
                id: String,
                name: String
            },
            comments: {
                type: String,
            },
        }
    ]
}, { timestamps: true });

module.exports = mongoose.model('Video', videoSchema)