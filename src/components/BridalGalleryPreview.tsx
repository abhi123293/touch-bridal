"use client";

import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function BridalGalleryPreview() {
  return (
    <section
      aria-label="Bridal Gallery"
      className="bg-transparent px-4 pb-16 pt-4 sm:px-6 sm:pb-20 sm:pt-0 lg:px-8 select-none"
    >
      <div className="mx-auto w-full max-w-[1320px]">
        <div className="relative overflow-hidden rounded-[26px] sm:rounded-[34px] bg-[#F5F0E8] border border-[#3A2921]/15 py-14 sm:py-20 lg:py-28 px-6 sm:px-10 lg:px-14 shadow-[0_20px_60px_rgba(28,18,15,0.14)] flex flex-col items-center justify-center">
          {/* Subtle Ambient Warm Gold Glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[450px] sm:w-[600px] rounded-full bg-gradient-to-b from-[#C8A66A]/15 via-[#A98955]/08 to-transparent blur-[120px]"
          />

          <div className="relative mx-auto flex w-full max-w-[1100px] flex-col items-center justify-center">
            {/* Exact Heading: Display ONLY "Bridal Gallery" */}
            <h2
              className={`${cormorant.className} relative z-10 text-center text-4xl sm:text-5xl md:text-6xl lg:text-[72px] xl:text-[76px] font-normal tracking-[0.025em] text-[#1C120F] leading-none drop-shadow-[0_2px_10px_rgba(28,18,15,0.06)]`}
            >
              Bridal Gallery
            </h2>

            {/* Semicircular Arched Bridal Image (gallery.jpg) */}
            <div className="relative z-0 -mt-3 sm:-mt-5 lg:-mt-7 w-[290px] sm:w-[350px] md:w-[390px] lg:w-[420px] xl:w-[440px] aspect-[3/4] max-w-[90vw]">
              <div className="relative h-full w-full overflow-hidden rounded-t-[9999px] rounded-b-none border border-[#C8A66A]/30 bg-[#2B1C17] shadow-[0_25px_60px_-15px_rgba(28,18,15,0.18)]">
                <img
                  src="/images/gallery.jpg"
                  alt="Bridal Gallery by Touch Salon"
                  className="h-full w-full object-cover object-[60%_top] transition-transform duration-700 ease-out hover:scale-[1.02]"
                  loading="eager"
                />

                {/* Subtle top gold sheen */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#C8A66A]/20 to-transparent"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
