const express = require('express');
const router = express.Router();
const Category = require('../models/category')

router.get('/', function(req, res, next) {
  Category.find({}, function(err, data) {
    res.status(200).json(data);
  })
});

router.post('/', function(req, res, next) {
  Category.create({ category: req.body.category }, function(err, data) {
    res.status(201).json(data);
  })
});

router.put('/:_id', function(req, res, next) {
  Category.findByIdAndUpdate(req.params._id, { category: req.body.category }, { new: true }, function(err, data) {
    res.status(201).json(data);
  })
});

router.delete('/:_id', function(req, res, next) {
  Category.findByIdAndRemove(req.params._id, function(err, data) {
    res.status(201).json(data);
  })
});

module.exports = router;