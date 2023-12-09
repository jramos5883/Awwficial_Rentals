import Image from "next/image";
export default function ProductDescription() {
  return (
      <div className="grid grid-cols-1 justify-items-center tablet:grid-cols-2 p-2 rounded-2xl border-black ">
        {/* <div>
          <DropboxVideoEmbed className="h-10" videoLink="https://www.dropbox.com/scl/fi/epradd978l20pvktd6xrc/AwwficialCC_2.mov?rlkey=j1i1gkd3ejd3x00bjjx4xk9eg&dl=0" />
        </div> */}
        <img
          className="block w-auto"
          src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          width={300}
          height={100}
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
