const {
  getAllPosts,
  getPostById,
  deletePostById,
  createPost,
} = require("../services/post.service");
const { getUserById } = require("../services/user.service");
const { validateToken } = require("../utils/jwt");
const { ApolloError } = require("apollo-server");
const postByIdResolverFunction = async (_, { id }, context) => {
  validateToken(context);
  try {
    const post = await getPostById({ id });
    const user = await getUserById({ id: post.user });
    return {
      ...post._doc,
      id: post._id,
      user,
    };
  } catch (err) {
    console.log(
      "🚀 ~ file: post.js ~ line 15 ~ postByIdResolverFunction ~ err",
      err
    );
    throw new ApolloError(err);
  }
};

const allPostsResolverFunction = async (_, __, context) => {
  validateToken(context);
  try {
    const posts = await getAllPosts();
    return posts.map(async (post) => {
      const user = await getUserById({ id: post.user });
      return {
        ...post._doc,
        id: post._id,
        user,
      };
    });
  } catch (err) {
    console.log(
      "🚀 ~ file: post.js ~ line 36 ~ allPostsResolverFunction ~ err",
      err
    );
    throw new ApolloError(err);
  }
};

const deletePostResolverFunction = async (_, { id }, context) => {
  validateToken(context);
  try {
    const deleted = await deletePostById({ id });
    console.log(
      "🚀 ~ file: post.js ~ line 53 ~ deletePostResolverFunction ~ deleted",
      deleted
    );
    return true;
  } catch (err) {
    console.log(
      "🚀 ~ file: post.js ~ line 55 ~ deletePostResolverFunction ~ err",
      err
    );
    throw new ApolloError(err);
  }
};
const createPostResolverFunction = async (_, { body }, context) => {
  const { id } = validateToken(context);
  try {
    const user = await getUserById({ id });
    const post = await createPost({ body, user });
    return {
      ...post._doc,
      id: post._id,
      user,
    };
  } catch (err) {
    console.log(
      "🚀 ~ file: post.js ~ line 79 ~ createPostResolverFunction ~ err",
      err
    );
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
  return {
    ...post._doc,
    id: post._id,
    user,
  };
};

const deleteCommentResolverFunction = async (
  _,
  { postId, commentId },
  context
) => {
  const { id } = validateToken(context);
  const user = await getUserById({ id });
  const post = await getPostById({ id: postId });
  if (post._doc.username !== user.username) {
    throw new AuthenticationError(errorCodes.ACTION_NOT_ALLOWED, {
      message: errorCodes.ACTION_NOT_ALLOWED,
    });
  }
  // TODO Delete Comment Code
  return {
    ...post._doc,
    id: post._id,
    user,
  };
};

const likePostResolverFunction = async (_, { postId }, context) => {
  const { id } = validateToken(context);
  const user = await getUserById({ id });
  const post = await getPostById({ id: postId });
  // TODO Like Post Code
  return {
    ...post._doc,
    id: post._id,
    user,
  };
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
