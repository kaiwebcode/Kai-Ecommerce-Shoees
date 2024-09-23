import { CategoriesSelection } from "../components/storefront/CategoriesSelection";
import { FeaturedProduct } from "../components/storefront/FeaturedProduct";
import { Hero } from "../components/storefront/Hero";
import HeroSection from "../components/storefront/HeroSection";
import ScrollToTop from "../components/storefront/ScrollToTop";
import Reviews from "../components/storefront/Reviews";

export default function IndexPage() {
  return (
    <div>
      <ScrollToTop />
      <HeroSection />
      <Hero />
      <CategoriesSelection />
      <Reviews />
      <FeaturedProduct />
    </div>
  );
}
