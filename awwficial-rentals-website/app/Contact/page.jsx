"use client";
import { FiMail, FiPhone } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import ContactForm from "./ContactForm";
import { playfairDisplay } from "../ui/fonts";

export default function Contact() {

  // name, email, phone number and text area
  return (
    <main className="text-black flex flex-col items-center justify-center">
      <h1 className={`text-[33px] md:text-[36px] text-center mt-[20px] mb-[20px] ${playfairDisplay.className}`}>Contact Us</h1>
      <section className="flex flex-col items-center justify-start w-[80%] px-[20px] py-[16px] rounded-[10px] border border-solid border-[1px] border-[#740E94] bg-[#FFF] mb-[25px]">
        <p className="text-[24px] w-full hidden md:block">
        For any questions that have not been answered in the FAQs, please use the form below and we’ll address them promptly.
        </p>
        <div className="flex flex-col md:flex-row items-start gap-[24px] self-stretch">
          <div className="flex flex-col items-center pt-1 md:pt-4 md:items-start gap-[16px] md:gap-[24px] md:w-[330px]">
            <div className="flex items-center gap-[16px] self-stretch">
              <FiMail className="h-[30px] w-[30px] md:h-[35px] md:w-[35px]"/>
              <p className="m-0 text-[20px] font-bold">awwficial@email.com</p>
            </div>
            <div className="flex items-center gap-[16px] self-stretch">
              <FiPhone className="h-[30px] w-[30px] md:h-[35px] md:w-[35px]"/>
              <p className="m-0 text-[20px] font-bold">(999)999-9999</p>
            </div>
            <div className="flex items-center gap-[16px] self-stretch">
              <CiLocationOn className="h-[30px] w-[30px] md:h-[35px] md:w-[35px]"/>
              <p className="m-0 text-[20px] font-bold">CA</p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
