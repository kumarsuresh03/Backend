// controllers/userController.js
const User = require('../models/userModel');

const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        next(err);
    }
};

module.exports = { getAllUsers };
