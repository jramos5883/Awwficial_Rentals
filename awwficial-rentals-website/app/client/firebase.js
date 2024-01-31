"use client"
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 
import { sendEmail } from "../actions/sendEmail";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_APIKEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_ADMIN,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

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
  @param {string} component it should be either "contact" or "quote"
  firebase DB should have "quote" collection, "contact" collection
  @return 
  if error:
    adding to firebase fail, sendEmail func won't run
    returns {faied:{message: "xxxx"}}
  if sucess: 
    returns {success:data[0].id}
*/
export async function addData(userData, component){
  // console.debug(`addData started`);
  // console.debug(component)    
  const currentDate = new Date();
  let formattedData;
  if(component ==="quote"){
    formattedData ={      
      name: userData.fullName, 
      email: userData.email,
      phone: userData.phone,
      event_date: userData.eventDate,
      venue_location: userData.venue,
      rental_time_frame: userData.timeFrame,
      comments: userData.comments,
      created_at: currentDate
    }
  } else if (component === "contact"){
    formattedData ={      
      name: userData.name,
      email: userData.email,
      message: userData.message,
      created_at: currentDate
    }
  }
  // console.log(`formattedData:${JSON.stringify(formattedData)}`)
  
  try{
    const docRef = await addDoc(collection(db, component), formattedData); 
    // console.log("Document written with ID: ", docRef.id);
    await sendEmail(formattedData, component);
    return {success:docRef.id}
  } catch ({name, message}){
    console.error(message);
    return {failed: {message}}
  }
}




