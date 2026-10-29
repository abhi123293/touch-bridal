"use client";

import { Cormorant_Garamond, Inter } from "next/font/google";
import { ArrowUpRight } from "lucide-react";

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

const WHATSAPP_ENQUIRY_URL =
  "https://wa.me/919789376174?text=" +
  encodeURIComponent("Hi Touch! I'd love to book an appointment.");

const WHATSAPP_RENTAL_JEWELS_URL =
  "https://wa.me/919789376174?text=" +
  encodeURIComponent("Hi Touch! I'd love to enquire about Rental Jewels.");

interface ServicesEditorialCollageProps {
  onSelectBridalMakeup?: () => void;
  onSelectHairServices?: () => void;
  onSelectBeautyGrooming?: () => void;
  onSelectSkinFacial?: () => void;
  onSelectAdditionalServices?: () => void;
}

export default function ServicesEditorialCollage({
  onSelectBridalMakeup,
  onSelectHairServices,
  onSelectBeautyGrooming,
  onSelectSkinFacial,
  onSelectAdditionalServices,
}: ServicesEditorialCollageProps = {}) {
  return (
    <section
      aria-label="Editorial Services Gallery"
      className="relative w-full overflow-hidden bg-[radial-gradient(ellipse_at_top,#2f1c13_0%,#20120b_52%,#140a05_100%)] border border-[#dfb76c]/30 shadow-[0_30px_90px_rgba(15,7,4,0.75)] py-8 sm:py-12 lg:py-16 px-3 sm:px-6 lg:px-8 select-none rounded-[16px] sm:rounded-[24px] lg:rounded-[32px]"
    >
      {/* =========================================================================
          1. WARM IVORY BACKGROUND WITH DIAGONAL CHAMPAGNE-GOLD CORNERS
             (Exact reference: solid diagonal triangles at Top-Left & Bottom-Right)
         ========================================================================= */}
      {/* Subtle Warm Amber Ambient Spotlight in Center */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[650px] w-full max-w-[950px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b from-[#dfb76c]/12 via-[#8b4a28]/10 to-transparent blur-[120px] z-0"
      />

      {/* Top-Left Champagne-Gold Corner Shape */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 w-36 h-36 sm:w-56 sm:h-56 lg:w-72 lg:h-72 overflow-hidden z-0"
      >
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="h-full w-full"
        >
          <defs>
            <linearGradient id="goldCornerTL" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fdf0d5" stopOpacity="0.9" />
              <stop offset="35%" stopColor="#dfb76c" stopOpacity="0.75" />
              <stop offset="85%" stopColor="#8b4a28" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#2f1c13" stopOpacity="0" />
            </linearGradient>
          </defs>
          <polygon points="0,0 100,0 0,100" fill="url(#goldCornerTL)" />
        </svg>
      </div>

      {/* Bottom-Right Champagne-Gold Corner Shape */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 w-36 h-36 sm:w-56 sm:h-56 lg:w-72 lg:h-72 overflow-hidden z-0"
      >
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="h-full w-full"
        >
          <defs>
            <linearGradient id="goldCornerBR" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#fdf0d5" stopOpacity="0.9" />
              <stop offset="35%" stopColor="#dfb76c" stopOpacity="0.75" />
              <stop offset="85%" stopColor="#8b4a28" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#2f1c13" stopOpacity="0" />
            </linearGradient>
          </defs>
          <polygon points="100,100 0,100 100,0" fill="url(#goldCornerBR)" />
        </svg>
      </div>

      <div className="relative mx-auto w-full max-w-[1040px]">
        {/* =========================================================================
            DESKTOP & TABLET EDITORIAL COLLAGE (Strict replica of uploaded reference)
            - Proportional 1000 x 1280 coordinate stage
            - Thin rectangular outline running behind the collage
            - Cursive "Love" script in upper-right open space
            - Editorial philosophy block in lower-left
            - All 8 service frames with inside text + micro-accents
           ========================================================================= */}
        <div className="relative hidden md:block w-full h-[1120px] lg:h-[1220px] xl:h-[1260px] z-10">
          {/* -----------------------------------------------------------------------
              THE THIN RECTANGULAR OUTLINE
              (Exact reference: runs from top-left behind center image, across to right,
               down right edge, and across bottom behind lower images)
             ----------------------------------------------------------------------- */}
          <svg
            viewBox="0 0 1000 1250"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 w-full h-full z-0"
          >
            {/* Main outlined rectangular contour */}
            <path
              d="M 175 215 H 955 V 930 H 465"
              fill="none"
              stroke="#dfb76c" strokeWidth="1.6" strokeOpacity="0.45"
            />
          </svg>

          {/* -----------------------------------------------------------------------
              CURSIVE SCRIPT CALLIGRAPHY IN UPPER-RIGHT OPEN SPACE
              (Exact reference: ornate cursive "Love" script in the open space)
             ----------------------------------------------------------------------- */}
          <div
            className="absolute right-[8%] top-[19%] z-10 pointer-events-none text-right"
          >
            <span
              className="block font-serif italic text-6xl lg:text-7xl xl:text-[84px] text-[#dfb76c]/90 leading-none drop-shadow-[0_2px_14px_rgba(223,183,108,0.3)] select-none"
              style={{
                fontFamily: "var(--font-cormorant), 'Playfair Display', Georgia, serif",
                letterSpacing: "0.04em",
              }}
            >
              Love
            </span>
          </div>

          {/* -----------------------------------------------------------------------
              FRAME 1 (Upper-Left Image): Additional Services
              (Exact reference: medium landscape image on left, below top edge)
             ----------------------------------------------------------------------- */}
          <div
            className="absolute left-[8%] top-[25.5%] w-[26.5%] h-[14.5%] z-10"
          >
            <button
              type="button"
              onClick={onSelectAdditionalServices}
              aria-label="Additional Services"
              className="group relative w-full h-full overflow-hidden rounded-[2px] border border-[#dfb76c]/30 bg-[#1e110a] shadow-[0_10px_28px_rgba(0,0,0,0.6)] text-left cursor-pointer transition-all duration-300 hover:border-[#dfb76c] hover:shadow-[0_14px_38px_rgba(223,183,108,0.22)] focus:outline-none"
            >
              <img
                src="/images/preplating copy.jpg"
                alt="Additional Services - Saree Pre-Pleating"
                className="h-full w-full object-cover object-[center_20%] transition-transform duration-700 ease-out group-hover:scale-[1.035]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#1C120F]/90 via-[#1C120F]/40 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-3 flex items-end justify-between gap-1.5">
                <div>
                  <span className={`${inter.className} block text-[9px] uppercase tracking-[0.2em] font-semibold text-[#C8A66A]`}>
                    Saree Pleating
                  </span>
                  <h3
                    className={`${cormorant.className} text-base lg:text-[18px] font-medium text-[#F5F0E8] leading-tight drop-shadow-sm`}
                  >
                    Additional Services
                  </h3>
                </div>
                <span className="shrink-0 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#C8A66A]/25 border border-[#C8A66A]/50 text-[#C8A66A] transition-transform duration-300 group-hover:scale-110">
                  <ArrowUpRight className="h-3 w-3 stroke-[2.2]" />
                </span>
              </div>
            </button>
          </div>

          {/* -----------------------------------------------------------------------
              FRAME 2 (Top Center Hero): Bridal Makeup
              (Exact reference: tall vertical image near upper-middle, breaks top line)
             ----------------------------------------------------------------------- */}
          <div
            className="absolute left-[35%] top-[14.5%] w-[26%] h-[25.5%] z-20"
          >
            <button
              type="button"
              onClick={onSelectBridalMakeup}
              aria-label="Bridal Makeup Services"
              className="group relative w-full h-full overflow-hidden rounded-[2px] border border-[#dfb76c]/40 bg-[#1e110a] shadow-[0_14px_36px_rgba(0,0,0,0.7)] text-left cursor-pointer transition-all duration-300 hover:border-[#dfb76c] hover:shadow-[0_16px_45px_rgba(223,183,108,0.3)] focus:outline-none"
            >
              <img
                src="/images/imageee.jpg"
                alt="Bridal Makeup by S Touch Salon"
                className="h-full w-full object-cover object-[center_15%] transition-transform duration-700 ease-out group-hover:scale-[1.035]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#1C120F]/95 via-[#1C120F]/45 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-3.5 flex items-end justify-between gap-2">
                <div>
                  <span className={`${inter.className} block text-[9.5px] uppercase tracking-[0.22em] font-semibold text-[#C8A66A]`}>
                    Flagship Makeover
                  </span>
                  <h3
                    className={`${cormorant.className} text-lg lg:text-[22px] font-medium text-[#F5F0E8] leading-tight drop-shadow-sm`}
                  >
                    Bridal Makeup
                  </h3>
                </div>
                <span className="shrink-0 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#C8A66A]/25 border border-[#C8A66A]/50 text-[#C8A66A] transition-transform duration-300 group-hover:scale-110">
                  <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.2]" />
                </span>
              </div>
            </button>
          </div>

          {/* -----------------------------------------------------------------------
              FRAME 3 (Middle-Left Image): Skin & Facial Services
              (Exact reference: medium portrait/square directly below Frame 1)
             ----------------------------------------------------------------------- */}
          <div
            className="absolute left-[4%] top-[40.5%] w-[23%] h-[18%] z-15"
          >
            <button
              type="button"
              onClick={onSelectSkinFacial}
              aria-label="Skin & Facial Services"
              className="group relative w-full h-full overflow-hidden rounded-[2px] border border-[#dfb76c]/30 bg-[#1e110a] shadow-[0_10px_28px_rgba(0,0,0,0.6)] text-left cursor-pointer transition-all duration-300 hover:border-[#dfb76c] hover:shadow-[0_14px_38px_rgba(223,183,108,0.22)] focus:outline-none"
            >
              <img
                src="/images/skin-facial.jpg"
                alt="Skin & Facial Services by S Touch Salon"
                className="h-full w-full object-cover object-[center_25%] transition-transform duration-700 ease-out group-hover:scale-[1.035]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-22 bg-gradient-to-t from-[#1C120F]/90 via-[#1C120F]/40 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-3 flex items-end justify-between gap-1.5">
                <div>
                  <span className={`${inter.className} block text-[9px] uppercase tracking-[0.2em] font-semibold text-[#C8A66A]`}>
                    Radiance
                  </span>
                  <h3
                    className={`${cormorant.className} text-base lg:text-[18px] font-medium text-[#F5F0E8] leading-tight drop-shadow-sm`}
                  >
                    Skin &amp; Facial
                  </h3>
                </div>
                <span className="shrink-0 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#C8A66A]/25 border border-[#C8A66A]/50 text-[#C8A66A] transition-transform duration-300 group-hover:scale-110">
                  <ArrowUpRight className="h-3 w-3 stroke-[2.2]" />
                </span>
              </div>
            </button>
          </div>

          {/* -----------------------------------------------------------------------
              FRAME 4 (Center Main Centerpiece): Appointment Enquiry
              (Exact reference: large center photo, flush below Frame 2 & beside Frame 3)
             ----------------------------------------------------------------------- */}
          <div
            className="absolute left-[27.5%] top-[40.5%] w-[34%] h-[18%] z-10"
          >
            <a
              href={WHATSAPP_ENQUIRY_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Appointment Enquiry via WhatsApp"
              className="group relative block w-full h-full overflow-hidden rounded-[2px] border border-[#dfb76c]/30 bg-[#1e110a] shadow-[0_10px_28px_rgba(0,0,0,0.6)] text-left cursor-pointer transition-all duration-300 hover:border-[#dfb76c] hover:shadow-[0_14px_38px_rgba(223,183,108,0.22)] focus:outline-none"
            >
              <img
                src="/images/appointment.jpg"
                alt="Appointment Booking at S Touch Salon"
                className="h-full w-full object-cover object-[center_45%] transition-transform duration-700 ease-out group-hover:scale-[1.035]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#1C120F]/90 via-[#1C120F]/40 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-3.5 flex items-end justify-between gap-2">
                <div>
                  <span className={`${inter.className} block text-[9px] uppercase tracking-[0.2em] font-semibold text-[#C8A66A]`}>
                    VIP Booking
                  </span>
                  <h3
                    className={`${cormorant.className} text-lg lg:text-[20px] font-medium text-[#F5F0E8] leading-tight drop-shadow-sm`}
                  >
                    Appointment Enquiry
                  </h3>
                </div>
                <span className="shrink-0 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#C8A66A]/25 border border-[#C8A66A]/50 text-[#C8A66A] transition-transform duration-300 group-hover:scale-110">
                  <ArrowUpRight className="h-3 w-3 stroke-[2.2]" />
                </span>
              </div>
            </a>
          </div>

          {/* -----------------------------------------------------------------------
              FRAME 5 (Right Column - Top Item): Beauty & Grooming
              (Exact reference: right side, below the "Love" cursive script)
             ----------------------------------------------------------------------- */}
          <div
            className="absolute left-[62%] top-[30.5%] w-[20.5%] h-[12.8%] z-10"
          >
            <button
              type="button"
              onClick={onSelectBeautyGrooming}
              aria-label="Beauty & Grooming Services"
              className="group relative w-full h-full overflow-hidden rounded-[2px] border border-[#dfb76c]/30 bg-[#1e110a] shadow-[0_10px_28px_rgba(0,0,0,0.6)] text-left cursor-pointer transition-all duration-300 hover:border-[#dfb76c] hover:shadow-[0_14px_38px_rgba(223,183,108,0.22)] focus:outline-none"
            >
              <img
                src="/images/beauty-grooming.jpg"
                alt="Beauty & Grooming Services by S Touch Salon"
                className="h-full w-full object-cover object-[center_20%] transition-transform duration-700 ease-out group-hover:scale-[1.035]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-18 bg-gradient-to-t from-[#1C120F]/90 via-[#1C120F]/40 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-2.5 flex items-end justify-between gap-1">
                <div>
                  <span className={`${inter.className} block text-[8.5px] uppercase tracking-[0.18em] font-semibold text-[#C8A66A]`}>
                    Salon Rituals
                  </span>
                  <h3
                    className={`${cormorant.className} text-sm lg:text-[16px] font-medium text-[#F5F0E8] leading-tight drop-shadow-sm`}
                  >
                    Beauty &amp; Grooming
                  </h3>
                </div>
                <span className="shrink-0 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#C8A66A]/25 border border-[#C8A66A]/50 text-[#C8A66A] transition-transform duration-300 group-hover:scale-110">
                  <ArrowUpRight className="h-2.5 w-2.5 stroke-[2.2]" />
                </span>
              </div>
            </button>
          </div>

          {/* -----------------------------------------------------------------------
              FRAME 6 (Right Column - Middle Item): Hair Services
              (Exact reference: directly below Frame 5)
             ----------------------------------------------------------------------- */}
          <div
            className="absolute left-[62%] top-[43.8%] w-[20.5%] h-[18.2%] z-10"
          >
            <button
              type="button"
              onClick={onSelectHairServices}
              aria-label="Hair Services"
              className="group relative w-full h-full overflow-hidden rounded-[2px] border border-[#dfb76c]/30 bg-[#1e110a] shadow-[0_10px_28px_rgba(0,0,0,0.6)] text-left cursor-pointer transition-all duration-300 hover:border-[#dfb76c] hover:shadow-[0_14px_38px_rgba(223,183,108,0.22)] focus:outline-none"
            >
              <img
                src="/images/hair-services.jpg"
                alt="Hair Services & Rituals by S Touch Salon"
                className="h-full w-full object-cover object-[center_20%] transition-transform duration-700 ease-out group-hover:scale-[1.035]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#1C120F]/90 via-[#1C120F]/40 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-3 flex items-end justify-between gap-1.5">
                <div>
                  <span className={`${inter.className} block text-[9px] uppercase tracking-[0.2em] font-semibold text-[#C8A66A]`}>
                    Couture Styling
                  </span>
                  <h3
                    className={`${cormorant.className} text-base lg:text-[18px] font-medium text-[#F5F0E8] leading-tight drop-shadow-sm`}
                  >
                    Hair Services
                  </h3>
                </div>
                <span className="shrink-0 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#C8A66A]/25 border border-[#C8A66A]/50 text-[#C8A66A] transition-transform duration-300 group-hover:scale-110">
                  <ArrowUpRight className="h-3 w-3 stroke-[2.2]" />
                </span>
              </div>
            </button>
          </div>

          {/* -----------------------------------------------------------------------
              FRAME 7 (Far Right - Overlapping the Outline): Groom Makeup
              (Exact reference: narrow vertical photo breaking the right border line)
             ----------------------------------------------------------------------- */}
          <div
            className="absolute left-[83%] top-[37.5%] w-[16%] h-[13.5%] z-20"
          >
            <a
              href={WHATSAPP_ENQUIRY_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Groom Makeup Enquiry"
              className="group relative block w-full h-full overflow-hidden rounded-[2px] border border-[#dfb76c]/35 bg-[#1e110a] shadow-[0_12px_32px_rgba(0,0,0,0.65)] text-left cursor-pointer transition-all duration-300 hover:border-[#dfb76c] hover:shadow-[0_14px_38px_rgba(223,183,108,0.22)] focus:outline-none"
            >
              <img
                src="/images/Groom.jpg"
                alt="Groom Makeup by S Touch Salon"
                className="h-full w-full object-cover object-[center_18%] transition-transform duration-700 ease-out group-hover:scale-[1.035]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-18 bg-gradient-to-t from-[#1C120F]/90 via-[#1C120F]/40 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-2 flex items-end justify-between gap-1">
                <div>
                  <span className={`${inter.className} block text-[8px] uppercase tracking-[0.16em] font-semibold text-[#C8A66A]`}>
                    Groom Suite
                  </span>
                  <h3
                    className={`${cormorant.className} text-xs lg:text-[14px] font-medium text-[#F5F0E8] leading-tight drop-shadow-sm`}
                  >
                    Groom Makeup
                  </h3>
                </div>
                <span className="shrink-0 inline-flex h-4.5 w-4.5 items-center justify-center rounded-full bg-[#C8A66A]/25 text-[#C8A66A]">
                  <ArrowUpRight className="h-2.5 w-2.5 stroke-[2]" />
                </span>
              </div>
            </a>
          </div>

          {/* -----------------------------------------------------------------------
              FRAME 8 (Bottom Center - Left): Men's Services
              (Exact reference: vertical portrait below centerpiece, breaks bottom line)
             ----------------------------------------------------------------------- */}
          <div
            className="absolute left-[26.8%] top-[59%] w-[19.5%] h-[20.5%] z-20"
          >
            <a
              href={WHATSAPP_ENQUIRY_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Men's Services Enquiry"
              className="group relative block w-full h-full overflow-hidden rounded-[2px] border border-[#dfb76c]/35 bg-[#1e110a] shadow-[0_12px_32px_rgba(0,0,0,0.65)] text-left cursor-pointer transition-all duration-300 hover:border-[#dfb76c] hover:shadow-[0_14px_38px_rgba(223,183,108,0.22)] focus:outline-none"
            >
              <img
                src="/images/mens-services.jpg"
                alt="Men's Services by S Touch Salon"
                className="h-full w-full object-cover object-[center_20%] transition-transform duration-700 ease-out group-hover:scale-[1.035]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-22 bg-gradient-to-t from-[#1C120F]/90 via-[#1C120F]/40 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-3 flex items-end justify-between gap-1.5">
                <div>
                  <span className={`${inter.className} block text-[9px] uppercase tracking-[0.2em] font-semibold text-[#C8A66A]`}>
                    Executive
                  </span>
                  <h3
                    className={`${cormorant.className} text-base lg:text-[18px] font-medium text-[#F5F0E8] leading-tight drop-shadow-sm`}
                  >
                    Men&apos;s Services
                  </h3>
                </div>
                <span className="shrink-0 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#C8A66A]/25 border border-[#C8A66A]/50 text-[#C8A66A] transition-transform duration-300 group-hover:scale-110">
                  <ArrowUpRight className="h-3 w-3 stroke-[2.2]" />
                </span>
              </div>
            </a>
          </div>

          {/* -----------------------------------------------------------------------
              FRAME 9 (Bottom Center - Right): Rental Jewels
              (Exact reference: right beside bottom-center portrait, below centerpiece)
             ----------------------------------------------------------------------- */}
          <div
            className="absolute left-[46.8%] top-[59%] w-[14.5%] h-[18%] z-15"
          >
            <a
              href={WHATSAPP_RENTAL_JEWELS_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Rental Jewels Enquiry via WhatsApp"
              className="group relative block w-full h-full overflow-hidden rounded-[2px] border border-[#dfb76c]/30 bg-[#1e110a] shadow-[0_10px_28px_rgba(0,0,0,0.6)] text-left cursor-pointer transition-all duration-300 hover:border-[#dfb76c] hover:shadow-[0_14px_38px_rgba(223,183,108,0.22)] focus:outline-none"
            >
              <img
                src="/images/rental jewels.jpg"
                alt="Rental Jewels by S Touch Salon"
                className="h-full w-full object-cover object-[center_20%] transition-transform duration-700 ease-out group-hover:scale-[1.035]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-18 bg-gradient-to-t from-[#1C120F]/90 via-[#1C120F]/40 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-2.5 flex items-end justify-between gap-1">
                <div>
                  <span className={`${inter.className} block text-[8px] uppercase tracking-[0.16em] font-semibold text-[#C8A66A]`}>
                    Adornments
                  </span>
                  <h3
                    className={`${cormorant.className} text-xs lg:text-[14px] font-medium text-[#F5F0E8] leading-tight drop-shadow-sm`}
                  >
                    Rental Jewels
                  </h3>
                </div>
                <span className="shrink-0 inline-flex h-4.5 w-4.5 items-center justify-center rounded-full bg-[#C8A66A]/25 text-[#C8A66A]">
                  <ArrowUpRight className="h-2.5 w-2.5 stroke-[2]" />
                </span>
              </div>
            </a>
          </div>


          {/* -----------------------------------------------------------------------
              EDITORIAL TEXT BLOCK IN LOWER-LEFT OPEN SPACE
              (Exact reference: "WEDDING VOWS" heading + neat justified editorial paragraph)
             ----------------------------------------------------------------------- */}
          <div
            className="absolute left-[4%] top-[59.5%] w-[21.5%] z-10 pr-2"
          >
            <h4
              className={`${inter.className} text-[11px] lg:text-[12px] font-bold uppercase tracking-[0.24em] text-[#dfb76c] mb-2`}
            >
              Studio Philosophy
            </h4>
            <p
              className={`${inter.className} text-[10px] lg:text-[11px] leading-[1.65] text-[#EAE1D5]/80 text-justify font-normal`}
            >
              Every detail tells a story. Every look captures a dream. At Touch Bridal Makeover Studio, we promise to listen to your vision and craft bespoke bridal artistry, couture hair transformations, and rejuvenating skin therapies tailored to make your special moments truly unforgettable.
            </p>
            <div className="mt-3">
              <span
                className="block font-serif italic text-base lg:text-lg text-[#fdf0d5]/90"
                style={{
                  fontFamily: "var(--font-cormorant), 'Playfair Display', Georgia, serif",
                }}
              >
                Touch Bridal Studio
              </span>
            </div>
          </div>
        </div>

        {/* =========================================================================
            MOBILE EDITORIAL LAYOUT (< md)
            - Responsive 2-column editorial magazine collage
            - Retains the exact aesthetic: cursive "Love", thin outline, inside texts
           ========================================================================= */}
        <div className="relative md:hidden flex flex-col gap-5 z-10 pt-2 pb-6 px-1">
          {/* Top Decorative Header with Cursive Love Accent */}
          <div className="flex items-center justify-between border-b border-[#dfb76c]/25 pb-3">
            <div>
              <span className={`${inter.className} text-[10px] font-semibold uppercase tracking-[0.24em] text-[#dfb76c]`}>
                Touch Bridal Studio
              </span>
              <h2 className={`${cormorant.className} text-2xl font-normal text-[#F5F0E8]`}>
                Our Services
              </h2>
            </div>
            <span
              className="font-serif italic text-4xl text-[#dfb76c]"
              style={{
                fontFamily: "var(--font-cormorant), 'Playfair Display', Georgia, serif",
              }}
            >
              Love
            </span>
          </div>

          {/* Mobile Collage Cards */}
          <div className="grid grid-cols-2 gap-2.5">
            {/* Card 1: Bridal Makeup (Tall Full-Width) */}
            <div className="col-span-2">
              <button
                type="button"
                onClick={onSelectBridalMakeup}
                aria-label="Bridal Makeup"
                className="group relative w-full h-[320px] overflow-hidden rounded-[2px] border border-[#dfb76c]/30 bg-[#1e110a] text-left block shadow-[0_8px_20px_rgba(0,0,0,0.5)]"
              >
                <img
                  src="/images/imageee.jpg"
                  alt="Bridal Makeup"
                  className="h-full w-full object-cover object-[center_15%]"
                />
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#1C120F] via-[#1C120F]/55 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-3.5 flex items-end justify-between gap-2">
                  <div>
                    <span className="block text-[9.5px] uppercase tracking-[0.2em] font-semibold text-[#C8A66A]">
                      Flagship Makeover
                    </span>
                    <h3 className={`${cormorant.className} text-xl font-medium text-[#F5F0E8]`}>
                      Bridal Makeup
                    </h3>
                  </div>
                  <span className="shrink-0 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#C8A66A]/25 text-[#C8A66A]">
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </button>
            </div>

            {/* Card 2: Additional Services */}
            <div className="col-span-1">
              <button
                type="button"
                onClick={onSelectAdditionalServices}
                aria-label="Additional Services"
                className="group relative w-full h-[180px] overflow-hidden rounded-[2px] border border-[#dfb76c]/30 bg-[#1e110a] text-left block shadow-[0_8px_20px_rgba(0,0,0,0.5)]"
              >
                <img
                  src="/images/preplating copy.jpg"
                  alt="Additional Services"
                  className="h-full w-full object-cover object-[center_20%]"
                />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#1C120F] via-[#1C120F]/55 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-2.5 flex items-end justify-between gap-1">
                  <div>
                    <span className="block text-[8.5px] uppercase tracking-[0.16em] font-semibold text-[#C8A66A]">
                      Pleating
                    </span>
                    <h3 className={`${cormorant.className} text-sm font-medium text-[#F5F0E8]`}>
                      Additional Services
                    </h3>
                  </div>
                  <span className="shrink-0 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#C8A66A]/25 text-[#C8A66A]">
                    <ArrowUpRight className="h-2.5 w-2.5" />
                  </span>
                </div>
              </button>
            </div>

            {/* Card 3: Hair Services */}
            <div className="col-span-1">
              <button
                type="button"
                onClick={onSelectHairServices}
                aria-label="Hair Services"
                className="group relative w-full h-[180px] overflow-hidden rounded-[2px] border border-[#dfb76c]/30 bg-[#1e110a] text-left block shadow-[0_8px_20px_rgba(0,0,0,0.5)]"
              >
                <img
                  src="/images/hair-services.jpg"
                  alt="Hair Services"
                  className="h-full w-full object-cover object-[center_20%]"
                />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#1C120F] via-[#1C120F]/55 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-2.5 flex items-end justify-between gap-1">
                  <div>
                    <span className="block text-[8.5px] uppercase tracking-[0.16em] font-semibold text-[#C8A66A]">
                      Couture
                    </span>
                    <h3 className={`${cormorant.className} text-sm font-medium text-[#F5F0E8]`}>
                      Hair Services
                    </h3>
                  </div>
                  <span className="shrink-0 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#C8A66A]/25 text-[#C8A66A]">
                    <ArrowUpRight className="h-2.5 w-2.5" />
                  </span>
                </div>
              </button>
            </div>

            {/* Card 4: Skin & Facial */}
            <div className="col-span-1">
              <button
                type="button"
                onClick={onSelectSkinFacial}
                aria-label="Skin & Facial"
                className="group relative w-full h-[180px] overflow-hidden rounded-[2px] border border-[#dfb76c]/30 bg-[#1e110a] text-left block shadow-[0_8px_20px_rgba(0,0,0,0.5)]"
              >
                <img
                  src="/images/skin-facial.jpg"
                  alt="Skin & Facial"
                  className="h-full w-full object-cover object-[center_25%]"
                />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#1C120F] via-[#1C120F]/55 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-2.5 flex items-end justify-between gap-1">
                  <div>
                    <span className="block text-[8.5px] uppercase tracking-[0.16em] font-semibold text-[#C8A66A]">
                      Radiance
                    </span>
                    <h3 className={`${cormorant.className} text-sm font-medium text-[#F5F0E8]`}>
                      Skin &amp; Facial
                    </h3>
                  </div>
                  <span className="shrink-0 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#C8A66A]/25 text-[#C8A66A]">
                    <ArrowUpRight className="h-2.5 w-2.5" />
                  </span>
                </div>
              </button>
            </div>

            {/* Card 5: Beauty & Grooming */}
            <div className="col-span-1">
              <button
                type="button"
                onClick={onSelectBeautyGrooming}
                aria-label="Beauty & Grooming"
                className="group relative w-full h-[180px] overflow-hidden rounded-[2px] border border-[#dfb76c]/30 bg-[#1e110a] text-left block shadow-[0_8px_20px_rgba(0,0,0,0.5)]"
              >
                <img
                  src="/images/beauty-grooming.jpg"
                  alt="Beauty & Grooming"
                  className="h-full w-full object-cover object-[center_20%]"
                />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#1C120F] via-[#1C120F]/55 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-2.5 flex items-end justify-between gap-1">
                  <div>
                    <span className="block text-[8.5px] uppercase tracking-[0.16em] font-semibold text-[#C8A66A]">
                      Rituals
                    </span>
                    <h3 className={`${cormorant.className} text-sm font-medium text-[#F5F0E8]`}>
                      Beauty &amp; Grooming
                    </h3>
                  </div>
                  <span className="shrink-0 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#C8A66A]/25 text-[#C8A66A]">
                    <ArrowUpRight className="h-2.5 w-2.5" />
                  </span>
                </div>
              </button>
            </div>

            {/* Card 6: Appointment Enquiry (Panoramic) */}
            <div className="col-span-2">
              <a
                href={WHATSAPP_ENQUIRY_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Appointment Enquiry"
                className="group relative w-full h-[190px] overflow-hidden rounded-[2px] border border-[#dfb76c]/30 bg-[#1e110a] text-left block shadow-[0_8px_20px_rgba(0,0,0,0.5)]"
              >
                <img
                  src="/images/appointment.jpg"
                  alt="Appointment Enquiry"
                  className="h-full w-full object-cover object-[center_45%]"
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#1C120F] via-[#1C120F]/55 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-3 flex items-end justify-between gap-2">
                  <div>
                    <span className="block text-[9px] uppercase tracking-[0.2em] font-semibold text-[#C8A66A]">
                      VIP Booking
                    </span>
                    <h3 className={`${cormorant.className} text-lg font-medium text-[#F5F0E8]`}>
                      Appointment Enquiry
                    </h3>
                  </div>
                  <span className="shrink-0 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#C8A66A] text-[#1C120F] text-xs font-semibold">
                    <span>Enquire</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </span>
                </div>
              </a>
            </div>

            {/* Card 7: Groom Makeup */}
            <div className="col-span-1">
              <a
                href={WHATSAPP_ENQUIRY_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Groom Makeup"
                className="group relative w-full h-[160px] overflow-hidden rounded-[2px] border border-[#dfb76c]/30 bg-[#1e110a] text-left block shadow-[0_8px_20px_rgba(0,0,0,0.5)]"
              >
                <img
                  src="/images/Groom.jpg"
                  alt="Groom Makeup"
                  className="h-full w-full object-cover object-[center_18%]"
                />
                <div className="absolute inset-x-0 bottom-0 h-18 bg-gradient-to-t from-[#1C120F] via-[#1C120F]/55 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-2 flex items-end justify-between gap-1">
                  <div>
                    <span className="block text-[8px] uppercase tracking-[0.16em] font-semibold text-[#C8A66A]">
                      Suite
                    </span>
                    <h3 className={`${cormorant.className} text-xs font-medium text-[#F5F0E8]`}>
                      Groom Makeup
                    </h3>
                  </div>
                  <span className="shrink-0 inline-flex h-4.5 w-4.5 items-center justify-center rounded-full bg-[#C8A66A]/25 text-[#C8A66A]">
                    <ArrowUpRight className="h-2.5 w-2.5" />
                  </span>
                </div>
              </a>
            </div>

            {/* Card 8: Men's Services */}
            <div className="col-span-1">
              <a
                href={WHATSAPP_ENQUIRY_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Men's Services"
                className="group relative w-full h-[160px] overflow-hidden rounded-[2px] border border-[#dfb76c]/30 bg-[#1e110a] text-left block shadow-[0_8px_20px_rgba(0,0,0,0.5)]"
              >
                <img
                  src="/images/mens-services.jpg"
                  alt="Men's Services"
                  className="h-full w-full object-cover object-[center_20%]"
                />
                <div className="absolute inset-x-0 bottom-0 h-18 bg-gradient-to-t from-[#1C120F] via-[#1C120F]/55 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-2 flex items-end justify-between gap-1">
                  <div>
                    <span className="block text-[8px] uppercase tracking-[0.16em] font-semibold text-[#C8A66A]">
                      Executive
                    </span>
                    <h3 className={`${cormorant.className} text-xs font-medium text-[#F5F0E8]`}>
                      Men&apos;s Services
                    </h3>
                  </div>
                  <span className="shrink-0 inline-flex h-4.5 w-4.5 items-center justify-center rounded-full bg-[#C8A66A]/25 text-[#C8A66A]">
                    <ArrowUpRight className="h-2.5 w-2.5" />
                  </span>
                </div>
              </a>
            </div>

            {/* Card 9: Rental Jewels */}
            <div className="col-span-2">
              <a
                href={WHATSAPP_RENTAL_JEWELS_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Rental Jewels Enquiry via WhatsApp"
                className="group relative w-full h-[180px] overflow-hidden rounded-[2px] border border-[#dfb76c]/30 bg-[#1e110a] text-left block shadow-[0_8px_20px_rgba(0,0,0,0.5)]"
              >
                <img
                  src="/images/rental jewels.jpg"
                  alt="Rental Jewels"
                  className="h-full w-full object-cover object-[center_30%]"
                />
                <div className="absolute inset-x-0 bottom-0 h-22 bg-gradient-to-t from-[#1C120F] via-[#1C120F]/55 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-3 flex items-end justify-between gap-2">
                  <div>
                    <span className="block text-[9px] uppercase tracking-[0.2em] font-semibold text-[#C8A66A]">
                      Adornments
                    </span>
                    <h3 className={`${cormorant.className} text-lg font-medium text-[#F5F0E8]`}>
                      Rental Jewels
                    </h3>
                  </div>
                  <span className="shrink-0 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#C8A66A] text-[#1C120F] text-xs font-semibold">
                    <span>Enquire</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Mobile Editorial Philosophy Block */}
          <div className="border-t border-[#dfb76c]/25 pt-3">
            <h4 className={`${inter.className} text-[10.5px] font-bold uppercase tracking-[0.2em] text-[#dfb76c] mb-1.5`}>
              Studio Philosophy
            </h4>
            <p className={`${inter.className} text-[10px] leading-relaxed text-[#EAE1D5]/80 text-justify`}>
              Every detail tells a story. Every look captures a dream. At Touch Bridal Makeover Studio, we promise to listen to your vision and craft bespoke bridal artistry, couture hair transformations, and rejuvenating skin therapies tailored to make your special moments truly unforgettable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
