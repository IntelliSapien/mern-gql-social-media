const jwt = require("jsonwebtoken");
const { AuthenticationError } = require("apollo-server");
const { SECRET_KEY } = require("../config");
const errorCodes = require("./error");
module.exports.generateToken = function (user) {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      username: user.username,
      createdAt: user.createdAt,
    },
    SECRET_KEY,
    { expiresIn: "1h" }
  );
};

module.exports.validateToken = (context) => {
  const authHeader = context.req.headers.authorization || "";

  if (authHeader) {
    const token = authHeader.split(" ")[1];

    if (token) {
      try {
        const user = jwt.verify(token, SECRET_KEY);

        return user;
      } catch (err) {
        console.error("🚀 ~ file: jwt.js ~ line 29 ~ err", err);
        throw new AuthenticationError(errorCodes.INVALID_TOKEN);
      }
    }
    throw new Error(errorCodes.TOKEN_ABSENT);
  }
  throw new Error(errorCodes.AUTH_HEADER_ABSENT);
};
