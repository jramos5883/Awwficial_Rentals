import LargeButton from "./LargeButton";
import { playfairDisplay } from "../ui/fonts.jsx";
import bg from "/public/images/home-image.png";
import DropboxVideoEmbed from "./video.comp";

export default function OpeningFrame() {

  return (
    <div className=" w-full px-[20px] py-[40px] max-w-[1600px] min-h-min justify-center items-center relative ">
      <div className='object-cover h-[500px] w-full border'>

        <DropboxVideoEmbed videoLink="https://www.dropbox.com/scl/fi/dhfgohtdz00h0c6ne5gga/Awwficial-Rentals-Promo-Video.mp4?rlkey=jv3hk10zb2ywcqt7lkmr4680l&dl=0" />
      </div>
      <div className='w-full h-full absolute bottom-1/2 left-1/3' >
        <div className="  text-white text-4xl mb-3" style={playfairDisplay.style}>
        Ready to make your event Awwficial?
        </div>
        <LargeButton className={'mt-3 '} name={"View Pricing"} href={"/Services"} />
      </div>





    </div>
  );
}
