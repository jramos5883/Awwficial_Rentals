"use client";
import { useState, useEffect } from "react";
import { addData } from "../client/firebase";
import { Alert } from "@mui/material";
import { playfairDisplay } from "../ui/fonts";

function ContactForm() {
    const [errors, setErrors] = useState({}); 
    const [submitForm, setSubmitForm] = useState({});
    const [isFormValid, setIsFormValid] = useState(false); 
    const [isFormChecked, setIsFormChecked] = useState(false); 
    const [resNoError, setResNoError] = useState(null);
    const [resError, setResError] = useState(null);
    // == Check form inputs  ==
    const checkForm = (name, message) => {

        const alphanumericRegex = /^[A-Za-z0-9]+$/;
        const NamesRegex = /^[A-Za-z0-9\s]+$/;
        const messageRegex = /^[^<>]+$/;
        let errors = 0;
        // Test if the input matches the pattern
        if (!NamesRegex.test(name)) {
            // console.log("name is NOT valid")
            errors += 1;
        } 
        if (!messageRegex.test(message)) {
            // console.log("message is NOT valid")
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

    const reset = () => {

    }
    
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
    const useEffectSubmit = async (data) => {
        try {
            const response = await addData(data, "contact");
            // console.log("response from await addToDB ", response);
            if (response?.success) {
                // console.log(`Data added. db id#: ${response.success}`);
                setResNoError(true);
            } else {
                console.error(`Error: ${response.failed}`);
                setResError(true);
            }
        } catch (err) {
            console.error(err);
        }
    }
    if (isFormChecked && isFormValid) { 
        // console.log("both check & validation are true");
        useEffectSubmit(submitForm);
        // Rest of your code, e.g., submit the form
    } 
    return () => {};
  }, [isFormChecked, isFormValid])
  
  return (
    <div className="w-full">
        {resError && <div className="flex justify-center items-center gap-[24px] md:pt-10">
            <Alert
            severity="error"
            sx={{maxWidth:"600px", margin:"auto auto 20px auto", textAlign: "left"}}
            >
            We encountered an error. <br />Please contact us using thomas@awwficial.rentals or (626)838-2265.
            </Alert> 
        </div>}
        {resNoError && <div className="flex flex-col items-start justify-start gap-[24px] p-5 md:m-5 shadow-[0_0.5px_20px_0_rgba(116,14,148,0.16)] rounded-xl">
            <p className={`text-3xl lapsm:text-4xl ${playfairDisplay.className}`}>Submitted!</p>
            <p>Please wait 3-5 business days to hear back.</p>
        </div>}
        {(resError || resNoError) ? null :
            <form className="flex flex-col items-start gap-[20px] flex-1" method="POST" action="/form" onSubmit={handleSubmit}>
            {/* honeypot */}
            <input type="text" name="_honey" className="hidden" aria-hidden="true" />
            <input type="text" name="phoneNumber" className="opacity-0 absolute top-0 right-0 w-[1px] h-[1px]" aria-hidden="true"/>
            {/* Disable Captcha */}
            <input type="hidden" name="_captcha" value="false" />
            <div className="flex flex-col justify-start items-start lapsm:flex-row lapsm:justify-center lapsm:items-center gap-[16px] w-full self-stretch">
                <div className="flex flex-col items-start gap-[5.122px] w-full lapsm:w-[calc(50%-8px)]">
                    <label className="text-[15.3px] font-bold" htmlFor="name">Name</label>
                    <input 
                        className="flex items-center gap-[6.403px] self-stretch py-[0px] px-[6.403px] rounded-[6.403px] border border-solid border-[1.281px] border-gray-400 focus:border-[#4B0063] focus:bg-[#F6E9FA]" 
                        id="name" type="text" name="name" placeholder="Name" 
                        required 
                    />
                    {errors.name && <p>{errors.name}</p>} 
                </div>
                <div className="flex flex-col items-start gap-[5.122px] w-full lapsm:w-[calc(50%-8px)]">
                    <label className="text-[15.3px] font-bold" htmlFor="email">Email</label>
                    <input 
                        className="flex items-center gap-[6.403px] self-stretch py-[0px] px-[6.403px] rounded-[6.403px] border border-solid border-[1.281px] border-gray-400 focus:border-[#4B0063] focus:bg-[#F6E9FA]"  
                        id="email" type="email" name="email" placeholder="Email"
                        required 
                    />
                    {errors.email && <p className="text-xs text-red-600">{errors.email}</p>} 
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
            <button className="bg-primary hover:bg-primary-hover text-white text-xl tablet:text-2xl px-4 py-2 rounded-md tablet:rounded-xl w-full" type="submit">Submit</button>
        </form>}
  </div>
  )
}

export default ContactForm