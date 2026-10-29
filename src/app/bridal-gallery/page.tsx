import BridalGallerySection from "@/components/BridalGallerySection";

export const metadata = {
  title: "Bridal Gallery | Touch Bridal Makeover Studio & Unisex Salon",
  description:
    "Explore our bridal gallery and bespoke bridal looks at Touch Bridal Makeover Studio & Unisex Salon.",
};

export default function BridalGalleryPage() {
  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-x-hidden bg-[#F5F0E8] pt-20 sm:pt-24 lg:pt-28">
      <BridalGallerySection />
    </main>
  );
}
