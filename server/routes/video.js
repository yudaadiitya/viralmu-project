const express = require('express');
const router = express.Router();
const Video = require('../models/video')

router.get('/', function (req, res, next) {
    Video.find({}, function (err, data) {
        res.status(200).json(data);
    })
});

router.delete('/:_id', function (req, res, next) {
    Video.findByIdAndRemove(req.params._id, function (err, data) {
        res.status(201).json({
            status: 'SUCCESS',
            data: data
        });
    })
});

module.exports = router;