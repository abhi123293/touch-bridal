import BridalHero from "@/components/BridalHero";
import AboutUs from "@/components/AboutUs";
import FeaturedServices from "@/components/FeaturedServices";

export default function HomePage() {
  return (
    <main className="bg-[radial-gradient(ellipse_at_top_left,#b58b66_0%,#6a4430_42%,#2f1d14_100%)]">
      <BridalHero />
      <AboutUs />
      <FeaturedServices />
    </main>
  );
}