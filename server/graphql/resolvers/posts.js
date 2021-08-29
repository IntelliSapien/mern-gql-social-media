const { ApolloError } = require("apollo-server");
const Post = require("../../models/Post");
const errorCodes = require("./error");
const { validateToken } = require("../../utils/jwt");
module.exports = {
  Query: {
    Posts: async (_, { id }) => {
      let posts;
      try {
        if (id) {
          posts = [await Post.findById(id)].filter(Boolean);
          if (posts.length === 0) {
            throw new ApolloError(errorCodes.POST_NOT_FOUND);
          }
        } else {
          posts = await Post.find();
        }
        return posts.map((post) => {
          return {
            ...post._doc,
            id: post._id,
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
        post = await new Post({
          body,
          createdAt: new Date().toISOString(),
          user: user.id,
          username: user.username,
        }).save();
        return {
          ...post._doc,
          id: post._id,
        };
      } catch (err) {
        console.error("🚀 ~ file: posts.js ~ line 40 ~ createPost: ~ err", err);
        throw new ApolloError(err);
      }
    },
    deletePost: async (_, { id }) => {
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
