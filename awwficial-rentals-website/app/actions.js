'use server';
import supabase from "./client/supabase";

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
      ]);

    if (error) {
      console.error('Error inserting data:', error.message);
    } else {
      console.log('Data inserted successfully:', data);
      // Handle success as needed
    }
}