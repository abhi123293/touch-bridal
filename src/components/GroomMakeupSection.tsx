"use client";

import { useState } from "react";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export interface GroomSubService {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

export const GROOM_SUB_SERVICES: GroomSubService[] = [
  {
    id: "wedding-makeup",
    number: "01",
    title: "Wedding Makeup",
    description:
      "Look sharp and confident with professional groom makeup that enhances your features for a polished and elegant look on your special day.",
    image: "/images/groom makeup.jpg",
    alt: "Groom Wedding Makeup Artistry by Touch Salon",
  },
  {
    id: "reception-makeup",
    number: "02",
    title: "Reception Makeup",
    description:
      "Get a stylish and elegant look with reception groom makeup that enhances your features and keeps you looking confident and handsome on your special day.",
    image: "/images/rec.jpg",
    alt: "Groom Reception Makeup Artistry by Touch Salon",
  },
  {
    id: "party-makeup",
    number: "03",
    title: "Party Makeup",
    description:
      "Shine at every celebration with glamorous party makeup that enhances your natural beauty and gives you a flawless, stunning look.",
    image: "/images/party.jpg",
    alt: "Groom Party Makeup Artistry by Touch Salon",
  },
  {
    id: "baby-shower",
    number: "04",
    title: "Baby Shower",
    description:
      "Look smart and elegant with groom styling for your baby shower, perfect for celebrating this special occasion with confidence and charm.",
    image: "/images/shower.jpg",
    alt: "Groom Baby Shower Styling & Makeup by Touch Salon",
  },
  {
    id: "engagement-makeup",
    number: "05",
    title: "Engagement Makeup",
    description:
      "Look stylish and confident with groom engagement makeup that enhances your features and gives you a polished, elegant look for your special day.",
    image: "/images/eng.jpg",
    alt: "Groom Engagement Makeup Artistry by Touch Salon",
  },
  {
    id: "holy-communion-makeup",
    number: "06",
    title: "Holy Communion Makeup",
    description:
      "Give your little boy a neat and charming look with gentle grooming for his special Holy Communion day.",
    image: "/images/communion.jpg",
    alt: "Holy Communion Groom Makeup by Touch Salon",
  },
  {
    id: "god-makeup",
    number: "07",
    title: "God Makeup",
    description:
      "Achieve a bold and divine look with men’s god makeup, featuring detailed designs and creative styling for a powerful, eye-catching appearance.",
    image: "/images/god.jpg",
    alt: "Men's God Makeup Artistry by Touch Salon",
  },
];

interface GroomMakeupSectionProps {
  onBackToServices?: () => void;
}

const ROW_HEIGHT = 115;
const PANEL_HEIGHT = 420;

export default function GroomMakeupSection({
  onBackToServices,
}: GroomMakeupSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeService = GROOM_SUB_SERVICES[activeIndex];

  const getWhatsAppUrl = (title: string) =>
    "https://wa.me/919789376174?text=" +
    encodeURIComponent(
      `Hi Touch Salon! I would love to enquire about booking the Groom ${title} service.`
    );

  // Smoothly maps activeIndex across the available container height
  const getPanelY = (index: number) => {
    if (GROOM_SUB_SERVICES.length <= 1) return 0;
    const totalHeight = GROOM_SUB_SERVICES.length * ROW_HEIGHT;
    const travelRange = Math.max(0, totalHeight - PANEL_HEIGHT);
    return (index / (GROOM_SUB_SERVICES.length - 1)) * travelRange;
  };

  return (
    <section
      aria-label="Groom Makeup Sub-Services Collection"
      className="relative w-full overflow-hidden rounded-[26px] sm:rounded-[34px] lg:rounded-[40px] bg-[#F5F0E8] border border-[#3A2921]/15 shadow-[0_25px_70px_rgba(28,18,15,0.18)] py-10 sm:py-14 lg:py-16 px-6 sm:px-10 lg:px-14 select-none"
    >
      {/* 1. Thin vertical muted-gold accent line near the left edge */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-4 sm:left-7 lg:left-8 top-12 bottom-12 w-px bg-gradient-to-b from-transparent via-[#C8A66A]/40 to-transparent"
      />

      {/* 2. Soft Ambient Warm Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-10 top-20 h-72 w-96 rounded-full bg-[#C8A66A]/10 blur-[100px]"
      />

      <div className="relative mx-auto w-full max-w-[1360px]">
        {/* Navigation & Breadcrumbs Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 sm:mb-8 lg:mb-10 pl-2 sm:pl-4">
          <button
            type="button"
            onClick={onBackToServices}
            aria-label="Back to all services"
            className="group inline-flex items-center gap-2.5 rounded-full border border-[#C8A66A]/50 bg-[#FAF6F0] px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-[13px] font-semibold tracking-wide text-[#1C120F] shadow-sm transition-all duration-250 hover:border-[#C8A66A] hover:bg-[#C8A66A] hover:text-[#1C120F] hover:shadow-[0_4px_16px_rgba(200,166,106,0.25)]"
          >
            <ArrowLeft className="h-4 w-4 stroke-[2.2] transition-transform duration-250 group-hover:-translate-x-1 text-[#1C120F]" />
            <span>Back to All Services</span>
          </button>

          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium tracking-wider">
            <button
              type="button"
              onClick={onBackToServices}
              className="text-[#5A3E30]/75 hover:text-[#1C120F] hover:underline transition-colors cursor-pointer"
            >
              Services
            </button>
            <span className="text-[#C8A66A]">/</span>
            <span className="text-[#1C120F] font-semibold">Groom Makeup Collection</span>
          </nav>
        </div>

        {/* Section Heading matching the editorial design */}
        <div className="mb-8 sm:mb-10 lg:mb-12 pl-2 sm:pl-4">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#C8A66A]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#A98955] sm:text-xs">
              Signature Groom Artistry
            </span>
          </div>

          <h2
            className={`${cormorant.className} mt-3 text-3xl font-normal tracking-tight text-[#1C120F] sm:text-4xl lg:text-[46px] leading-[1.1]`}
          >
            Groom Makeup Collection
          </h2>

          <div className="mt-3.5 flex items-center gap-2">
            <span className="h-[1.5px] w-12 bg-[#C8A66A]" />
            <span className="h-1 w-1 rounded-full bg-[#C8A66A]" />
            <span className="h-[1px] w-20 bg-[#C8A66A]/40" />
          </div>
        </div>

        {/* Mobile / Tablet Image Preview */}
        <div className="block lg:hidden w-full mb-6">
          <div className="relative w-full aspect-[4/5] max-h-[420px] overflow-hidden rounded-[20px] border-2 border-[#C8A66A]/50 bg-[#2B1C17] shadow-[0_16px_40px_rgba(28,18,15,0.25)]">
            {GROOM_SUB_SERVICES.map((service, index) => {
              const isSelected = activeIndex === index;
              return (
                <div
                  key={service.id}
                  className={`absolute inset-0 transition-opacity duration-500 ease-out ${
                    isSelected ? "opacity-100 z-10" : "opacity-0 pointer-events-none z-0"
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
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-20 bg-gradient-to-t from-[#1C120F]/90 via-[#1C120F]/40 to-transparent"
            />
            <div className="absolute inset-x-0 bottom-0 z-30 p-4 sm:p-5 flex items-end justify-between gap-4">
              <div>
                <span className="text-[10px] font-sans font-semibold tracking-[0.2em] text-[#C8A66A] uppercase block">
                  {activeService.number} • Selected Look
                </span>
                <span
                  className={`${cormorant.className} text-xl sm:text-2xl font-medium tracking-[0.03em] text-[#F5F0E8] drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]`}
                >
                  {activeService.title}
                </span>
              </div>
              <a
                href={getWhatsAppUrl(activeService.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-[#C8A66A] px-3.5 py-1.5 text-xs font-semibold text-[#1C120F] shadow-md transition-transform hover:scale-105"
              >
                <span>Book</span>
                <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.2]" />
              </a>
            </div>
          </div>
        </div>

        {/* =========================================================================
            FULL-WIDTH SERVICE LIST with Interactive Selected Row & Floating Image
           ========================================================================= */}
        <div className="relative w-full">
          {/* Vertical Stack of Rows */}
          <div className="flex flex-col divide-y divide-[#C8A66A]/25">
            {GROOM_SUB_SERVICES.map((service, index) => {
              const isActive = activeIndex === index;

              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  onMouseEnter={() => setActiveIndex(index)}
                  aria-selected={isActive}
                  role="tab"
                  className={`group relative w-full text-left transition-all duration-300 min-h-[105px] lg:h-[115px] flex items-center justify-between gap-6 px-6 sm:px-10 lg:px-12 py-5 sm:py-6 rounded-[14px] sm:rounded-[18px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A66A] ${
                    isActive
                      ? "bg-[#C8A66A] text-[#1C120F] shadow-[0_8px_25px_rgba(200,166,106,0.32)] my-1 border-transparent"
                      : "bg-transparent text-[#1C120F] hover:bg-[#EAE1D5]/60"
                  }`}
                >
                  {/* Left: Number, Title, and Short Quote/Description */}
                  <div className="flex-1 max-w-[420px] sm:max-w-md lg:max-w-lg xl:max-w-xl pr-4">
                    <div className="flex items-baseline gap-3">
                      <span
                        className={`text-xs font-mono font-semibold tracking-wider ${
                          isActive ? "text-[#1C120F]/70" : "text-[#A98955]"
                        }`}
                      >
                        {service.number}
                      </span>
                      <h3
                        className={`${cormorant.className} text-2xl sm:text-[26px] lg:text-[29px] font-normal tracking-wide transition-colors ${
                          isActive
                            ? "text-[#1C120F] font-semibold"
                            : "text-[#1C120F] group-hover:text-[#1C120F]"
                        }`}
                      >
                        {service.title}
                      </h3>
                    </div>

                    <p
                      className={`mt-1.5 text-xs sm:text-[13px] lg:text-[14px] leading-relaxed line-clamp-2 transition-colors ${
                        isActive
                          ? "text-[#2B1C17]/90 font-medium"
                          : "text-[#5A3E30]/85 group-hover:text-[#3A2921]"
                      }`}
                    >
                      {service.description}
                    </p>
                  </div>

                  {/* Far Right: Diagonal Arrow-Up-Right Icon */}
                  <div className="flex-shrink-0 z-10">
                    <div
                      className={`h-10 w-10 sm:h-11 sm:w-11 rounded-full flex items-center justify-center transition-all duration-250 ${
                        isActive
                          ? "bg-[#1C120F] text-[#C8A66A] shadow-md"
                          : "border border-[#C8A66A]/50 text-[#8B6F3E] bg-[#FAF6F0] group-hover:border-[#C8A66A] group-hover:bg-[#C8A66A] group-hover:text-[#1C120F]"
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
            className="hidden lg:block absolute right-14 lg:right-20 xl:right-28 top-0 w-[320px] xl:w-[350px] h-[420px] rounded-[20px] overflow-hidden border-2 border-[#C8A66A] bg-[#2B1C17] shadow-[0_25px_60px_rgba(28,18,15,0.32)] transition-transform duration-350 ease-out z-20 pointer-events-auto"
          >
            {/* Stack of Images */}
            {GROOM_SUB_SERVICES.map((service, index) => {
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

            {/* Subtle Bottom Scrim */}
            <div className="absolute inset-x-0 bottom-0 z-20 h-24 bg-gradient-to-t from-[#1C120F]/90 via-[#1C120F]/45 to-transparent pointer-events-none" />

            {/* Specular Top Gold Sheen */}
            <div className="absolute inset-x-0 top-0 z-20 h-px bg-gradient-to-r from-transparent via-[#C8A66A] to-transparent pointer-events-none" />

            <div className="absolute inset-x-0 bottom-0 z-30 p-4 sm:p-5 flex items-end justify-between gap-3">
              <div>
                <span className="text-[10px] font-sans font-semibold tracking-[0.2em] text-[#C8A66A] uppercase block">
                  {activeService.number} • SIGNATURE GROOM LOOK
                </span>
                <span
                  className={`${cormorant.className} text-xl xl:text-2xl font-medium tracking-wide text-[#F5F0E8] drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]`}
                >
                  {activeService.title}
                </span>
              </div>
              <a
                href={getWhatsAppUrl(activeService.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-[#C8A66A] px-3.5 py-1.5 text-xs font-semibold text-[#1C120F] shadow-md transition-transform duration-250 hover:scale-105 hover:bg-[#d8b87c]"
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

