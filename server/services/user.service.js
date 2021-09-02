const mongoose = require('mongoose');
const User = require('../models/User');

const getUserById = async ({ id }) => {
    if (id && mongoose.Types.ObjectId.isValid(id)) {
        return await User.findById(id).exec();
    } else {
        throw new Error('Invalid user id');
    }
};

const getAllUsers = async () => {
    return await User.find().exec();
};

const getUserByUserName = async ({ username }) => {
    return await User.findOne({ username }).exec();
};

const createUser = async ({ user }) => {
    const newUser = new User(user);
    return await newUser.save();
};

module.exports = {
    getUserById,
    getAllUsers,
    createUser,
    getUserByUserName,
};
