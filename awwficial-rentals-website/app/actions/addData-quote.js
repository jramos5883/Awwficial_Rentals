"use server"
import supabase from '../client/supabase';
import sgMail from '@sendgrid/mail';
import { format } from 'date-fns'
import { db } from './firebase';
import { collection, addDoc } from "firebase/firestore"; 
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
  environment variable need (make following variable in .env.local file):
    SENDGRID_API_KEY, OWNER_EMAIL, SENDGRID_VERIFIED_EMAIL
*/
async function sendEmail(data) {
  const apiKey = process.env.SENDGRID_API_KEY;
  sgMail.setApiKey(apiKey);
  const msg = {
      to: process.env.OWNER_EMAIL,
      from: process.env.SENDGRID_VERIFIED_EMAIL, // Use the email address or domain you verified above
      subject: 'Sending with Twilio SendGrid is Fun by Tomomi for Test',
      html: ` <div>
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
              </div>
            `,
  };

  // console.log(msg);
  try{
    console.log('sgMail started sending email')
    const res = await sgMail.send(msg);
    console.log('sgMail finished', res);
  } catch (error) {
    console.error(error);
    throw new Error("Email was not sent");
  }
}

/**
  Function to add user's input data to firebase and run sendEmail function
  @param {object} userData format{
                                    _field: '', 
                                    fullName: 'customer name', 
                                    email: 'email@address.com', 
                                    phone: '310-111-1111', 
                                    eventDate: '2023-12-13',
                                    timeFrame: "2 hours", 
                                    venue: "Los Angeles, CA", 
                                    comments: "this is comments"
                                  }
  @return 
  if error:
    adding to firebase fail, sendEmail func won't run
    returns {faied:{message: "xxxx"}}
  if sucess: 
    returns {success:data[0].id}
*/
export async function addData(userData){
    console.debug(`addData started`);    
    const currentDate = new Date();

    const formattedData ={      
      name: userData.fullName, 
      email: userData.email,
      phone: userData.phone,
      event_date: userData.eventDate,
      venue_location: userData.venue,
      rental_time_frame: userData.timeFrame,
      comments: userData.comments,
      created_at: currentDate
    }

    try{
      const docRef = await addDoc(collection(db, "quote"), formattedData) 
      console.log("Document written with ID: ", docRef.id);
      await sendEmail(formattedData)
      return {success:docRef.id}
    } catch ({name, message}){
      console.error(message);
      return {failed: {message}}
    }

}
