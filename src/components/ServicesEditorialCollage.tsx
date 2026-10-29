"use client";

import Link from "next/link";
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

const WHATSAPP_ENQUIRY_URL =
  "https://wa.me/919789376174?text=" +
  encodeURIComponent("Hi Touch! I'd love to book an appointment.");

interface ServicesEditorialCollageProps {
  onSelectBridalMakeup?: () => void;
  onSelectHairServices?: () => void;
  onSelectBeautyGrooming?: () => void;
  onSelectSkinFacial?: () => void;
}

export default function ServicesEditorialCollage({
  onSelectBridalMakeup,
  onSelectHairServices,
  onSelectBeautyGrooming,
  onSelectSkinFacial,
}: ServicesEditorialCollageProps = {}) {
  return (
    <section
      aria-label="Editorial Services Showcase"
      className="relative w-full overflow-hidden rounded-t-[44px] sm:rounded-t-[60px] lg:rounded-t-[64px] rounded-b-[24px] sm:rounded-b-[32px] bg-[#1C120F] border border-[#dfb76c]/25 shadow-2xl pt-6 sm:pt-8 lg:pt-10 pb-12 sm:pb-16 lg:pb-20 px-6 sm:px-10 lg:px-16 select-none"
    >
      {/* 1. Subtle Radial Background Glow in Warm Muted Champagne Gold */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(200,166,106,0.08)_0%,rgba(43,28,23,0.45)_45%,#1C120F_100%)]"
      />

      {/* 2. Soft Ambient Spotlight behind the Asymmetrical Collage */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[10%] top-1/2 -translate-y-1/2 h-[450px] w-[600px] rounded-full bg-gradient-to-b from-[#C8A66A]/10 via-[#A98955]/05 to-transparent blur-[120px]"
      />

      <div className="relative mx-auto w-full max-w-[1380px]">
        {/* Upper-Left Prominent Back-Arrow Control */}
        <div className="mb-3 sm:mb-4 lg:mb-5">
          <Link
            href="/"
            aria-label="Back to home"
            className="group inline-flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-[#C8A66A]/35 bg-[#2B1C17]/60 text-[#F5F0E8] backdrop-blur-md transition-all duration-250 hover:border-[#C8A66A] hover:bg-[#C8A66A] hover:text-[#1C120F] hover:shadow-[0_0_18px_rgba(200,166,106,0.35)]"
          >
            <ArrowLeft className="h-5 w-5 stroke-[2] transition-transform duration-250 group-hover:-translate-x-0.5" />
          </Link>
        </div>

        {/* Main Editorial Grid: Left (Heading, Text, CTA, & Col 1 Image) + Right (Cols 2, 3, 4 Staggered Collage) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-7 items-start">
          {/* =========================================================================
              LEFT COLUMN (lg:col-span-4): Heading, Description, CTA & Image 1
             ========================================================================= */}
          <div className="lg:col-span-4 flex flex-col justify-start">
            <div>
              {/* Elegant Sub-eyebrow matching About Us styling */}
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#C8A66A]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#C8A66A] sm:text-xs">
                  Choose Your Perfect Service
                </span>
              </div>

              {/* Main Heading matching About Us typography */}
              <h2
                className={`${cormorant.className} mt-3 text-4xl font-normal tracking-tight text-[#F5F0E8] sm:text-5xl lg:text-[50px] xl:text-[54px] leading-[1.08] drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]`}
              >
                Our Premium Services
              </h2>

              {/* Delicate Gold Accent Divider matching About Us */}
              <div className="mt-4 flex items-center gap-2">
                <span className="h-[1.5px] w-12 bg-[#C8A66A]" />
                <span className="h-1 w-1 rounded-full bg-[#C8A66A]" />
                <span className="h-[1px] w-20 bg-[#C8A66A]/40" />
              </div>

              {/* CTA Button */}
              <div className="mt-6 sm:mt-7">
                <a
                  href={WHATSAPP_ENQUIRY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${inter.className} inline-flex items-center gap-2.5 rounded-full bg-[#C8A66A] px-7 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-[13px] font-semibold tracking-[0.08em] text-[#1C120F] shadow-[0_6px_20px_rgba(200,166,106,0.28)] transition-all duration-250 hover:-translate-y-[2px] hover:bg-[#d6b77e] hover:shadow-[0_10px_25px_rgba(200,166,106,0.4)] active:translate-y-0`}
                >
                  <span>Book an Appointment</span>
                  <ArrowUpRight className="h-4 w-4 stroke-[2.2]" />
                </a>
              </div>
            </div>

            {/* Column 1 Image: Placed beneath the CTA button with tight elegant gap */}
            <div className="mt-6 sm:mt-7 lg:mt-8 w-full">
              <article className="group relative w-full h-[220px] sm:h-[260px] lg:h-[280px] overflow-hidden rounded-[8px] border border-[#C8A66A]/25 bg-[#2B1C17] shadow-[0_12px_30px_rgba(0,0,0,0.65)] transition-all duration-300 hover:border-[#C8A66A]/60">
                <img
                  src="/images/additional-services.jpg"
                  alt="Additional Services at Touch Salon"
                  className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#1C120F]/90 via-[#1C120F]/40 to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-4">
                  <span
                    className={`${cormorant.className} text-base sm:text-lg font-medium tracking-[0.04em] text-[#F5F0E8] drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]`}
                  >
                    Additional Services
                  </span>
                </div>
              </article>
            </div>
          </div>

          {/* =========================================================================
              RIGHT COLUMNS (lg:col-span-8): Staggered Asymmetrical 3-Column Collage
             ========================================================================= */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-5 lg:gap-6 items-start">
            {/* ---------------------------------------------------------------------
                COLUMN 2: Two images at different staggered vertical heights
               --------------------------------------------------------------------- */}
            <div className="flex flex-col gap-5 sm:gap-5 lg:gap-6">
              {/* Image 2A: Hair Services (Interactive trigger to sub-services) */}
              <button
                type="button"
                onClick={onSelectHairServices}
                aria-label="Open Hair Services sub-services collection"
                className="group relative block w-full h-[210px] sm:h-[240px] lg:h-[250px] overflow-hidden rounded-[8px] border border-[#C8A66A]/25 bg-[#2B1C17] shadow-[0_12px_30px_rgba(0,0,0,0.65)] transition-all duration-300 hover:border-[#C8A66A] hover:shadow-[0_18px_40px_rgba(200,166,106,0.3)] text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A66A]"
              >
                <img
                  src="/images/hair-services.jpg"
                  alt="Hair Services & Rituals by S Touch Salon"
                  className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#1C120F]/90 via-[#1C120F]/40 to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
                  <div className="flex items-center justify-between gap-1.5 sm:gap-2">
                    <span
                      className={`${cormorant.className} text-[15px] sm:text-base lg:text-[17px] font-medium tracking-[0.03em] text-[#F5F0E8] drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)] leading-tight`}
                    >
                      Hair Services
                    </span>
                    <span className="shrink-0 whitespace-nowrap inline-flex items-center gap-1 rounded-full bg-[#C8A66A] px-2 sm:px-2.5 py-0.5 text-[10.5px] sm:text-[11px] font-semibold text-[#1C120F] shadow-md transition-all duration-250 group-hover:scale-105 group-hover:bg-[#d8b87c]">
                      <span className="whitespace-nowrap">8 Looks</span>
                      <ArrowUpRight className="h-3 w-3 stroke-[2.5]" />
                    </span>
                  </div>
                </div>
              </button>

              {/* Image 2B: Skin & Facial Services (Bottom — Taller, Interactive trigger) */}
              <button
                type="button"
                onClick={onSelectSkinFacial}
                aria-label="Open Skin & Facial sub-services collection"
                className="group relative block w-full h-[280px] sm:h-[320px] lg:h-[340px] overflow-hidden rounded-[8px] border border-[#C8A66A]/25 bg-[#2B1C17] shadow-[0_12px_30px_rgba(0,0,0,0.65)] transition-all duration-300 hover:border-[#C8A66A] hover:shadow-[0_18px_40px_rgba(200,166,106,0.3)] text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A66A]"
              >
                <img
                  src="/images/skin-facial.jpg"
                  alt="Skin & Facial Therapies by S Touch Salon"
                  className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#1C120F]/90 via-[#1C120F]/40 to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
                  <div className="flex items-center justify-between gap-1.5 sm:gap-2">
                    <span
                      className={`${cormorant.className} text-[15px] sm:text-base lg:text-[17px] font-medium tracking-[0.02em] text-[#F5F0E8] drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)] leading-tight`}
                    >
                      Skin &amp; Facial Services
                    </span>
                    <span className="shrink-0 whitespace-nowrap inline-flex items-center gap-1 rounded-full bg-[#C8A66A] px-2 sm:px-2.5 py-0.5 text-[10.5px] sm:text-[11px] font-semibold text-[#1C120F] shadow-md transition-all duration-250 group-hover:scale-105 group-hover:bg-[#d8b87c]">
                      <span className="whitespace-nowrap">4 Looks</span>
                      <ArrowUpRight className="h-3 w-3 stroke-[2.5]" />
                    </span>
                  </div>
                </div>
              </button>
            </div>

            {/* ---------------------------------------------------------------------
                COLUMN 3: Two images at different heights (Staggered offset)
               --------------------------------------------------------------------- */}
            <div className="flex flex-col gap-5 sm:gap-5 lg:gap-6 sm:mt-6 lg:mt-8">
              {/* Image 3A: Beauty & Grooming Services (Top — Staggered Lower, Interactive trigger) */}
              <button
                type="button"
                onClick={onSelectBeautyGrooming}
                aria-label="Open Beauty & Grooming sub-services collection"
                className="group relative block w-full h-[260px] sm:h-[290px] lg:h-[310px] overflow-hidden rounded-[8px] border border-[#C8A66A]/25 bg-[#2B1C17] shadow-[0_12px_30px_rgba(0,0,0,0.65)] transition-all duration-300 hover:border-[#C8A66A] hover:shadow-[0_18px_40px_rgba(200,166,106,0.3)] text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A66A]"
              >
                <img
                  src="/images/beauty-grooming.jpg"
                  alt="Beauty & Grooming Salon Care by S Touch Salon"
                  className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#1C120F]/90 via-[#1C120F]/40 to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
                  <div className="flex items-center justify-between gap-1.5 sm:gap-2">
                    <span
                      className={`${cormorant.className} text-[15px] sm:text-base lg:text-[17px] font-medium tracking-[0.02em] text-[#F5F0E8] drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)] leading-tight`}
                    >
                      Beauty &amp; Grooming
                    </span>
                    <span className="shrink-0 whitespace-nowrap inline-flex items-center gap-1 rounded-full bg-[#C8A66A] px-2 sm:px-2.5 py-0.5 text-[10.5px] sm:text-[11px] font-semibold text-[#1C120F] shadow-md transition-all duration-250 group-hover:scale-105 group-hover:bg-[#d8b87c]">
                      <span className="whitespace-nowrap">7 Looks</span>
                      <ArrowUpRight className="h-3 w-3 stroke-[2.5]" />
                    </span>
                  </div>
                </div>
              </button>

              {/* Image 3B: Appointment Enquiry (Bottom — Interactive Card) */}
              <a
                href={WHATSAPP_ENQUIRY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block w-full h-[220px] sm:h-[240px] lg:h-[260px] overflow-hidden rounded-[8px] border border-[#C8A66A]/35 bg-[#2B1C17] shadow-[0_12px_30px_rgba(0,0,0,0.65)] transition-all duration-300 hover:border-[#C8A66A] hover:shadow-[0_15px_35px_rgba(200,166,106,0.25)]"
              >
                <img
                  src="/images/appointment.jpg"
                  alt="Appointment Enquiry at S Touch Salon"
                  className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#1C120F] via-[#1C120F]/60 to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-4">
                  <span
                    className={`${cormorant.className} text-base sm:text-lg font-medium tracking-[0.04em] text-[#F5F0E8] drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]`}
                  >
                    Appointment Enquiry
                  </span>
                </div>
              </a>
            </div>

            {/* ---------------------------------------------------------------------
                COLUMN 4 (Far Right): Bridal Makeup (Interactive trigger to sub-services)
               --------------------------------------------------------------------- */}
            <div className="sm:col-span-2 lg:col-span-1">
              <button
                type="button"
                onClick={onSelectBridalMakeup}
                aria-label="Open Bridal Makeup sub-services collection"
                className="group relative block w-full h-[380px] sm:h-[450px] lg:h-[590px] overflow-hidden rounded-[8px] border border-[#C8A66A]/35 bg-[#2B1C17] shadow-[0_16px_40px_rgba(0,0,0,0.75)] transition-all duration-300 hover:border-[#C8A66A] hover:shadow-[0_20px_50px_rgba(200,166,106,0.3)] text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A66A]"
              >
                <img
                  src="/images/bridal-makeup.jpg"
                  alt="Bridal Makeup & Traditional Makeover by S Touch Salon"
                  className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                {/* Refined gradient scrim at bottom */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#1C120F] via-[#1C120F]/60 to-transparent"
                />
                {/* Top specular gold sheen */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C8A66A]/70 to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-4 lg:p-5">
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`${cormorant.className} text-lg sm:text-xl font-medium tracking-[0.04em] text-[#F5F0E8] drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)] leading-tight`}
                    >
                      Bridal Makeup
                    </span>
                    <span className="shrink-0 whitespace-nowrap inline-flex items-center gap-1 rounded-full bg-[#C8A66A] px-2.5 py-1 text-[11px] font-semibold text-[#1C120F] shadow-md transition-all duration-250 group-hover:scale-105 group-hover:bg-[#d8b87c]">
                      <span className="whitespace-nowrap">5 Looks</span>
                      <ArrowUpRight className="h-3 w-3 stroke-[2.5]" />
                    </span>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
