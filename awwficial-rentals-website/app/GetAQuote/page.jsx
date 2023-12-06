"use client";

import { useEffect } from "react";
import Head from "next/head";

export default function GetAQuote() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <h1>Book Awwfical Rentals For Your Event Now!</h1>
        <p>
          Check if your event day is available below. Fill out the form provided
          and we will get back to you in 1 buisness day.
        </p>
      </div>
      {/* <!-- Calendly inline widget begin --> */}
      <div>
        <Head>
          <link
            rel="stylesheet"
            href="https://assets.calendly.com/assets/external/widget.css"
          />
        </Head>

        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/jrprodev?hide_landing_page_details=1&hide_gdpr_banner=1"
          style={{ minWidth: "320px", height: "700px" }}
        ></div>
      </div>
      {/* <!-- Calendly inline widget end --> */}
    </div>
  );
}
