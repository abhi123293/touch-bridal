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
    <main className="bg-[radial-gradient(ellipse_at_top_left,#ffffff_0%,#fafafa_50%,#f5f5f5_100%)]">
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