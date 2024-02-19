'use client'
import {useState, useEffect} from 'react';
import Image from "next/image";
import { playfairDisplay } from "../ui/fonts";
export default function ClientsReviewsTests() {
  const [index, setIndex] = useState(0)
  const[click, setClick] = useState(1);
  const data = [1, 2];

  const manageLeftClick = () => {
    console.log('left clicked');
    const newIndex = index - 1;
    if(newIndex < 1) {
      setIndex(data.length - 1);
    } else {
      setIndex(newIndex);
    }
    setClick(0);
  }
  const manageRightClick = () => {
    console.log('right clicked');
    const newIndex = index + 1;
    if(newIndex >= data.length) {
      setIndex(1);
    } else {
      setIndex(newIndex);
    }
    setClick(-1);
  }

  return (
    <div className="p-4 mb-20 max-w-[1600px]">
      <div
        className="flex flex-col items-center"
        style={{
          padding: "20px",
          gap: "20px",
          borderRadius: "10px",
          border: "1px solid #740E94",
          background: "var(--icon-color, #FFF)",
        }}
      >
        <div className="grid grid-cols-1 tablet:grid-cols-2 gap-4">
          <div className="m-auto">
            <h2 className="text-[32px] tablet:text-[36px]"
              style={{
                color: "#000",
                fontFamily: `${playfairDisplay.style.fontFamily}`,
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "150%",
              }}
            >
              Client Testimonials
            </h2>
            <div className="flex flex-nowrap overflow-hidden max-h-[340px]">

              <div
                className="flex justify-center overflow-scroll min-w-full w-full max-h-[440px] ease-[cubic-bezier(0.39, 0.575, 0.565, 1)] duration-1000 mt-4"
                style={{
                  color: "#000",
                  fontSize: "24px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "150%",
                  transform: `translate(${100*index*click}%)`
                }}
              >
                <p>
                We had the pleasure of working with Awwficial Rentals for two of our public events in Downtown Culver City. They worked on our Third Wednesday Tropical Staycation and 2023 Hip &amp; Historic Halloween. The 360 photo booth added an incredible level of fun and engagement to both occasions. It is user friendly to all ages and captures memories for people to keep for a lifetime. The team was professional, friendly, and the quality of service exceeded our expectations. Our community loved it!
                </p>

              </div>

              <div
                className="flex-row justify-center  content-between overflow-scroll min-w-full w-full max-h-[440px] ease-[cubic-bezier(0.39, 0.575, 0.565, 1)] duration-1000 mt-3 "
                style={{
                  color: "#000",
                  fontSize: "24px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "150%",
                  transform: `translate(${100*index*click}%)`
                }}
              >
                <p>I recently had the pleasure of hosting a community center open house that left a lasting impression, thanks in no small part to the incredible addition of Awwficial 360-degree photo booth rentals. This innovative and immersive experience truly elevated the event, providing attendees with a unique and memorable way to capture the spirit of the occasion.</p>
                <div className="h-[30px]"></div>
                <p>I was drawn to the sleek and modern setup of the 360-degree photo booth. Where it was strategically placed inviting guests who participated in the fun and created lasting memories. The sleek design of the booth seamlessly blended with the event's décor, adding a touch of sophistication to the overall ambiance.</p>
                <div className="h-[30px]"></div>
                <p>The beauty of the 360-degree photo booth lay in its ability to capture every angle of joy. Traditional photo booths have their charm, but this cutting-edge technology took the experience to new heights. Guests were not confined to a single frame; instead, they could move freely within the booth, allowing for dynamic and spontaneous group shots. This feature added an element of excitement and creativity, as friends and family huddled together to create one-of-a-kind Awwficial moments in time.</p>
                <div className="h-[30px]"></div>
                <p>The professional and friendly staff overseeing the photo booth added to the positive experience. Their enthusiasm and assistance encouraged even the most camera-shy attendees to step inside and join the fun. Their commitment to ensuring a smooth and enjoyable process contributed significantly to the overall success of the photo booth at the open house. I would recommend Awwficial 360 Photo booths to anyone having any kind of celebration! Thank you again Thomas, cannot wait until next time!</p>
              </div>
            </div>


            <div
              className="mt-4"
              style={{
                color: "#120155",
                display: "flex",
                Width: "100%",
                justifyContent: "space-between",
                alignItems: "flex-start",
                alignSelf: "stretch",
              }}
            >
              <div onClick={manageLeftClick}>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"

                >
                  <path
                    d="M20 5C28.2843 5 35 11.7157 35 20C35 28.2843 28.2843 35 20 35C11.7157 35 5 28.2843 5 20C5 11.7157 11.7157 5 20 5Z"
                    fill="white"
                  />
                  <path
                    d="M21.6667 25L16.6667 20L21.6667 15M35 20C35 11.7157 28.2843 5 20 5C11.7157 5 5 11.7157 5 20C5 28.2843 11.7157 35 20 35C28.2843 35 35 28.2843 35 20Z"
                    stroke="#120155"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                onClick={manageRightClick}
              >
                <path
                  d="M20 5C28.2843 5 35 11.7157 35 20C35 28.2843 28.2843 35 20 35C11.7157 35 5 28.2843 5 20C5 11.7157 11.7157 5 20 5Z"
                  fill="white"
                />
                <path
                  d="M18.3333 15L23.3333 20L18.3333 25M35 20C35 11.7157 28.2843 5 20 5C11.7157 5 5 11.7157 5 20C5 28.2843 11.7157 35 20 35C28.2843 35 35 28.2843 35 20Z"
                  stroke="#120155"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div>
            <Image
              src="/images/home-client-testimonials.png"
              width={640} // Set the width of the image
              height={440} // Set the height of the image
              layout="responsive"
              alt="Image Alt Text"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
