"use client"
import { useState } from "react";
import { playfairDisplay } from "../ui/fonts";
import { useForm } from "react-hook-form"
import { addData } from "../actions/addData-quote";
import { Alert } from "@mui/material";
import SubmittedModal from "../components/SubmittedModal";


/**
 * @component
 * This will show get a quote input page.
 * This component use React-hook-form pkg.
 *
 * State1: resultMessage => Message used inside MUI <Alert> component
 * State2: status => status will be either set to "error" or "success". This will affect the looks of MUI <Alert> component
 */

export default function GetAQuote() {
  // const [submittedStatus, setSubmittedStatus] = useState(true);
  const [errorStatus, setErrorStatus] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  /**
   * Calls server action addData. 
   * If response returns success, set resultMessage and status to success messages.
   * If response returns failed, set resultMessage to error message.
   * this function will run if all input passes React Hook Form's validation. 
   * @param {object} data format{
                                    _field: '', 
                                    fullName: 'customer name', 
                                    email: 'email@address.com', 
                                    phone: '310-111-1111', 
                                    eventDate: '2023-12-13',
                                    timeFrame: "2 hours", 
                                    venue: "Los Angeles, CA", 
                                    comments: "this is comments"
                                  } 
   * @returns 
   */
  async function processForm(data) {
    // console.log(data);
    if (data._field) return;
    setModalOpen(false);
    setErrorStatus(false);
    try {
      const response = await addData(data);
      if (response?.success) {
        console.log(`Data added. db id#: ${response.success}`);
        setErrorStatus(false);
        setModalOpen(true);
      } else {
        console.log(`Error: ${response.failed.message}`);
        setErrorStatus(true);
        setModalOpen(false);
      }
    } catch (e) {
      console.error(e);
    }

    reset();
  }

  return (
    <main className="text-center text-black pb-52 pt-10 tablet:pt-5">
      {/* this is Alert Message to show the result of submit */}
      {errorStatus? (
        <Alert
          severity="error"
          sx={{maxWidth:"600px", margin:'auto auto 20px auto'}}
        >
          An error occurred. Please contact XXX-XXX-XXXX directly for inquiry.
        </Alert>
      ):""}
      {(!errorStatus && modalOpen)? (<SubmittedModal setOpen={setModalOpen}/>): ""}     
      <h1
        className={`text-3xl tablet:text-4xl font-medium mt-0 text-center mb-8 ${playfairDisplay.className}`}
      >
        Get a Quote
      </h1>

      <form
        onSubmit={handleSubmit(processForm)}
        className="flex flex-col m-8 tablet:max-w-[600px] tablet:mx-auto p-5 border border-[#740E94] rounded-xl tablet:rounded-[20px] bg-white"
      >
        <p className="text-left text-base mb-6 tablet:mb-8">
          If you have any questions or requests, use the form below to get in
          touch, and we&apos;ll address them promptly. If you have any specific
          questions, please visit our FAQ&apos;s page.
        </p>

        {/* honeypot */}
        <input
          type="text"
          name="_field"
          aria-hidden="true"
          className="opacity-0 absolute top-0 left-0 h-0 w-0 z-[-1]"
          {...register("_field")}
        />

        <div className="mb-4 tablet:mb-5">
          <label
            htmlFor="fullName"
            className="text-left block mb-2 tablet:mb-[5px] text-lg tablet:text-base font-bold"
          >
            Full name
            <span className="text-[#F31C1C]">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            name="fullName"
            placeholder="John Doe"
            className="px-1 w-full border border-[#BDBDBD] rounded tablet:rounded-[6.4px] focus:border-[#4B0063] focus:bg-[#F6E9FA]"
            {...register("fullName", {
              required: "Please enter your full name.",
            })}
          />
          {errors.fullName?.message && (
            <p className="text-red-400 text-xs text-left">
              {errors.fullName.message}
            </p>
          )}
        </div>
        <div className="mb-4 tablet:mb-5">
          <label
            htmlFor="email"
            className="text-left block mb-2 tablet:mb-[5px] text-lg tablet:text-base font-bold"
          >
            Email
            <span className="text-[#F31C1C]">*</span>
          </label>
          <input
            id="email"
            name="email"
            placeholder="xxx@xxxx.xxx"
            className="px-1 w-full border border-[#BDBDBD] rounded tablet:rounded-[6.4px] focus:border-[#4B0063] focus:bg-[#F6E9FA]"
            {...register("email", {
              required: "Please enter email.",
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message:
                  "Please enter your email in the correct format. (ex. xxxx@gmail.com)",
              },
            })}
          />
          {errors.email?.message && (
            <p className="text-red-400 text-xs text-left">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="mb-4 tablet:mb-5">
          <label
            htmlFor="phone"
            className="text-left block mb-2 tablet:mb-[5px] text-lg tablet:text-base font-bold"
          >
            Phone number
            <span className="text-[#F31C1C]">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            placeholder="123-456-7890"
            className="px-1 box-border w-full border border-[#BDBDBD] rounded tablet:rounded-[6.4px] focus:border-[#4B0063] focus:bg-[#F6E9FA]"
            {...register("phone", {
              required: "Please enter phone number.",
              pattern: {
                value: /[0-9]{3}-[0-9]{3}-[0-9]{4}/,
                message:
                  "Please input phone number in the correct format. (ex. 123-456-7890)",
              },
            })}
          />
          {errors.phone?.message && (
            <p className="text-red-400 text-xs text-left">
              {errors.phone.message}
            </p>
          )}
        </div>
        <div className="mb-4 tablet:mb-5">
          <label
            htmlFor="eventDate"
            className="text-left block mb-2 tablet:mb-[5px] text-lg tablet:text-base font-bold"
          >
            Event date
            <span className="text-[#F31C1C]">*</span>
          </label>
          <input
            id="eventDate"
            type="date"
            name="eventDate"
            className="px-1 box-border w-full border border-[#BDBDBD] rounded tablet:rounded-[6.4px] focus:border-[#4B0063] focus:bg-[#F6E9FA] placeholder:text-gray-400"
            {...register("eventDate", {
              required: "Please enter your event date.",
            })}
          />
          {errors.eventDate?.message && (
            <p className="text-red-400 text-xs text-left">
              {errors.eventDate.message}
            </p>
          )}
        </div>
        <div className="mb-4 tablet:mb-5">
          <label
            htmlFor="venue"
            className="text-left block mb-2 tablet:mb-[5px] text-lg tablet:text-base font-bold"
          >
            Venue location
            <span className="text-[#F31C1C]">*</span>
          </label>
          <input
            id="venue"
            type="text"
            name="venue"
            placeholder="Los Angeles, CA"
            className="px-1 box-border w-full border border-[#BDBDBD] rounded tablet:rounded-[6.4px] focus:border-[#4B0063] focus:bg-[#F6E9FA]"
            {...register("venue", {
              required: "Please enter your venue address.",
            })}
          />
          {errors.venue?.message && (
            <p className="text-red-400 text-xs text-left">
              {errors.venue.message}
            </p>
          )}
        </div>
        <div className="mb-4 tablet:mb-5">
          <label
            htmlFor="timeFrame"
            className="text-left block mb-2 tablet:mb-[5px] text-lg tablet:text-base font-bold"
          >
            Preferred rental time frame{" "}
            <span className="text-[#F31C1C]">*</span>
          </label>
          <input
            id="timeFrame"
            type="text"
            name="timeFrame"
            placeholder="2 hours"
            className="px-1 box-border w-full border border-[#BDBDBD] rounded tablet:rounded-[6.4px] focus:border-[#4B0063] focus:bg-[#F6E9FA]"
            {...register("timeFrame", {
              required:
                "Please enter the estimated time frame of a photo booth rental.",
            })}
          />
          {errors.timeFrame?.message && (
            <p className="text-red-400 text-xs text-left">
              {errors.timeFrame.message}
            </p>
          )}
        </div>
        <div className="mb-6 tablet:mb-5">
          <label
            htmlFor="comments"
            className="text-left block mb-2 tablet:mb-[5px] text-lg tablet:text-base font-bold"
          >
            Share any additional details or further questions!
          </label>
          <textarea
            id="comments"
            type="text"
            name="comments"
            className="px-1 box-border w-full border border-[#BDBDBD] rounded tablet:rounded-[6.4px] focus:border-[#4B0063] focus:bg-[#F6E9FA] h-[128px]"
            {...register("comments")}
          />
        </div>
        <button
          type="submit"
          className="bg-primary hover:bg-primary-hover text-white text-xl tablet:text-2xl px-4 py-2 rounded-md tablet:rounded-xl"
        >
          Submit
        </button>
      </form>
    </main>
  );
}

// function Input({labelFor, label, inputType, placeholder, pattern}){
//   return(
//     <div className="mb-4 tablet:mb-5">
//       <label htmlFor={labelFor} className="text-left block mb-2 tablet:mb-[5px] text-lg tablet:text-base font-bold">{label} <span className="text-[#F31C1C]">*</span></label>
//       <input id={labelFor} type={inputType} name={labelFor} placeholder={placeholder} pattern={pattern} className="px-1 w-full border border-[#BDBDBD] rounded tablet:rounded-[6.4px] focus:border-[#4B0063] focus:bg-[#F6E9FA]" required/>
//     </div>
//   )
// }

// const inputList =[
//   {
//     labelFor:"fullName",
//     label:"Full Name",
//     inputType:"text",

//   }
// ]
