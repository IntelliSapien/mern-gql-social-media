const { ApolloError, AuthenticationError } = require("apollo-server");
const Post = require("../../models/Post");
const User = require("../../models/User");
const errorCodes = require("./error");
const mongoose = require("mongoose");
const { validateToken } = require("../../utils/jwt");

module.exports = {
  Mutation: {
    createComment: async (_, { body, postId }, context) => {
      const user = validateToken(context);
      console.log(
        "🚀 ~ file: comments.js ~ line 12 ~ createComment: ~ user",
        user
      );
      if (body.trim() === "") {
        throw new UserInputError(errorCodes.COMMENT_CAN_NOT_BE_EMPTY, {
          errors: {
            body: "Comment body must not be empty",
          },
        });
      }
      const userCommentingThePost = await User.findById(user.id).exec();
      console.log(
        "🚀 ~ file: comments.js ~ line 24 ~ createComment: ~ userCommentingThePost",
        userCommentingThePost
      );
      const post = await Post.findById(postId).exec();
      console.log(
        "🚀 ~ file: comments.js ~ line 26 ~ createComment: ~ post",
        post
      );

      if (post) {
        post.comments.unshift({
          body,
          user: userCommentingThePost,
          createdAt: new Date().toISOString(),
        });
        let result = await post.save();
        console.log("🚀 ~ file: comments.js ~ line 41 ~ createComment: ~ result", result)
      }
      return {
        ...post._doc,
        id: post._id,
        user: userCommentingThePost,
      };
    },
    deleteComment: async (_, { postId, commentId }, context) => {
      const user = validateToken(context);
      const post = await Post.findById(postId).exec();
      if (post._doc.username !== user.username) {
        throw new AuthenticationError(errorCodes.ACTION_NOT_ALLOWED, {
          message: errorCodes.ACTION_NOT_ALLOWED,
        });
      }
      // !TODO: delete comment code
      return {
        ...post._doc,
        id: post._id,
        user: userCreatingComment,
      };
    },
    likePost: async (_, { postId }, context) => {
      const user = validateToken(context);
      const post = await Post.findById(postId).exec();
      if (post._doc.username !== user.username) {
        throw new AuthenticationError(errorCodes.ACTION_NOT_ALLOWED, {
          message: errorCodes.ACTION_NOT_ALLOWED,
        });
      }
      // !TODO: Like comment code
      return {
        ...post._doc,
        id: post._id,
        user: userCreatingComment,
      };
    },
  },
};
