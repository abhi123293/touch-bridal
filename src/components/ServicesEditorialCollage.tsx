"use client";

interface ServicesEditorialCollageProps {
  onSelectBridalMakeup?: () => void;
  onSelectHairServices?: () => void;
  onSelectBeautyGrooming?: () => void;
  onSelectSkinFacial?: () => void;
  onSelectAdditionalServices?: () => void;
}

const WHATSAPP_ENQUIRY_URL =
  "https://wa.me/919789376174?text=" +
  encodeURIComponent("Hi Touch! I'd love to book an appointment.");

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
      className="relative w-full overflow-hidden rounded-t-[36px] sm:rounded-t-[48px] lg:rounded-t-[56px] rounded-b-[20px] sm:rounded-b-[28px] bg-[#1C120F] border border-[#dfb76c]/25 shadow-2xl p-3 sm:p-5 lg:p-7 select-none"
    >
      {/* 1. Subtle Radial Background Glow in Warm Muted Champagne Gold */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(200,166,106,0.06)_0%,rgba(43,28,23,0.4)_45%,#1C120F_100%)]"
      />

      <div className="relative mx-auto w-full max-w-[1400px]">
        {/* =========================================================================
            DESKTOP & TABLET ASYMMETRICAL 8-FRAME COLLAGE (md & lg & xl)
            - 12 Columns, 6 Rows
            - Varied architectural widths & heights
            - Strict 8-12px gaps (gap-2.5 sm:gap-3)
            - Rectangular frames with subtle 3px radius (rounded-[3px])
            - Absolutely no text, labels, captions, badges, or buttons
           ========================================================================= */}
        <div className="hidden md:grid md:grid-cols-12 md:grid-rows-6 gap-2.5 sm:gap-3 w-full h-[600px] lg:h-[720px] xl:h-[780px]">
          {/* Frame 1: Medium landscape image positioned in upper-left area */}
          <button
            type="button"
            onClick={onSelectAdditionalServices}
            aria-label="Additional Services"
            className="group relative col-start-1 col-end-5 row-start-1 row-end-3 w-full h-full overflow-hidden rounded-[3px] bg-[#2B1C17] border border-[#dfb76c]/20 shadow-md cursor-pointer transition-all duration-300 hover:border-[#C8A66A]/60 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C8A66A]"
          >
            <img
              src="/images/additional-services.jpg"
              alt="Additional Services"
              className="h-full w-full object-cover object-[center_20%] transition-transform duration-700 ease-out group-hover:scale-[1.025]"
            />
          </button>

          {/* Frame 2: Medium landscape image positioned slightly lower and to the right of Frame 1 */}
          <button
            type="button"
            onClick={onSelectBeautyGrooming}
            aria-label="Beauty and Grooming"
            className="group relative col-start-5 col-end-8 row-start-2 row-end-4 w-full h-full overflow-hidden rounded-[3px] bg-[#2B1C17] border border-[#dfb76c]/20 shadow-md cursor-pointer transition-all duration-300 hover:border-[#C8A66A]/60 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C8A66A]"
          >
            <img
              src="/images/beauty-grooming.jpg"
              alt="Beauty and Grooming"
              className="h-full w-full object-cover object-[center_20%] transition-transform duration-700 ease-out group-hover:scale-[1.025]"
            />
          </button>

          {/* Frame 3: Tall portrait image positioned in the upper-middle area */}
          <button
            type="button"
            onClick={onSelectBridalMakeup}
            aria-label="Bridal Makeup"
            className="group relative col-start-8 col-end-10 row-start-1 row-end-5 w-full h-full overflow-hidden rounded-[3px] bg-[#2B1C17] border border-[#dfb76c]/20 shadow-md cursor-pointer transition-all duration-300 hover:border-[#C8A66A]/60 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C8A66A]"
          >
            <img
              src="/images/bridal-makeup.jpg"
              alt="Bridal Makeup"
              className="h-full w-full object-cover object-[center_15%] transition-transform duration-700 ease-out group-hover:scale-[1.025]"
            />
          </button>

          {/* Frame 4: Small portrait image positioned toward the upper-right area */}
          <button
            type="button"
            onClick={onSelectSkinFacial}
            aria-label="Skin and Facial Services"
            className="group relative col-start-10 col-end-13 row-start-1 row-end-3 w-full h-full overflow-hidden rounded-[3px] bg-[#2B1C17] border border-[#dfb76c]/20 shadow-md cursor-pointer transition-all duration-300 hover:border-[#C8A66A]/60 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C8A66A]"
          >
            <img
              src="/images/skin-facial.jpg"
              alt="Skin and Facial Services"
              className="h-full w-full object-cover object-[center_25%] transition-transform duration-700 ease-out group-hover:scale-[1.025]"
            />
          </button>

          {/* Frame 5: Medium landscape image positioned to the right of the central frames */}
          <a
            href={WHATSAPP_ENQUIRY_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Groom Makeup Enquiry"
            className="group relative col-start-10 col-end-13 row-start-3 row-end-5 w-full h-full overflow-hidden rounded-[3px] bg-[#2B1C17] border border-[#dfb76c]/20 shadow-md cursor-pointer transition-all duration-300 hover:border-[#C8A66A]/60 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C8A66A]"
          >
            <img
              src="/images/Groom.jpg"
              alt="Groom Makeup"
              className="h-full w-full object-cover object-[center_18%] transition-transform duration-700 ease-out group-hover:scale-[1.025]"
            />
          </a>

          {/* Frame 6: Tall portrait image positioned in the lower-left/center area */}
          <button
            type="button"
            onClick={onSelectHairServices}
            aria-label="Hair Services"
            className="group relative col-start-1 col-end-4 row-start-3 row-end-7 w-full h-full overflow-hidden rounded-[3px] bg-[#2B1C17] border border-[#dfb76c]/20 shadow-md cursor-pointer transition-all duration-300 hover:border-[#C8A66A]/60 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C8A66A]"
          >
            <img
              src="/images/hair-services.jpg"
              alt="Hair Services"
              className="h-full w-full object-cover object-[center_20%] transition-transform duration-700 ease-out group-hover:scale-[1.025]"
            />
          </button>

          {/* Frame 7: Wide landscape image positioned in the lower-middle area */}
          <a
            href={WHATSAPP_ENQUIRY_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Appointment Enquiry"
            className="group relative col-start-4 col-end-10 row-start-5 row-end-7 w-full h-full overflow-hidden rounded-[3px] bg-[#2B1C17] border border-[#dfb76c]/20 shadow-md cursor-pointer transition-all duration-300 hover:border-[#C8A66A]/60 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C8A66A]"
          >
            <img
              src="/images/appointment.jpg"
              alt="Appointment Booking"
              className="h-full w-full object-cover object-[center_45%] transition-transform duration-700 ease-out group-hover:scale-[1.025]"
            />
          </a>

          {/* Frame 8: Medium landscape image positioned in the lower-right area */}
          <a
            href={WHATSAPP_ENQUIRY_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Men's Services Enquiry"
            className="group relative col-start-10 col-end-13 row-start-5 row-end-7 w-full h-full overflow-hidden rounded-[3px] bg-[#2B1C17] border border-[#dfb76c]/20 shadow-md cursor-pointer transition-all duration-300 hover:border-[#C8A66A]/60 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C8A66A]"
          >
            <img
              src="/images/mens-services.jpg"
              alt="Men's Services"
              className="h-full w-full object-cover object-[center_20%] transition-transform duration-700 ease-out group-hover:scale-[1.025]"
            />
          </a>
        </div>

        {/* =========================================================================
            MOBILE 2-COLUMN COMPACT COLLAGE (< md)
            - Compact 2-column layout
            - Varied image heights and proportions preserving editorial feel
            - Strict 10px gaps (gap-2.5)
            - Rectangular frames with subtle 3px radius (rounded-[3px])
            - Absolutely no text, labels, captions, badges, or buttons
           ========================================================================= */}
        <div className="grid md:hidden grid-cols-2 gap-2.5 w-full">
          {/* Frame 1: Medium landscape image (spanning 2 columns) */}
          <button
            type="button"
            onClick={onSelectAdditionalServices}
            aria-label="Additional Services"
            className="group relative col-span-2 aspect-[16/10] w-full overflow-hidden rounded-[3px] bg-[#2B1C17] border border-[#dfb76c]/20 shadow-md text-left cursor-pointer"
          >
            <img
              src="/images/additional-services.jpg"
              alt="Additional Services"
              className="h-full w-full object-cover object-[center_20%] transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
          </button>

          {/* Frame 2: Medium frame (col 1) */}
          <button
            type="button"
            onClick={onSelectBeautyGrooming}
            aria-label="Beauty and Grooming"
            className="group relative col-span-1 aspect-[4/5] w-full overflow-hidden rounded-[3px] bg-[#2B1C17] border border-[#dfb76c]/20 shadow-md text-left cursor-pointer"
          >
            <img
              src="/images/beauty-grooming.jpg"
              alt="Beauty and Grooming"
              className="h-full w-full object-cover object-[center_20%] transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
          </button>

          {/* Frame 3: Tall portrait image (col 2, tall) */}
          <button
            type="button"
            onClick={onSelectBridalMakeup}
            aria-label="Bridal Makeup"
            className="group relative col-span-1 aspect-[3/5] w-full overflow-hidden rounded-[3px] bg-[#2B1C17] border border-[#dfb76c]/20 shadow-md text-left cursor-pointer"
          >
            <img
              src="/images/bridal-makeup.jpg"
              alt="Bridal Makeup"
              className="h-full w-full object-cover object-[center_15%] transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
          </button>

          {/* Frame 4: Small portrait image (col 1) */}
          <button
            type="button"
            onClick={onSelectSkinFacial}
            aria-label="Skin and Facial Services"
            className="group relative col-span-1 aspect-[1/1] w-full overflow-hidden rounded-[3px] bg-[#2B1C17] border border-[#dfb76c]/20 shadow-md text-left cursor-pointer"
          >
            <img
              src="/images/skin-facial.jpg"
              alt="Skin and Facial Services"
              className="h-full w-full object-cover object-[center_25%] transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
          </button>

          {/* Frame 5: Medium landscape image (col 1) */}
          <a
            href={WHATSAPP_ENQUIRY_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Groom Makeup Enquiry"
            className="group relative col-span-1 aspect-[4/5] w-full overflow-hidden rounded-[3px] bg-[#2B1C17] border border-[#dfb76c]/20 shadow-md block"
          >
            <img
              src="/images/Groom.jpg"
              alt="Groom Makeup"
              className="h-full w-full object-cover object-[center_18%] transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
          </a>

          {/* Frame 6: Tall portrait image (col 2, tall) */}
          <button
            type="button"
            onClick={onSelectHairServices}
            aria-label="Hair Services"
            className="group relative col-span-1 aspect-[3/5] w-full overflow-hidden rounded-[3px] bg-[#2B1C17] border border-[#dfb76c]/20 shadow-md text-left cursor-pointer"
          >
            <img
              src="/images/hair-services.jpg"
              alt="Hair Services"
              className="h-full w-full object-cover object-[center_20%] transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
          </button>

          {/* Frame 7: Wide landscape image (spanning 2 columns) */}
          <a
            href={WHATSAPP_ENQUIRY_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Appointment Enquiry"
            className="group relative col-span-2 aspect-[16/9] w-full overflow-hidden rounded-[3px] bg-[#2B1C17] border border-[#dfb76c]/20 shadow-md block"
          >
            <img
              src="/images/appointment.jpg"
              alt="Appointment Booking"
              className="h-full w-full object-cover object-[center_45%] transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
          </a>

          {/* Frame 8: Medium landscape image (spanning 2 columns) */}
          <a
            href={WHATSAPP_ENQUIRY_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Men's Services Enquiry"
            className="group relative col-span-2 aspect-[16/10] w-full overflow-hidden rounded-[3px] bg-[#2B1C17] border border-[#dfb76c]/20 shadow-md block"
          >
            <img
              src="/images/mens-services.jpg"
              alt="Men's Services"
              className="h-full w-full object-cover object-[center_20%] transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
