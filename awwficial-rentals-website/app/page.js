import VideoBanner from "./components/videoBanner";
import ProductDescription from "./components/productDescription";
import Gallery from "./components/gallery";
import ClientsReviewsTests from "./components/clientsReviewsTests";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="">
      <VideoBanner />
      <ProductDescription />
      <Gallery />
      <ClientsReviewsTests />
      <Footer />
    </div>
  );
}
