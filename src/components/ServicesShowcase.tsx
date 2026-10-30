"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { ArrowUpRight, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import gsap from "gsap";
import BridalMakeupSection from "@/components/BridalMakeupSection";
import HairServicesSection from "@/components/HairServicesSection";
import BeautyGroomingServicesSection from "@/components/BeautyGroomingServicesSection";
import SkinFacialServicesSection from "@/components/SkinFacialServicesSection";
import AdditionalServicesSection from "@/components/AdditionalServicesSection";
import MensServicesSection from "@/components/MensServicesSection";
import GroomMakeupSection from "@/components/GroomMakeupSection";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Precise Mughal Cusped Arch Paths (Single-line continuous strings to prevent CRLF hydration mismatch)
const MUGHAL_ARCH_OUTER_PATH =
  "M 368 12 C 400 40, 440 68, 490 95 C 560 135, 640 185, 695 245 C 725 280, 736 320, 736 370 V 1308 H 0 V 370 C 0 320, 11 280, 41 245 C 96 185, 176 135, 246 95 C 296 68, 336 40, 368 12 Z";

const MUGHAL_ARCH_INNER_PATH =
  "M 368 24 C 397 50, 434 76, 482 102 C 550 140, 628 188, 682 246 C 711 279, 722 318, 722 366 V 1296 H 14 V 366 C 14 318, 25 279, 54 246 C 108 188, 186 140, 254 102 C 302 76, 339 50, 368 24 Z";

const MUGHAL_CORNER_MASK_PATH =
  "M 0 0 H 736 V 1308 H 0 Z M 368 12 C 400 40, 440 68, 490 95 C 560 135, 640 185, 695 245 C 725 280, 736 320, 736 370 V 1308 H 0 V 370 C 0 320, 11 280, 41 245 C 96 185, 176 135, 246 95 C 296 68, 336 40, 368 12 Z";

const WHATSAPP_ENQUIRY_URL =
  "https://wa.me/919789376174?text=" +
  encodeURIComponent("Hi Touch Salon! I would love to enquire about booking an appointment.");

const WHATSAPP_RENTAL_JEWELS_URL =
  "https://wa.me/919789376174?text=" +
  encodeURIComponent("Hi Touch Salon! I would love to enquire about Rental Jewels.");

interface ServiceShowcaseItem {
  id: string;
  number: string;
  title: string;
  tag: string;
  description: string;
  image: string;
  actionKey: "bridal" | "groom" | "hair" | "skin" | "beauty" | "additional" | "mens" | "rental" | "appointment";
}

const SHOWCASE_SERVICES: ServiceShowcaseItem[] = [
  {
    id: "bridal-makeup",
    number: "01",
    title: "Bridal Makeup",
    tag: "Signature Bridal",
    description: "Bridal makeovers & reception looks tailored to perfection",
    image: "/images/imageee.jpg",
    actionKey: "bridal",
  },
  {
    id: "groom-makeup",
    number: "02",
    title: "Groom Makeup",
    tag: "Men's Luxury Grooming",
    description: "Refined wedding styling & gentlemen's grooming rituals",
    image: "/images/Groom.jpg",
    actionKey: "groom",
  },
  {
    id: "hair-services",
    number: "03",
    title: "Hair Services",
    tag: "Rituals & Styling",
    description: "Keratin, customized haircuts, coloring & luxury spa",
    image: "/images/hair-services.jpg",
    actionKey: "hair",
  },
  {
    id: "skin-facial",
    number: "04",
    title: "Skin & Facial",
    tag: "Glow & Rejuvenation",
    description: "Hydra facials, Korean glow & deep skin rejuvenation",
    image: "/images/skin-facial.jpg",
    actionKey: "skin",
  },
  {
    id: "beauty-grooming",
    number: "05",
    title: "Beauty & Grooming",
    tag: "Classic Salon Care",
    description: "Threading, waxing, nail art, manicure & pedicure",
    image: "/images/beauty-grooming.jpg",
    actionKey: "beauty",
  },
  {
    id: "additional-services",
    number: "06",
    title: "Additional Services",
    tag: "Saree Draping & Care",
    description: "Signature saree pre-pleating & precise box folding",
    image: "/images/saree pre pleating.jpg",
    actionKey: "additional",
  },
  {
    id: "mens-services",
    number: "07",
    title: "Men's Services",
    tag: "Gentlemen's Salon",
    description: "Beard styling, haircuts, facials & hair spa",
    image: "/images/mens-services.jpg",
    actionKey: "mens",
  },
  {
    id: "rental-jewels",
    number: "08",
    title: "Rental Jewels",
    tag: "Heritage Jewellery",
    description: "Handcrafted antique temple bridal jewelry collections",
    image: "/images/rental jewels.jpg",
    actionKey: "rental",
  },
  {
    id: "appointment-enquiry",
    number: "09",
    title: "Appointment Enquiry",
    tag: "Instant Salon Booking",
    description: "Direct WhatsApp concierge for consultations & bookings",
    image: "/images/appointment.jpg",
    actionKey: "appointment",
  },
];

