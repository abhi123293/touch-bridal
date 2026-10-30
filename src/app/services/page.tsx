import ServicesShowcase from "@/components/ServicesShowcase";

export const metadata = {
  title: "Bridal Showcase & Services | S Touch Salon",
  description: "Touch Bridal Makeover Studio & Unisex Salon showcase and comprehensive services.",
};

export default function ServicesPage() {
  return (
    <main className="relative flex min-h-[100dvh] w-full flex-col items-center justify-start overflow-x-hidden bg-white text-[#302832] px-2 pt-20 pb-3 sm:px-3 sm:pt-22 sm:pb-4 lg:px-4 lg:pt-24 lg:pb-5">
      {/* Decorative Soft Ambient Spotlight behind the Showcase matching Home palette */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 h-[520px] w-full max-w-[1400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b from-[#9675ba]/12 via-[#eee8f8]/30 to-transparent blur-[130px]"
      />

      {/* Bridal Showcase & Services Sections */}
      <ServicesShowcase />
    </main>
  );
}
