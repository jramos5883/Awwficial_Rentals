import LargeButton from "./LargeButton";
import { playfairDisplay } from "../ui/fonts.jsx";
import bg from "/public/images/home-image.png";
import DropboxVideoEmbed from "./video.comp";

export default function OpeningFrame() {
  const videoLink="https://www.dropbox.com/scl/fi/dhfgohtdz00h0c6ne5gga/Awwficial-Rentals-Promo-Video.mp4?rlkey=jv3hk10zb2ywcqt7lkmr4680l&dl=0";
  const directLink = videoLink.replace(
    "www.dropbox.com",
    "dl.dropboxusercontent.com"
  );
  return (
    <div className=" flex flex-col relative items-center justify-center w-full h-[300px] tablet:h-[600px]">
      <video className="object-cover absolute top-0 left-0 w-full h-full py-[40px] px-[20px]" autoPlay loop muted>
        <source src={directLink} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className=" flex justify-center text-white text-4xl w-3/4 h-auto mb-3 z-[2] " style={playfairDisplay.style}>
        Ready to make your event Awwficial?
      </div>
      <LargeButton className={'mt-3 text-white'} name={"View Pricing"} href={"/Services"} />



    </div>
  );
}
