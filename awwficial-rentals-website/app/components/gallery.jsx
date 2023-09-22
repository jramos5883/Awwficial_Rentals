import DropboxVideoEmbed from "./video.comp";

export default function Gallery() {
  return (
    <div className="bg-yellow-50">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-1" />
        <div className="col-span-3">
          <DropboxVideoEmbed videoLink="https://www.dropbox.com/scl/fi/epradd978l20pvktd6xrc/AwwficialCC_2.mov?rlkey=j1i1gkd3ejd3x00bjjx4xk9eg&dl=0" />
        </div>
        <div className="col-span-1" />
        <div className="col-span-3">
          <DropboxVideoEmbed videoLink="https://www.dropbox.com/scl/fi/epradd978l20pvktd6xrc/AwwficialCC_2.mov?rlkey=j1i1gkd3ejd3x00bjjx4xk9eg&dl=0" />
        </div>
        <div className="col-span-1" />
        <div className="col-span-3">
          <DropboxVideoEmbed videoLink="https://www.dropbox.com/scl/fi/epradd978l20pvktd6xrc/AwwficialCC_2.mov?rlkey=j1i1gkd3ejd3x00bjjx4xk9eg&dl=0" />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-3" />
        <div className="col-span-3">
          <DropboxVideoEmbed videoLink="https://www.dropbox.com/scl/fi/epradd978l20pvktd6xrc/AwwficialCC_2.mov?rlkey=j1i1gkd3ejd3x00bjjx4xk9eg&dl=0" />
        </div>
        <div className="" />
        <div className="col-span-3">
          <DropboxVideoEmbed videoLink="https://www.dropbox.com/scl/fi/epradd978l20pvktd6xrc/AwwficialCC_2.mov?rlkey=j1i1gkd3ejd3x00bjjx4xk9eg&dl=0" />
        </div>
        <div className="col-span-3" />
      </div>
    </div>
  );
}
