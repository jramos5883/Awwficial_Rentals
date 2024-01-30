import LargeButton from "./LargeButton";
import { playfairDisplay } from "../ui/fonts.jsx";
import bg from "/public/images/home-image.png";
import DropboxVideoEmbed from "./video.comp";

export default function OpeningFrame() {

  return (
    <div className="min-h-min justify-center items-center relative">
        <DropboxVideoEmbed videoLink="https://www.dropbox.com/scl/fi/dhfgohtdz00h0c6ne5gga/Awwficial-Rentals-Promo-Video.mp4?rlkey=jv3hk10zb2ywcqt7lkmr4680l&dl=0" />
      <div className='w-full h-full absolute top-0 left-0 flex flex-col px-10 justify-center items-center'>
        <p className={`text-white text-center font-extrabold text-2xl tablet:text-4xl mb-3 ${playfairDisplay.className}`}>
        Ready to make your event <span className="block tablet:inline text-center">Awwficial?</span>
        </p>
        <LargeButton className={'mt-3 tablet:mt-8 '} name={"View Pricing"} href={"/Services"} />
      </div>
    </div>
  );
}
