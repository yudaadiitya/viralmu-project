const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    writer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }, 
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Video'
    },
    responseTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    comment: {
        type: String
    }
}, { timestamps: true });

module.exports = mongoose.model('Comment', commentSchema);