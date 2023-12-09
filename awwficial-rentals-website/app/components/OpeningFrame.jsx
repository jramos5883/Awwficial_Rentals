import LargeButton from "./LargeButton";
import { playfairDisplay } from "../ui/fonts.jsx";
import bg from "/public/images/home-image.png";
export default function OpeningFrame() {
  return (
    <div
      className=" md:w-[1300px] md:h-[330px] flex flex-col items-center justify-center  md:justify-end pb-[15px] md:pb-[47px] gap-[31px]"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover", // or 'contain' based on your preference
        width: "100%", // use percentages or viewport units
        height: "333px", // adjust as necessary
        backgroundPosition: "center", // to center the background image
        backgroundRepeat: "no-repeat", // to prevent the image from tiling }}
        flexShrink: 0,
      }}
    >
      <div
        className="text-white text-4xl justify-center items-center"
        style={{ fontFamily: playfairDisplay.className }}
      >
        Ready to make your event Awwficial?
      </div>
      <LargeButton name={"View Pricing"} href={"/Services"} />
    </div>
  );
}
