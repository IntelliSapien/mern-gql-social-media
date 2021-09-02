const { ApolloError } = require("apollo-server");
const { postResponseMapper } = require("../utils/post.mapper");
const {
  getAllPosts,
  getPostById,
  deletePostById,
  createPost,
} = require("../services/post.service");
const { getUserById } = require("../services/user.service");
const { validateToken } = require("../utils/jwt");
const postByIdResolverFunction = async (_, { id }, context) => {
  validateToken(context);
  try {
    const post = await getPostById({ id });
    return postResponseMapper({ post, id: post.user });
  } catch (err) {
    throw new ApolloError(err);
  }
};

const allPostsResolverFunction = async (_, __, context) => {
  validateToken(context);
  try {
    const posts = await getAllPosts();
    return posts.map(async (post) => {
      return postResponseMapper({ post, id: post.user });
    });
  } catch (err) {
    throw new ApolloError(err);
  }
};

const deletePostResolverFunction = async (_, { id }, context) => {
  validateToken(context);
  try {
    await deletePostById({ id });
    return true;
  } catch (err) {
    throw new ApolloError(err);
  }
};
const createPostResolverFunction = async (_, { body }, context) => {
  const user = validateToken(context);
  if (body.trim() === "") {
    throw new UserInputError(errorCodes.POST_CANNOT_BE_EMPTY, {
      errors: {
        body: "Post body must not be empty",
      },
    });
  }
  try {
    const post = await createPost({ body, user });
    return postResponseMapper({ post, id: user.id });
  } catch (err) {
    throw new ApolloError(err);
  }
};

const createCommentResolverFunction = async (_, { body, postId }, context) => {
  const { id } = validateToken(context);
  if (body.trim() === "") {
    throw new UserInputError(errorCodes.COMMENT_CAN_NOT_BE_EMPTY, {
      errors: {
        body: "Comment body must not be empty",
      },
    });
  }
  const user = await getUserById({ id });
  const post = await getPostById({ id: postId });
  if (post) {
    post.comments.unshift({
      body,
      user,
      createdAt: new Date().toISOString(),
    });
    await post.save();
  }
  return postResponseMapper({ post, id: user.id });
};

const deleteCommentResolverFunction = async (
  _,
  { postId, commentId },
  context
) => {
  const user = validateToken(context);
  const post = await getPostById({ id: postId });
  if (post._doc.username !== user.username) {
    throw new AuthenticationError(errorCodes.ACTION_NOT_ALLOWED, {
      message: errorCodes.ACTION_NOT_ALLOWED,
    });
  }

  const updatedComments = post.comments.filter(
    (comment) => comment.id !== commentId
  );
  post.comments = updatedComments;
  await post.save();
  return postResponseMapper({ post, id: user.id });
};

const likePostResolverFunction = async (_, { postId }, context) => {
  const user = validateToken(context);
  const post = await getPostById({ id: postId });
  // TODO Like Post Code
  return postResponseMapper({ post, id: user.id });
};

module.exports = {
  postByIdResolverFunction,
  allPostsResolverFunction,
  deletePostResolverFunction,
  createPostResolverFunction,
  createCommentResolverFunction,
  deleteCommentResolverFunction,
  likePostResolverFunction,
};
