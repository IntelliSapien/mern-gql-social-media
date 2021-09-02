const { userResponseMapper } = require('./user.mapper');
const likeResponseMapper = ({ like, user }) => {
    return {
        id: like.id,
        createdAt: like.createdAt,
        type: like._doc.type,
        user: userResponseMapper({ user }),
    };
};

module.exports = { likeResponseMapper };
