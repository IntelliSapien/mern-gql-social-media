# mern-gql-social-media

Social Media app using the mern stack with graphql

## Local setup

* Run `npm install`


* create config.js file at the root of the repo

```
require('dotenv').config();
module.exports = {
    MONGODB: process.env.MONGODB,
    SECRET_KEY: process.env.SECRET_KEY,
};

```
