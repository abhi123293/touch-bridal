"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import ServiceSelectionSection from "@/components/ServiceSelectionSection";
import BridalMakeupSection from "@/components/BridalMakeupSection";
import HairServicesSection from "@/components/HairServicesSection";
import SkinFacialServicesSection from "@/components/SkinFacialServicesSection";
import BeautyGroomingServicesSection from "@/components/BeautyGroomingServicesSection";

// Precise Mughal Cusped Arch Paths (Single-line continuous strings to prevent CRLF hydration mismatch)
const MUGHAL_ARCH_OUTER_PATH =
  "M 368 12 C 400 40, 440 68, 490 95 C 560 135, 640 185, 695 245 C 725 280, 736 320, 736 370 V 1308 H 0 V 370 C 0 320, 11 280, 41 245 C 96 185, 176 135, 246 95 C 296 68, 336 40, 368 12 Z";

const MUGHAL_ARCH_INNER_PATH =
  "M 368 24 C 397 50, 434 76, 482 102 C 550 140, 628 188, 682 246 C 711 279, 722 318, 722 366 V 1296 H 14 V 366 C 14 318, 25 279, 54 246 C 108 188, 186 140, 254 102 C 302 76, 339 50, 368 24 Z";

const MUGHAL_CORNER_MASK_PATH =
  "M 0 0 H 736 V 1308 H 0 Z M 368 12 C 400 40, 440 68, 490 95 C 560 135, 640 185, 695 245 C 725 280, 736 320, 736 370 V 1308 H 0 V 370 C 0 320, 11 280, 41 245 C 96 185, 176 135, 246 95 C 296 68, 336 40, 368 12 Z";

const SAREE_MODELS = [
  {
    id: "saree-1",
    image: "/images/saree-1.jpg",
    bgStart: "#382014",
    bgEnd: "#1a0d07",
  },
  {
    id: "saree-2",
    image: "/images/saree-2.jpg",
    bgStart: "#351e12",
    bgEnd: "#180c06",
  },
  {
    id: "saree-3",
    image: "/images/saree-3.jpg",
    bgStart: "#3b2216",
    bgEnd: "#1c0e07",
  },
  {
    id: "saree-5",
    image: "/images/saree-5.jpg",
    bgStart: "#321b10",
    bgEnd: "#170b05",
  },
];

