const mongoose = require('mongoose')

const videoSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
    },
    category: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Category',
    },
    comment: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId, ref: 'User',
            },
            comments: {
                type: Text,
            },
        }
    ]
}, { timestamps: true });

module.exports = mongoose.model('Video', videoSchema)