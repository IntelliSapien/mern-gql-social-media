const { gql } = require("apollo-server");
module.exports = gql`
  input RegisterInput {
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
  }

  input LoginInput {
    username: String!
    password: String!
  }
  type User {
    id: ID!
    username: String!
    email: String!
    createdAt: String!
  }

  type Comment {
    id: ID!
    body: String!
    createdAt: String!
    user: User!
  }

  type Like {
    id: ID!
    createdAt: String!
    user: User!
  }

  type Post {
    id: ID!
    body: String!
    createdAt: String!
    user: User!
    comments: [Comment]
    likes: [Like]
  }

  type Query {
    Posts: [Post!]
    Post(id: ID!): Post
    Users: [User!]
    User(id: ID!): User
  }

  type Mutation {
    register(registerInput: RegisterInput!): User!
    login(loginInput: LoginInput): String!
    createPost(body: String!): Post!
    deletePost(id: ID!): Boolean!
    createComment(body: String!, postId: ID!): Comment!
    likePost(postId: ID!): Post!
  }
`;
