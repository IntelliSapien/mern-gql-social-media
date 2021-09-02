const bcrypt = require("bcryptjs");
const {
  getUserById,
  getAllUsers,
  createUser,
  getUserByUserName,
} = require("../services/user.service");
const { generateToken } = require("../utils/jwt");
const { validateToken } = require("../utils/jwt");
const { ApolloError } = require("apollo-server");
const errorCodes = require("../utils/error");
const { userResponseMapper } = require("../utils/user.mapper");
const {
  validateRegisterInput,
  validateLoginInput,
} = require("../utils/validators");

const userByIdResolverFunction = async (_, { id }, context) => {
  validateToken(context);
  try {
    const user = await getUserById({ id });
    return userResponseMapper({ user });
  } catch (error) {
    console.log(
      "🚀 ~ file: user.js ~ line 21 ~ userByIdResolverFunction ~ error",
      error
    );
    throw new ApolloError(error);
  }
};

const allUsersResolverFunction = async (_, __, context) => {
  validateToken(context);
  try {
    const users = await getAllUsers();
    return users.map((user) => {
      return userResponseMapper({ user });
    });
  } catch (err) {
    console.log(
      "🚀 ~ file: user.js ~ line 37 ~ allUsersResolverFunction ~ err",
      err
    );
    throw new ApolloError(err);
  }
};

const registerUserResolverFunction = async (
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
  const existingUser = await getUserByUserName({ username });
  if (existingUser) {
    throw new UserInputError(errorCodes.USER_ALREADY_EXISTS, {
      username: errorCodes.USER_ALREADY_EXISTS,
    });
  }

  password = await bcrypt.hash(password, 12);
  const newUser = {
    username,
    password,
    email,
    createdAt: new Date().toISOString(),
  };
  const user = await createUser({ user: newUser });
  return userResponseMapper({ user });
};
const loginResolverFunction = async (
  _,
  { loginInput: { username, password } }
) => {
  const { errors, valid } = validateLoginInput(username, password);
  if (!valid) {
    throw new UserInputError(errorCodes.BAD_USER_INPUT, { errors });
  }

  let existingUser;
  try {
    existingUser = await getUserByUserName({ username });
  } catch (error) {
    console.log(
      "🚀 ~ file: user.js ~ line 98 ~ loginResolverFunction ~ error",
      error
    );
    throw new ApolloError(error);
  }
  if (!(await bcrypt.compare(password, existingUser.password))) {
    throw new UserInputError(errorCodes.INVALID_PASSWORD, {
      password: errorCodes.INVALID_PASSWORD,
    });
  }
  if (!existingUser || existingUser.length === 0) {
    throw new UserInputError(errorCodes.USER_NOT_FOUND, {
      username: errorCodes.USER_NOT_FOUND,
    });
  }
  return generateToken(existingUser);
};

module.exports = {
  userByIdResolverFunction,
  allUsersResolverFunction,
  registerUserResolverFunction,
  loginResolverFunction,
};
