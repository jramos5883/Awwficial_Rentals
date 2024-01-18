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
          <div className="tablet:order-2">
            <p
              style={{
                color: "#000",
                fontFamily: `${playfairDisplay.style.fontFamily}`,
                fontSize: "32px",
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
                  fontWeight: "600",
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
              src="https://s3-alpha-sig.figma.com/img/8128/af1c/60b89ba485a0de238fd5038c0e10560f?Expires=1702857600&Signature=I5Eyw3hFhIcOB5SlM6l4JlEXl0~F5Ndfz8076nwhL1BdjAnt75AYsYdqibLIfOn7a3IfFyX0e0ydMuQ6YtsLTGlzw52QLc~ahhl-mFJPNJpKK6KrRock28RPQex2MqURxzRNLNq-6lLg6ycIGeGSp4ubnU6xW4BlEuXkTRrL4M3KIxlIfhf2gbQ2hRW7WGYaLT09~yXgj0UOhUH-7N1QY4gHlnbKx-hodtuo0MFfHKEidAYItDjsapBUZ-vvRmKiMekExGW1amqNf4rQS3XCDoqCaPJ5RGXiR4Du0NmE0jR6cn1Rk8IrStMqTFQXKX5tFO2~X66Rg4CEZOMHptQidg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
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
