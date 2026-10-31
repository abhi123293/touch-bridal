"use client";

import { useState } from "react";
import { Inter_Tight } from "next/font/google";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});
export interface BridalSubService {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

export const BRIDAL_SUB_SERVICES: BridalSubService[] = [
  {
    id: "engagement-makeup",
    number: "01",
    title: "Engagement Makeup",
    description:
      "Enjoy a beautiful engagement look with elegant makeup that enhances your natural beauty and makes your special day unforgettable.",
    image: "/images/engagement copy.jpg",
    alt: "Engagement Makeup by Touch Salon",
  },
  {
    id: "bridal-makeup",
    number: "02",
    title: "Bridal Makeup",
    description:
      "Every detail tells a story. Every look captures a dream. Bridal beauty, perfected for your special day.",
    image: "/images/makeup bridal.jpg",
    alt: "Bridal Makeup Artistry by Touch Salon",
  },
  {
    id: "reception-makeup",
    number: "03",
    title: "Reception Makeup",
    description:
      "Step into the spotlight with a beautifully refined look that captures the magic of your celebration and leaves a lasting impression.",
    image: "/images/reception.jpg",
    alt: "Reception Makeup by Touch Salon",
  },
  {
    id: "party-makeup",
    number: "04",
    title: "Party Makeup",
    description:
      "Turn every occasion into a moment to shine with a flawless, glamorous look that reflects your unique style.",
    image: "/images/party%20makeup.jpg",
    alt: "Party Makeup by Touch Salon",
  },
  {
    id: "baby-shower-makeup",
    number: "05",
    title: "Baby Shower Makeup",
    description:
      "Embrace the magic of motherhood with a graceful, glowing look that makes your precious moments even more memorable.",
    image: "/images/baby.jpg",
    alt: "Baby Shower Makeup by Touch Salon",
  },
  {
    id: "puberty-makeup",
    number: "06",
    title: "Puberty Makeup",
    description:
      "Blending cultural elegance with youthful charm, create a fresh and radiant look for this cherished celebration.",
    image: "/images/puberty.jpg",
    alt: "Puberty Makeup by Touch Salon",
  },
  {
    id: "holy-communion-makeup",
    number: "07",
    title: "Holy Communion Makeup",
    description:
      "Celebrate your child’s Holy Communion with beautiful, elegant makeup that creates a natural and graceful look for this special day.",
    image: "/images/holy.jpg",
    alt: "Holy Communion Makeup by Touch Salon",
  },
  {
    id: "goddess-makeup",
    number: "08",
    title: "Goddess Makeup",
    description:
      "Get a stunning goddess look with radiant makeup that enhances your natural beauty and gives you an elegant, divine glow.",
    image: "/images/goddess copy.jpg",
    alt: "Goddess Makeup by Touch Salon",
  },
  {
    id: "sfx-makeup",
    number: "09",
    title: "SFX Makeup",
    description:
      "Transform your look with creative special-effects makeup featuring realistic wounds, scars, and fantasy designs for a dramatic appearance.",
    image: "/images/haloween copy.jpg",
    alt: "SFX Makeup by Touch Salon",
  },
];

interface BridalMakeupSectionProps {
  onBackToServices?: () => void;
}

const ROW_HEIGHT = 115;
const PANEL_HEIGHT = 420;

// Splits text into half black and half lavender matching "Every bride, beautifully unique."
function renderHalfAndHalf(text: string, isActive: boolean = false) {
  const words = text.trim().split(/\s+/);
  if (words.length <= 1) {
    return <span className={isActive ? "text-white" : "text-[#25232A]"}>{text}</span>;
  }
  const mid = Math.ceil(words.length / 2);
  const part1 = words.slice(0, mid).join(" ");
  const part2 = words.slice(mid).join(" ");
  return (
    <>
      <span className={isActive ? "text-white" : "text-[#25232A]"}>{part1} </span>
      <span className={isActive ? "text-[#EDE4F3]" : "text-[#8D6CA3]"}>{part2}</span>
    </>
  );
}

function renderPanelTitle(text: string) {
  const words = text.trim().split(/\s+/);
  if (words.length <= 1) {
    return <span className="text-white">{text}</span>;
  }
  const mid = Math.ceil(words.length / 2);
  const part1 = words.slice(0, mid).join(" ");
  const part2 = words.slice(mid).join(" ");
  return (
    <>
      <span className="text-white">{part1} </span>
      <span className="text-[#EDE4F3]">{part2}</span>
    </>
  );
}

export default function BridalMakeupSection({
  onBackToServices,
}: BridalMakeupSectionProps) {
  // Requirement 7: Bridal Makeup is initially highlighted by default
  const [activeIndex, setActiveIndex] = useState(0);

  const activeService = BRIDAL_SUB_SERVICES[activeIndex];

  const getWhatsAppUrl = (title: string) =>
    "https://wa.me/919789376174?text=" +
    encodeURIComponent(
      `Hi Touch Salon! I would love to enquire about booking the ${title} service.`
    );

  // Smoothly maps activeIndex across the available container height so the full card is revealed
  const getPanelY = (index: number) => {
    const totalHeight = BRIDAL_SUB_SERVICES.length * ROW_HEIGHT;
    const travelRange = Math.max(0, totalHeight - PANEL_HEIGHT);
    return (index / (BRIDAL_SUB_SERVICES.length - 1)) * travelRange;
  };

  return (
    <section
      aria-label="Bridal Makeup Sub-Services Collection"
      className="relative w-full overflow-hidden rounded-[26px] sm:rounded-[34px] lg:rounded-[40px] bg-white border border-[#8D6CA3]/20 shadow-[0_20px_50px_rgba(37,35,42,0.08)] py-10 sm:py-14 lg:py-16 px-6 sm:px-10 lg:px-14 select-none"
    >
      {/* 1. Thin vertical muted-gold accent line near the left edge */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-4 sm:left-7 lg:left-8 top-12 bottom-12 w-px bg-gradient-to-b from-transparent via-[#8D6CA3]/40 to-transparent"
      />

      {/* 2. Soft Ambient Warm Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-10 top-20 h-72 w-96 rounded-full bg-[#8D6CA3]/10 blur-[100px]"
      />

      <div className="relative mx-auto w-full max-w-[1360px]">
        {/* Navigation & Breadcrumbs Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 sm:mb-8 lg:mb-10 pl-2 sm:pl-4">
          <button
            type="button"
            onClick={onBackToServices}
            aria-label="Back to all services"
            className="group inline-flex items-center gap-2.5 rounded-full border border-[#8D6CA3]/25 bg-white px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-[13px] font-semibold tracking-wide text-[#25232A] shadow-sm transition-all duration-250 hover:border-[#8D6CA3] hover:bg-[#8D6CA3] hover:text-white hover:shadow-[0_4px_16px_rgba(141,108,163,0.25)]"
          >
            <ArrowLeft className="h-4 w-4 stroke-[2.2] transition-transform duration-250 group-hover:-translate-x-1 text-[#25232A] group-hover:text-white" />
            <span>Back to All Services</span>
          </button>

          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium tracking-wider">
            <button
              type="button"
              onClick={onBackToServices}
              className="text-[#716B76] hover:text-[#25232A] hover:underline transition-colors cursor-pointer"
            >
              Services
            </button>
            <span className="text-[#8D6CA3]">/</span>
            <span className="text-[#25232A] font-semibold">Bridal Makeup Collection</span>
          </nav>
        </div>

        {/* Section Heading matching the editorial design */}
        <div className="mb-8 sm:mb-10 lg:mb-12 pl-2 sm:pl-4">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#8D6CA3]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] font-bold text-[#8D6CA3] sm:text-xs">
              Signature Bridal Artistry
            </span>
          </div>

          <h2
            className={`${interTight.className} mt-3 max-w-[580px] text-3xl font-bold uppercase leading-[1.05] tracking-[-0.02em] sm:text-4xl lg:text-[50px]`}
          >
            <span className="block text-[#25232A]">Bridal Makeup,</span>
            <span className="block text-[#8D6CA3]">Collection.</span>
          </h2>

          <div className="mt-3.5 flex items-center gap-2">
            <span className="h-[1.5px] w-12 bg-[#8D6CA3]" />
            <span className="h-1 w-1 rounded-full bg-[#8D6CA3]" />
            <span className="h-[1px] w-20 bg-[#8D6CA3]/40" />
          </div>
        </div>

        {/* =========================================================================
            FULL-WIDTH SERVICE LIST with Interactive Selected Row & Floating Image
           ========================================================================= */}
        <div className="relative w-full">
          {/* Vertical Stack of 5 Full-Width Rows */}
          <div className="flex flex-col divide-y divide-[#8D6CA3]/15">
            {BRIDAL_SUB_SERVICES.map((service, index) => {
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
                  className={`group relative w-full text-left transition-all duration-300 min-h-[105px] lg:h-[115px] flex items-center justify-between gap-6 px-6 sm:px-10 lg:px-12 py-5 sm:py-6 rounded-[14px] sm:rounded-[18px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8D6CA3] ${
                    isActive
                      ? "bg-[#8D6CA3] text-white shadow-[0_8px_25px_rgba(141,108,163,0.28)] my-1 border-transparent"
                      : "bg-transparent text-[#25232A] hover:bg-[#EDE4F3]/50"
                  }`}
                >
                  {/* Left: Number, Title, and Short Quote/Description */}
                  <div className="flex-1 max-w-[420px] sm:max-w-md lg:max-w-lg xl:max-w-xl pr-4">
                    <div className="flex items-baseline gap-3">
                      <span
                        className={`${interTight.className} text-xs font-bold tracking-wider ${
                          isActive ? "text-white/80" : "text-[#8D6CA3]"
                        }`}
                      >
                        {service.number}
                      </span>
                      <h3
                        className={`${interTight.className} text-xl sm:text-2xl lg:text-[23px] font-bold tracking-[-0.01em] transition-colors ${
                          isActive
                            ? "text-white font-semibold"
                            : "text-[#25232A] group-hover:text-[#25232A]"
                        }`}
                      >
                        {service.title}
                      </h3>
                    </div>

                    <p
                      className={`mt-1.5 text-xs sm:text-[13px] lg:text-[14px] leading-relaxed line-clamp-2 transition-colors ${
                        isActive
                          ? "text-white/90 font-medium"
                          : "text-[#716B76] group-hover:text-[#25232A]"
                      }`}
                    >
                      {service.description}
                    </p>

                    {/* Mobile Book Button badge when row is selected */}
                    {isActive && (
                      <div className="mt-2.5 flex lg:hidden items-center gap-1.5">
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white text-[#8D6CA3] text-xs font-semibold shadow-sm">
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
                          ? "bg-white text-[#8D6CA3] shadow-md"
                          : "border border-[#8D6CA3]/25 text-[#8D6CA3] bg-[#EDE4F3]/60 group-hover:border-[#8D6CA3] group-hover:bg-[#8D6CA3] group-hover:text-white"
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
              - Reveals full portrait card, overlapping the active row
              - Follows the active service row smoothly via translateY
             ========================================================================= */}
          <div
            style={{
              transform: `translateY(${getPanelY(activeIndex)}px)`,
            }}
            className="hidden lg:block absolute right-14 lg:right-20 xl:right-28 top-0 w-[320px] xl:w-[350px] h-[420px] rounded-[20px] overflow-hidden border-2 border-[#8D6CA3] bg-[#25232A] shadow-[0_25px_60px_rgba(37,35,42,0.25)] transition-transform duration-350 ease-out z-20 pointer-events-auto"
          >
            {/* Stack of All 5 Images with Smooth Cross-Dissolve */}
            {BRIDAL_SUB_SERVICES.map((service, index) => {
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
            <div className="absolute inset-x-0 bottom-0 z-20 h-24 bg-gradient-to-t from-[#25232A]/95 via-[#25232A]/50 to-transparent pointer-events-none" />

            {/* Specular Top Gold Sheen */}
            <div className="absolute inset-x-0 top-0 z-20 h-px bg-gradient-to-r from-transparent via-[#8D6CA3] to-transparent pointer-events-none" />

            <div className="absolute inset-x-0 bottom-0 z-30 p-4 sm:p-5 flex items-end justify-between gap-3">
              <div>
                <span className="text-[10px] font-sans font-semibold tracking-[0.2em] text-white/80 uppercase block">
                  {activeService.number} • SIGNATURE LOOK
                </span>
                <span
                  className={`${interTight.className} text-lg xl:text-xl font-bold uppercase tracking-tight text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]`}
                >
                  {activeService.title}
                </span>
              </div>
              <a
                href={getWhatsAppUrl(activeService.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-[#8D6CA3] px-3.5 py-1.5 text-xs font-semibold text-white shadow-md transition-transform duration-250 hover:scale-105 hover:bg-[#76558D]"
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
