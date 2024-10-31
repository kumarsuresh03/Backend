// config/config.js
require('dotenv').config();

const config = {
    dbUri: process.env.DB_URI,
    port: process.env.PORT || 3000,
};

module.exports = config;
