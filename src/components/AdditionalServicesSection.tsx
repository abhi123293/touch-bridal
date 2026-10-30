"use client";

import { useState } from "react";
import { Cormorant_Garamond } from "next/font/google";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export interface AdditionalSubService {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

export const ADDITIONAL_SUB_SERVICES: AdditionalSubService[] = [
  {
    id: "saree-pre-pleating",
    number: "01",
    title: "Saree Pre-Pleating",
    description:
      "Get perfectly arranged saree pleats for a neat, elegant look and effortless draping.",
    image: "/images/preplating-copy.jpg",
    alt: "Saree Pre-Pleating by S Touch Salon",
  },
  {
    id: "saree-box-folding",
    number: "02",
    title: "Saree Box Folding",
    description:
      "Keep your saree beautifully folded and organized with precise box folding for easy storage and travel.",
    image: "/images/saree box folding.jpg",
    alt: "Saree Box Folding by S Touch Salon",
  },
];

interface AdditionalServicesSectionProps {
  onBackToServices?: () => void;
}

const ROW_HEIGHT = 115;
const PANEL_HEIGHT = 420;

export default function AdditionalServicesSection({
  onBackToServices,
}: AdditionalServicesSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeService = ADDITIONAL_SUB_SERVICES[activeIndex];

  const getWhatsAppUrl = (title: string) =>
    "https://wa.me/919789376174?text=" +
    encodeURIComponent(
      `Hi Touch Salon! I would love to enquire about booking the ${title} service.`
    );

  const getPanelY = (index: number) => {
    if (ADDITIONAL_SUB_SERVICES.length <= 1) return 0;
    const totalHeight = ADDITIONAL_SUB_SERVICES.length * ROW_HEIGHT;
    const travelRange = Math.max(0, totalHeight - PANEL_HEIGHT);
    return (index / (ADDITIONAL_SUB_SERVICES.length - 1)) * travelRange;
  };

  return (
    <section
      aria-label="Additional Services Sub-Services Collection"
      className="relative w-full overflow-hidden rounded-[26px] sm:rounded-[34px] lg:rounded-[40px] bg-[#F7F1E9] border border-[#E4D8C8] shadow-[0_20px_50px_rgba(45,27,19,0.08)] py-10 sm:py-14 lg:py-16 px-6 sm:px-10 lg:px-14 select-none"
    >
      {/* 1. Thin vertical gold accent line near the left edge */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-4 sm:left-7 lg:left-8 top-12 bottom-12 w-px bg-gradient-to-b from-transparent via-[#E7C895]/60 to-transparent"
      />

      {/* 2. Soft Ambient Warm Glow matching Home terracotta */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-10 top-20 h-72 w-96 rounded-full bg-[#8B4A28]/10 blur-[100px]"
      />

      <div className="relative mx-auto w-full max-w-[1360px]">
        {/* Navigation & Breadcrumbs Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 sm:mb-8 lg:mb-10 pl-2 sm:pl-4">
          <button
            type="button"
            onClick={onBackToServices}
            aria-label="Back to all services"
            className="group inline-flex items-center gap-2.5 rounded-full border border-[#E4D8C8] bg-white px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-[13px] font-semibold tracking-wide text-[#2D1B13] shadow-sm transition-all duration-250 hover:border-[#8B4A28] hover:bg-[#8B4A28] hover:text-white hover:shadow-[0_4px_16px_rgba(139,74,40,0.25)]"
          >
            <ArrowLeft className="h-4 w-4 stroke-[2.2] transition-transform duration-250 group-hover:-translate-x-1 text-[#2D1B13] group-hover:text-white" />
            <span>Back to All Services</span>
          </button>

          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium tracking-wider">
            <button
              type="button"
              onClick={onBackToServices}
              className="text-[#786354] hover:text-[#2D1B13] hover:underline transition-colors cursor-pointer"
            >
              Services
            </button>
            <span className="text-[#E7C895]">/</span>
            <span className="text-[#2D1B13] font-semibold">Additional Services Collection</span>
          </nav>
        </div>

        {/* Section Heading matching Home editorial design */}
        <div className="mb-8 sm:mb-10 lg:mb-12 pl-2 sm:pl-4">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#8B4A28]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#8B4A28] sm:text-xs">
              Saree Draping & Pre-Pleating
            </span>
          </div>

          <h2
            className={`${cormorant.className} mt-3 text-3xl font-normal tracking-tight text-[#2D1B13] sm:text-4xl lg:text-[46px] leading-[1.1]`}
          >
            Additional Services Collection
          </h2>

          <div className="mt-3.5 flex items-center gap-2">
            <span className="h-[1.5px] w-12 bg-[#8B4A28]" />
            <span className="h-1 w-1 rounded-full bg-[#E7C895]" />
            <span className="h-[1px] w-20 bg-[#8B4A28]/35" />
          </div>
        </div>

        {/* =========================================================================
            FULL-WIDTH SERVICE LIST with Interactive Selected Row & Floating Image
           ========================================================================= */}
        <div className="relative w-full">
          {/* Vertical Stack of Full-Width Rows */}
          <div className="flex flex-col divide-y divide-[#E4D8C8]">
            {ADDITIONAL_SUB_SERVICES.map((service, index) => {
              const isActive = activeIndex === index;

              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => {
                    if (isActive && typeof window !== "undefined" && window.innerWidth < 1024) {
                      window.open(getWhatsAppUrl(service.title), "_blank");
                    } else {
                      setActiveIndex(index);
                    }
                  }}
                  onMouseEnter={() => setActiveIndex(index)}
                  aria-selected={isActive}
                  role="tab"
                  className={`group relative w-full text-left transition-all duration-300 min-h-[105px] lg:h-[115px] flex items-center justify-between gap-6 px-6 sm:px-10 lg:px-12 py-5 sm:py-6 rounded-[14px] sm:rounded-[18px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B4A28] ${
                    isActive
                      ? "bg-[#8B4A28] text-white shadow-[0_8px_25px_rgba(139,74,40,0.30)] my-1 border-transparent"
                      : "bg-white/80 text-[#2D1B13] hover:bg-white"
                  }`}
                >
                  {/* Left: Number, Title, and Short Quote/Description */}
                  <div className="flex-1 max-w-[420px] sm:max-w-md lg:max-w-lg xl:max-w-xl pr-4">
                    <div className="flex items-baseline gap-3">
                      <span
                        className={`text-xs font-mono font-semibold tracking-wider ${
                          isActive ? "text-[#E7C895]" : "text-[#8B4A28]"
                        }`}
                      >
                        {service.number}
                      </span>
                      <h3
                        className={`${cormorant.className} text-2xl sm:text-[26px] lg:text-[29px] font-normal tracking-wide transition-colors ${
                          isActive
                            ? "text-white font-semibold"
                            : "text-[#2D1B13] group-hover:text-[#8B4A28]"
                        }`}
                      >
                        {service.title}
                      </h3>
                    </div>

                    <p
                      className={`mt-1.5 text-xs sm:text-[13px] lg:text-[14px] leading-relaxed line-clamp-2 transition-colors ${
                        isActive
                          ? "text-white/90 font-normal"
                          : "text-[#786354] group-hover:text-[#2D1B13]"
                      }`}
                    >
                      {service.description}
                    </p>

                    {/* Mobile Book Button badge when row is selected */}
                    {isActive && (
                      <div className="mt-2.5 flex lg:hidden items-center gap-1.5">
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white text-[#8B4A28] text-xs font-bold shadow-sm">
                          <span>Book on WhatsApp</span>
                          <ArrowUpRight className="h-3 w-3 stroke-[2.2]" />
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Far Right: Diagonal Arrow-Up-Right Icon */}
                  <div className="flex-shrink-0 z-10">
                    <div
                      className={`h-10 w-10 sm:h-11 sm:w-11 rounded-full flex items-center justify-center transition-all duration-250 ${
                        isActive
                          ? "bg-white text-[#8B4A28] shadow-md"
                          : "border border-[#E4D8C8] text-[#8B4A28] bg-white group-hover:border-[#8B4A28] group-hover:bg-[#8B4A28] group-hover:text-white"
                      }`}
                    >
                      <ArrowUpRight
                        className={`h-5 w-5 stroke-[2.2] transition-transform duration-250 ${
                          isActive
                            ? "translate-x-0.5 -translate-y-0.5"
                            : "group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        }`}
                      />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* =========================================================================
              FLOATING RECTANGULAR IMAGE PANEL (Desktop)
             ========================================================================= */}
          <div
            style={{
              transform: `translateY(${getPanelY(activeIndex)}px)`,
            }}
            className="hidden lg:block absolute right-14 lg:right-20 xl:right-28 top-0 w-[320px] xl:w-[350px] h-[420px] rounded-[20px] overflow-hidden border-2 border-[#E7C895] bg-[#2D1B13] shadow-[0_25px_60px_rgba(45,27,19,0.35)] transition-transform duration-350 ease-out z-20 pointer-events-auto"
          >
            {/* Stack of All Images with Smooth Cross-Dissolve */}
            {ADDITIONAL_SUB_SERVICES.map((service, index) => {
              const isSelected = activeIndex === index;
              return (
                <div
                  key={service.id}
                  className={`absolute inset-0 transition-all duration-500 ease-out ${
                    isSelected
                      ? "opacity-100 scale-100 z-10"
                      : "opacity-0 scale-[1.02] pointer-events-none z-0"
                  }`}
                >
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              );
            })}

            {/* Subtle Bottom Scrim with Look Title & WhatsApp Action */}
            <div className="absolute inset-x-0 bottom-0 z-20 h-24 bg-gradient-to-t from-[#21150F]/96 via-[#21150F]/50 to-transparent pointer-events-none" />

            {/* Specular Top Sheen */}
            <div className="absolute inset-x-0 top-0 z-20 h-px bg-gradient-to-r from-transparent via-[#E7C895] to-transparent pointer-events-none" />

            <div className="absolute inset-x-0 bottom-0 z-30 p-4 sm:p-5 flex items-end justify-between gap-3">
              <div>
                <span className="text-[10px] font-sans font-bold tracking-[0.2em] text-[#E7C895] uppercase block">
                  {activeService.number} • SIGNATURE LOOK
                </span>
                <span
                  className={`${cormorant.className} text-xl xl:text-2xl font-medium tracking-wide text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]`}
                >
                  {activeService.title}
                </span>
              </div>
              <a
                href={getWhatsAppUrl(activeService.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-[#8B4A28] px-3.5 py-1.5 text-xs font-semibold text-white shadow-md transition-transform duration-250 hover:scale-105 hover:bg-[#2D1B13]"
              >
                <span>Book</span>
                <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.2]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
