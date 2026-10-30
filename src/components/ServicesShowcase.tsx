"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Cormorant_Garamond } from "next/font/google";
import { ArrowUpRight } from "lucide-react";
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
    image: "/images/preplating-copy.jpg",
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

  const targetXRef = useRef(0);
  const isHoveredRef = useRef(false);
  const directionRef = useRef<1 | -1>(1); // 1 = 01 -> 09, -1 = 09 -> 01
  const touchStartXRef = useRef(0);
  const touchStartYRef = useRef(0);
  const isSwipingRef = useRef(false);

  // Calculate maximum horizontal travel distance (gap = 0 between cards)
  const getMaxScroll = useCallback(() => {
    const track = trackRef.current;
    const viewport = scrollContainerRef.current;
    if (!track || !viewport) return 0;
    return Math.max(0, track.scrollWidth - viewport.clientWidth);
  }, []);

  // Smooth manual scrub update (Wheel / Touch)
  const updateTrackPosition = useCallback((newTargetX: number, duration = 0.45) => {
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
        const activeIdx = Math.min(
          SHOWCASE_SERVICES.length - 1,
          Math.max(0, Math.round(progress * (SHOWCASE_SERVICES.length - 1)))
        );
        setActiveIndex(activeIdx);
      },
    });
  }, [getMaxScroll]);

  // =========================================================================
  // AUTO SCROLL ANIMATION
  // - Smooth auto-progression through services 01 → 09, then 09 → 01
  // - STOPS IMMEDIATELY whenever the mouse points to / hovers over any card
  // - Resumes gracefully when mouse leaves
  // =========================================================================
  useEffect(() => {
    let animId: number;
    let lastTime = performance.now();
    const autoScrollSpeed = 0.72; // Luxuriously gentle glide speed (~43px / second)

    const tick = (now: number) => {
      const dt = Math.min(now - lastTime, 40);
      lastTime = now;

      // Only auto-scroll when user is NOT hovering and NOT dragging
      if (!isHoveredRef.current && !isSwipingRef.current) {
        const maxScroll = getMaxScroll();
        const track = trackRef.current;

        if (maxScroll > 10 && track) {
          let nextX = targetXRef.current + (autoScrollSpeed * (dt / 16)) * directionRef.current;

          // Reversible smooth ping-pong: 01 → 09 then 09 → 01
          if (nextX >= maxScroll) {
            nextX = maxScroll;
            directionRef.current = -1;
          } else if (nextX <= 0) {
            nextX = 0;
            directionRef.current = 1;
          }

          targetXRef.current = nextX;
          gsap.set(track, { x: -nextX });

          const progress = nextX / maxScroll;
          const activeIdx = Math.min(
            SHOWCASE_SERVICES.length - 1,
            Math.max(0, Math.round(progress * (SHOWCASE_SERVICES.length - 1)))
          );
          setActiveIndex(activeIdx);
        }
      }

      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, [getMaxScroll]);

  // =========================================================================
  // SMOOTH SCROLL TRIGGER (Wheel Navigation)
  // - Wheel DOWN scrubs forward 01 → 09
  // - Wheel UP scrubs backward 09 → 01
  // - Intercepts wheel to keep webpage locked in place
  // =========================================================================
  useEffect(() => {
    const viewport = scrollContainerRef.current;
    if (!viewport) return;

    const onWheel = (e: WheelEvent) => {
      // Mouse interaction stops auto-scroll
      isHoveredRef.current = true;

      const delta = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
      if (Math.abs(delta) < 2) return;

      const maxScroll = getMaxScroll();
      const isMovingForward = delta > 0 && targetXRef.current < maxScroll - 1;
      const isMovingBackward = delta < 0 && targetXRef.current > 1;

      if (isMovingForward || isMovingBackward) {
        e.preventDefault();
        e.stopPropagation();
        directionRef.current = delta > 0 ? 1 : -1;
        updateTrackPosition(targetXRef.current + delta * 1.35, 0.35);
      }
    };

    viewport.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      viewport.removeEventListener("wheel", onWheel);
    };
  }, [getMaxScroll, updateTrackPosition]);

  // Touch Swipe for Mobile & Tablet
  const handleTouchStart = (e: React.TouchEvent) => {
    isHoveredRef.current = true;
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
      directionRef.current = diffX > 0 ? 1 : -1;
      updateTrackPosition(targetXRef.current + diffX * 1.35, 0.2);
    }
  };

  const handleTouchEnd = () => {
    setTimeout(() => {
      isSwipingRef.current = false;
      // Resume auto-scroll after touch inactivity
      isHoveredRef.current = false;
    }, 1500);
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
    isHoveredRef.current = true;
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
    isHoveredRef.current = true;
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
    isHoveredRef.current = true;
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
    isHoveredRef.current = true;
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
    isHoveredRef.current = true;
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
    isHoveredRef.current = true;
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
    isHoveredRef.current = true;
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
    isHoveredRef.current = true;
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
    isHoveredRef.current = true;
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
      isHoveredRef.current = false;
    }, 420);
  };

  return (
    <section
      aria-label="Bridal Saree Showcase & Services"
      className="relative z-10 mx-auto w-full max-w-[1660px] drop-shadow-[0_30px_70px_rgba(20,10,5,0.7)]"
    >
      {/* =========================================================================
          FIRST SECTION: Auto Scroll Colonnade with Mouse Hover Pause
          - Auto scrolls smoothly forward (01 → 09) and backward (09 → 01)
          - Mouse points to ANY card: STOPS IMMEDIATELY
          - Smooth scroll trigger with mouse wheel & mobile touch
          - Zero vertical page scroll when interacting with cards
         ========================================================================= */}
      <div
        id="first-showcase-section"
        onMouseEnter={() => {
          isHoveredRef.current = true;
        }}
        onMouseLeave={() => {
          isHoveredRef.current = false;
        }}
        className="relative w-full overflow-hidden rounded-[24px] sm:rounded-[32px] border border-[#D6BC96]/40 bg-gradient-to-b from-[#24150e] via-[#1a0e08] to-[#120703] shadow-2xl flex items-center h-[520px] sm:h-[620px] lg:h-[calc(100vh-120px)] max-h-[860px] min-h-[580px]"
      >
        {/* Viewport Container (Fills the entire showcase frame with zero padding) */}
        <div
          ref={scrollContainerRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="relative w-full h-full overflow-hidden p-0 flex items-center select-none cursor-grab active:cursor-grabbing"
        >
          {/* Moving Track: Exactly 9 Services with ZERO gap between cards */}
          <div
            ref={trackRef}
            className="flex gap-0 items-center will-change-transform h-full"
          >
            {SHOWCASE_SERVICES.map((service, index) => {
              const isCurrent = activeIndex === index;
              return (
                <article
                  key={service.id}
                  onMouseEnter={() => {
                    isHoveredRef.current = true;
                  }}
                  onClick={() => {
                    if (!isSwipingRef.current) {
                      handleServiceSelect(service.actionKey);
                    }
                  }}
                  className={`saree-arch-card group relative flex-shrink-0 h-full aspect-[736/1200] overflow-hidden bg-[#24150e] border-r border-[#D6BC96]/30 last:border-r-0 select-none text-left cursor-pointer transition-all duration-300 ${
                    isCurrent
                      ? "ring-1 ring-inset ring-[#D6BC96]/50 shadow-[inset_0_0_40px_rgba(214,188,150,0.15)]"
                      : "hover:ring-1 hover:ring-inset hover:ring-[#D6BC96]/30"
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

                  {/* Deep Grounding Scrim Gradient at Base for Text Readability */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-64 sm:h-72 lg:h-84 bg-gradient-to-t from-[#140a06]/98 via-[#140a06]/82 via-45% to-transparent"
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
                      fill="#1a0e08"
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
                  <div className="absolute inset-x-0 bottom-0 z-40 p-4 sm:p-5 lg:p-6 flex flex-col justify-end">
                    {/* Number & Category Tag Pill */}
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-mono text-[10px] sm:text-xs font-bold tracking-wider text-[#D6BC96] px-2.5 py-0.5 rounded-full bg-[#38271F]/85 border border-[#D6BC96]/50 shadow-sm backdrop-blur-md">
                        {service.number}
                      </span>
                      <span className="font-sans text-[10px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-[#D6BC96] drop-shadow-sm truncate">
                        {service.tag}
                      </span>
                    </div>

                    {/* Service Name displayed prominently on the image */}
                    <h3
                      className={`${cormorant.className} text-2xl sm:text-3xl lg:text-4xl font-medium text-[#F5F0E8] leading-tight group-hover:text-[#D6BC96] transition-colors drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]`}
                    >
                      {service.title}
                    </h3>

                    {/* Touch to Explore Callout Bar */}
                    <div className="mt-3.5 flex items-center justify-between pt-2.5 border-t border-[#D6BC96]/30">
                      <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-[#D6BC96] flex items-center gap-1.5">
                        <span>Touch to Explore</span>
                        <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 stroke-[2.2] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                      <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-[#D6BC96]/20 border border-[#D6BC96]/60 flex items-center justify-center text-[#D6BC96] shadow-sm group-hover:bg-[#D6BC96] group-hover:text-[#38271F] transition-all duration-300">
                        <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 stroke-[2.2]" />
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
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
