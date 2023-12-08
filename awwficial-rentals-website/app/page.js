import VideoBanner from "./components/videoBanner";
import ProductDescription from "./components/productDescription";
import Gallery from "./components/homepage_gallery";
import ClientsReviewsTests from "./components/clientsReviewsTests";
import OpeningFrame from "./components/OpeningFrame";
export default function Home() {
  return (
    <div className="min-w-full flex flex-col items-center	">
      <OpeningFrame/>
      <ProductDescription />
      <Gallery />
      <ClientsReviewsTests />
    </div>
  );
}
