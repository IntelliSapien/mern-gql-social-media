const commentResponseMapper = ({ comment, id }) => {
  return {
    id: comment.id,
    body: comment.body,
    createdAt: comment.createdAt,
    user: { id },
  };
};

module.exports = { commentResponseMapper };
