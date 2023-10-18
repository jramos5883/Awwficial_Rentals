import DropboxVideoEmbed from "./video.comp";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { ImCamera } from "react-icons/im";
import { MdWifiTethering, Md360 } from "react-icons/md";
import { FaPerson, FaRegFaceSmileBeam } from "react-icons/fa6";
import { BsHandThumbsUp } from "react-icons/bs";

export default function ProductDescription() {
  return (
    <main>
      <section className="grid grid-cols-1 justify-items-center tablet:grid-cols-2 p-2">
        <div className="flex flex-col justify-center items-center px-5 lapsm:max-w-lg laplg:max-w-xl">
          <h2 className="text-center">Rewriting the Pose-ibilities</h2>
          <p>
            Step into a world where every angle tells a story. Our 360-degree
            photo booth doesn&apos;t just capture moments; it creates
            narratives. With a spin and a snap, you&apos;re in the spotlight
            from all sides. It&apos;s photography reimagined, and you&apos;re
            the star of the show!
          </p>
        </div>
        <div className="m-auto">
          <img
            className="block w-full"
            src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt=""
          />
          {/* <DropboxVideoEmbed className="" videoLink="https://www.dropbox.com/scl/fi/epradd978l20pvktd6xrc/AwwficialCC_2.mov?rlkey=j1i1gkd3ejd3x00bjjx4xk9eg&dl=0" /> */}
        </div>
      </section>
      <section className="text-center py-10 px-10">
        <h2 className="pb-5">Why The 360 Photo Booth?</h2>
        <div className="grid grid-cols-1 celllg:grid-cols-2 tablet:grid-cols-3 lapsm:grid-cols-6">
          <article className="text-center px-3">
            <ImCamera className="text-xl" />
            <h5>Unforgettable Memories</h5>
          </article>
          <article className="text-center px-3">
            <MdWifiTethering className="text-2xl" />
            <h5 className>Instantly Sharable</h5>
          </article>
          <article className="text-center px-3">
            <FavoriteBorderIcon />
            <h5>Elevate Your Event</h5>
          </article>
          <article className="text-center px-3">
            <div className="flex flex-col m-0 items-center">
              <FaPerson className="text-xl" />
              <Md360 className="text-xl" />
            </div>
            <h5 className="mt-3">Capture Every Angle</h5>
          </article>
          <article className="text-center px-3">
            <FaRegFaceSmileBeam className="text-xl" />
            <h5>Fun & Interactive</h5>
          </article>
          <article className="text-center px-3">
            <BsHandThumbsUp className="text-xl" />
            <h5>Hassle Free</h5>
          </article>
        </div>
      </section>
      <section className="grid grid-cols-1 justify-items-center tablet:grid-cols-2 p-2">
        {/* <div>
          <DropboxVideoEmbed className="h-10" videoLink="https://www.dropbox.com/scl/fi/epradd978l20pvktd6xrc/AwwficialCC_2.mov?rlkey=j1i1gkd3ejd3x00bjjx4xk9eg&dl=0" />
        </div> */}
        <img
          className="block w-full"
          src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt=""
        />
        <div className="flex flex-col justify-center items-center px-5 lapsm:max-w-lg laplg:max-w-xl">
          <h2 className="text-center"> Turn Down For What?!</h2>
          <p>
            Our 360-degree photo booth is the ultimate crowd-pleaser. Elevate
            the fun, capture every angle, and create unforgettable memories.
            Whether it&apos;s a wedding, corporate gala, or birthday bash, our
            photo booth adds a unique touch of excitement!
          </p>
        </div>
      </section>
    </main>
  );
}
