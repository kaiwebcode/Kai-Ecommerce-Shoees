import { CategoriesSelection } from "../components/storefront/CategoriesSelection";
import { FeaturedProduct } from "../components/storefront/FeaturedProduct"
import { Hero } from "../components/storefront/Hero";

export default function IndexPage() {
  return (
    <div>
      <Hero />
      <CategoriesSelection />
      <FeaturedProduct />
    </div>
  );
}
