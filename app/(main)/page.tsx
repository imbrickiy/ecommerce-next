import ActionSection from "@/components/ActionSection";
import FeaturedTab from "@/components/FeaturedTab";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import Price from "@/components/Price";
import Products from "@/components/Products";

export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      <Hero />
      <Price />
      <h2 className="text-center text-xs font-medium uppercase not-italic leading-6 tracking-[0.6px] text-[#878A92]">
        Shop Now
      </h2>
      <h1 className="text-center text-2xl font-bold not-italic leading-[normal] text-[#0E1422]">
        Best Selling
      </h1>
      <Products />
      <ActionSection />
      <FeaturedTab />
      {/* <ProductList /> */}
      <Newsletter />
    </div>
  );
}
