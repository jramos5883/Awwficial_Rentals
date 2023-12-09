import { playfairDisplay } from "../ui/fonts";

export default function GetAQuote(){
  return(
    <main className="text-center text-black pb-52 pt-10 tablet:pt-5">
        <h1 className={`text-3xl tablet:text-4xl font-medium mt-0 text-center mb-8 ${playfairDisplay.className}`}>Get a Quote</h1>
       
        <form className="flex flex-col m-8 tablet:max-w-[600px] tablet:mx-auto p-5 border border-[#740E94] rounded-xl tablet:rounded-[20px] bg-white">
          <p className="text-left text-base mb-6 tablet:mb-8">If you have any questions or requests, use the form below to get in touch, and we&apos;ll address them promptly. If you have any specific questions, please visit our FAQ&apos;s page.</p>
          {/* honeypot */}
          <input type="text" name="_field" className="opacity-0 absolute top-0 left-0 h-0 w-0 z-[-1]" />
            <div className="mb-4 tablet:mb-5">
              <label htmlFor="fullName" className="text-left block mb-2 tablet:mb-[5px] text-lg tablet:text-base font-bold">Full name <span className="text-[#F31C1C]">*</span></label>
              <input id="fullName" type="text" name="fullName" className="px-1 w-full border border-[#BDBDBD] rounded tablet:rounded-[6.4px] focus:border-[#4B0063] focus:bg-[#F6E9FA]" required/>
            </div>
            <div className="mb-4 tablet:mb-5">
              <label htmlFor="email" className="text-left block mb-2 tablet:mb-[5px] text-lg tablet:text-base font-bold">Email <span className="text-[#F31C1C]">*</span></label>
              <input id="email" type="email" name="email" className="px-1 w-full border border-[#BDBDBD] rounded tablet:rounded-[6.4px] focus:border-[#4B0063] focus:bg-[#F6E9FA]" required />
            </div>
            <div className="mb-4 tablet:mb-5">
              <label htmlFor="phone" className="text-left block mb-2 tablet:mb-[5px] text-lg tablet:text-base font-bold">Phone number <span className="text-[#F31C1C]">*</span></label>
              <input id="phone" type="tel" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" className="px-1 box-border w-full border border-[#BDBDBD] rounded tablet:rounded-[6.4px] focus:border-[#4B0063] focus:bg-[#F6E9FA]" required/>
            </div>
            <div className="mb-4 tablet:mb-5">
              <label htmlFor="eventDate" className="text-left block mb-2 tablet:mb-[5px] text-lg tablet:text-base font-bold">Event date <span className="text-[#F31C1C]">*</span></label>
              <input id="eventDate" type="date" name="eventDate"  className="px-1 box-border w-full border border-[#BDBDBD] rounded tablet:rounded-[6.4px] focus:border-[#4B0063] focus:bg-[#F6E9FA] placeholder:text-gray-400" required/>
            </div>
            <div className="mb-4 tablet:mb-5">
              <label htmlFor="venue" className="text-left block mb-2 tablet:mb-[5px] text-lg tablet:text-base font-bold">Venue location <span className="text-[#F31C1C]">*</span></label>
              <input id="venue" type="text" name="venue"  className="px-1 box-border w-full border border-[#BDBDBD] rounded tablet:rounded-[6.4px] focus:border-[#4B0063] focus:bg-[#F6E9FA]" required/>
            </div>
            <div className="mb-4 tablet:mb-5">
              <label htmlFor="timeFrame" className="text-left block mb-2 tablet:mb-[5px] text-lg tablet:text-base font-bold">Preferred rental time frame <span className="text-[#F31C1C]">*</span></label>
              <input id="timeFrame" type="text" name="timeFrame" placeholder="2 hours" className="px-1 box-border w-full border border-[#BDBDBD] rounded tablet:rounded-[6.4px] focus:border-[#4B0063] focus:bg-[#F6E9FA]" required/>
            </div>
            <div className="mb-6 tablet:mb-5">
              <label htmlFor="comments" className="text-left block mb-2 tablet:mb-[5px] text-lg tablet:text-base font-bold">Share any additional details or further questions!</label>
              <textarea id="comments" type="text" name="comments" className="px-1 box-border w-full border border-[#BDBDBD] rounded tablet:rounded-[6.4px] focus:border-[#4B0063] focus:bg-[#F6E9FA] h-[128px]"/>
            </div>
          <button className="bg-primary hover:bg-primary-hover text-white text-xl tablet:text-2xl px-4 py-2 rounded-md tablet:rounded-xl" type="submit">Submit</button>
        </form>
    </main>
  )
}