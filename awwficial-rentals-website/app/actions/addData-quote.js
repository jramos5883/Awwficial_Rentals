"use server"
import supabase from '../client/supabase';
import sgMail from 'sendgrid/mail';

export async function addData(userData){
    console.debug(`addData started`);
    try{
      const { data, error } = await supabase
                              .from('QuoteForms')
                              .insert([
                                  { 
                                      name: userData.fullName, 
                                      email: userData.email,
                                      phone: userData.phone,
                                      event_date: userData.eventDate,
                                      venue_location: userData.venue,
                                      rental_time_frame: userData.timeFrame,
                                      comments: userData.comments
                                  },
                              ])
                              .select()
      if(error){ 
        throw new Error(`Could not add data. Error Message: ${error?.message}`)
      }
      
      if(data){
        return data;
      }

    } catch(e) {
        console.log(e);
    }

}