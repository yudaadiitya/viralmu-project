const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const User = require('../models/user');

exports.postLogin = (req, res, next) => {
    const { email, password } = req.body;
    User.findOne({ 'email': email }, function (err, user) {
        if (err) {
            res.status(400).json({ error: err });
        } else {
            if (user) {
                bcrypt.compare(password, user.password, function (err, valid) {
                    if (valid) {
                        let token = jwt.sign({ 'email': email }, 'rubicamp');
                        User.findOneAndUpdate({ 'email': email }, { 'token': token }, function (err, response) {
                            if (err) {
                                res.status(400).json({ error: err });
                            } else {
                                res.status(200).json({ data: { 'email': email }, 'token': token });
                            }
                        })
                    } else {
                        res.status(400).json({ 'message': 'email or password incorrect' });
                    }
                })
            } else {
                res.status(400).json({ 'message': 'email or password incorrect' });
            }
        }
    })
}

exports.postRegister = (req, res, next) => {
    const { name, email, password, retypepassword } = req.body;
    console.log(req.body);
    if (password == retypepassword) {
        User.findOne({ 'email': email }, function (err, user) {
            if (err) throw err;
            if (user) {
                res.status(400).json({ 'message': 'Email is already registered' });
            } else {
                let token = jwt.sign({ 'email': email }, 'rubicamp');
                bcrypt.hash(password, saltRounds, function (err, hash) {
                    const userNew = new User({'name':name, 'email': email, 'password': hash, 'token': null });
                    userNew.save(() => {
                        res.status(200).json({ data: { 'name': name, 'email': email }, 'token': token })
                    });
                });
            }
        })
    } else {
        res.status(400).json({ 'message': 'invalid data password and retypepassword' });
    }
}

exports.getDestroy = (req, res, next) => {
    let { token } = req.headers;

    User.findOneAndUpdate({ 'token': token }, { 'token': null }, function (err, response) {
        if (err) {
            res.status(400).json({logout: false});
        } else {
            res.status(200).json({logout: true});
        }
    })
}

exports.getCheck = (req, res, next) => {
    let token = req.header('token');
    User.findOne({ 'token': token }, function (err, user) {
        if (err) {
            res.status(400).json({ error: err });
        } else {
            if (user) {
                res.status(200).json({ valid: true });
            } else {
                res.status(200).json({ valid: false });
            }
        }
    })
};
