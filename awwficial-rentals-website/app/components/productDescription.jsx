import Image from "next/image";
import Link from "next/link";
import { playfairDisplay } from "../ui/fonts";
import {lato} from '../ui/fonts';
export default function ProductDescription() {
  return (
    <div className="p-4 max-w-[1600px]">
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
          <div className="tablet:order-2 flex flex-col justify-center">
            <p className="text-[32px] tablet:text-[33px]"
              style={{
                color: "#000",
                fontFamily: `${playfairDisplay.style.fontFamily}`,

                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "150%",
              }}
            >
              Turn Down For What?!
            </p>
            <p
              className="mt-4"
              style={{
                color: "#000",
                fontSize: "24px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "150%",
              }}
            >
              Our 360-degree photo booth is the ultimate crowd-pleaser. Elevate
              the fun, capture every angle, and create unforgettable memories.
              Whether it's a wedding, corporate gala, or birthday bash, our
              photo booth adds a unique touch of excitement!
            </p>
            <Link href="/GalleryPage">
              <button
                className= 'mt-4'
                style={{
                  fontFamily:`${lato.style.fontFamily}`,
                  fontWeight: "700",
                  fontSize:"20px",
                  direction: "flex",
                  padding: "10px",
                  width: "100%",
                  justifyContent: "center",
                  gap: "10px",
                  alignSelf: "stretch",
                  borderRadius: "10px",
                  border: "2px solid #797673",
                  background: "#FFF",
                }}
              >
                Get inspiration
              </button>
            </Link>
          </div>
          <div className="tablet:order-1">
            <Image
              src="/images/home-turndownforwhat.png"
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
