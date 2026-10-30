"use client";

import Link from "next/link";
import { useRef, useState, useCallback, useEffect } from "react";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

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

const services = [
  {
    number: "01",
    title: "Bridal Makeovers",
    description:
      "Bridal and reception looks tailored to your special day.",
    image: "/images/bridal-01.jpg",
    imageAlt: "Bridal makeup and traditional bridal look",
    tag: "BRIDAL BEAUTY",
    message:
      "Hi, I would like to enquire about Bridal Makeovers at Touch Bridal Makeover Studio & Unisex Salon.",
  },
  {
    number: "02",
    title: "Hair Care",
    description:
      "Discover hair styling and care for your everyday look and special occasions.",
    image: "/servicesimg/haircare.jpg",
    imageAlt: "Hair styling and beauty look",
    tag: "HAIR CARE",
    message:
      "Hi, I would like to enquire about Hair Care at Touch Bridal Makeover Studio & Unisex Salon.",
  },
  {
    number: "03",
    title: "Skin Care",
    description:
      "Explore skincare and facial services to help you feel refreshed.",
    image: "/servicesimg/bridal-03.jpg",
    imageAlt: "Skin care ",
    tag: "SKIN CARE",
    message:
      "Hi, I would like to enquire about Skin Care at Touch Bridal Makeover Studio & Unisex Salon.",
  },
  {
    number: "04",
    title: "Beauty Services",
    description:
      "Thoughtful beauty services and finishing touches for every occasion.",
    image: "/images/bridal-04.jpg",
    imageAlt: "Beauty services and makeup look",
    tag: "BEAUTY SERVICES",
    message:
      "Hi, I would like to enquire about Beauty Services at Touch Bridal Makeover Studio & Unisex Salon.",
  },
];

const featureHighlights = [
  {
    icon: "✳",
    title: "PERSONALIZED BEAUTY",
    text: "Looks created for you",
  },
  {
    icon: "♡",
    title: "EXPERT ARTISTRY",
    text: "Care in every detail",
  },
  {
    icon: "✧",
    title: "BEAUTY & GROOMING",
    text: "For every occasion",
  },
  {
    icon: "❋",
    title: "MADE FOR YOU",
    text: "Feel your very best",
  },
];

const getWhatsAppLink = (message: string) =>
  `https://wa.me/919789376174?text=${encodeURIComponent(message)}`;

