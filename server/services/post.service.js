const mongoose = require("mongoose");
const Post = require("../models/Post");

const getPostById = async ({ id }) => {
  if (id && mongoose.Types.ObjectId.isValid(id)) {
    return await Post.findById(id).exec();
  } else {
    throw new Error("Invalid Post id");
  }
};

const getAllPosts = async () => {
  return await Post.find().exec();
};

const deletePostById = async ({ id }) => {
  return await Post.findByIdAndDelete(id);
};

const createPost = async ({ body, user }) => {
  return await new Post({
    body,
    createdAt: new Date().toISOString(),
    user,
  }).save();
};

module.exports = {
  getPostById,
  getAllPosts,
  deletePostById,
  createPost
};
