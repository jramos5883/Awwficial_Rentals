import { FaPhone } from "react-icons/fa6"
import { FiMail } from "react-icons/fi"

export default function Contact() {

  // check errors

  // name, email, phone number and text area
  return (
    <main className="bg-white text-black">
      <div className="max-w-screen-xl grid grid-cols-1 tablet:grid-cols-2 mx-auto py-10">
        <section className="mx-auto px-5 pb-5 box-border w-full tablet:pb-0">
        <h1 className="text-3xl mt-0 text-center tablet:text-left bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 inline-block text-transparent bg-clip-text">Contact Us Today!</h1>
          <div>
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
        <form className="flex flex-col px-5 gap-2" action="https://formsubmit.co/728e4757f50eb5784d2d959cd5dcd793" method="POST">
          {/* honeypot */}
          <input type="text" name="_honey" className="hidden" />
          {/* Disable Captcha */}
          <input type="hidden" name="_captcha" value="false" />

          <input type="hidden" name="_next" value="http://localhost:3000/Contact/success.html" />
        
          <div className="grid grid-cols-1 lapsm:grid-cols-2 gap-3">
            <div>
              <label className="sr-only" htmlFor="name">Name</label>
              <input className="text-lg bg-inherit box-border w-full border py-1 border-yellow-500 placeholder:pl-2 placeholder:font-sans" id="name" type="text" name="name" placeholder="Name" required />
            </div>
            <div>
              <label className="sr-only" htmlFor="phone">Phone</label>
              <input className="text-lg bg-inherit box-border w-full border py-1  border-yellow-500 placeholder:pl-2 placeholder:font-sans" id="phone" type="tel" name="phone number" placeholder="Phone Number(optional)"/>
            </div>
          </div>
          <div>
            <label className="sr-only" htmlFor="email">Email</label>
            <input className="text-lg bg-inherit box-border w-full border  border-yellow-500 placeholder:pl-2 placeholder:font-sans py-1" id="email" type="email" name="email" placeholder="Email"required />
          </div>
          <div className="grow flex">
            <label className="sr-only" htmlFor="message">Message</label>
            <textarea className="grow text-lg bg-inherit px-2 w-full  border-yellow-500 placeholder:font-sans" id="message" type="text" name="message" placeholder="Message" required />
          </div>
          <button className="py-2 border-0 bg-gradient-to-r rounded from-yellow-500 via-yellow-600 to-yellow-700 text-white font-bold py-2 px-5" type="submit">SEND</button>
        </form>
      </div>
    </main>
  );
}
