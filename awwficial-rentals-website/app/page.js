import VideoBanner from "./components/videoBanner";
import ProductDescription from "./components/productDescription";
import Gallery from "./components/homepage_gallery";
import ClientsReviewsTests from "./components/clientsReviewsTests";
import OpeningFrame from "./components/OpeningFrame";
import EventCategories from "./components/EventCategories";
export default function Home() {
  return (
    <div className="min-w-full flex flex-col items-center	">
      <OpeningFrame />
      <EventCategories />
      <ProductDescription />
      <Gallery />
      <ClientsReviewsTests />
    </div>
  );
}
