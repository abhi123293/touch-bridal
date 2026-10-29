"use client";

import { Cormorant_Garamond, Inter } from "next/font/google";

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
      className="relative w-full overflow-hidden rounded-[24px] sm:rounded-[36px] lg:rounded-[44px] bg-[#F5F0E8] border border-[#3A2921]/15 shadow-[0_20px_60px_rgba(28,18,15,0.14)] py-10 sm:py-14 lg:py-16 px-4 sm:px-8 lg:px-12 select-none"
    >
      {/* =========================================================================
          1. WARM IVORY & CREAM AMBIENT BACKGROUND TEXTURE
         ========================================================================= */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(250,246,240,0.85)_0%,rgba(245,240,232,0.95)_60%,#EAE1D5_100%)]"
      />

      {/* =========================================================================
          2. DECORATIVE DIAGONAL CHAMPAGNE-GOLD CORNER SHAPES
         ========================================================================= */}
      {/* Top-Left Diagonal Corner Shape */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 h-44 w-44 sm:h-64 sm:w-64 lg:h-80 lg:w-80 overflow-hidden z-0"
      >
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="h-full w-full"
        >
          <defs>
            <linearGradient id="corner-grad-tl" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C8A66A" stopOpacity="0.30" />
              <stop offset="65%" stopColor="#C8A66A" stopOpacity="0.10" />
              <stop offset="100%" stopColor="#C8A66A" stopOpacity="0.0" />
            </linearGradient>
          </defs>
          <polygon points="0,0 100,0 0,100" fill="url(#corner-grad-tl)" />
          <line
            x1="0"
            y1="100"
            x2="100"
            y2="0"
            stroke="#C8A66A"
            strokeWidth="1.2"
            strokeOpacity="0.45"
          />
        </svg>
      </div>

      {/* Bottom-Right Diagonal Corner Shape */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 h-44 w-44 sm:h-64 sm:w-64 lg:h-80 lg:w-80 overflow-hidden z-0"
      >
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="h-full w-full"
        >
          <defs>
            <linearGradient id="corner-grad-br" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#C8A66A" stopOpacity="0.30" />
              <stop offset="65%" stopColor="#C8A66A" stopOpacity="0.10" />
              <stop offset="100%" stopColor="#C8A66A" stopOpacity="0.0" />
            </linearGradient>
          </defs>
          <polygon points="100,100 0,100 100,0" fill="url(#corner-grad-br)" />
          <line
            x1="0"
            y1="100"
            x2="100"
            y2="0"
            stroke="#C8A66A"
            strokeWidth="1.2"
            strokeOpacity="0.45"
          />
        </svg>
      </div>

      <div className="relative mx-auto w-full max-w-[1360px]">
        {/* =========================================================================
            3. THIN RECTANGULAR OUTLINE BEHIND THE COLLAGE (VISIBLE IN OPEN SPACES)
           ========================================================================= */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-4 sm:inset-7 lg:inset-10 z-0 border border-[#C8A66A]/45 rounded-[4px]"
        />

        {/* =========================================================================
            DESKTOP & TABLET OVERLAPPING EDITORIAL COLLAGE (hidden on mobile)
            Height: ~900px, Staggered varied-level overlapping layout
           ========================================================================= */}
        <div className="relative hidden md:block w-full h-[840px] lg:h-[920px] xl:h-[960px] z-10">
          {/* -----------------------------------------------------------------------
              ITEM 1: Additional Services (Upper-Left side, medium landscape)
             ----------------------------------------------------------------------- */}
          <div
            className="absolute left-[2%] lg:left-[3%] top-[4%] lg:top-[5%] w-[27%] lg:w-[26%] xl:w-[25%] z-10"
          >
            <button
              type="button"
              onClick={onSelectAdditionalServices}
              aria-label="Additional Services"
              className="group block w-full text-left cursor-pointer focus:outline-none"
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-[3px] border border-[#3A2921]/15 bg-[#FAF6F0] shadow-[0_10px_26px_rgba(28,18,15,0.12)] transition-all duration-300 hover:border-[#C8A66A] hover:shadow-[0_16px_34px_rgba(200,166,106,0.22)]">
                <img
                  src="/images/preplating copy.jpg"
                  alt="Additional Services"
                  className="h-full w-full object-cover object-[center_20%] transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                />
              </div>
              <span
                className={`${cormorant.className} block mt-2.5 text-lg lg:text-[22px] font-normal tracking-[0.02em] text-[#1C120F] leading-tight drop-shadow-sm transition-colors duration-250 group-hover:text-[#A98955]`}
              >
                Additional Services
              </span>
            </button>
          </div>

          {/* -----------------------------------------------------------------------
              ITEM 2: Bridal Makeup (Tall portrait image near upper-middle area)
             ----------------------------------------------------------------------- */}
          <div
            className="absolute left-[29%] lg:left-[29%] top-[1%] lg:top-[2%] w-[25%] lg:w-[23%] xl:w-[22%] z-25"
          >
            <button
              type="button"
              onClick={onSelectBridalMakeup}
              aria-label="Bridal Makeup"
              className="group block w-full text-left cursor-pointer focus:outline-none"
            >
              <div className="relative w-full aspect-[3/5] overflow-hidden rounded-[3px] border border-[#3A2921]/15 bg-[#FAF6F0] shadow-[0_16px_38px_rgba(28,18,15,0.16)] transition-all duration-300 hover:border-[#C8A66A] hover:shadow-[0_22px_48px_rgba(200,166,106,0.28)]">
                <img
                  src="/images/bridal-makeup.jpg"
                  alt="Bridal Makeup"
                  className="h-full w-full object-cover object-[center_15%] transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                />
              </div>
              <span
                className={`${cormorant.className} block mt-2.5 text-xl lg:text-[24px] font-normal tracking-[0.02em] text-[#1C120F] leading-tight drop-shadow-sm transition-colors duration-250 group-hover:text-[#A98955]`}
              >
                Bridal Makeup
              </span>
            </button>
          </div>

          {/* -----------------------------------------------------------------------
              ITEM 3: Skin & Facial Services (Upper-Right side, small portrait)
             ----------------------------------------------------------------------- */}
          <div
            className="absolute left-[54%] lg:left-[53%] top-[4%] lg:top-[5%] w-[19%] lg:w-[18%] xl:w-[17%] z-10"
          >
            <button
              type="button"
              onClick={onSelectSkinFacial}
              aria-label="Skin & Facial Services"
              className="group block w-full text-left cursor-pointer focus:outline-none"
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-[3px] border border-[#3A2921]/15 bg-[#FAF6F0] shadow-[0_10px_24px_rgba(28,18,15,0.12)] transition-all duration-300 hover:border-[#C8A66A] hover:shadow-[0_16px_34px_rgba(200,166,106,0.22)]">
                <img
                  src="/images/skin-facial.jpg"
                  alt="Skin & Facial Services"
                  className="h-full w-full object-cover object-[center_25%] transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                />
              </div>
              <span
                className={`${cormorant.className} block mt-2.5 text-base lg:text-[19px] font-normal tracking-[0.02em] text-[#1C120F] leading-tight drop-shadow-sm transition-colors duration-250 group-hover:text-[#A98955]`}
              >
                Skin &amp; Facial Services
              </span>
            </button>
          </div>

          {/* -----------------------------------------------------------------------
              ITEM 4: Beauty & Grooming Services (Upper-Right side, medium square)
             ----------------------------------------------------------------------- */}
          <div
            className="absolute left-[74%] lg:left-[73%] top-[7%] lg:top-[8%] w-[23%] lg:w-[22%] xl:w-[21%] z-10"
          >
            <button
              type="button"
              onClick={onSelectBeautyGrooming}
              aria-label="Beauty & Grooming Services"
              className="group block w-full text-left cursor-pointer focus:outline-none"
            >
              <div className="relative w-full aspect-[1/1] overflow-hidden rounded-[3px] border border-[#3A2921]/15 bg-[#FAF6F0] shadow-[0_12px_28px_rgba(28,18,15,0.12)] transition-all duration-300 hover:border-[#C8A66A] hover:shadow-[0_18px_38px_rgba(200,166,106,0.22)]">
                <img
                  src="/images/beauty-grooming.jpg"
                  alt="Beauty & Grooming Services"
                  className="h-full w-full object-cover object-[center_20%] transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                />
              </div>
              <span
                className={`${cormorant.className} block mt-2.5 text-lg lg:text-[21px] font-normal tracking-[0.02em] text-[#1C120F] leading-tight drop-shadow-sm transition-colors duration-250 group-hover:text-[#A98955]`}
              >
                Beauty &amp; Grooming Services
              </span>
            </button>
          </div>

          {/* -----------------------------------------------------------------------
              ITEM 5: Appointment Enquiry (Large landscape image near the center)
             ----------------------------------------------------------------------- */}
          <div
            className="absolute left-[13%] lg:left-[14%] top-[45%] lg:top-[46%] w-[33%] lg:w-[32%] xl:w-[31%] z-15"
          >
            <a
              href={WHATSAPP_ENQUIRY_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Appointment Enquiry"
              className="group block w-full text-left cursor-pointer focus:outline-none"
            >
              <div className="relative w-full aspect-[16/10] overflow-hidden rounded-[3px] border border-[#3A2921]/15 bg-[#FAF6F0] shadow-[0_14px_32px_rgba(28,18,15,0.14)] transition-all duration-300 hover:border-[#C8A66A] hover:shadow-[0_20px_42px_rgba(200,166,106,0.25)]">
                <img
                  src="/images/appointment.jpg"
                  alt="Appointment Booking"
                  className="h-full w-full object-cover object-[center_45%] transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                />
              </div>
              <span
                className={`${cormorant.className} block mt-2.5 text-lg lg:text-[22px] font-normal tracking-[0.02em] text-[#1C120F] leading-tight drop-shadow-sm transition-colors duration-250 group-hover:text-[#A98955]`}
              >
                Appointment Enquiry
              </span>
            </a>
          </div>

          {/* -----------------------------------------------------------------------
              ITEM 6: Hair Services (One tall image toward the right-middle area)
             ----------------------------------------------------------------------- */}
          <div
            className="absolute left-[71%] lg:left-[70%] top-[37%] lg:top-[38%] w-[24%] lg:w-[23%] xl:w-[22%] z-20"
          >
            <button
              type="button"
              onClick={onSelectHairServices}
              aria-label="Hair Services"
              className="group block w-full text-left cursor-pointer focus:outline-none"
            >
              <div className="relative w-full aspect-[3/5] overflow-hidden rounded-[3px] border border-[#3A2921]/15 bg-[#FAF6F0] shadow-[0_16px_36px_rgba(28,18,15,0.15)] transition-all duration-300 hover:border-[#C8A66A] hover:shadow-[0_22px_46px_rgba(200,166,106,0.26)]">
                <img
                  src="/images/hair-services.jpg"
                  alt="Hair Services"
                  className="h-full w-full object-cover object-[center_20%] transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                />
              </div>
              <span
                className={`${cormorant.className} block mt-2.5 text-xl lg:text-[23px] font-normal tracking-[0.02em] text-[#1C120F] leading-tight drop-shadow-sm transition-colors duration-250 group-hover:text-[#A98955]`}
              >
                Hair Services
              </span>
            </button>
          </div>

          {/* -----------------------------------------------------------------------
              ITEM 7 & 8: Lower-Middle Area (Two smaller images: Groom & Men's Services)
             ----------------------------------------------------------------------- */}
          <div
            className="absolute left-[44%] lg:left-[45%] top-[50%] lg:top-[52%] w-[15%] lg:w-[15%] z-25"
          >
            <a
              href={WHATSAPP_ENQUIRY_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Groom Makeup Enquiry"
              className="group block w-full text-left cursor-pointer focus:outline-none"
            >
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[3px] border border-[#3A2921]/15 bg-[#FAF6F0] shadow-[0_12px_28px_rgba(28,18,15,0.13)] transition-all duration-300 hover:border-[#C8A66A] hover:shadow-[0_16px_34px_rgba(200,166,106,0.22)]">
                <img
                  src="/images/Groom.jpg"
                  alt="Groom Makeup"
                  className="h-full w-full object-cover object-[center_18%] transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                />
              </div>
            </a>
          </div>

          <div
            className="absolute left-[58%] lg:left-[59%] top-[62%] lg:top-[64%] w-[15%] lg:w-[15%] z-22"
          >
            <a
              href={WHATSAPP_ENQUIRY_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Men's Services Enquiry"
              className="group block w-full text-left cursor-pointer focus:outline-none"
            >
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[3px] border border-[#3A2921]/15 bg-[#FAF6F0] shadow-[0_12px_28px_rgba(28,18,15,0.13)] transition-all duration-300 hover:border-[#C8A66A] hover:shadow-[0_16px_34px_rgba(200,166,106,0.22)]">
                <img
                  src="/images/mens-services.jpg"
                  alt="Men's Services"
                  className="h-full w-full object-cover object-[center_20%] transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                />
              </div>
            </a>
          </div>

          {/* -----------------------------------------------------------------------
              ITEM 9: Lower-Left Balancing Image (Saree Box Folding)
             ----------------------------------------------------------------------- */}
          <div
            className="absolute left-[3%] lg:left-[4%] top-[67%] lg:top-[68%] w-[19%] lg:w-[18%] z-10"
          >
            <button
              type="button"
              onClick={onSelectAdditionalServices}
              aria-label="Saree Box Folding"
              className="group block w-full text-left cursor-pointer focus:outline-none"
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-[3px] border border-[#3A2921]/15 bg-[#FAF6F0] shadow-[0_10px_24px_rgba(28,18,15,0.12)] transition-all duration-300 hover:border-[#C8A66A] hover:shadow-[0_16px_32px_rgba(200,166,106,0.22)]">
                <img
                  src="/images/boxfolding.jpg"
                  alt="Saree Box Folding"
                  className="h-full w-full object-cover object-[center_20%] transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                />
              </div>
            </button>
          </div>
        </div>

        {/* =========================================================================
            MOBILE RESPONSIVE EDITORIAL COLLAGE (< md)
            - Compact 2-column layout
            - All 6 service names clearly readable and clickable
            - Varied rectangular proportions with 0-4px corners
           ========================================================================= */}
        <div className="relative md:hidden grid grid-cols-2 gap-3.5 w-full max-w-[500px] mx-auto z-10 pt-2 pb-4">
          {/* Mobile Card 1: Additional Services */}
          <div className="col-span-2">
            <button
              type="button"
              onClick={onSelectAdditionalServices}
              aria-label="Additional Services"
              className="group block w-full text-left cursor-pointer focus:outline-none"
            >
              <div className="relative w-full aspect-[16/10] overflow-hidden rounded-[3px] border border-[#3A2921]/15 bg-[#FAF6F0] shadow-sm">
                <img
                  src="/images/preplating copy.jpg"
                  alt="Additional Services"
                  className="h-full w-full object-cover object-[center_20%] transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
              </div>
              <span
                className={`${cormorant.className} block mt-2 text-[18px] font-normal tracking-[0.02em] text-[#1C120F] leading-tight`}
              >
                Additional Services
              </span>
            </button>
          </div>

          {/* Mobile Card 2: Bridal Makeup (Tall) */}
          <div className="col-span-1">
            <button
              type="button"
              onClick={onSelectBridalMakeup}
              aria-label="Bridal Makeup"
              className="group block w-full text-left cursor-pointer focus:outline-none"
            >
              <div className="relative w-full aspect-[3/5] overflow-hidden rounded-[3px] border border-[#3A2921]/15 bg-[#FAF6F0] shadow-sm">
                <img
                  src="/images/bridal-makeup.jpg"
                  alt="Bridal Makeup"
                  className="h-full w-full object-cover object-[center_15%] transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
              </div>
              <span
                className={`${cormorant.className} block mt-2 text-[18px] font-normal tracking-[0.02em] text-[#1C120F] leading-tight`}
              >
                Bridal Makeup
              </span>
            </button>
          </div>

          {/* Mobile Card 3: Hair Services (Tall) */}
          <div className="col-span-1">
            <button
              type="button"
              onClick={onSelectHairServices}
              aria-label="Hair Services"
              className="group block w-full text-left cursor-pointer focus:outline-none"
            >
              <div className="relative w-full aspect-[3/5] overflow-hidden rounded-[3px] border border-[#3A2921]/15 bg-[#FAF6F0] shadow-sm">
                <img
                  src="/images/hair-services.jpg"
                  alt="Hair Services"
                  className="h-full w-full object-cover object-[center_20%] transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
              </div>
              <span
                className={`${cormorant.className} block mt-2 text-[18px] font-normal tracking-[0.02em] text-[#1C120F] leading-tight`}
              >
                Hair Services
              </span>
            </button>
          </div>

          {/* Mobile Card 4: Skin & Facial Services */}
          <div className="col-span-1">
            <button
              type="button"
              onClick={onSelectSkinFacial}
              aria-label="Skin & Facial Services"
              className="group block w-full text-left cursor-pointer focus:outline-none"
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-[3px] border border-[#3A2921]/15 bg-[#FAF6F0] shadow-sm">
                <img
                  src="/images/skin-facial.jpg"
                  alt="Skin & Facial Services"
                  className="h-full w-full object-cover object-[center_25%] transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
              </div>
              <span
                className={`${cormorant.className} block mt-2 text-[17px] font-normal tracking-[0.02em] text-[#1C120F] leading-tight`}
              >
                Skin &amp; Facial Services
              </span>
            </button>
          </div>

          {/* Mobile Card 5: Beauty & Grooming Services */}
          <div className="col-span-1">
            <button
              type="button"
              onClick={onSelectBeautyGrooming}
              aria-label="Beauty & Grooming Services"
              className="group block w-full text-left cursor-pointer focus:outline-none"
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-[3px] border border-[#3A2921]/15 bg-[#FAF6F0] shadow-sm">
                <img
                  src="/images/beauty-grooming.jpg"
                  alt="Beauty & Grooming Services"
                  className="h-full w-full object-cover object-[center_20%] transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
              </div>
              <span
                className={`${cormorant.className} block mt-2 text-[17px] font-normal tracking-[0.02em] text-[#1C120F] leading-tight`}
              >
                Beauty &amp; Grooming Services
              </span>
            </button>
          </div>

          {/* Mobile Card 6: Appointment Enquiry */}
          <div className="col-span-2">
            <a
              href={WHATSAPP_ENQUIRY_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Appointment Enquiry"
              className="group block w-full text-left cursor-pointer focus:outline-none"
            >
              <div className="relative w-full aspect-[16/9] overflow-hidden rounded-[3px] border border-[#3A2921]/15 bg-[#FAF6F0] shadow-sm">
                <img
                  src="/images/appointment.jpg"
                  alt="Appointment Booking"
                  className="h-full w-full object-cover object-[center_45%] transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
              </div>
              <span
                className={`${cormorant.className} block mt-2 text-[18px] font-normal tracking-[0.02em] text-[#1C120F] leading-tight`}
              >
                Appointment Enquiry
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
