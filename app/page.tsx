import HeroVisual from "@/components/HeroVisual";
import TrustStrip from "@/components/TrustStrip";
import FeatureStack from "@/components/FeatureStack";
import PortfolioGrid from "@/components/PortfolioGrid";
import DarkReviewSection from "@/components/DarkReviewSection";
import BlogGrid from "@/components/BlogGrid";
import IconGrid from "@/components/IconGrid";

export default function Home() {
  return (
    <main>
      {/* 2. hero-visual */}
      <HeroVisual />

      {/* 3. trust-strip */}
      <TrustStrip />

      {/* 4. feature-stack */}
      <FeatureStack />

      {/* 5. portfolio-grid */}
      <PortfolioGrid
        backgroundColor="off-white"
        limit={2}
        itemLinkDestination="overview"
      />

      {/* 6. dark-review-section */}
      <DarkReviewSection />

      {/* 7. blog-grid */}
      <BlogGrid
        limit={3}
        itemLinkDestination="overview"
      />

      {/* 8. icon-grid - Defaulting to white to contrast with preceding primary-50 BlogGrid */}
      <IconGrid />

      {/* Navbar and Footer are in Layout */}
    </main>
  );
}
