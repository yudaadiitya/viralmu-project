const express = require('express');
const router = express.Router();
const Comment = require('../models/comment')

router.get('/', function(req, res, next) {
    Comment.find({}, function(err, data) {
      res.status(200).json(data);
    })
  });
  
  router.post('/', function(req, res, next) {
    Comment.create({ comment: req.body.comment }, function(err, data) {
      res.status(201).json(data);
    })
  });
  
  router.put('/:_id', function(req, res, next) {
    Comment.findByIdAndUpdate(req.params._id, { comment: req.body.comment }, { new: true }, function(err, data) {
      res.status(201).json(data);
    })
  });
  
  router.delete('/:_id', function(req, res, next) {
    Comment.findByIdAndRemove(req.params._id, function(err, data) {
      res.status(201).json(data);
    })
  });

module.exports = router;