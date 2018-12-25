const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
app.use(express.json())

module.exports = {
    path: '/api',
    handler: app
}
app.post('/contact', (req, res)=> {
    const output = ` 
        <h1>You have a new message from dontetrumble.com</h1>
        <h2>Contact Details</h2>
        <ul>
            <li>First Name: ${req.body.firstName}</li>
            <li>Last Name: ${req.body.lastName}</li>
            <li>Email: ${req.body.email}</li>
            <li>Phone Number: ${req.body.phoneNumber}</li>
            <li>Company: ${req.body.company}</li>
        </ul>
        <h2>Message</h2>
        <p>${req.body.message}</p>
    `;

    let transporter = nodemailer.createTransport({
        service: "Gmail", 
        host: 'smtpout.secureserver.net',
        auth: {
            user: 'billingdonte@gmail.com', // generated ethereal user
            pass: '122491dt' // generated ethereal password
        }
        
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: `"Donte Trumble Website" <${req.body.email}>`, // sender address
        to: 'donte@dontetrumble.com', // list of receivers
        subject: `Email from ${req.body.email}`, // Subject line
        text: 'Hello world?', // plain text body
        html: output // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(400).json({ 'message': error });
        }else{
            console.log('Message sent: %s', info.messageId);
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
            return res.status(200).json({ 'message': 'Message Sent' });
        }
    });
    
})

