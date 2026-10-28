"use client";

import { motion } from "motion/react";
import { Cormorant_Garamond } from "next/font/google";

const serifFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

interface SkinServiceCategory {
  number: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

const SKIN_SERVICES: SkinServiceCategory[] = [
  {
    number: "01",
    title: "Facials",
    description:
      "Experience the art of skincare with luxurious facial treatments that pamper your skin, restore its softness, and enhance your natural luminosity.",
    image: "/images/facial.jpg",
    alt: "Facials by S Touch Salon",
  },
  {
    number: "02",
    title: "Hydra Facial",
    description:
      "Reveal a fresh, dewy glow with a deeply hydrating facial that leaves your skin feeling clean, smooth, and refreshed.",
    image: "/images/hydra.jpg",
    alt: "Hydra Facial by S Touch Salon",
  },
  {
    number: "03",
    title: "D-Tan",
    description:
      "Reveal a brighter, more even-looking complexion with a skin-refreshing treatment designed to remove surface impurities and revive your natural glow.",
    image: "/images/dtan.jpg",
    alt: "D-Tan by S Touch Salon",
  },
  {
    number: "04",
    title: "Bleach",
    description:
      "Enhance your natural glow with a gentle beauty treatment that helps brighten the appearance of facial hair and create a more even-looking complexion.",
    image: "/images/bleach.jpg",
    alt: "Bleach by S Touch Salon",
  },
];

export default function SkinFacialServicesSection() {
  return (
    <div className="relative w-full max-w-[1360px] mx-auto space-y-8 sm:space-y-12 lg:space-y-16 py-4">
      {SKIN_SERVICES.map((section, index) => {
        const isEven = index % 2 === 0;

        return (
          <motion.article
            key={section.title}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.75,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="group relative overflow-hidden rounded-[26px] sm:rounded-[34px] border border-[#dfb76c]/30 bg-gradient-to-b from-[#2a160d]/75 via-[#1b0d06]/80 to-[#100603]/85 p-5 sm:p-8 lg:p-12 backdrop-blur-2xl backdrop-saturate-150 shadow-[0_25px_60px_rgba(0,0,0,0.65),inset_0_1px_1.5px_rgba(255,255,255,0.2)]"
          >
            {/* Specular Top Sheen Accent Line */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#dfb76c]/60 to-transparent"
            />

            {/* Ambient Warm Golden Glow */}
            <div
              aria-hidden="true"
              className={`pointer-events-none absolute -top-16 ${
                isEven ? "right-10" : "left-10"
              } h-40 w-72 rounded-full bg-[#dfb76c]/10 blur-3xl`}
            />

            {/* Alternating Editorial Grid */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 items-center gap-8 sm:gap-10 lg:gap-14">
              {/* Floating Image Card */}
              <div
                className={`w-full lg:col-span-6 ${
                  isEven ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div className="relative mx-auto w-full max-w-[520px] aspect-[4/5] sm:aspect-[3/4] overflow-hidden rounded-[20px] sm:rounded-[28px] border border-[#dfb76c]/40 bg-[#1f1008] shadow-[0_15px_40px_rgba(0,0,0,0.65)] ring-1 ring-white/10">
                  {/* Subtle Top Corner Mask Highlight */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-0 z-20 h-24 bg-gradient-to-b from-black/40 via-transparent to-transparent"
                  />

                  {/* Elegant Skincare & Facial Photograph */}
                  <img
                    src={section.image}
                    alt={section.alt}
                    className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />

                  {/* Grounding Base Shadow */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-28 bg-gradient-to-t from-[#140803]/80 via-transparent to-transparent"
                  />

                  {/* Inner Specular Border */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 z-20 rounded-[20px] sm:rounded-[28px] ring-1 ring-inset ring-white/15"
                  />
                </div>
              </div>

              {/* Editorial Text Block */}
              <div
                className={`w-full lg:col-span-6 flex flex-col justify-center ${
                  isEven ? "lg:order-2" : "lg:order-1"
                }`}
              >
                {/* Category Number */}
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className={`${serifFont.className} text-base sm:text-lg font-medium tracking-[0.25em] text-[#dfb76c]`}
                  >
                    {section.number}
                  </span>
                  <span
                    aria-hidden="true"
                    className="h-px w-10 sm:w-16 bg-gradient-to-r from-[#dfb76c]/70 to-transparent"
                  />
                </div>

                {/* Section Title */}
                <h3
                  className={`${serifFont.className} text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-normal tracking-wide text-[#fdf0d5] drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)] mb-4 sm:mb-6`}
                >
                  {section.title}
                </h3>

                {/* Section Description */}
                <p className="font-sans text-sm sm:text-base lg:text-lg text-[#fdf0d5]/85 leading-relaxed sm:leading-loose max-w-xl font-normal drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]">
                  {section.description}
                </p>
              </div>
            </div>
          </motion.article>
        );
      })}
    </div>
  );
}
