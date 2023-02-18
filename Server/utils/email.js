 let nodemailer = require("nodemailer");

let sendEmail = async (options) => {
  // 1) Create A Transporter
  let transporter = nodemailer.createTransport({
    // service : 'Gmail' ,
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  // 🔔  Activate in Gmail "Less secure app" option

  // 2) Define The Email Options
  let mailOptions = {
    from: "Safa Belh <SafaBelh@gmail.com>",
    to: options.email,
    text: options.message,
    subject: options.subject,
    // html :
  };
  // 3) Actually Send The Email
  await transporter.sendMail(mailOptions);
};
module.exports = sendEmail;
