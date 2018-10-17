const express = require("express");
const sgMail = require("@sendgrid/mail");
const sgAPI = require('./config/keys').sgAPI;
sgMail.setApiKey(sgAPI);

const msg = {
    to: "raulsanchez1024@gmail.com",
    from: "hi@happiworkplace.com",
    subject: "Sending with SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>"
};

//sgMail.send(msg);

const app = express();


const port = process.env.PORT || 1234;
app.listen(port, () => console.log(`Server running on port ${port}`));