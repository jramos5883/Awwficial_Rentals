import DropboxVideoEmbed from "./video.comp";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function ProductDescription() {
  return(
    <main>
      <section className="grid grid-cols-1 justify-items-center tablet:grid-cols-2 p-2">
        <div className="flex flex-col justify-center items-center px-5 lapsm:max-w-lg laplg:max-w-xl">
          <h2 className="text-center">Why Awwficial Photobooth?</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ipsa consectetur placeat cum officia tempore recusandae eum ratione officiis, delectus, voluptates cupiditate! Ipsa optio eius molestias impedit sunt, incidunt doloribus.</p>
        </div>
        <div className="m-auto">
          <img className="block w-full"  src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" />
        {/* <DropboxVideoEmbed className="" videoLink="https://www.dropbox.com/scl/fi/epradd978l20pvktd6xrc/AwwficialCC_2.mov?rlkey=j1i1gkd3ejd3x00bjjx4xk9eg&dl=0" /> */}
        </div>
      </section>
      <section className="text-center py-10 px-10">
        <h2 className="pb-5">Why a 360 Photobooth?</h2>
        <div className="grid grid-cols-1 celllg:grid-cols-2 tablet:grid-cols-3 lapsm:grid-cols-6">
          <article className="text-center px-3">
            <FavoriteBorderIcon/>
            <h5>Great Service</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ab officia similique culpa, fuga repellendus laboriosam qui expedita.</p>
          </article>
          <article className="text-center px-3">
            <FavoriteBorderIcon/>
            <h5>Great Service</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ab officia similique culpa, fuga repellendus laboriosam qui expedita.</p>
          </article>
          <article className="text-center px-3">
            <FavoriteBorderIcon/>
            <h5>Great Service</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ab officia similique culpa, fuga repellendus laboriosam qui expedita.</p>
          </article>
          <article className="text-center px-3">
            <FavoriteBorderIcon/>
            <h5>Great Service</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ab officia similique culpa, fuga repellendus laboriosam qui expedita.</p>
          </article>
          <article className="text-center px-3">
            <FavoriteBorderIcon/>
            <h5>Great Service</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ab officia similique culpa, fuga repellendus laboriosam qui expedita.</p>
          </article>
          <article className="text-center px-3">
            <FavoriteBorderIcon/>
            <h5>Great Service</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ab officia similique culpa, fuga repellendus laboriosam qui expedita.</p>
          </article>
        </div>
      </section>
      <section className="grid grid-cols-1 justify-items-center tablet:grid-cols-2 p-2">
        {/* <div>
          <DropboxVideoEmbed className="h-10" videoLink="https://www.dropbox.com/scl/fi/epradd978l20pvktd6xrc/AwwficialCC_2.mov?rlkey=j1i1gkd3ejd3x00bjjx4xk9eg&dl=0" />
        </div> */}
        <img className="block w-full"  src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" />
        <div className="flex flex-col justify-center items-center px-5 lapsm:max-w-lg laplg:max-w-xl">
          <h2 className="text-center">Why Awwficial Photobooth?</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ipsa consectetur placeat cum officia tempore recusandae eum ratione officiis, delectus, voluptates cupiditate! Ipsa optio eius molestias impedit sunt, incidunt doloribus.</p>
        </div>
       
      </section>
    </main>
  ) 
}
