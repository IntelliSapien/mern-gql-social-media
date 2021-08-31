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
    const posts = await getAllPosts({ id });
    return posts.map((post) => {
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
    const post = await createPost({ body, user });
    const user = await getUserById({ id });
    return {
      ...post._doc,
      id: post._id,
      user,
    };
  } catch (err) {
    console.log(
      "🚀 ~ file: post.js ~ line 76 ~ createPostResolverFunction ~ err",
      err
    );
    throw new ApolloError(err);
  }
};

const createCommentResolverFunction = async (
  _,
  { body, postId },
  context
) => {};

const likePostResolverFunction = async (_, { id }, context) => {};

module.exports = {
  postByIdResolverFunction,
  allPostsResolverFunction,
  deletePostResolverFunction,
  createPostResolverFunction,
  createCommentResolverFunction,
  likePostResolverFunction,
};
