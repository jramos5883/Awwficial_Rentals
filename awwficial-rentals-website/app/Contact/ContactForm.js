"use client";
import { useState, useEffect } from "react";

function ContactForm() {
    const [errors, setErrors] = useState({}); 
    const [isFormValid, setIsFormValid] = useState(false); 
    const [isFormChecked, setIsFormChecked] = useState(false); 

    // == Check form inputs  ==
    const checkForm = (name, message) => {

        const alphanumericRegex = /^[A-Za-z0-9]+$/;
        const NamesRegex = /^[A-Za-z0-9\s]+$/;
        const messageRegex = /^[^<>]+$/;
        let errors = 0;
        // Test if the input matches the pattern
        if (!NamesRegex.test(name)) {
            console.log("name is NOT valid")
            errors += 1;
        } 
        if (!messageRegex.test(message)) {
            console.log("message is NOT valid")
            errors += 1;
        } 
        
        if (errors === 0)  {
            setIsFormChecked(true);
        }
    }

    // == Validate form ==
    const validateForm = (name, email, message) => { 

        let errors = {}; 
  
        if (!name) { 
            errors.name = 'Name is required.'; 
        } 
  
        if (!email) { 
            errors.email = 'Email is required.'; 
        } else if (!/\S+@\S+\.\S+/.test(email)) { 
            errors.email = 'Email is invalid.'; 
        } 

        if (!message) { 
            errors.message = 'A message is required.'; 
        }
  
        setErrors(errors); 
        if (Object.keys(errors).length === 0) {
            setIsFormValid(true); 
        }        
    }; 
    
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    // == Check honeypots ==
    if (formData.get("_honey") !== "" || formData.get("phoneNumber") !== "") {
        return
    }

    // Check form for malicious scripts
    checkForm(name, message);
    // Validate form 
    validateForm(name, email, message); 
  }

  useEffect(() => {
    if (isFormChecked && isFormValid) { 
        console.log("both check & validation are true")
        // console.log("Name:", name);
        // console.log("Email:", email);
        // console.log("Message:", message);
        // Rest of your code, e.g., submit the form
    } 
  }, [isFormChecked, isFormValid])

  return (
    <div>
        <form className="flex flex-col px-5 gap-2" method="POST" action="/form" onSubmit={handleSubmit}>
        {/* honeypot */}
        <input type="text" name="_honey" className="hidden" />
        <input type="text" name="phoneNumber" className="opacity-0" />
        {/* Disable Captcha */}
        <input type="hidden" name="_captcha" value="false" />
        <div className="grid grid-cols-1 lapsm:grid-cols-2 gap-3">
            <div>
                <label className="sr-only" htmlFor="name">Name</label>
                <input 
                    className="text-lg bg-inherit box-border w-full border py-1 border-yellow-500 placeholder:pl-2 placeholder:font-sans" 
                    id="name" type="text" name="name" placeholder="Name" 
                    required 
                />
                {errors.name && <p>{errors.name}</p>} 
            </div>
        </div>
        <div>
            <label className="sr-only" htmlFor="email">Email</label>
            <input 
                className="text-lg bg-inherit box-border w-full border  border-yellow-500 placeholder:pl-2 placeholder:font-sans py-1" 
                id="email" type="email" name="email" placeholder="Email"
                required 
            />
            {errors.email && <p>{errors.email}</p>} 
        </div>
        <div className="grow flex">
        <label className="sr-only" htmlFor="message">Message</label>
        <textarea 
            className="grow text-lg bg-inherit px-2 w-full  border-yellow-500 placeholder:font-sans" 
            id="message" type="text" name="message" placeholder="Message" 
            required 
        />
        {errors.message && <p>{errors.message}</p>} 
        </div>
        <button className="py-2 px-5 border-0 bg-gradient-to-r rounded from-yellow-500 via-yellow-600 to-yellow-700 text-white font-bold hover:shadow-lg" type="submit">SEND</button>
    </form>
  </div>
  )
}

export default ContactForm