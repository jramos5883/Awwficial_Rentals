import Image from "next/image";
import { playfairDisplay } from "../ui/fonts";
export default function () {
  return (
    <div className="flex flex-col items-center p-4">
      <p
        style={{
          color: "#000",
          fontFamily: `${playfairDisplay.style.fontFamily}`,
          fontSize: "36px",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "150%",
        }}
      >
        Perfect for Any Event!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-9 gap-x-5">
        <div className="relative">
          <Image
            className="w-full max-w-[500px] mx-auto rounded-xl"
            src="/images/home-corporate.png"
            alt="Image Alt Text"
            width={500} // Set the width of the image
            height={300} // Set the height of the image
          />
          <div
            className="absolute bottom-0 left-0 right-0 w-full max-w-[500px] mx-auto rounded-xl"
            style={{
              display: "flex",
              flexDirection: "colunm",
              justifyContent: "center",
              alignItems: "center",
              gap: "12px",
              flexShrink: 0,
              height: "82px",
              padding: "16",
              background: "rgba(25, 6, 27, 0.50)",
              boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            }}
          >
            <p
              style={{
                color: "#FFFEF8",
                fontFamily: `${playfairDisplay.style.fontFamily}`,
                fontSize: "33px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "150%",
              }}
            >
              Corporate Events
            </p>
          </div>
        </div>
        <div className="relative">
          <Image
            className="w-full max-w-[500px] mx-auto rounded-xl"
            src="/images/home-wedding-celebrations.png"
            alt="Image Alt Text"
            width={500} // Set the width of the image
            height={300} // Set the height of the image
          />
          <div
            className="absolute bottom-0 left-0 right-0 w-full max-w-[500px] mx-auto rounded-xl"
            style={{
              display: "flex",
              flexDirection: "colunm",
              justifyContent: "center",
              alignItems: "center",
              gap: "12px",
              flexShrink: 0,
              height: "82px",
              padding: "16",
              background: "rgba(25, 6, 27, 0.50)",
              boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            }}
          >
            <p
              style={{
                color: "#FFFEF8",
                fontFamily: `${playfairDisplay.style.fontFamily}`,
                fontSize: "33px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "150%",
              }}
            >
              Weddings & Celebrations
            </p>
          </div>
        </div>
        <div className="relative">
          <Image
            className="w-full max-w-[500px] mx-auto rounded-xl"
            src="/images/home-holiday-parties.png"
            alt="Image Alt Text"
            width={500} // Set the width of the image
            height={300} // Set the height of the image
          />
          <div
            className="absolute bottom-0 left-0 right-0 w-full max-w-[500px] mx-auto rounded-xl"
            style={{
              display: "flex",
              flexDirection: "colunm",
              justifyContent: "center",
              alignItems: "center",
              gap: "12px",
              flexShrink: 0,
              height: "82px",
              padding: "16",
              background: "rgba(25, 6, 27, 0.50)",
              boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            }}
          >
            <p
              style={{
                color: "#FFFEF8",
                fontFamily: `${playfairDisplay.style.fontFamily}`,
                fontSize: "33px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "150%",
              }}
            >
              Holiday Parties
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
