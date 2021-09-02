const { commentResponseMapper } = require('./comment.mapper')
const { likeResponseMapper } = require('./like.mapper')
const { userResponseMapper } = require('./user.mapper')
const postResponseMapper = ({ post, user }) => {
    return {
        id: post.id,
        body: post.body,
        createdAt: post.createdAt,
        comments: post.comments.map((comment) =>
            commentResponseMapper({ comment, user })
        ),
        likes: post.likes.map((like) => likeResponseMapper({ like, user })),
        user: userResponseMapper({ user }),
    }
}

module.exports = { postResponseMapper }
