import VideoBanner from "./components/videoBanner";
import ProductDescription from "./components/productDescription";
import ClientsReviewsTests from "./components/clientsReviewsTests";
import OpeningFrame from "./components/OpeningFrame";
import EventCategories from "./components/EventCategories";
export default function Home() {
  return (
    <div className="flex flex-col items-center	">
      <OpeningFrame />
      <EventCategories />
      <ProductDescription />
      <ClientsReviewsTests />
    </div>
  );
}
