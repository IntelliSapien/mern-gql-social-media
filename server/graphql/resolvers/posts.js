const { ApolloError } = require("apollo-server");
const Post = require("../../models/Post");
const User = require("../../models/User");
const errorCodes = require("./error");
const mongoose = require("mongoose");
const { validateToken } = require("../../utils/jwt");
module.exports = {
  Query: {
    Posts: async (_, { id }, context) => {
      validateToken(context);
      let posts;
      try {
        if (id && mongoose.Types.ObjectId.isValid(id)) {
          posts = [await Post.findOne({ _id: id })].filter(Boolean);
          if (posts.length === 0) {
            throw new ApolloError(errorCodes.POST_NOT_FOUND);
          }
        } else {
          posts = await Post.find().sort({ createdAt: -1 });
        }
        return posts.map(async (post) => {
          const user = await User.findById(post.user).exec();

          return {
            ...post._doc,
            id: post._id,
            user,
          };
        });
      } catch (err) {
        console.error("🚀 ~ file: posts.js ~ line 20 ~ Posts: ~ err", err);
        throw new ApolloError(err);
      }
    },
  },
  Mutation: {
    createPost: async (_, { body }, context) => {
      const user = validateToken(context);
      console.log("🚀 ~ file: posts.js ~ line 33 ~ createPost: ~ user", user);
      let post;
      try {
        const userCreatingThePost = await User.findById(user.id).exec();
        post = await new Post({
          body,
          createdAt: new Date().toISOString(),
          user: user.id,
          username: user.username,
        }).save();
        return {
          ...post._doc,
          id: post._id,
          user: userCreatingThePost,
        };
      } catch (err) {
        console.error("🚀 ~ file: posts.js ~ line 40 ~ createPost: ~ err", err);
        throw new ApolloError(err);
      }
    },
    deletePost: async (_, { id }, context) => {
      validateToken(context);
      try {
        await Post.findByIdAndDelete(id);
        return true;
      } catch (err) {
        console.error("🚀 ~ file: posts.js ~ line 39 ~ deletePost: ~ err", err);
        throw new ApolloError(err);
      }
    },
  },
};
