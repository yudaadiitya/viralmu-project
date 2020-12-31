const express = require('express');
const router = express.Router();
const Video = require('../models/video')

router.get('/', function (req, res, next) {
    Video.find({}, function (err, data) {
        res.status(200).json(data);
    })
});

router.post('/', function (req, res, next) {
    Video.create({
        title: req.body.title,
        description: req.body.description,
        comment: [
            {
                comments: req.body.comments
            }
        ]
    }, function (err, data) {
        if (err) {
            return res.status(400).json({ message: "Failed to post the video!" })
        } else {
            res.status(201).json(data);
        }
    })
});

router.put('/:_id', function (req, res, next) {
    Video.findByIdAndUpdate(req.params._id, {
        title: req.body.title,
        description: req.body.description,
        comments: req.body.comments
    }, { new: true }, function (err, data) {
        if (err) {
            return res.status(400).json({ message: "Failed to update the video!" })
        } else {
            res.status(201).json(data);
        }
    })
});

router.delete('/:_id', function (req, res, next) {
    Video.findByIdAndRemove(req.params._id, function (err, data) {
        res.status(201).json(data);
    })
});

module.exports = router;