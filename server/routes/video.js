const express = require('express');
const router = express.Router();
const Video = require('../models/video')

// router.get('/', async (req, res, next) =>  {
//     const PAGE_SIZE = 4;
//     const page = parseInt(req.query.page || "0");
//     const total = await Video.countDocuments({});
//     const videos = await Video.find({})
//         .limit(PAGE_SIZE)
//         .skip(PAGE_SIZE * page);
//     res.status(200).json({
//         totalPages: Math.ceil(total / PAGE_SIZE), videos,
//     });
// });

router.get('/', function (req, res, next) {
    Video.find({}, function (err, data) {
        res.status(200).json(data);
    })
});

router.get('/:_id', function (req, res) {
    let _id = req.params._id;
    Video.find({ _id: _id })
        .exec(function (err, data) {
            if (err) {
                res.status(400).json({ status: 'failed', error: err })
            } else {
                res.status(200).json({ data });
            }
        })
})

router.post('/', function (req, res, next) {
    Video.create({
        title: req.body.title,
        description: req.body.description,
        url: req.body.url,
        category: req.body.category,
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
        url: req.body.url,
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