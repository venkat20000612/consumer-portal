import Navbar from "../components/Navbar";
import ShopBanner from "../components/ShopBanner";
import CategoryIcons from "../components/CategoryIcons";
import ShopProductSection from "../components/ShopProductSection";
import Footer from "../components/Footer";
import { productsData } from "../data/productsData"; 

export default function Shop() {
  return (
    <div className="min-h-screen bg-[#faf4e8]">
      <Navbar />
      <ShopBanner />
      <CategoryIcons />
      <ShopProductSection products={productsData} />

      <Footer />
    </div>
  );
}
