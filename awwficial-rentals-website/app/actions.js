'use server';
import supabase from "./client/supabase";
const sgMail = require('@sendgrid/mail');

async function sendEmail(data) {
    const apiKey = process.env.SENDGRID_API_KEY;
    sgMail.setApiKey(apiKey);
    const msg = {
        to: data.email,
        from: process.env.SENDGRID_VERIFIED_EMAIL, // Use the email address or domain you verified above
        subject: 'Sending with Twilio SendGrid is Fun by Tomomi for Test',
        html: '<p>this is test to see if SendGrid is working</p><strong>and easy to do anywhere, even with Node.js</strong>',
    };
    msg.to = data.email;
    console.log(msg);
    sgMail
        .send(msg)
        .then(() => {}, error => {
            console.error(error);

            if (error.response) {
                console.error(error.response.body)
            }
        })
}

export async function addContactToDB(formData) {
    // Assuming 'ContactForms' is the name of your table
    const { data, error } = await supabase
      .from('ContactForms')
      .insert([
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          // Map other fields accordingly
        },
      ])
      .select()

    if (error) {
      console.error('Error inserting data:', error.message);
    } else {
      console.log('Data inserted successfully:', data[0]);
      sendEmail(data[0]);
      // Handle success as needed
    }
}