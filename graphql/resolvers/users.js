const { UserInputError, ApolloError } = require("apollo-server");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../../models/User");
const { SECRET_KEY } = require("../../config");
const errorCodes = require("./error");
module.exports = {
  Mutation: {
    register: async (
      _,
      { registerInput: { username, email, password, confirmPassword } }
    ) => {
      if (password !== confirmPassword) {
        throw new UserInputError(errorCodes.PASSWORD_DOEST_NOT_MATCH, {
          invalidArgs: password,
        });
      }
      try {
        const existingUser = await User.findOne({ username });
        if (existingUser) {
          console.log(
            "🚀 ~ file: users.js ~ line 19 ~ existingUser",
            existingUser
          );
          throw new UserInputError(errorCodes.USER_ALREADY_EXISTS, {
            invalidArgs: username,
          });
        }

        password = await bcrypt.hash(password, 12);
        const newUser = new User({
          username,
          password,
          email,
          createdAt: new Date().toISOString(),
        });
        const user = await newUser.save();
        console.log("🚀 ~ file: users.js ~ line 29 ~ user", user);
        const token = jwt.sign(
          {
            id: user.id,
            email: user.email,
            username: user.username,
          },
          SECRET_KEY,
          { expiresIn: "1h" }
        );
        return {
          ...user._doc,
          id: user._id,
          token,
        };
      } catch (error) {
        throw new ApolloError(error);
      }
    },
  },
};
