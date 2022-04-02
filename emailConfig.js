const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.ACCOUNT_EMAIL, // generated ethereal user
        pass: process.env.ACCOUNT_PASSWORD, // generated ethereal password
    },
});
const sendEmail = async (recipient) => {
    await transporter.sendMail({
        from: process.env.ACCOUNT_EMAIL, // sender address
        to: recipient, // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    });
}

module.exports = sendEmail