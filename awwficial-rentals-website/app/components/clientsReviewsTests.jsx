import Image from "next/image";
import { playfairDisplay } from "../ui/fonts";
export default function ClientsReviewsTests() {
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
            <h2
              style={{
                color: "#000",
                fontFamily: `${playfairDisplay.style.fontFamily}`,
                fontSize: "32px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "150%",
              }}
            >
              Client Testimonials
            </h2>
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
              We had the pleasure of working with Awwficial Rentals for two of our public events in Downtown Culver City. They worked on our Third Wednesday Tropical Staycation and 2023 Hip &amp; Historic Halloween. The 360 photo booth added an incredible level of fun and engagement to both occasions. It is user friendly to all ages and captures memories for people to keep for a lifetime. The team was professional, friendly, and the quality of service exceeded our expectations. Our community loved it!
            </p>
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
              src="https://s3-alpha-sig.figma.com/img/cf53/2051/0b97748d6b451f18bd25fc00152b9154?Expires=1702857600&Signature=ljTg2ijXFE54pta050Mtx~ZUJ2unOjoNAcqWe9znif3hwosYzS2gKkGOyGfzLFJMrqAyOmps9m7oAnC9yg1jNgeSxgu0-LlltDPHW-0PBKMVslNT0wN-vTgv3slEolMgn9SCVyclnQaPa2vprsgMaAkEcmtWUHPQtu0tg4a~unt8sEO8g3d4yqHyhYYjJkfOZv6aYG5yJMCVmFLS~bXiaPloMZq782wn8yg9OnuUa3BnfYupndjwOPv0zOeSlPwPoPwLRdP8Uy1njMh1Rx7robkYasoGoo4XVdDhlmvAegIimdIG~A4h8YD1PZtL2IdXwKI6oLAnoGKTKA8gWAx8GA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
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
