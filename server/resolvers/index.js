const postsResolvers = require('./post.resolver');
const usersResolvers = require('./user.resolver');
module.exports = {
    Query: {
        ...postsResolvers.Query,
        ...usersResolvers.Query,
    },
    Mutation: {
        ...usersResolvers.Mutation,
        ...postsResolvers.Mutation,
    },
};
