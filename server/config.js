require('dotenv').config();
module.exports = {
    MONGODB:
        process.env.MONGODB ||
        'mongodb://admin:mongo@localhost:27017/mern-gql-db?retryWrites=true&w=majority',
    SECRET_KEY: process.env.SECRET_KEY || 'some secret key',
};
