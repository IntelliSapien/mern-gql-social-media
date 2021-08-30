const { model, Schema } = require("mongoose");

const PostSchema = new Schema(
  {
    body: String,
    password: String,
    createdAt: String,
    comments: [
      {
        body: String,
        createdAt: String,
        user: {
          type: Schema.Types.ObjectId,
          ref: "users",
        },
      },
    ],
    likes: [
      {
        createdAt: String,
        likeType: {
          type: String,
          enum: ["like", "dislike"],
        },
        count: Number,
        user: {
          type: Schema.Types.ObjectId,
          ref: "users",
        },
      },
    ],
    user: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
  },
  { strict: false }
);

module.exports = model("Post", PostSchema);
