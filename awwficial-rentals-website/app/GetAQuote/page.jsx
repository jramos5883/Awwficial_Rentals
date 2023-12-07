
export default function GetAQuote(){
  return(
    <main className="bg-mainbg text-center text-black pb-52 pt-10 tablet:pt-5">
        <h1 className="text-3xl mt-0 text-center mb-8">Get a Quote</h1>
       
        <form className="flex flex-col m-8 tablet:max-w-[600px] tablet:mx-auto p-5 gap-2 border border-primary rounded bg-white">
          <p className="text-left text-base">If you have any questions or requests, use the form below to get in touch, and we&apos;ll address them promptly. If you have any specific questions, please visit our FAQ&apos;s page.</p>
          {/* honeypot */}
          <input type="text" name="_honey" className="hidden" />
            <div>
              <label htmlFor="fullName" className="text-left block mb-2 text-lg font-bold">Full Name <span className="text-[#F31C1C]">*</span></label>
              <input id="fullName" type="text" name="fullName" className="box-border w-full border rounded" required/>
            </div>
            <div>
              <label htmlFor="email" className="text-left block">Email <span className="text-[#F31C1C]">*</span></label>
              <input id="email" type="email" name="email" className="box-border w-full border rounded" required />
            </div>
            <div>
              <label htmlFor="phone" className="text-left block">Phone number <span className="text-[#F31C1C]">*</span></label>
              <input id="phone" type="tel" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}" className="box-border w-full border rounded" required/>
            </div>
            <div>
              <label htmlFor="eventDate" className="text-left block">Event date <span className="text-[#F31C1C]">*</span></label>
              <input id="eventDate" type="date" name="eventDate"  className="box-border w-full border rounded" required/>
            </div>
            <div>
              <label htmlFor="venue" className="text-left block">Venue location <span className="text-[#F31C1C]">*</span></label>
              <input id="venue" type="text" name="venue"  className="box-border w-full border rounded" required/>
            </div>
            <div>
              <label htmlFor="timeFrame" className="text-left block">Preferred rental time frame <span className="text-[#F31C1C]">*</span></label>
              <input id="timeFrame" type="text" name="timeFrame" placeholder="2 hours" className="box-border w-full border rounded" required/>
            </div>
            <div>
              <label htmlFor="comments" className="text-left block">Share any additional details or further questions! <span className="text-[#F31C1C]">*</span></label>
              <textarea id="comments" type="text" name="comments" className="box-border w-full border rounded"/>
            </div>
          <button className="bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-md tablet:rounded-xl" type="submit">SEND</button>
        </form>
    </main>
  )
}