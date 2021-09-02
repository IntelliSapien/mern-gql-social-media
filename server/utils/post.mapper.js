const { commentResponseMapper } = require("./comment.mappper");
const { likeResponseMapper } = require("./like.mapper");

const postResponseMapper = ({ post, id }) => {
  return {
    id: post.id,
    body: post.body,
    createdAt: post.createdAt,
    comments: post.comments.map((comment) =>
      commentResponseMapper({ comment, id })
    ),
    likes: post.likes.map((like) => likeResponseMapper({ like, id })),
    user: { id },
  };
};

module.exports = { postResponseMapper };
