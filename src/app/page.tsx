import HeroSection from "@/components/features/home/HeroSection";
import FeatureCards from "@/components/features/home/FeatureCards";
import TrendingDestinations from "@/components/features/home/TrendingDestinations";
import PromoBanner from "@/components/features/home/PromoBanner";
import NewsletterSignup from "@/components/features/home/NewsletterSignup";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-white">
      <HeroSection />
      <FeatureCards />
      <TrendingDestinations />
      <PromoBanner />
      <NewsletterSignup />
    </div>
  );
}
