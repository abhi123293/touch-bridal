import ServicesShowcase from "@/components/ServicesShowcase";

export const metadata = {
  title: "Bridal Showcase & Services | S Touch Salon",
  description: "Touch Bridal Makeover Studio & Unisex Salon showcase and comprehensive services.",
};

export default function ServicesPage() {
  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-start overflow-x-hidden bg-[radial-gradient(ellipse_at_top_left,#b58b66_0%,#6a4430_42%,#2f1d14_100%)] px-2 pt-20 pb-4 sm:px-4 sm:pt-22 sm:pb-5 lg:px-6 lg:pt-24 lg:pb-6">
      {/* Decorative Warm Ambient Spotlight behind the Showcase */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-full max-w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b from-[#e6c178]/15 via-[#8b4a28]/10 to-transparent blur-[120px]"
      />

      {/* Bridal Showcase & Services Sections */}
      <ServicesShowcase />
    </main>
  );
}