export default function FeaturedServices() {
  const sectionRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Auto-scrolling state & control refs
  const isInteractingRef = useRef(false);
  const isHoveredRef = useRef(false);
  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const updateScrollButtons = useCallback(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const maxScrollLeft = Math.max(
      0,
      carousel.scrollWidth - carousel.clientWidth
    );
    const currentScrollLeft = carousel.scrollLeft;

    setCanScrollLeft(currentScrollLeft > 8);
    setCanScrollRight(currentScrollLeft < maxScrollLeft - 8);
  }, []);

  // Pause automatic scrolling on user interaction with a graceful cooldown
  const pauseAutoScroll = useCallback(() => {
    isInteractingRef.current = true;
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }
    resumeTimeoutRef.current = setTimeout(() => {
      isInteractingRef.current = false;
    }, 3200);
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    updateScrollButtons();

    const resizeObserver = new ResizeObserver(() => {
      updateScrollButtons();
    });

    resizeObserver.observe(carousel);
    window.addEventListener("resize", updateScrollButtons);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, [updateScrollButtons]);

  // Gentle automatic scrolling interaction (pauses on interaction, respects reduced motion)
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    // Respect user's reduced-motion preference
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    let animationFrameId: number;
    let lastTime: number | null = null;
    const speed = 24; // gentle, stately scrolling speed in pixels per second

    const animate = (time: number) => {
      if (lastTime !== null) {
        const delta = (time - lastTime) / 1000;
        const maxScroll = carousel.scrollWidth - carousel.clientWidth;

        if (
          !isHoveredRef.current &&
          !isInteractingRef.current &&
          maxScroll > 8
        ) {
          carousel.scrollLeft += speed * delta;
          if (carousel.scrollLeft >= maxScroll - 2) {
            carousel.scrollTo({ left: 0, behavior: "smooth" });
          }
        }
      }
      lastTime = time;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current);
      }
    };
  }, []);

  const scrollServices = (direction: "left" | "right") => {
    pauseAutoScroll();
    const carousel = carouselRef.current;
    if (!carousel) return;

    const card = carousel.querySelector<HTMLElement>("[data-service-card]");
    if (!card) return;

    const carouselStyles = window.getComputedStyle(carousel);
    const gap = parseFloat(carouselStyles.columnGap) || 20;
    const scrollAmount = card.offsetWidth + gap;

    carousel.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  // GSAP ScrollTrigger Animations: One-by-one progressive entrance reveals
  useGSAP(
    () => {
      // 1. Feature highlights header pills
      const highlights = gsap.utils.toArray<HTMLElement>(".feature-highlight-item");
      if (highlights.length > 0) {
        gsap.fromTo(
          highlights,
          { opacity: 0, y: 16 },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
            clearProps: "transform,opacity",
          }
        );
      }

      // 2. Left introduction elements: staggered luxury reveal
      const introElements = gsap.utils.toArray<HTMLElement>(".services-intro-item");
      if (introElements.length > 0) {
        gsap.fromTo(
          introElements,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: introRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
            clearProps: "transform,opacity",
          }
        );
      }

      // 3. One-by-one progressive scroll-triggered reveals for each service card
      const cardElements = gsap.utils.toArray<HTMLElement>("[data-service-card]");
      cardElements.forEach((card, index) => {
        const imgWrap = card.querySelector(".service-image-wrap");
        const titleEl = card.querySelector(".service-title-el");
        const descEl = card.querySelector(".service-desc-el");
        const badgeEl = card.querySelector(".service-badge-el");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          delay: index * 0.12, // Progressive staggered entrance so items appear one by one
        });

        // Image container reveal with smooth fade-in and slight upward movement (750ms)
        if (imgWrap) {
          tl.fromTo(
            imgWrap,
            { opacity: 0, y: 26 },
            {
              opacity: 1,
              y: 0,
              duration: 0.75,
              ease: "power2.out",
              clearProps: "transform,opacity",
            }
          );
        }

        // Category badge entrance
        if (badgeEl) {
          tl.fromTo(
            badgeEl,
            { opacity: 0, scale: 0.94 },
            {
              opacity: 1,
              scale: 1,
              duration: 0.5,
              ease: "power2.out",
              clearProps: "transform,opacity",
            },
            "-=0.5"
          );
        }

        // Service title with subtle staggered animation
        if (titleEl) {
          tl.fromTo(
            titleEl,
            { opacity: 0, y: 14 },
            {
              opacity: 1,
              y: 0,
              duration: 0.65,
              ease: "power2.out",
              clearProps: "transform,opacity",
            },
            "-=0.45"
          );
        }

        // Service description with subtle staggered animation
        if (descEl) {
          tl.fromTo(
            descEl,
            { opacity: 0, y: 10 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power2.out",
              clearProps: "transform,opacity",
            },
            "-=0.45"
          );
        }
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="featured-services"
      aria-labelledby="featured-services-heading"
      className="bg-transparent px-2 pb-2 sm:px-3 sm:pb-3 lg:px-4 lg:pb-4"
    >
      {/* Luxury Container: Light-brown, Champagne-gold (#D6BC96) & Soft Ivory (#F5F0E8) */}
      <div className="mx-auto max-w-[1320px] overflow-hidden rounded-[26px] border border-[#D6BC96]/35 bg-gradient-to-b from-[#FAF7F2] via-[#F5F0E8] to-[#EFE8DC] px-5 py-7 font-sans text-[#38271F] shadow-[0_20px_55px_-25px_rgba(56,39,31,0.22)] sm:rounded-[34px] sm:px-7 sm:py-8 lg:px-10 lg:py-9">
        
        {/* Top Feature Highlights */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-5 border-b border-[#D6BC96]/30 pb-5 sm:grid-cols-4 sm:gap-5 sm:pb-6">
          {featureHighlights.map((item) => (
            <div
              key={item.title}
              className="feature-highlight-item flex min-w-0 items-start gap-2.5 sm:gap-3"
            >
              <span
                aria-hidden="true"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#D6BC96]/60 bg-white/70 text-base text-[#B99A70] shadow-sm"
              >
                {item.icon}
              </span>

              <div className="min-w-0">
                <h3 className={`${inter.className} text-[9px] font-semibold leading-4 tracking-[0.08em] uppercase text-[#38271F] sm:text-[10px]`}>
                  {item.title}
                </h3>
                <p className="mt-0.5 text-[11px] leading-4 text-[#A9896B] sm:text-xs">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Introduction and Service Cards Layout */}
        <div className="grid gap-7 pt-7 sm:pt-8 lg:grid-cols-[0.8fr_2fr] lg:items-center lg:gap-8 lg:pt-8">
          
          {/* Left Introduction */}
          <div
            ref={introRef}
            className="flex min-w-0 flex-col items-start justify-center"
          >
            <div className="services-intro-item mb-2.5 inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#B99A70]" />
              <p className={`${inter.className} text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.24em] text-[#B99A70]`}>
                DISCOVER OUR SERVICES
              </p>
            </div>

            <h2
              id="featured-services-heading"
              className={`${cormorant.className} services-intro-item max-w-sm text-[32px] font-normal leading-[1.12] tracking-normal text-[#38271F] sm:text-4xl lg:text-[42px]`}
            >
              Beauty for your most{" "}
              <span className="italic font-medium text-[#B99A70]">
                special moments.
              </span>
            </h2>

            <p className="services-intro-item mt-3 max-w-sm text-sm leading-6 text-[#38271F]/80 sm:text-[15px]">
              From bridal makeovers to everyday beauty care, discover
              services designed around you.
            </p>

            <Link
              href="/services"
              className="services-intro-item group relative isolate mt-6 sm:mt-10 inline-flex items-center gap-2 overflow-hidden rounded-full border border-[#D6BC96] bg-gradient-to-br from-white/95 via-[#F5F0E8] to-[#E8D7C2]/70 px-6 py-3 text-xs font-semibold tracking-[0.06em] text-[#38271F] shadow-[0_4px_16px_rgba(214,188,150,0.25)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-[#B99A70] hover:shadow-[0_8px_24px_rgba(214,188,150,0.4)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B99A70]"
            >
              <span>VIEW ALL SERVICES</span>
              <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.2] text-[#B99A70] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Service Cards — Progressive One-by-One Reveal + Gentle Auto-Scroll */}
          <div className="relative min-w-0">
            <div className="relative">
              
              {/* Prev Arrow Button */}
              <button
                type="button"
                onClick={() => scrollServices("left")}
                disabled={!canScrollLeft}
                aria-label="Scroll to previous services"
                className={`absolute left-0 top-[40%] z-20 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#D6BC96] bg-[#F5F0E8] text-[#38271F] shadow-[0_4px_14px_rgba(56,39,31,0.12)] transition-all duration-300 hover:bg-[#D6BC96] hover:text-[#38271F] hover:shadow-[0_6px_20px_rgba(214,188,150,0.4)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B99A70] ${
                  canScrollLeft
                    ? "pointer-events-auto scale-100 opacity-100"
                    : "pointer-events-none scale-90 opacity-0"
                }`}
              >
                <ChevronLeft className="h-4 w-4 stroke-[2.2]" />
              </button>

              {/* Next Arrow Button */}
              <button
                type="button"
                onClick={() => scrollServices("right")}
                disabled={!canScrollRight}
                aria-label="Scroll to next services"
                className={`absolute right-0 top-[40%] z-20 flex h-10 w-10 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#D6BC96] bg-[#F5F0E8] text-[#38271F] shadow-[0_4px_14px_rgba(56,39,31,0.12)] transition-all duration-300 hover:bg-[#D6BC96] hover:text-[#38271F] hover:shadow-[0_6px_20px_rgba(214,188,150,0.4)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B99A70] ${
                  canScrollRight
                    ? "pointer-events-auto scale-100 opacity-100"
                    : "pointer-events-none scale-90 opacity-0"
                }`}
              >
                <ChevronRight className="h-4 w-4 stroke-[2.2]" />
              </button>

              {/* Scrollable Service Cards Container */}
              <div
                ref={carouselRef}
                onScroll={updateScrollButtons}
                onMouseEnter={() => {
                  isHoveredRef.current = true;
                }}
                onMouseLeave={() => {
                  isHoveredRef.current = false;
                }}
                onTouchStart={pauseAutoScroll}
                onTouchMove={pauseAutoScroll}
                onWheel={pauseAutoScroll}
                className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
                {services.map((service) => (
                  <article
                    key={service.number}
                    data-service-card
                    className="group w-[82%] min-w-0 shrink-0 snap-start sm:w-[calc(50%-10px)] md:w-[calc(50%-10px)] lg:w-[31%]"
                  >
                    <div className="relative block overflow-hidden rounded-[18px] border border-[#D6BC96]/40 bg-[#FDFBF7] p-2.5 transition-all duration-500 hover:border-[#D6BC96] hover:shadow-[0_14px_36px_rgba(56,39,31,0.08)] focus-within:border-[#D6BC96]">
                      
                      {/* Service Image with Gentle Hover Scale & Subtle Shadow */}
                      <div className="service-image-wrap relative aspect-[4/3] overflow-hidden rounded-[14px] bg-[#E8D7C2]/40 md:aspect-[3/3.7] lg:aspect-[4/4.5] shadow-sm">
                        <img
                          src={service.image}
                          alt={service.imageAlt}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035] motion-reduce:transition-none"
                        />

                        {/* Subtle Grounding Gradient */}
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#38271F]/80 via-[#38271F]/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />

                        {/* Category Tag Badge */}
                        <span className="service-badge-el absolute left-3 top-3 max-w-[calc(100%-3rem)] rounded-full border border-white/50 bg-[#F5F0E8]/95 px-3 py-1 text-[8.5px] font-semibold tracking-[0.1em] text-[#38271F] uppercase shadow-sm backdrop-blur-md">
                          {service.tag}
                        </span>

                        {/* Service Number Accent */}
                        <span className="absolute right-3 top-3 text-[11px] font-mono font-bold tracking-wider text-white/85">
                          {service.number}
                        </span>

                        {/* WhatsApp Enquire Button with Champagne-Gold Sheen */}
                        <a
                          href={getWhatsAppLink(service.message)}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Enquire on WhatsApp about ${service.title}`}
                          className="absolute inset-x-3 bottom-3 flex items-center justify-center transition-all duration-300 ease-out sm:translate-y-2 sm:opacity-95 sm:group-hover:translate-y-0 sm:group-hover:opacity-100"
                        >
                          <span className="inline-flex min-h-10 w-full items-center justify-center gap-1.5 rounded-full border border-[#D6BC96] bg-[#38271F]/90 px-4 py-2 text-[10px] font-semibold tracking-[0.1em] text-[#F5F0E8] shadow-[0_4px_16px_rgba(56,39,31,0.3)] backdrop-blur-md transition-all duration-300 group-hover:border-[#D6BC96] group-hover:bg-[#38271F] group-hover:shadow-[0_0_20px_rgba(214,188,150,0.45)]">
                            <span>ENQUIRE VIA WHATSAPP</span>
                            <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.2] text-[#D6BC96]" />
                          </span>
                        </a>
                      </div>

                      {/* Service Details: Title & Description with Staggered Entrance */}
                      <div className="pt-3.5 pb-1 px-1">
                        <h3 className={`${cormorant.className} service-title-el text-lg font-medium leading-snug tracking-normal text-[#38271F] group-hover:text-[#B99A70] transition-colors sm:text-lg lg:text-[19px]`}>
                          {service.title}
                        </h3>

                        <p className="service-desc-el mt-1.5 text-xs leading-[1.65] text-[#38271F]/75 sm:text-[12.5px]">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