export default function ServicesShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

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

  // In-Place Scroll Container Refs
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const progressTextRef = useRef<HTMLSpanElement>(null);

  const targetXRef = useRef(0);
  const touchStartXRef = useRef(0);
  const touchStartYRef = useRef(0);
  const isSwipingRef = useRef(false);

  // Calculate maximum horizontal travel distance
  const getMaxScroll = useCallback(() => {
    const track = trackRef.current;
    const viewport = scrollContainerRef.current;
    if (!track || !viewport) return 0;
    return Math.max(0, track.scrollWidth - viewport.clientWidth + 24);
  }, []);

  // Smoothly move the track and update UI progress
  const updateTrackPosition = useCallback((newTargetX: number, duration = 0.5) => {
    const track = trackRef.current;
    if (!track) return;

    const maxScroll = getMaxScroll();
    const clampedX = Math.max(0, Math.min(newTargetX, maxScroll));
    targetXRef.current = clampedX;

    gsap.to(track, {
      x: -clampedX,
      duration: duration,
      ease: "power2.out",
      overwrite: "auto",
      onUpdate: () => {
        const progress = maxScroll > 0 ? clampedX / maxScroll : 0;
        if (progressBarRef.current) {
          progressBarRef.current.style.width = `${Math.round(progress * 100)}%`;
        }
        const activeIdx = Math.min(
          SHOWCASE_SERVICES.length - 1,
          Math.max(0, Math.round(progress * (SHOWCASE_SERVICES.length - 1)))
        );
        setActiveIndex(activeIdx);
        if (progressTextRef.current) {
          progressTextRef.current.textContent = `${SHOWCASE_SERVICES[activeIdx].number} / 09 • ${SHOWCASE_SERVICES[activeIdx].title.toUpperCase()}`;
        }
      },
    });
  }, [getMaxScroll]);

  // Jump directly to a service card (0 to 8)
  const jumpToService = (index: number) => {
    const maxScroll = getMaxScroll();
    const newTarget = (index / (SHOWCASE_SERVICES.length - 1)) * maxScroll;
    updateTrackPosition(newTarget, 0.65);
  };

  // Step backward by one card
  const handlePrev = () => {
    const cardWidth = 300;
    updateTrackPosition(targetXRef.current - cardWidth, 0.45);
  };

  // Step forward by one card
  const handleNext = () => {
    const cardWidth = 300;
    updateTrackPosition(targetXRef.current + cardWidth, 0.45);
  };

  // In-Place Mouse Wheel Listener:
  // Rolling DOWN moves 01 → 09, Rolling UP moves 09 → 01
  // Crucially: calls e.preventDefault() so the WEBPAGE DOES NOT SCROLL!
  useEffect(() => {
    const viewport = scrollContainerRef.current;
    if (!viewport) return;

    const onWheel = (e: WheelEvent) => {
      const delta = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
      if (Math.abs(delta) < 2) return;

      const maxScroll = getMaxScroll();
      const isMovingForward = delta > 0 && targetXRef.current < maxScroll - 1;
      const isMovingBackward = delta < 0 && targetXRef.current > 1;

      // If we can scroll cards in this direction, prevent webpage from scrolling!
      if (isMovingForward || isMovingBackward) {
        e.preventDefault();
        e.stopPropagation();
        updateTrackPosition(targetXRef.current + delta * 1.25, 0.35);
      }
    };

    viewport.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      viewport.removeEventListener("wheel", onWheel);
    };
  }, [getMaxScroll, updateTrackPosition]);

  // Touch Swipe for Mobile & Tablet
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchStartYRef.current = e.touches[0].clientY;
    isSwipingRef.current = false;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;
    const diffX = touchStartXRef.current - currentX;
    const diffY = touchStartYRef.current - currentY;

    if (Math.abs(diffX) > 8) {
      isSwipingRef.current = true;
    }

    if (Math.abs(diffX) > Math.abs(diffY)) {
      touchStartXRef.current = currentX;
      updateTrackPosition(targetXRef.current + diffX * 1.3, 0.2);
    }
  };

  const handleTouchEnd = () => {
    setTimeout(() => {
      isSwipingRef.current = false;
    }, 200);
  };

  // Auto-reveal if hash is present (e.g. #bridal-makeup, #hair-services, etc.)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes("groom")) {
        setIsGroomOpen(true);
        setTimeout(() => {
          const el = document.getElementById("groom-makeup-section");
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 180);
      } else if (hash.includes("mens") || hash.includes("men")) {
        setIsMensOpen(true);
        setTimeout(() => {
          const el = document.getElementById("mens-services-section");
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 180);
      } else if (
        hash.includes("additional") ||
        hash.includes("saree") ||
        hash.includes("pleating") ||
        hash.includes("folding")
      ) {
        setIsAdditionalOpen(true);
        setTimeout(() => {
          const el = document.getElementById("additional-services-section");
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 180);
      } else if (hash.includes("skin") || hash.includes("facial")) {
        setIsSkinOpen(true);
        setTimeout(() => {
          const el = document.getElementById("skin-facial-section");
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 180);
      } else if (hash.includes("beauty") || hash.includes("grooming")) {
        setIsBeautyOpen(true);
        setTimeout(() => {
          const el = document.getElementById("beauty-grooming-section");
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 180);
      } else if (hash.includes("hair")) {
        setIsHairOpen(true);
        setTimeout(() => {
          const el = document.getElementById("hair-services-section");
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 180);
      } else if (hash.includes("bridal") || hash.includes("makeup")) {
        setIsBridalOpen(true);
        setTimeout(() => {
          const el = document.getElementById("bridal-makeup-section");
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 180);
      }
    }
  }, []);

  const handleOpenBridalSection = () => {
    setIsHairOpen(false);
    setIsBeautyOpen(false);
    setIsSkinOpen(false);
    setIsAdditionalOpen(false);
    setIsMensOpen(false);
    setIsGroomOpen(false);
    setClosingSection(null);
    setIsBridalOpen(true);
    setTimeout(() => {
      const el = document.getElementById("bridal-makeup-section");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 180);
  };

  const handleOpenHairSection = () => {
    setIsBridalOpen(false);
    setIsBeautyOpen(false);
    setIsSkinOpen(false);
    setIsAdditionalOpen(false);
    setIsMensOpen(false);
    setIsGroomOpen(false);
    setClosingSection(null);
    setIsHairOpen(true);
    setTimeout(() => {
      const el = document.getElementById("hair-services-section");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 180);
  };

  const handleOpenBeautySection = () => {
    setIsBridalOpen(false);
    setIsHairOpen(false);
    setIsSkinOpen(false);
    setIsAdditionalOpen(false);
    setIsMensOpen(false);
    setIsGroomOpen(false);
    setClosingSection(null);
    setIsBeautyOpen(true);
    setTimeout(() => {
      const el = document.getElementById("beauty-grooming-section");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 180);
  };

  const handleOpenSkinSection = () => {
    setIsBridalOpen(false);
    setIsHairOpen(false);
    setIsBeautyOpen(false);
    setIsAdditionalOpen(false);
    setIsMensOpen(false);
    setIsGroomOpen(false);
    setClosingSection(null);
    setIsSkinOpen(true);
    setTimeout(() => {
      const el = document.getElementById("skin-facial-section");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 180);
  };

  const handleOpenAdditionalSection = () => {
    setIsBridalOpen(false);
    setIsHairOpen(false);
    setIsBeautyOpen(false);
    setIsSkinOpen(false);
    setIsMensOpen(false);
    setIsGroomOpen(false);
    setClosingSection(null);
    setIsAdditionalOpen(true);
    setTimeout(() => {
      const el = document.getElementById("additional-services-section");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 180);
  };

  const handleOpenMensSection = () => {
    setIsBridalOpen(false);
    setIsHairOpen(false);
    setIsBeautyOpen(false);
    setIsSkinOpen(false);
    setIsAdditionalOpen(false);
    setIsGroomOpen(false);
    setClosingSection(null);
    setIsMensOpen(true);
    setTimeout(() => {
      const el = document.getElementById("mens-services-section");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 180);
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
    setTimeout(() => {
      const el = document.getElementById("groom-makeup-section");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 180);
  };

  const handleOpenRentalJewels = () => {
    setIsBridalOpen(false);
    setIsHairOpen(false);
    setIsBeautyOpen(false);
    setIsSkinOpen(false);
    setIsAdditionalOpen(false);
    setIsMensOpen(false);
    setIsGroomOpen(false);
    setClosingSection(null);

    setTimeout(() => {
      const el = document.getElementById("first-showcase-section");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);

    if (typeof window !== "undefined") {
      window.open(WHATSAPP_RENTAL_JEWELS_URL, "_blank");
    }
  };

  const handleOpenAppointmentEnquiry = () => {
    setIsBridalOpen(false);
    setIsHairOpen(false);
    setIsBeautyOpen(false);
    setIsSkinOpen(false);
    setIsAdditionalOpen(false);
    setIsMensOpen(false);
    setIsGroomOpen(false);
    setClosingSection(null);

    setTimeout(() => {
      const el = document.getElementById("first-showcase-section");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);

    if (typeof window !== "undefined") {
      window.open(WHATSAPP_ENQUIRY_URL, "_blank");
    }
  };

  const handleServiceSelect = (actionKey: ServiceShowcaseItem["actionKey"]) => {
    switch (actionKey) {
      case "bridal":
        handleOpenBridalSection();
        break;
      case "groom":
        handleOpenGroomSection();
        break;
      case "hair":
        handleOpenHairSection();
        break;
      case "skin":
        handleOpenSkinSection();
        break;
      case "beauty":
        handleOpenBeautySection();
        break;
      case "additional":
        handleOpenAdditionalSection();
        break;
      case "mens":
        handleOpenMensSection();
        break;
      case "rental":
        handleOpenRentalJewels();
        break;
      case "appointment":
        handleOpenAppointmentEnquiry();
        break;
    }
  };

  const handleBackToServices = () => {
    // 1. Smoothly scroll back up to top showcase section
    const el = document.getElementById("first-showcase-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    // 2. Clean URL hash if present
    if (typeof window !== "undefined" && window.location.hash) {
      history.replaceState(null, "", window.location.pathname + window.location.search);
    }

    // 3. Initiate exit transition and disappear the active sub-section after scrolling up
    const activeSection = isBridalOpen
      ? "bridal"
      : isHairOpen
      ? "hair"
      : isBeautyOpen
      ? "beauty"
      : isSkinOpen
      ? "skin"
      : isAdditionalOpen
      ? "additional"
      : isMensOpen
      ? "mens"
      : isGroomOpen
      ? "groom"
      : null;

    if (activeSection) {
      setClosingSection(activeSection);
    }

    setTimeout(() => {
      setIsBridalOpen(false);
      setIsHairOpen(false);
      setIsBeautyOpen(false);
      setIsSkinOpen(false);
      setIsAdditionalOpen(false);
      setIsMensOpen(false);
      setIsGroomOpen(false);
      setClosingSection(null);
    }, 420);
  };

  return (
    <section
      aria-label="Bridal Saree Showcase & Services"
      className="relative z-10 mx-auto w-full max-w-[1440px] drop-shadow-[0_30px_70px_rgba(20,10,5,0.7)]"
    >
      {/* =========================================================================
          FIRST SECTION: Fit to Desktop (Single Screen View)
          - Exactly fits inside one desktop screen (lg:h-[calc(100vh-125px)])
          - Webpage stays locked in view; zero vertical scroll needed to see the cards
          - Wheel DOWN moves 01 → 09, Wheel UP moves 09 → 01
          - Touching any service image smoothly navigates to its subsection
         ========================================================================= */}
      <div
        id="first-showcase-section"
        className="relative w-full overflow-hidden rounded-[24px] sm:rounded-[30px] border border-[#D6BC96]/35 bg-gradient-to-b from-[#24150e] via-[#1a0e08] to-[#120703] shadow-2xl flex flex-col justify-between lg:h-[calc(100vh-125px)] max-h-[820px] min-h-[560px]"
      >
        {/* Regal Top Bar: Compact Luxury Bar */}
        <div className="flex-shrink-0 relative z-30 flex flex-col gap-2 px-4 sm:px-6 py-2.5 sm:py-3 border-b border-[#D6BC96]/25 bg-gradient-to-r from-[#200e06]/98 via-[#2c170d]/95 to-[#200e06]/98 backdrop-blur-md">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#D6BC96] shadow-[0_0_10px_#D6BC96]" />
              <h2 className={`${inter.className} text-[10.5px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#D6BC96] flex items-center gap-1.5`}>
                <Sparkles className="h-3.5 w-3.5 text-[#D6BC96]" />
                <span>SCROLL: 01 → 09 • REVERSE: 09 → 01</span>
              </h2>
            </div>

            {/* Live Active Service counter */}
            <span
              ref={progressTextRef}
              className="text-[10.5px] sm:text-[11px] font-mono font-bold tracking-wider text-[#F5F0E8] bg-[#38271F]/80 px-3 py-0.5 rounded-full border border-[#D6BC96]/40 shadow-sm"
            >
              01 / 09 • BRIDAL MAKEUP
            </span>

            {/* Stepping Chevrons */}
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Scroll backward towards service 01"
                className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-[#D6BC96]/15 border border-[#D6BC96]/50 flex items-center justify-center text-[#D6BC96] hover:bg-[#D6BC96] hover:text-[#38271F] transition-all shadow-sm active:scale-95"
              >
                <ChevronLeft className="h-4 w-4 stroke-[2.2]" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Scroll forward towards service 09"
                className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-[#D6BC96]/15 border border-[#D6BC96]/50 flex items-center justify-center text-[#D6BC96] hover:bg-[#D6BC96] hover:text-[#38271F] transition-all shadow-sm active:scale-95"
              >
                <ChevronRight className="h-4 w-4 stroke-[2.2]" />
              </button>
            </div>
          </div>

          {/* Luxury Gold Progress Bar: SERVICE 01 ───●─── SERVICE 09 */}
          <div className="flex items-center gap-2">
            <span className="text-[9px] font-mono font-bold tracking-wider text-[#D6BC96] uppercase shrink-0">
              SERVICE 01
            </span>
            <div className="relative flex-1 h-1.5 rounded-full bg-black/50 border border-[#D6BC96]/20 overflow-hidden">
              <div
                ref={progressBarRef}
                className="h-full bg-gradient-to-r from-[#B99A70] via-[#D6BC96] to-[#F5F0E8] rounded-full transition-all duration-75 shadow-[0_0_8px_#D6BC96]"
                style={{ width: "0%" }}
              />
            </div>
            <span className="text-[9px] font-mono font-bold tracking-wider text-[#D6BC96] uppercase shrink-0">
              SERVICE 09
            </span>
          </div>
        </div>

        {/* Viewport Container (Fills middle screen space, No Vertical Overflow) */}
        <div
          ref={scrollContainerRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="flex-1 min-h-0 relative w-full overflow-hidden px-4 sm:px-6 lg:px-7 flex items-center select-none cursor-grab active:cursor-grabbing"
        >
          {/* Moving Track */}
          <div
            ref={trackRef}
            className="flex gap-4 sm:gap-5 lg:gap-6 items-center will-change-transform py-2"
          >
            {SHOWCASE_SERVICES.map((service, index) => {
              const isCurrent = activeIndex === index;
              return (
                <article
                  key={service.id}
                  onClick={() => {
                    if (!isSwipingRef.current) {
                      handleServiceSelect(service.actionKey);
                    }
                  }}
                  className={`saree-arch-card group relative flex-shrink-0 h-[380px] sm:h-[430px] lg:h-[calc(100vh-270px)] max-h-[520px] aspect-[736/1200] overflow-hidden rounded-[20px] sm:rounded-[24px] bg-[#24150e] border transition-all duration-300 select-none text-left cursor-pointer ${
                    isCurrent
                      ? "border-[#D6BC96] shadow-[0_20px_55px_rgba(214,188,150,0.3)] ring-1 ring-[#D6BC96]/40"
                      : "border-[#D6BC96]/35 shadow-[0_16px_45px_rgba(0,0,0,0.65)] hover:border-[#D6BC96]/80"
                  }`}
                >
                  {/* Subtle Warm Backdrop behind Model */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-b from-[#382115] via-[#24150e] to-[#140a06]"
                  />

                  {/* Seamlessly Fitted Service Image inside Mughal Arch Frame */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="relative z-10 h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                  />

                  {/* Deep Grounding Scrim Gradient at Base */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-56 sm:h-64 lg:h-72 bg-gradient-to-t from-[#140a06]/98 via-[#140a06]/80 via-45% to-transparent"
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
                      <linearGradient
                        id={`gold-border-${service.id}`}
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#F5F0E8" />
                        <stop offset="28%" stopColor="#D6BC96" />
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
                      stroke={`url(#gold-border-${service.id})`}
                      strokeWidth="1.2"
                      opacity={isCurrent ? "0.95" : "0.68"}
                      className="transition-opacity duration-300 group-hover:opacity-95"
                    />

                    {/* Outer Regal Gold Mughal Arch Contour (3.2px) */}
                    <path
                      d={MUGHAL_ARCH_OUTER_PATH}
                      fill="none"
                      stroke={`url(#gold-border-${service.id})`}
                      strokeWidth={isCurrent ? "3.6" : "3.2"}
                      className="transition-all duration-300 group-hover:stroke-width-[3.8]"
                    />

                    {/* Decorative Mughal Apex Crown Finial Motif */}
                    <g fill={`url(#gold-border-${service.id})`}>
                      <path d="M 368 2 L 374 12 L 368 18 L 362 12 Z" />
                      <circle cx="368" cy="2" r="2.5" />
                    </g>
                  </svg>

                  {/* =============================================================
                      SERVICE NAME & DETAILS DIRECTLY ON THE IMAGE
                     ============================================================= */}
                  <div className="absolute inset-x-0 bottom-0 z-40 p-3.5 sm:p-4 lg:p-5 flex flex-col justify-end">
                    {/* Number & Category Tag Pill */}
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="font-mono text-[9.5px] sm:text-[10px] font-bold tracking-wider text-[#D6BC96] px-2 py-0.5 rounded-full bg-[#38271F]/85 border border-[#D6BC96]/50 shadow-sm backdrop-blur-md">
                        {service.number}
                      </span>
                      <span className="font-sans text-[9.5px] sm:text-[10.5px] font-semibold tracking-[0.16em] uppercase text-[#D6BC96] drop-shadow-sm truncate">
                        {service.tag}
                      </span>
                    </div>

                    {/* Service Name displayed prominently on the image */}
                    <h3
                      className={`${cormorant.className} text-xl sm:text-2xl lg:text-[25px] font-medium text-[#F5F0E8] leading-tight group-hover:text-[#D6BC96] transition-colors drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]`}
                    >
                      {service.title}
                    </h3>

                    {/* Description Snippet */}
                    <p className="mt-0.5 text-[11px] sm:text-xs text-[#F5F0E8]/85 font-sans line-clamp-1 leading-relaxed drop-shadow-sm">
                      {service.description}
                    </p>

                    {/* Touch to Explore Callout Bar */}
                    <div className="mt-2.5 flex items-center justify-between pt-2 border-t border-[#D6BC96]/30">
                      <span className="text-[10px] sm:text-[10.5px] font-semibold uppercase tracking-[0.14em] text-[#D6BC96] flex items-center gap-1.5">
                        <span>Touch to Explore</span>
                        <ArrowUpRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 stroke-[2.2] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                      <div className="h-6 w-6 sm:h-7 sm:w-7 rounded-full bg-[#D6BC96]/20 border border-[#D6BC96]/60 flex items-center justify-center text-[#D6BC96] shadow-sm group-hover:bg-[#D6BC96] group-hover:text-[#38271F] transition-all duration-300">
                        <ArrowUpRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 stroke-[2.2]" />
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Bottom Interactive Quick-Jump Navigation (01 - 09 Dots) */}
        <div className="flex-shrink-0 relative z-30 px-4 sm:px-6 py-2 sm:py-2.5 border-t border-[#D6BC96]/25 bg-gradient-to-r from-[#200e06]/98 via-[#2c170d]/95 to-[#200e06]/98 flex items-center justify-center gap-1 sm:gap-1.5 flex-wrap">
          {SHOWCASE_SERVICES.map((s, idx) => {
            const isDotActive = activeIndex === idx;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => jumpToService(idx)}
                aria-label={`Jump directly to service ${s.number}: ${s.title}`}
                className={`group flex items-center gap-1 px-2.5 py-0.5 sm:py-1 rounded-full text-[9.5px] font-mono font-bold transition-all duration-300 border ${
                  isDotActive
                    ? "bg-[#D6BC96] text-[#24150e] border-[#D6BC96] shadow-[0_0_12px_rgba(214,188,150,0.5)] scale-105"
                    : "bg-[#2c170d]/60 text-[#D6BC96]/70 border-[#D6BC96]/20 hover:border-[#D6BC96]/60 hover:text-[#D6BC96]"
                }`}
              >
                <span>{s.number}</span>
                <span className="hidden md:inline max-w-[80px] truncate font-sans font-normal text-[9px]">
                  {s.title}
                </span>
              </button>
            );
          })}
        </div>
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
