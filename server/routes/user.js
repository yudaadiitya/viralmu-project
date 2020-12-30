const express = require('express');
const router = express.Router();
const User = require('../models/user')

router.get('/', function (req, res, next) {
  User.find({}, function (err, data) {
    res.status(200).json(data);
  })
});

router.post('/', function (req, res, next) {
  User.create({ name: req.body.name, email: req.body.email, password: req.body.password, token: null }, function (err, data) {
    res.status(201).json(data);
  })
});

router.put('/:_id', function (req, res, next) {
  User.findByIdAndUpdate(req.params._id, { name: req.body.name, email: req.body.email, password: req.body.password, token: null }, { new: true }, function (err, data) {
    res.status(201).json(data);
  })
});

router.delete('/:_id', function (req, res, next) {
  User.findByIdAndRemove(req.params._id, function (err, data) {
    res.status(201).json(data);
  })
});

module.exports = router;

