
const mailConfig=require('./mailConfig');

const nodemailer=require('nodemailer');



const transporter = nodemailer.createTransport({
    host: mailConfig.HOST,
    port:mailConfig.PORT,
    secure: mailConfig.SECURE,
    auth: {
      user: mailConfig.AUTH.USERNAME,
      pass: mailConfig.AUTH.PASSWORD,
    },
  });


  module.exports={transporter};