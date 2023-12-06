"use client";
import { FaPhone } from "react-icons/fa6"
import { FiMail } from "react-icons/fi"
import sendEmail from "../util/sendEmail";
import ContactForm from "./ContactForm";

export default function Contact() {

  // name, email, phone number and text area
  return (
    <main className="bg-white text-black">
      <div className="max-w-screen-xl grid grid-cols-1 tablet:grid-cols-2 mx-auto py-10">
        <section className="mx-auto px-5 pb-5 box-border w-full tablet:pb-0">
        <h1 className="text-3xl mt-0 text-center tablet:text-left bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 inline-block text-transparent bg-clip-text">Contact Us Today!</h1>
          <div className="text-yellow-900">
            <p className="mb-10">
              <span className="block">Comments or questions about our service?</span>
              Please fill out the form and we&apos;ll get back to you as soon as possible!
            </p>
              <div className="flex mt-5">
                <FaPhone className="text-2xl"/>
                <div className="pl-5">
                  <h5 className="m-0">Phone Number</h5>
                  <p className="m-0">(000)000-0000</p>
                </div>
              </div>
              <div className="flex mt-5">
                <FiMail className="text-2xl"/>
                <div className="pl-5">
                  <h5 className="m-0">Email</h5>
                  <p className="m-0">xxx@xxxxx.com</p>
                </div>
              </div>
          </div>
        </section>
        <ContactForm />
      </div>
    </main>
  );
}
