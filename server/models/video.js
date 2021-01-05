const mongoose = require('mongoose')

const videoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    },
    category: {
        type: String,
        unique: true
    },
    comment: [
        {
            user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
            comments: String
        }
    ]
}, { timestamps: true });

module.exports = mongoose.model('Video', videoSchema)