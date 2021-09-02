const userResponseMapper = ({ user }) => {
    return {
        id: user.id,
        username: user.username,
        createdAt: user.createdAt,
        email: user.email,
    };
};

module.exports = { userResponseMapper };
