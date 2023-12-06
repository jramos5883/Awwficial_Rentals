function ContactForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    if (formData.get("_honey") !== "") {
        return
    }
    const name = formData.get("name");
    const phone = formData.get("phone number");
    const email = formData.get("email");
    const message = formData.get("message");

    console.log("Name:", name);
    console.log("Phone:", phone);
    console.log("Email:", email);
    console.log("Message:", message);
    // Rest of your code, e.g., submit the form
  }

  return (
    <div>
        <form className="flex flex-col px-5 gap-2" action="https://formsubmit.co/728e4757f50eb5784d2d959cd5dcd793" method="POST" onSubmit={handleSubmit}>
        {/* honeypot */}
        <input type="text" name="_honey" className="hidden" />
        {/* Disable Captcha */}
        <input type="hidden" name="_captcha" value="false" />
    
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
        <button className="py-2 px-5 border-0 bg-gradient-to-r rounded from-yellow-500 via-yellow-600 to-yellow-700 text-white font-bold hover:shadow-lg" type="submit">SEND</button>
    </form>
  </div>
  )
}

export default ContactForm