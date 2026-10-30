"use client";

import { useState, useEffect } from "react";
import ServicesEditorialCollage from "@/components/ServicesEditorialCollage";
import BridalMakeupSection from "@/components/BridalMakeupSection";
import HairServicesSection from "@/components/HairServicesSection";
import BeautyGroomingServicesSection from "@/components/BeautyGroomingServicesSection";
import SkinFacialServicesSection from "@/components/SkinFacialServicesSection";
import AdditionalServicesSection from "@/components/AdditionalServicesSection";
import MensServicesSection from "@/components/MensServicesSection";
import GroomMakeupSection from "@/components/GroomMakeupSection";

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
  const [isBridalOpen, setIsBridalOpen] = useState(false);
  const [isHairOpen, setIsHairOpen] = useState(false);
  const [isBeautyOpen, setIsBeautyOpen] = useState(false);
  const [isSkinOpen, setIsSkinOpen] = useState(false);
  const [isAdditionalOpen, setIsAdditionalOpen] = useState(false);
  const [isMensOpen, setIsMensOpen] = useState(false);
  const [isGroomOpen, setIsGroomOpen] = useState(false);
  const [closingSection, setClosingSection] = useState<
    "bridal" | "hair" | "beauty" | "skin" | "additional" | "mens" | "groom" | null
  >(null);

  // Auto-reveal if hash is present (e.g. #bridal-makeup, #hair-services, #beauty-grooming, #skin-facial, or #additional-services)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.toLowerCase();
      if (
        hash.includes("groom-makeup") ||
        hash.includes("groom")
      ) {
        setIsGroomOpen(true);
        setTimeout(() => {
          const el = document.getElementById("groom-makeup-section");
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 150);
      } else if (
        hash.includes("mens") ||
        hash.includes("men")
      ) {
        setIsMensOpen(true);
        setTimeout(() => {
          const el = document.getElementById("mens-services-section");
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 150);
      } else if (
        hash.includes("additional") ||
        hash.includes("saree") ||
        hash.includes("pleating") ||
        hash.includes("folding")
      ) {
        setIsAdditionalOpen(true);
        setTimeout(() => {
          const el = document.getElementById("additional-services-section");
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 150);
      } else if (hash.includes("skin") || hash.includes("facial")) {
        setIsSkinOpen(true);
        setTimeout(() => {
          const el = document.getElementById("skin-facial-section");
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 150);
      } else if (hash.includes("beauty-grooming") || hash.includes("beauty") || hash.includes("grooming")) {
        setIsBeautyOpen(true);
        setTimeout(() => {
          const el = document.getElementById("beauty-grooming-section");
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 150);
      } else if (hash.includes("hair-services") || hash.includes("hair")) {
        setIsHairOpen(true);
        setTimeout(() => {
          const el = document.getElementById("hair-services-section");
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 150);
      } else if (hash.includes("bridal-makeup") || hash.includes("bridal-services")) {
        setIsBridalOpen(true);
        setTimeout(() => {
          const el = document.getElementById("bridal-makeup-section");
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 150);
      }
    }
  }, []);

  const handleOpenBridalSection = () => {
    setIsGroomOpen(false);
    setIsMensOpen(false);
    setIsHairOpen(false);
    setIsBeautyOpen(false);
    setIsSkinOpen(false);
    setIsAdditionalOpen(false);
    setClosingSection(null);
    setIsBridalOpen(true);
    // Smooth scroll down to bridal subservices section
    setTimeout(() => {
      const el = document.getElementById("bridal-makeup-section");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  const handleOpenHairSection = () => {
    setIsGroomOpen(false);
    setIsMensOpen(false);
    setIsBridalOpen(false);
    setIsBeautyOpen(false);
    setIsSkinOpen(false);
    setIsAdditionalOpen(false);
    setClosingSection(null);
    setIsHairOpen(true);
    // Smooth scroll down to hair subservices section
    setTimeout(() => {
      const el = document.getElementById("hair-services-section");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  const handleOpenBeautySection = () => {
    setIsGroomOpen(false);
    setIsMensOpen(false);
    setIsBridalOpen(false);
    setIsHairOpen(false);
    setIsSkinOpen(false);
    setIsAdditionalOpen(false);
    setClosingSection(null);
    setIsBeautyOpen(true);
    // Smooth scroll down to beauty subservices section
    setTimeout(() => {
      const el = document.getElementById("beauty-grooming-section");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  const handleOpenSkinSection = () => {
    setIsGroomOpen(false);
    setIsMensOpen(false);
    setIsBridalOpen(false);
    setIsHairOpen(false);
    setIsBeautyOpen(false);
    setIsAdditionalOpen(false);
    setClosingSection(null);
    setIsSkinOpen(true);
    // Smooth scroll down to skin & facial subservices section
    setTimeout(() => {
      const el = document.getElementById("skin-facial-section");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  const handleOpenAdditionalSection = () => {
    setIsGroomOpen(false);
    setIsMensOpen(false);
    setIsBridalOpen(false);
    setIsHairOpen(false);
    setIsBeautyOpen(false);
    setIsSkinOpen(false);
    setClosingSection(null);
    setIsAdditionalOpen(true);
    // Smooth scroll down to additional subservices section
    setTimeout(() => {
      const el = document.getElementById("additional-services-section");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

    const handleOpenMensSection = () => {
    setIsBridalOpen(false);
    setIsHairOpen(false);
    setIsBeautyOpen(false);
    setIsSkinOpen(false);
    setIsAdditionalOpen(false);
    setClosingSection(null);
    setIsMensOpen(true);
    // Smooth scroll down to men's subservices section
    setTimeout(() => {
      const el = document.getElementById("mens-services-section");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

    const handleOpenGroomSection = () => {
    setIsBridalOpen(false);
    setIsHairOpen(false);
    setIsBeautyOpen(false);
    setIsSkinOpen(false);
    setIsAdditionalOpen(false);
    setIsMensOpen(false);
    setClosingSection(null);
    setIsGroomOpen(true);
    // Smooth scroll down to groom subservices section
    setTimeout(() => {
      const el = document.getElementById("groom-makeup-section");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  const handleBackToServices = () => {
    // 1. Smoothly scroll back up to all-services-collage
    const el = document.getElementById("all-services-collage");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    // 2. Clean URL hash if present
    if (typeof window !== "undefined" && window.location.hash) {
      history.replaceState(null, "", window.location.pathname + window.location.search);
    }

    // 3. Initiate exit transition and disappear the active sub-section after scrolling up
    if (isBridalOpen) setClosingSection("bridal");
    if (isHairOpen) setClosingSection("hair");
    if (isBeautyOpen) setClosingSection("beauty");
    if (isSkinOpen) setClosingSection("skin");
    if (isAdditionalOpen) setClosingSection("additional");

    setTimeout(() => {
      setIsBridalOpen(false);
      setIsHairOpen(false);
      setIsBeautyOpen(false);
      setIsSkinOpen(false);
      setIsAdditionalOpen(false);
      setClosingSection(null);
    }, 420);
  };

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
      </div>

      {/* Editorial Collage Services Section — Under / After the Image Frames */}
      <div id="all-services-collage" className="w-full mt-6 sm:mt-8 lg:mt-10">
        <ServicesEditorialCollage
          onSelectBridalMakeup={handleOpenBridalSection}
          onSelectHairServices={handleOpenHairSection}
          onSelectBeautyGrooming={handleOpenBeautySection}
          onSelectSkinFacial={handleOpenSkinSection}
          onSelectAdditionalServices={handleOpenAdditionalSection}
          onSelectMensServices={handleOpenMensSection}
          onSelectGroomMakeup={handleOpenGroomSection}
        />
      </div>

      {/* Interactive Bridal Makeup Sub-Service Section (Reveals upon selecting Bridal Makeup) */}
      {isBridalOpen && (
        <div
          id="bridal-makeup-section"
          className={`w-full mt-8 sm:mt-12 lg:mt-16 scroll-mt-28 transition-all duration-400 ease-out ${
            closingSection === "bridal" ? "opacity-0 translate-y-6 pointer-events-none" : "opacity-100 translate-y-0"
          }`}
        >
          <BridalMakeupSection onBackToServices={handleBackToServices} />
        </div>
      )}

      {/* Interactive Hair Services Sub-Service Section (Reveals upon selecting Hair Services) */}
      {isHairOpen && (
        <div
          id="hair-services-section"
          className={`w-full mt-8 sm:mt-12 lg:mt-16 scroll-mt-28 transition-all duration-400 ease-out ${
            closingSection === "hair" ? "opacity-0 translate-y-6 pointer-events-none" : "opacity-100 translate-y-0"
          }`}
        >
          <HairServicesSection onBackToServices={handleBackToServices} />
        </div>
      )}

      {/* Interactive Beauty & Grooming Sub-Service Section (Reveals upon selecting Beauty & Grooming) */}
      {isBeautyOpen && (
        <div
          id="beauty-grooming-section"
          className={`w-full mt-8 sm:mt-12 lg:mt-16 scroll-mt-28 transition-all duration-400 ease-out ${
            closingSection === "beauty" ? "opacity-0 translate-y-6 pointer-events-none" : "opacity-100 translate-y-0"
          }`}
        >
          <BeautyGroomingServicesSection onBackToServices={handleBackToServices} />
        </div>
      )}

      {/* Interactive Skin & Facial Sub-Service Section (Reveals upon selecting Skin & Facial) */}
      {isSkinOpen && (
        <div
          id="skin-facial-section"
          className={`w-full mt-8 sm:mt-12 lg:mt-16 scroll-mt-28 transition-all duration-400 ease-out ${
            closingSection === "skin" ? "opacity-0 translate-y-6 pointer-events-none" : "opacity-100 translate-y-0"
          }`}
        >
          <SkinFacialServicesSection onBackToServices={handleBackToServices} />
        </div>
      )}

      {/* Interactive Additional Services Sub-Service Section (Reveals upon selecting Additional Services) */}
      {isAdditionalOpen && (
        <div
          id="additional-services-section"
          className={`w-full mt-8 sm:mt-12 lg:mt-16 scroll-mt-28 transition-all duration-400 ease-out ${
            closingSection === "additional" ? "opacity-0 translate-y-6 pointer-events-none" : "opacity-100 translate-y-0"
          }`}
        >
          <AdditionalServicesSection onBackToServices={handleBackToServices} />
        </div>
      )}
    
      {/* Interactive Men's Services Sub-Service Section (Reveals upon selecting Men's Services) */}
      {isMensOpen && (
        <div
          id="mens-services-section"
          className={`w-full mt-8 sm:mt-12 lg:mt-16 scroll-mt-28 transition-all duration-400 ease-out ${
            closingSection === "mens" ? "opacity-0 translate-y-6 pointer-events-none" : "opacity-100 translate-y-0"
          }`}
        >
          <MensServicesSection onBackToServices={handleBackToServices} />
        </div>
      )}
    
      {/* Interactive Groom Makeup Sub-Service Section (Reveals upon selecting Groom Makeup) */}
      {isGroomOpen && (
        <div
          id="groom-makeup-section"
          className={`w-full mt-8 sm:mt-12 lg:mt-16 scroll-mt-28 transition-all duration-400 ease-out ${
            closingSection === "groom" ? "opacity-0 translate-y-6 pointer-events-none" : "opacity-100 translate-y-0"
          }`}
        >
          <GroomMakeupSection onBackToServices={handleBackToServices} />
        </div>
      )}
    </section>
  );
}
