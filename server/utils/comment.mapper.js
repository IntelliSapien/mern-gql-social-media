const { userResponseMapper } = require('./user.mapper');
const commentResponseMapper = ({ comment, user }) => {
    return {
        id: comment.id,
        body: comment.body,
        createdAt: comment.createdAt,
        user: userResponseMapper({ user }),
    };
};

module.exports = { commentResponseMapper };
