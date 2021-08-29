const { UserInputError, ApolloError } = require("apollo-server");
const bcrypt = require("bcryptjs");
const User = require("../../models/User");

const {
  validateRegisterInput,
  validateLoginInput,
} = require("../../utils/validators");
const { generateToken } = require("../../utils/jwt");
const errorCodes = require("./error");
module.exports = {
  Query: {
    Users: async (_, { id }) => {
      let users;
      try {
        if (id) {
          users = [await User.findById(id).exec()].filter(Boolean);
          if (users.length === 0) {
            throw new ApolloError(errorCodes.USER_NOT_FOUND);
          }
        } else {
          users = await User.find();
        }
        return users.map((user) => {
          const token = generateToken(user);
          return {
            ...user._doc,
            id: user._id,
            token,
          };
        });
      } catch (err) {
        console.error("🚀 ~ file: users.js ~ line 29 ~ Users: ~ err", err);
        throw new ApolloError(err);
      }
    },
  },
  Mutation: {
    register: async (
      _,
      { registerInput: { username, email, password, confirmPassword } }
    ) => {
      const { errors, valid } = validateRegisterInput(
        username,
        email,
        password,
        confirmPassword
      );
      if (!valid) {
        throw new UserInputError(errorCodes.BAD_USER_INPUT, { errors });
      }
      try {
        const existingUser = await User.findOne({ username });
        if (existingUser) {
          throw new UserInputError(errorCodes.USER_ALREADY_EXISTS, {
            username: errorCodes.USER_ALREADY_EXISTS,
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

        const token = generateToken(user);
        return {
          ...user._doc,
          id: user._id,
          token,
        };
      } catch (error) {
        throw new ApolloError(error);
      }
    },
    login: async (_, { loginInput: { username, password } }) => {
      const { errors, valid } = validateLoginInput(username, password);
      if (!valid) {
        throw new UserInputError(errorCodes.BAD_USER_INPUT, { errors });
      }
      try {
        const existingUser = await User.findOne({ username });
        if (!existingUser || existingUser.length === 0) {
          throw new UserInputError(errorCodes.USER_NOT_FOUND, {
            username: errorCodes.USER_NOT_FOUND,
          });
        }
        if (!(await bcrypt.compare(password, existingUser.password))) {
          throw new UserInputError(errorCodes.INVALID_PASSWORD, {
            password: errorCodes.INVALID_PASSWORD,
          });
        }
        const token = generateToken(existingUser);
        return {
          ...existingUser._doc,
          id: existingUser._id,
          token,
        };
      } catch (error) {
        console.log("🚀 ~ file: users.js ~ line 99 ~ login: ~ error", error);
        throw new ApolloError(error);
      }
    },
  },
};
