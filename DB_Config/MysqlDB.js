require('dotenv').config(); // Load environment variables from .env file

const environment = process.env.ENV; // Default to development if ENV is not set

const config = {
    development: {
        HOST: process.env.DEV_HOST,
        USER: process.env.DEV_USER,
        PASSWORD: process.env.DEV_PASSWORD,
        DATABASE: process.env.DEV_DATABASE,
        PORT: process.env.DEV_PORT,
        dialect: process.env.DEV_DIALECT
    },
    production: {
        HOST: process.env.PROD_HOST,
        USER: process.env.PROD_USER,
        PASSWORD: process.env.PROD_PASSWORD,
        DATABASE: process.env.PROD_DATABASE,
        PORT: process.env.PROD_PORT,
        dialect: process.env.PROD_DIALECT
    }
};

module.exports = config[environment]; // Export the configuration based on the current environment