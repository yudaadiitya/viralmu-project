const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user');

const generateJwtToken = (_id, role) => {
    return jwt.sign({ _id, role }, "RUBICAMP", {
        expiresIn: "1m",
    });
};

exports.login = (req, res, next) => {
    const { email, password } = req.body;
    User.findOne({ 'email': email }).exec(async (err, user) => {
        if (err) {
            res.status(400).json({ error: err });
        } else {
            if (user) {
                const isPassword = await user.authenticate(password);
                if (isPassword && user.role === "user") {
                    const token = generateJwtToken(user._id, user.role);
                    const { _id, name, email, role } = user;
                    res.status(200).json({
                        token,
                        user: { _id, name, email, role },
                    });
                } else {
                    return res.status(400).json({
                        message: 'email or password incorrect'
                    });
                }
            } else {
                res.status(400).json({ message: 'email or password incorrect' });
            }
        }
    })
}

exports.register = (req, res, next) => {
    const { name, email, password, retypepassword } = req.body;
    console.log(req.body);
    if (password == retypepassword) {
        User.findOne({ email }).exec(async (error, user) => {
            if (user)
                return res.status(400).json({
                    error: "User already registered",
                });
            const hash_password = await bcrypt.hash(password, 10);
            const newUser = new User({
                name,
                email,
                hash_password,
            });

            newUser.save((error, user) => {
                if (error) {
                    return res.status(400).json({
                        message: "invalid data password and retypepassword",
                    });
                }
                if (user) {
                    const token = generateJwtToken(user._id, user.role);
                    const { _id, name, email, role } = user;
                    return res.status(201).json({
                        token,
                        user: { _id, name, email, role },
                    });
                }
            });
        });
    } else {
        res.status(400).json({ 'message': 'invalid data password and retypepassword' });
    }
}

exports.logout = (req, res) => {
    res.clearCookie("token");
    res.status(200).json({
        message: "Signout successfully...!",
    });
};
