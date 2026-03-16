import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import FeaturesBar from "@/components/FeaturesBar";
import BannerGrid from "@/components/BannerGrid";
import SiteFooter from "@/components/SiteFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <HeroSection />
      <FeaturesBar />
      <BannerGrid />
      <SiteFooter />
    </div>
  );
};

export default Index;
