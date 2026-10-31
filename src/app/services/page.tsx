import ServicesShowcase from "@/components/ServicesShowcase";

export const metadata = {
  title: "Bridal Showcase & Services | S Touch Salon",
  description: "Touch Bridal Makeover Studio & Unisex Salon showcase and comprehensive services.",
};

export default function ServicesPage() {
  return (
    <main className="relative flex min-h-[100dvh] w-full flex-col items-center justify-start overflow-x-hidden bg-[#F1EDF7] text-[#25232A] px-2 pt-18 pb-4 sm:px-3 sm:pt-20 sm:pb-6 lg:px-4 lg:pt-24 lg:pb-8">
      {/* Decorative Soft Ambient Spotlight matching Hero palette */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 h-[520px] w-full max-w-[1400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b from-[#8D6CA3]/15 via-[#E4D9ED]/40 to-transparent blur-[130px]"
      />

      {/* Bridal Showcase & Services Sections */}
      <ServicesShowcase />
    </main>
  );
}
