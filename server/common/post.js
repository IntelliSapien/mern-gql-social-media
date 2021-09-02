const {
  ApolloError,
  UserInputError,
  AuthenticationError,
} = require("apollo-server");
const { postResponseMapper } = require("../utils/post.mapper");
const {
  getAllPosts,
  getPostById,
  deletePostById,
  createPost,
  filterPosts,
} = require("../services/post.service");
const { getUserById } = require("../services/user.service");
const { validateToken } = require("../utils/jwt");
const errorCodes = require("../utils/error");

const postByIdResolverFunction = async (_, { id }, context) => {
  validateToken(context);
  const post = await getPostById({ id });
  if (!post) {
    throw new ApolloError(errorCodes.POST_NOT_FOUND, {
      message: errorCodes.POST_NOT_FOUND,
    });
  }
  const user = await getUserById({ id: post.user });
  return postResponseMapper({ post, user });
};

const allPostsResolverFunction = async (_, __, context) => {
  validateToken(context);
  const posts = await getAllPosts();
  return posts.map(async (post) => {
    const user = await getUserById({ id: post.user });
    return postResponseMapper({ post, user });
  });
};

const deletePostResolverFunction = async (_, { id }, context) => {
  validateToken(context);
  await deletePostById({ id });
  return true;
};
const createPostResolverFunction = async (_, { body }, context) => {
  const { id } = validateToken(context);
  if (body.trim() === "") {
    throw new UserInputError(errorCodes.POST_CANNOT_BE_EMPTY, {
      errors: {
        body: "Post body must not be empty",
      },
    });
  }
  try {
    const user = await getUserById({ id });
    const post = await createPost({ body, user });
    return postResponseMapper({ post, user });
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
  return postResponseMapper({ post, user });
};

const deleteCommentResolverFunction = async (
  _,
  { postId, commentId },
  context
) => {
  const { id } = validateToken(context);
  const user = await getUserById({ id });
  const post = await getPostById({ id: postId });
  const comment = post.comments.find(
    (comment) =>
      comment.id === commentId &&
      JSON.parse(JSON.stringify(comment.user)) === id
  );
  if (!comment) {
    throw new AuthenticationError(errorCodes.ACTION_NOT_ALLOWED, {
      message: errorCodes.ACTION_NOT_ALLOWED,
    });
  }

  const updatedComments = post.comments.filter(
    (comment) => comment.id !== commentId
  );
  post.comments = updatedComments;
  await post.save();
  return postResponseMapper({ post, user });
};

const likePostResolverFunction = async (_, { postId, type }, context) => {
  const { id } = validateToken(context);
  const user = await getUserById({ id });
  const post = await getPostById({ id: postId });
  const existingLikes = post.likes.find((like) => {
    return (
      JSON.parse(JSON.stringify(like.user)) === id
    );
  });
  if (existingLikes) {
    post.likes[post.likes.indexOf(existingLikes)]._doc.type = type;
  } else {
    post.likes.push({
      user,
      createdAt: new Date().toISOString(),
      type,
    });
  }
  await post.save();
  return postResponseMapper({ post, user });
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
