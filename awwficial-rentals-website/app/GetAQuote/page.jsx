
export default function GetAQuote(){
  return(
    <main className="bg-mainbg text-center text-black pt-10 tablet:pt-5">
        <h1 className="text-3xl mt-0 text-center mb-8">Get a Quote</h1>
       
        <form className="flex flex-col m-8 tablet:max-w-[600px] tablet:mx-auto p-5 gap-2 border border-primary rounded" action="https://formsubmit.co/728e4757f50eb5784d2d959cd5dcd793" method="POST">
          <p className="text-left">If you have any questions or requests, use the form below to get in touch, and we'll address them promptly. If you have any specific questions, please visit our FAQ’s page.</p>
          {/* honeypot */}
          <input type="text" name="_honey" className="hidden" />

            <div>
              <label htmlFor="fullName" className="w-full">Full Name</label>
              <input id="fullName" type="text" name="fullName" placeholder="Full Name" required className=""/>
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input id="email" type="email" name="email" placeholder="Email"/>
            </div>
      
          <div>
            <label className="sr-only" htmlFor="email">Email</label>
            <input className="text-lg bg-inherit box-border w-full border  border-yellow-500 placeholder:pl-2 placeholder:font-sans py-1" id="email" type="email" name="email" placeholder="Email"required />
          </div>
          <div className="grow flex">
            <label className="sr-only" htmlFor="message">Message</label>
            <textarea className="grow text-lg bg-inherit px-2 w-full  border-yellow-500 placeholder:font-sans" id="message" type="text" name="message" placeholder="Message" required />
          </div>
          <button className="bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-lg" type="submit">SEND</button>
        </form>
    </main>
  )
}