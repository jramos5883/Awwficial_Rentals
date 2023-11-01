import VideoBanner from "./components/videoBanner";
import ProductDescription from "./components/productDescription";
import Gallery from "./components/homepage_gallery";
import ClientsReviewsTests from "./components/clientsReviewsTests";

export default function Home() {
  return (
    <div className="">
      <VideoBanner />
      <ProductDescription />
      <Gallery />
      <ClientsReviewsTests />
    </div>
  );
}
