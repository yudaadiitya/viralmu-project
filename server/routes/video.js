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
        user: {
            id: req.body.id,
            name: req.body.name,
            email: req.body.email
        },
        category: req.body.category,
        comment: [
            {
                user: {
                    id: req.body.id,
                    name: req.body.name
                },
                comments: req.body.comments
            }
        ]
    }, function (err, data) {
        if (err) {
            console.log(err)
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