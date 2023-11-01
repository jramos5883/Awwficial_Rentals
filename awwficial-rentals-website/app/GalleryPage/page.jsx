import DropboxVideoEmbed from "../components/video.comp";

export default function GalleryPage() {
  return (
    <main className="bg-yellow-100">
      <section>
        <div className="grid grid-cols-11">
          <div className="col-span-3">
            <DropboxVideoEmbed videoLink="https://www.dropbox.com/scl/fi/rygy30vxfb0ynqhop7h12/AwwficialCC_3.mov?rlkey=i7sv9dy309zmjqo8r0kcutil3&dl=0" />
          </div>
          <div className="col-span-1" />
          <div className="col-span-3 ">
            <DropboxVideoEmbed videoLink="https://www.dropbox.com/scl/fi/epradd978l20pvktd6xrc/AwwficialCC_2.mov?rlkey=j1i1gkd3ejd3x00bjjx4xk9eg&dl=0" />
          </div>
          <div className="col-span-1" />
          <div className="col-span-3 ">
            <DropboxVideoEmbed videoLink="https://www.dropbox.com/scl/fi/1yskpzjq3hoz1xm0sjwqf/AwwficialCC_1.mov?rlkey=41p27bt9gk2barr4b7h6z3g4d&dl=0" />
          </div>
        </div>
      </section>
      <section>
        <div className="grid grid-cols-11">
          <div className="col-span-2" />
          <div className=" col-span-3">
            <DropboxVideoEmbed videoLink="https://www.dropbox.com/scl/fi/epradd978l20pvktd6xrc/AwwficialCC_2.mov?rlkey=j1i1gkd3ejd3x00bjjx4xk9eg&dl=0" />
          </div>
          <div className="col-span-1" />
          <div className=" col-span-3">
            <DropboxVideoEmbed videoLink="https://www.dropbox.com/scl/fi/rygy30vxfb0ynqhop7h12/AwwficialCC_3.mov?rlkey=i7sv9dy309zmjqo8r0kcutil3&dl=0" />
          </div>
          <div className="col-span-2" />
        </div>
      </section>
    </main>
  );
}
