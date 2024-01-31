"use server"
import sgMail from '@sendgrid/mail';
import { format } from 'date-fns'

/**
 * Function to send email using SendGrid
    @param {object} data format:{ 
                        created_at: '2023-12-11T23:32:40.246952+00:00',
                        name: 'name of sender',
                        email: 'email@address.com',
                        phone: '111-111-1111',
                        event_date: '2023-12-29',
                        venue_location: 'Los Angeles, CA',
                        rental_time_frame: '2 hours',
                        comments: 'hello'
                      }
    @param {string} component it's either "quote" or "contact"
  environment variable need (make following variable in .env.local file):
    SENDGRID_API_KEY, OWNER_EMAIL, SENDGRID_VERIFIED_EMAIL
*/
export async function sendEmail(data, component) {
  // console.debug(`sendEmail ran`)
  const apiKey = process.env.SENDGRID_API_KEY;
  sgMail.setApiKey(apiKey);
  let htmlText = "";
  if(component === "contact"){
    htmlText = `<div>
            <h1>You have a new contact request</h1>
            <ul>
              <li>Sender Name: ${data.name}</li>
              <li>Sender Email: ${data.email}</li>
              <li>Sender Message: ${data.message}</li>
              <li>Date of Input: ${format(data.created_at,'MM/dd/yyyy')}</li>
            </ul>
            </div>`
  } else if(component === "quote"){
    htmlText = `<div>
              <h1>You have a new quote request</h1>
              <ul>
                <li>Sender Name:${data.name}</li>
                <li>Sender Email:${data.email}</li>
                <li>Sender Phone Number:${data.phone}</li>
                <li>Event Date:${data.event_date}</li>
                <li>Venue Location:${data.venue_location}</li>
                <li>Rental Time Frame:${data.rental_time_frame}</li>
                <li>Comments:${data.comments}</li>
                <li>Date of Input:${format(data.created_at,'MM/dd/yyyy')}</li>
              </ul>
            </div>`
  }
  const msg = {
      to: process.env.OWNER_EMAIL,
      from: process.env.SENDGRID_VERIFIED_EMAIL, // Use the email address or domain you verified above
      subject: `Awwficial: ${component} form submission`,
      html: `${htmlText}`,
  };
  // console.log(msg);
  try{
    // console.log('sgMail started sending email')
    const res = await sgMail.send(msg);
    // console.log('sgMail finished', res);
  } catch (error) {
    console.error(error);
    throw new Error("Email was not sent");
  }
}

