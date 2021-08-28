const { ApolloServer, gql } = require("apollo-server");
const mongoose = require("mongoose");
const { MONGODB } = require("./config");

const Post = require("./models/Post");
const User = require("./models/User");

const typeDefs = gql`
  type Post {
    id: ID!
    body: String!
    createdAt: String!
    username: String!
  }

  type Query {
    getPosts: [Post]
  }
`;

const resolvers = {
  Query: {
    getPosts: async () => {
      try {
        const posts = await Post.find();
        console.log(JSON.stringify(posts));

        return posts.map((post) => {
          return {
            ...post._doc,
            id: post._id,
          };
        });
      } catch (err) {
        throw err;
      }
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
mongoose.connect(MONGODB, { useNewUrlParser: true }).then(() => {
  console.log("🚀 connected to mongo db instance");
});
const port = process.env.PORT || 4000;

server.listen({ port }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
