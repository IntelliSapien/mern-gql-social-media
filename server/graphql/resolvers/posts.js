const { ApolloError } = require("apollo-server");
const Post = require("../../models/Post");
const errorCodes = require("./error");
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
};
