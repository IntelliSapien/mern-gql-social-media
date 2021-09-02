const {
    allUsersResolverFunction,
    userByIdResolverFunction,
    registerUserResolverFunction,
    loginResolverFunction,
} = require('../common/user');
module.exports = {
    Query: {
        Users: allUsersResolverFunction,
        User: userByIdResolverFunction,
    },
    Mutation: {
        register: registerUserResolverFunction,
        login: loginResolverFunction,
    },
};
