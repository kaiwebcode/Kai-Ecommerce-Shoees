import { CategoriesSelection } from "../components/storefront/CategoriesSelection";
import { FeaturedProduct } from "../components/storefront/FeaturedProduct";
import { Hero } from "../components/storefront/Hero";
import HeroSection from "../components/storefront/HeroSection";

export default function IndexPage() {
  return (
    <div>
      <Hero />
     <HeroSection /> 
      <CategoriesSelection />
      <FeaturedProduct />
    </div>
  );
}
