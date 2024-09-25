
require('dotenv').config();

module.exports={
    HOST: process.env.HOST,
    PORT: process.env.PORT,
    SECURE: process.env.SECURE,
    AUTH: {
      USERNAME: process.env.USERNAME,
      PASSWORD: process.env.PASSWORD,
    }
}