export default function ServicesShowcase() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const bridalSectionRef = useRef<HTMLDivElement>(null);
  const hairSectionRef = useRef<HTMLDivElement>(null);
  const skinSectionRef = useRef<HTMLDivElement>(null);
  const beautySectionRef = useRef<HTMLDivElement>(null);

  const isBridalMakeupSelected = selectedServices.includes("Bridal Makeup");
  const isHairServicesSelected = selectedServices.includes("Hair Services");
  const isSkinServicesSelected = selectedServices.includes("Skin & Facial Services");
  const isBeautyServicesSelected = selectedServices.includes("Beauty & Grooming Services");

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((item) => item !== service)
        : [...prev, service]
    );
  };

  // Smooth scroll down to the Bridal Makeup section when it is checked
  useEffect(() => {
    if (isBridalMakeupSelected) {
      const timer = setTimeout(() => {
        bridalSectionRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 180);
      return () => clearTimeout(timer);
    }
  }, [isBridalMakeupSelected]);

  // Smooth scroll down to the Hair Services section when it is checked
  useEffect(() => {
    if (isHairServicesSelected) {
      const timer = setTimeout(() => {
        hairSectionRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 180);
      return () => clearTimeout(timer);
    }
  }, [isHairServicesSelected]);

  // Smooth scroll down to the Skin & Facial Services section when it is checked
  useEffect(() => {
    if (isSkinServicesSelected) {
      const timer = setTimeout(() => {
        skinSectionRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 180);
      return () => clearTimeout(timer);
    }
  }, [isSkinServicesSelected]);

  // Smooth scroll down to the Beauty & Grooming Services section when it is checked
  useEffect(() => {
    if (isBeautyServicesSelected) {
      const timer = setTimeout(() => {
        beautySectionRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 180);
      return () => clearTimeout(timer);
    }
  }, [isBeautyServicesSelected]);

  return (
    <section
      aria-label="Bridal Saree Showcase & Services"
      className="relative z-10 mx-auto w-full max-w-[1440px] drop-shadow-[0_30px_70px_rgba(20,10,5,0.7)]"
    >
      {/* 4-Frame Mughal Arcade Container with Zero Gap */}
      <div className="relative w-full overflow-hidden rounded-[24px] sm:rounded-[32px] border border-[#dfb76c]/30 shadow-2xl">
        <div className="grid grid-cols-2 gap-0 sm:grid-cols-2 lg:grid-cols-4 items-end w-full">
          {SAREE_MODELS.map((model, index) => (
            <article
              key={model.id}
              className="group relative w-full aspect-[736/1308] overflow-hidden bg-[#24150e] transition-all duration-500"
              style={{
                borderLeft: index > 0 ? "1px solid rgba(223, 183, 108, 0.35)" : "none",
              }}
            >
              {/* Subtle Warm Backdrop behind Model */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-b from-[#382115] via-[#24150e] to-[#140a06]"
              />

              {/* Seamlessly Fitted Model Image inside Mughal Arch Frame */}
              <img
                src={model.image}
                alt={`Bridal saree makeover showcase ${index + 1}`}
                className="relative z-10 h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.025]"
              />

              {/* Subtle Grounding Vignette at Base */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-28 bg-gradient-to-t from-[#140a06]/65 via-transparent to-transparent"
              />

              {/* Decorative Mughal Arch Overlay with Gold Contour & Corner Masks */}
              <svg
                suppressHydrationWarning
                viewBox="0 0 736 1308"
                preserveAspectRatio="none"
                className="pointer-events-none absolute inset-0 z-30 h-full w-full overflow-visible"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
              >
                <defs>
                  {/* Metallic Gold & Bronze Gradient */}
                  <linearGradient
                    id={`gold-border-${model.id}`}
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#fdf0d5" />
                    <stop offset="28%" stopColor="#dfb76c" />
                    <stop offset="68%" stopColor="#8b4a28" />
                    <stop offset="88%" stopColor="#cba879" />
                    <stop offset="100%" stopColor="#382319" />
                  </linearGradient>
                </defs>

                {/* Soft Top Corner Masks to Reveal Mughal Arch Silhouette */}
                <path
                  d={MUGHAL_CORNER_MASK_PATH}
                  fill="#2a170e"
                  fillRule="evenodd"
                  className="transition-colors duration-500"
                />

                {/* Inner Delicate Gold Pinstripe Border (1.2px) */}
                <path
                  d={MUGHAL_ARCH_INNER_PATH}
                  fill="none"
                  stroke={`url(#gold-border-${model.id})`}
                  strokeWidth="1.2"
                  opacity="0.68"
                  className="transition-opacity duration-300 group-hover:opacity-95"
                />

                {/* Outer Regal Gold Mughal Arch Contour (3.2px) */}
                <path
                  d={MUGHAL_ARCH_OUTER_PATH}
                  fill="none"
                  stroke={`url(#gold-border-${model.id})`}
                  strokeWidth="3.2"
                  className="transition-all duration-300 group-hover:stroke-width-[3.8]"
                />

                {/* Decorative Mughal Apex Crown Finial Motif */}
                <g fill={`url(#gold-border-${model.id})`}>
                  <path d="M 368 2 L 374 12 L 368 18 L 362 12 Z" />
                  <circle cx="368" cy="2" r="2.5" />
                </g>
              </svg>
            </article>
          ))}
        </div>

        {/* S TOUCH SALON — Translucent Brownish Glassmorphism Service Selection Box */}
        <ServiceSelectionSection
          selectedServices={selectedServices}
          onToggleService={toggleService}
        />
      </div>

      {/* DYNAMIC BRIDAL MAKEUP CONTENT SECTION (Expands smoothly below selection box) */}
      <AnimatePresence>
        {isBridalMakeupSelected && (
          <motion.div
            ref={bridalSectionRef}
            initial={{ opacity: 0, height: 0, y: -24 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -24 }}
            transition={{
              duration: 0.55,
              ease: [0.16, 1, 0.3, 1],
              opacity: { duration: 0.38 },
            }}
            className="overflow-hidden w-full pt-6 sm:pt-8"
          >
            <BridalMakeupSection />
          </motion.div>
        )}
      </AnimatePresence>

      {/* DYNAMIC HAIR SERVICES CONTENT SECTION (Expands smoothly below selection box) */}
      <AnimatePresence>
        {isHairServicesSelected && (
          <motion.div
            ref={hairSectionRef}
            initial={{ opacity: 0, height: 0, y: -24 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -24 }}
            transition={{
              duration: 0.55,
              ease: [0.16, 1, 0.3, 1],
              opacity: { duration: 0.38 },
            }}
            className="overflow-hidden w-full pt-6 sm:pt-8"
          >
            <HairServicesSection />
          </motion.div>
        )}
      </AnimatePresence>

      {/* DYNAMIC SKIN & FACIAL SERVICES CONTENT SECTION (Expands smoothly below selection box) */}
      <AnimatePresence>
        {isSkinServicesSelected && (
          <motion.div
            ref={skinSectionRef}
            initial={{ opacity: 0, height: 0, y: -24 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -24 }}
            transition={{
              duration: 0.55,
              ease: [0.16, 1, 0.3, 1],
              opacity: { duration: 0.38 },
            }}
            className="overflow-hidden w-full pt-6 sm:pt-8"
          >
            <SkinFacialServicesSection />
          </motion.div>
        )}
      </AnimatePresence>

      {/* DYNAMIC BEAUTY & GROOMING SERVICES CONTENT SECTION (Expands smoothly below selection box) */}
      <AnimatePresence>
        {isBeautyServicesSelected && (
          <motion.div
            ref={beautySectionRef}
            initial={{ opacity: 0, height: 0, y: -24 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -24 }}
            transition={{
              duration: 0.55,
              ease: [0.16, 1, 0.3, 1],
              opacity: { duration: 0.38 },
            }}
            className="overflow-hidden w-full pt-6 sm:pt-8"
          >
            <BeautyGroomingServicesSection />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
