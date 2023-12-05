// const nodemailer = require('nodemailer');
const sgMail = require('@sendgrid/mail');

import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(Request) {
    const apiKey = process.env.SENDGRID_API_KEY;
    sgMail.setApiKey(apiKey);
    const msg = {
        to: 'INSERT_EMAIL_HERE',
        from: 'INSERT_VERIFIED_SENDGRID_EMAIL_HERE', // Use the email address or domain you verified above
        subject: 'Sending with Twilio SendGrid is Fun by Tomomi for Test',
        html: '<p>this is test to see if SendGrid is working</p><strong>and easy to do anywhere, even with Node.js</strong>',
    };
    msg.to = "INSERT_EMAIL_HERE";
    console.log(msg);
    sgMail
        .send(msg)
        .then(() => {}, error => {
            console.error(error);

            if (error.response) {
                console.error(error.response.body)
            }
        })
    return new Response("This is a new API route");
}

// export default function handler(req, res) {
//     res.status(200).json({text: "hello"});
//     const apiKey = process.env.SENDGRID_API_KEY;
//     sgMail.setApiKey(apiKey);
//     const msg = {
//         to: 'jeffrey.t.li.work@gmail.com',
//         from: 'li.jeffreyt@yahoo.com', // Use the email address or domain you verified above
//         subject: 'Sending with Twilio SendGrid is Fun by Tomomi for Test',
//         text: 'this is test to see if SendGrid is working',
//         html: '<strong>and easy to do anywhere, even with Node.js</strong>',
//     };
//     msg.to = "jeffrey.t.li.work@gmail.com";
//     console.log(msg);

//   if (req.method === 'POST') {

//         sgMail
//         .send(msg)
//         .then(() => {}, error => {
//             console.error(error);

//             if (error.response) {
//                 console.error(error.response.body)
//             }
//         }); 
//     }
// }