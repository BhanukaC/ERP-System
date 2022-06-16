const nodemailer = require("nodemailer");



// create reusable transporter object using the default SMTP transport
module.exports = nodemailer.createTransport({
    host: process.env.HOSTEMAIL,
    port: process.env.EMAILPORT,
    // secure: true, // true for 465, false for other ports
    auth: {
        user: process.env.EMAILUSERNAME, // generated ethereal user
        pass: process.env.EMAILUSERPASSWORD, // generated ethereal password
    },
});






