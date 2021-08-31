const postsResolvers = require("./post.resolver");
const usersResolvers = require("./user.resolver");
const { userResolver } = require("../common/user");
module.exports = {
  Comment: { user: userResolver },
  Like: { user: userResolver },
  Query: {
    ...postsResolvers.Query,
    ...usersResolvers.Query,
  },
  Mutation: {
    ...usersResolvers.Mutation,
    ...postsResolvers.Mutation,
  },
};
