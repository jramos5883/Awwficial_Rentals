"use client";
import { useState, useEffect } from "react";
import { addContactToDB } from "../actions";

function ContactForm() {
    const [errors, setErrors] = useState({}); 
    const [submitForm, setSubmitForm] = useState({});
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
    // Set final form to be submitted
    setSubmitForm({
        name: name,
        email: email,
        message: message,
    })
  }

  useEffect(() => {
    if (isFormChecked && isFormValid) { 
        console.log("both check & validation are true");
        addContactToDB(submitForm);
        // console.log("Name:", name);
        // console.log("Email:", email);
        // console.log("Message:", message);
        // Rest of your code, e.g., submit the form
    } 
  }, [isFormChecked, isFormValid])

  return (
    <div className="w-full">
        <form className="flex flex-col items-start gap-[20px] flex-1" method="POST" action="/form" onSubmit={handleSubmit}>
        {/* honeypot */}
        <input type="text" name="_honey" className="hidden" aria-hidden="true" />
        <input type="text" name="phoneNumber" className="opacity-0 absolute top-0 right-0 w-[1px] h-[1px]" aria-hidden="true"/>
        {/* Disable Captcha */}
        <input type="hidden" name="_captcha" value="false" />
        <div className="flex justify-center items-center gap-[16px] w-full self-stretch">
            <div className="flex flex-col items-start gap-[5.122px] w-[calc(50%-8px)]">
                <label className="text-[15.3px] font-bold" htmlFor="name">Name</label>
                <input 
                    className="flex items-center gap-[6.403px] self-stretch py-[0px] px-[6.403px] rounded-[6.403px] border border-solid border-[1.281px] border-gray-400 focus:border-[#4B0063] focus:bg-[#F6E9FA]" 
                    id="name" type="text" name="name" placeholder="Name" 
                    required 
                />
                {errors.name && <p>{errors.name}</p>} 
            </div>
            <div className="flex flex-col items-start gap-[5.122px]  w-[calc(50%-8px)]">
                <label className="text-[15.3px] font-bold" htmlFor="email">Email</label>
                <input 
                    className="flex items-center gap-[6.403px] self-stretch py-[0px] px-[6.403px] rounded-[6.403px] border border-solid border-[1.281px] border-gray-400 focus:border-[#4B0063] focus:bg-[#F6E9FA]"  
                    id="email" type="email" name="email" placeholder="Email"
                    required 
                />
                {errors.email && <p>{errors.email}</p>} 
            </div>
        </div>
        <div className="flex flex-col items-start gap-[5.122px] h-[194px] self-stretch">
            <label className="text-[15.3px] font-bold" htmlFor="message">Message</label>
            <textarea 
                className="flex flex-1 items-center gap-[6.403px] self-stretch py-[0px] px-[6.403px] rounded-[6.403px] border border-solid border-[1.281px] border-gray-400 focus:border-[#4B0063] focus:bg-[#F6E9FA]"
                id="message" type="text" name="message" placeholder="Your message here" 
                required 
            />
            {errors.message && <p>{errors.message}</p>} 
        </div>
        <button className="text-[24px] text-white flex items-center justify-center gap-[10px] self-stretch py-[16px] px-[4px] rounded-[10px] bg-primary hover:bg-primary-hover" type="submit">Submit</button>
    </form>
  </div>
  )
}

export default ContactForm