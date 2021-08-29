const Post = require("../../models/Post");

module.exports = {
  Query: {
    Posts: async () => {
      try {
        const posts = await Post.find();
        return posts.map((post) => {
          return {
            ...post._doc,
            id: post._id,
          };
        });
      } catch (err) {
        throw err;
      }
    },
  },
};
