const nodemailer = require("nodemailer");



// create reusable transporter object using the default SMTP transport
module.exports = nodemailer.createTransport({
    host: "sg.hostbuddy.cloud",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: "test@codewithx.com", // generated ethereal user
        pass: "gT,z&]BYf(z~", // generated ethereal password
    },
});






