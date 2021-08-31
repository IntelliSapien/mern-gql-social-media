const {
  allPostsResolverFunction,
  postByIdResolverFunction,
  createPostResolverFunction,
  deletePostResolverFunction,
  createCommentResolverFunction,
  likePostResolverFunction,
} = require("../common/post");
module.exports = {
  Query: {
    Posts: allPostsResolverFunction,
    Post: postByIdResolverFunction,
  },
  Mutation: {
    createPost: createPostResolverFunction,
    deletePost: deletePostResolverFunction,
    createComment: createCommentResolverFunction,
    likePost: likePostResolverFunction,
  },
};
