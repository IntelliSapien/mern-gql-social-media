const likeResponseMapper = ({ like, id }) => {
  return {
    id: like.id,
    createdAt: like.createdAt,
    type: like.type,
    user: { id },
  };
};

module.exports = { likeResponseMapper };
