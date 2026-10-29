import BridalHero from "@/components/BridalHero";
import AboutUs from "@/components/AboutUs";
import FeaturedServices from "@/components/FeaturedServices";
import BridalGalleryPreview from "@/components/BridalGalleryPreview";
import WhyChooseUs from "@/components/WhyChooseUs";
import CustomerTestimonials from "@/components/CustomerTestimonials";
import LocationContact from "@/components/LocationContact";
import ContactCTA from "@/components/ContactCTA";

export default function HomePage() {
  return (
    <main className="bg-[radial-gradient(ellipse_at_top_left,#b58b66_0%,#6a4430_42%,#2f1d14_100%)]">
      <BridalHero />
      <AboutUs />
      <FeaturedServices />
      <BridalGalleryPreview/>
      <WhyChooseUs />
      <CustomerTestimonials />
      <LocationContact />
      <ContactCTA />
    </main>
  );
}