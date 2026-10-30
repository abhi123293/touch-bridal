"use client";

import { useState, useEffect, useRef } from "react";
import { Cormorant_Garamond } from "next/font/google";
import { ArrowUpRight, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ServicesEditorialCollage from "@/components/ServicesEditorialCollage";
import BridalMakeupSection from "@/components/BridalMakeupSection";
import HairServicesSection from "@/components/HairServicesSection";
import BeautyGroomingServicesSection from "@/components/BeautyGroomingServicesSection";
import SkinFacialServicesSection from "@/components/SkinFacialServicesSection";
import AdditionalServicesSection from "@/components/AdditionalServicesSection";
import MensServicesSection from "@/components/MensServicesSection";
import GroomMakeupSection from "@/components/GroomMakeupSection";

gsap.registerPlugin(ScrollTrigger, useGSAP);

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
    description: "Bridal & reception looks",
    image: "/images/imageee.jpg",
    actionKey: "bridal",
  },
  {
    id: "groom-makeup",
    number: "02",
    title: "Groom Makeup",
    tag: "Men's Luxury Grooming",
    description: "Refined wedding grooming",
    image: "/images/Groom.jpg",
    actionKey: "groom",
  },
  {
    id: "hair-services",
    number: "03",
    title: "Hair Services",
    tag: "Rituals & Styling",
    description: "Keratin, cuts & hair spa",
    image: "/images/hair-services.jpg",
    actionKey: "hair",
  },
  {
    id: "skin-facial",
    number: "04",
    title: "Skin & Facial",
    tag: "Glow & Rejuvenation",
    description: "Hydra & Korean facials",
    image: "/images/skin-facial.jpg",
    actionKey: "skin",
  },
  {
    id: "beauty-grooming",
    number: "05",
    title: "Beauty & Grooming",
    tag: "Classic Salon Care",
    description: "Threading, nails & wax",
    image: "/images/beauty-grooming.jpg",
    actionKey: "beauty",
  },
  {
    id: "additional-services",
    number: "06",
    title: "Additional Services",
    tag: "Saree Draping & Care",
    description: "Pre-pleating & box folding",
    image: "/images/saree pre pleating.jpg",
    actionKey: "additional",
  },
  {
    id: "mens-services",
    number: "07",
    title: "Men's Services",
    tag: "Gentlemen's Salon",
    description: "Beard styling & haircuts",
    image: "/images/mens-services.jpg",
    actionKey: "mens",
  },
  {
    id: "rental-jewels",
    number: "08",
    title: "Rental Jewels",
    tag: "Heritage Jewellery",
    description: "Antique temple bridal sets",
    image: "/images/rental jewels.jpg",
    actionKey: "rental",
  },
  {
    id: "appointment-enquiry",
    number: "09",
    title: "Appointment Enquiry",
    tag: "Instant Salon Booking",
    description: "Direct WhatsApp booking",
    image: "/images/appointment.jpg",
    actionKey: "appointment",
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

  // Refs for ScrollTrigger & auto-scrolling
  const showcaseContainerRef = useRef<HTMLDivElement>(null);
  const trayRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isPausedRef = useRef(false);
  const isInteractingRef = useRef(false);
  const touchStartXRef = useRef(0);
  const touchStartYRef = useRef(0);
  const isSwipingRef = useRef(false);

  // GSAP ScrollTrigger Animations for entrance and scroll-driven velocity
  useGSAP(
    () => {
      // 1. Entrance animation for the 4 Mughal Arch saree cards
      const archCards = gsap.utils.toArray<HTMLElement>(".saree-arch-card");
      if (archCards.length > 0) {
        gsap.fromTo(
          archCards,
          { opacity: 0, y: 35, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: showcaseContainerRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
            clearProps: "transform,opacity",
          }
        );
      }

      // 2. Entrance for the 9-services glassmorphism tray
      if (trayRef.current) {
        gsap.fromTo(
          trayRef.current,
          { opacity: 0, y: 40, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: {
              trigger: showcaseContainerRef.current,
              start: "top 75%",
              toggleActions: "play none none none",
            },
            clearProps: "transform,opacity",
          }
        );
      }

      // 3. ScrollTrigger velocity & scrub integration:
      // As the user scrolls vertically down the page, ScrollTrigger smoothly accelerates and glides the horizontal scroll track
      if (scrollContainerRef.current && showcaseContainerRef.current) {
        ScrollTrigger.create({
          trigger: showcaseContainerRef.current,
          start: "top bottom",
          end: "bottom top",
          onUpdate: (self) => {
            const container = scrollContainerRef.current;
            if (container && !isPausedRef.current && !isInteractingRef.current) {
              const velocity = self.getVelocity() / 250;
              container.scrollLeft += velocity;
              const singleSetWidth = container.scrollWidth / 3;
              if (singleSetWidth > 0) {
                if (container.scrollLeft >= singleSetWidth * 2) {
                  container.scrollLeft -= singleSetWidth;
                } else if (container.scrollLeft <= singleSetWidth * 0.1) {
                  container.scrollLeft += singleSetWidth;
                }
              }
            }
          },
        });
      }
    },
    { scope: showcaseContainerRef }
  );

  // Continuous smooth auto-scroll animation loop (pauses smoothly on hover or touch)
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Start at middle duplicate set so scrolling in either direction has ample buffer
    const singleSetWidth = container.scrollWidth / 3;
    if (singleSetWidth > 0 && container.scrollLeft === 0) {
      container.scrollLeft = singleSetWidth;
    }

    let animationFrameId: number;
    let lastTime: number | null = null;
    const speed = 40; // baseline steady glide speed in pixels per second

    const animate = (time: number) => {
      if (lastTime !== null) {
        const delta = (time - lastTime) / 1000;
        if (!isPausedRef.current && !isInteractingRef.current && container) {
          container.scrollLeft += speed * delta;
          // Tripled items: loop seamlessly across duplicate sets
          const singleWidth = container.scrollWidth / 3;
          if (singleWidth > 0) {
            if (container.scrollLeft >= singleWidth * 2) {
              container.scrollLeft -= singleWidth;
            } else if (container.scrollLeft <= singleWidth * 0.1) {
              container.scrollLeft += singleWidth;
            }
          }
        }
      }
      lastTime = time;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handlePrev = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -280, behavior: "smooth" });
    }
  };

  const handleNext = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 280, behavior: "smooth" });
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchStartYRef.current = e.touches[0].clientY;
    isSwipingRef.current = false;
    isInteractingRef.current = true;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const diffX = Math.abs(e.touches[0].clientX - touchStartXRef.current);
    const diffY = Math.abs(e.touches[0].clientY - touchStartYRef.current);
    if (diffX > 8 || diffY > 8) {
      isSwipingRef.current = true;
    }
  };

  const handleTouchEnd = () => {
    setTimeout(() => {
      isInteractingRef.current = false;
    }, 1200);
  };

  // Auto-reveal if hash is present (e.g. #bridal-makeup, #hair-services, etc.)
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
    setTimeout(() => {
      const el = document.getElementById("bridal-makeup-section");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 120);
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
    setTimeout(() => {
      const el = document.getElementById("hair-services-section");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 120);
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
    setTimeout(() => {
      const el = document.getElementById("beauty-grooming-section");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 120);
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
    setTimeout(() => {
      const el = document.getElementById("skin-facial-section");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 120);
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
    setTimeout(() => {
      const el = document.getElementById("additional-services-section");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 120);
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
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 120);
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
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 120);
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
      const el = document.getElementById("all-services-collage");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
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
      const el = document.getElementById("all-services-collage");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
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
    // 1. Smoothly scroll back up to all-services-collage or top of showcase
    const el = document.getElementById("all-services-collage") || document.getElementById("first-showcase-section");
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
    if (isMensOpen) setClosingSection("mens");
    if (isGroomOpen) setClosingSection("groom");

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
      ref={showcaseContainerRef}
      aria-label="Bridal Saree Showcase & Services"
      className="relative z-10 mx-auto w-full max-w-[1440px] drop-shadow-[0_30px_70px_rgba(20,10,5,0.7)]"
    >
      {/* =========================================================================
          FIRST SECTION: 4-Frame Mughal Arcade Saree Showcase Container
          WITH 9 Services Auto-Scrolling Glassmorphism Ribbon at the Base
         ========================================================================= */}
      <div id="first-showcase-section" className="relative w-full overflow-hidden rounded-[24px] sm:rounded-[32px] border border-[#D6BC96]/30 shadow-2xl">
        {/* 4 Mughal Arch Saree Models */}
        <div className="grid grid-cols-2 gap-0 sm:grid-cols-2 lg:grid-cols-4 items-end w-full">
          {SAREE_MODELS.map((model, index) => (
            <article
              key={model.id}
              className="saree-arch-card group relative w-full aspect-[736/1308] overflow-hidden bg-[#24150e] transition-all duration-500"
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

              {/* Deep Grounding Scrim Gradient at Base */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-52 sm:h-64 lg:h-72 bg-gradient-to-t from-[#140a06]/95 via-[#140a06]/65 to-transparent"
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

        {/* =========================================================================
            S TOUCH SALON — 9 Services Auto-Scrolling Glassmorphism Ribbon at Bottom
            - Powered by GSAP ScrollTrigger for entrance reveal & scroll-driven velocity
            - Continuous smooth auto-glide when idle
            - Touching any service smoothly navigates to its subsection
           ========================================================================= */}
        <div
          ref={trayRef}
          aria-label="9 Services Auto-Scrolling Navigation"
          className="absolute inset-x-0 bottom-0 z-40 flex flex-col items-center justify-end pb-3 sm:pb-5 lg:pb-6 px-2 sm:px-4 lg:px-6 pointer-events-none"
        >
          {/* Translucent Brownish Glassmorphism Tray at Bottom of Images */}
          <div className="pointer-events-auto relative w-full max-w-[1360px] overflow-hidden rounded-[20px] sm:rounded-[26px] border border-white/20 border-t-white/35 border-b-black/40 bg-gradient-to-b from-[#331a0e]/80 via-[#200e06]/88 to-[#120602]/92 py-2.5 sm:py-3.5 px-2 sm:px-4 backdrop-blur-xl backdrop-saturate-150 ring-1 ring-[#D6BC96]/40 shadow-[inset_0_1.5px_2px_rgba(255,255,255,0.3),0_20px_50px_rgba(0,0,0,0.65)]">

            {/* Specular Glass Sheen Top Edge */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D6BC96]/80 to-transparent"
            />

            {/* Tray Header: 9 SIGNATURE SERVICES with Live Indicator & Prev/Next Buttons */}
            <div className="relative z-10 flex items-center justify-between gap-2 px-2 sm:px-3 mb-2 pb-2 border-b border-[#D6BC96]/20">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#D6BC96] shadow-[0_0_8px_#D6BC96] animate-pulse" />
                <h2 className="text-[10px] sm:text-xs font-mono font-semibold tracking-[0.2em] uppercase text-[#D6BC96] flex items-center gap-1.5">
                  <Sparkles className="h-3 w-3 inline-block" />
                  <span>9 SIGNATURE SERVICES • SCROLL TRIGGERED</span>
                </h2>
              </div>

              <span className="text-[10px] sm:text-xs text-[#F5F0E8]/75 tracking-wide hidden md:inline-block font-sans">
                Touch any service to explore sub-services &amp; rituals
              </span>

              {/* Prev / Next Chevrons for Manual Stepping */}
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Scroll left to previous services"
                  className="h-7 w-7 rounded-full bg-[#D6BC96]/15 border border-[#D6BC96]/40 flex items-center justify-center text-[#D6BC96] hover:bg-[#D6BC96] hover:text-[#38271F] transition-all"
                >
                  <ChevronLeft className="h-4 w-4 stroke-[2.2]" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Scroll right to next services"
                  className="h-7 w-7 rounded-full bg-[#D6BC96]/15 border border-[#D6BC96]/40 flex items-center justify-center text-[#D6BC96] hover:bg-[#D6BC96] hover:text-[#38271F] transition-all"
                >
                  <ChevronRight className="h-4 w-4 stroke-[2.2]" />
                </button>
              </div>
            </div>

            {/* Infinite Auto-Scrolling Track with ScrollTrigger Dynamic Scrub */}
            <div
              ref={scrollContainerRef}
              onMouseEnter={() => { isPausedRef.current = true; }}
              onMouseLeave={() => { isPausedRef.current = false; }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              className="flex gap-2.5 sm:gap-3.5 overflow-x-auto no-scrollbar items-center py-1 px-1"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {/* Tripled list for butter-smooth infinite wrap */}
              {[...SHOWCASE_SERVICES, ...SHOWCASE_SERVICES, ...SHOWCASE_SERVICES].map((service, index) => (
                <button
                  key={`${service.id}-${index}`}
                  type="button"
                  onClick={() => {
                    if (!isSwipingRef.current) {
                      handleServiceSelect(service.actionKey);
                    }
                  }}
                  className="group relative flex-shrink-0 w-[230px] sm:w-[270px] lg:w-[290px] h-[86px] sm:h-[96px] text-left cursor-pointer rounded-[14px] sm:rounded-[18px] border border-[#D6BC96]/35 bg-gradient-to-r from-[#2c170d]/90 via-[#1e0f08]/90 to-[#140804]/90 p-2 sm:p-2.5 flex items-center gap-2.5 sm:gap-3 transition-all duration-300 hover:border-[#D6BC96] hover:scale-[1.02] hover:shadow-[0_8px_25px_rgba(223,183,108,0.25)] focus:outline-none select-none"
                >
                  {/* Service Image Portal with Luxury Gold Ring */}
                  <div className="relative h-14 w-14 sm:h-16 sm:w-16 rounded-full overflow-hidden border-2 border-[#D6BC96]/70 shrink-0 shadow-md group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover object-center"
                    />
                    <div className="absolute inset-0 ring-1 ring-inset ring-black/30 rounded-full" />
                  </div>

                  {/* Service Text & Details */}
                  <div className="flex-1 min-w-0 pr-1">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="text-[10px] font-mono font-bold tracking-wider text-[#D6BC96] uppercase">
                        {service.number}
                      </span>
                      <span className="text-[9px] sm:text-[10px] font-sans font-semibold tracking-wider text-[#D6BC96]/75 uppercase truncate">
                        • {service.tag}
                      </span>
                    </div>

                    <h3
                      className={`${cormorant.className} text-base sm:text-lg font-medium text-[#F5F0E8] leading-tight truncate group-hover:text-[#D6BC96] transition-colors`}
                    >
                      {service.title}
                    </h3>

                    <div className="mt-1 flex items-center gap-1 text-[10px] font-semibold text-[#D6BC96] tracking-wide uppercase">
                      <span>Explore</span>
                      <ArrowUpRight className="h-2.5 w-2.5 stroke-[2.2] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>

                  {/* Right Arrow Badge */}
                  <div className="shrink-0">
                    <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-[#D6BC96]/15 border border-[#D6BC96]/40 flex items-center justify-center text-[#D6BC96] group-hover:bg-[#D6BC96] group-hover:text-[#38271F] transition-all">
                      <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.2]" />
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
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
