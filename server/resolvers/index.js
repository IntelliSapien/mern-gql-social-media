const postsResolvers = require("./post.resolver");
const usersResolvers = require("./user.resolver");
const { userResolver } = require("../common/user");
const { getUserById } = require("../services/user.service");
module.exports = {
  User: {
    id: async (parent) => {
      const { id } = parent;
      const result = await getUserById({ id });
      return result.id;
    },
    username: async (parent) => {
      const { id } = parent;
      const result = await getUserById({ id });
      return result.username;
    },
    email: async (parent) => {
      const { id } = parent;
      const result = await getUserById({ id });
      return result.email;
    },
    createdAt: async (parent) => {
      const { id } = parent;
      const result = await getUserById({ id });
      return result.createdAt;
    },
  },
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
