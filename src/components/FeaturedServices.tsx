
"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { useRef, useState, useCallback, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger, useGSAP);

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
  const introRef = useRef<HTMLDivElement>(null);
const carouselRef = useRef<HTMLDivElement>(null);

const [canScrollLeft, setCanScrollLeft] = useState(false);
const [canScrollRight, setCanScrollRight] = useState(true);

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

const scrollServices = (direction: "left" | "right") => {
  const carousel = carouselRef.current;

  if (!carousel) return;

  const card = carousel.querySelector<HTMLElement>(
    "[data-service-card]"
  );

  if (!card) return;

  const carouselStyles = window.getComputedStyle(carousel);
  const gap = parseFloat(carouselStyles.columnGap) || 0;
  const scrollAmount = card.offsetWidth + gap;

  carousel.scrollBy({
    left: direction === "right" ? scrollAmount : -scrollAmount,
    behavior: "smooth",
  });
};
  
useGSAP(
  () => {
    const elements = gsap.utils.toArray<HTMLElement>(
      ".services-intro-item"
    );

    gsap.set(elements, {
      opacity: 0,
      y: 24,
    });

    gsap.to(elements, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: introRef.current,
        start: "top 75%",
        toggleActions: "play none none none",
      },
      clearProps: "transform",
    });
  },
  {
    scope: introRef,
  }
);


  return (
    <section
      id="featured-services"
      aria-labelledby="featured-services-heading"
      className="bg-transparent px-2 pb-2 sm:px-3 sm:pb-3 lg:px-4 lg:pb-4"
    >
      <div className="mx-auto max-w-[1320px] overflow-hidden rounded-[26px] border border-[#3a2418]/[0.06] bg-[#f7f1e9] px-5 py-7 font-sans text-[#2d1b13] shadow-[0_16px_45px_-35px_rgba(45,27,19,0.3)] sm:rounded-[34px] sm:px-7 sm:py-8 lg:px-10 lg:py-9">
        {/* Feature highlights */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-5 border-b border-[#3a2418]/15 pb-5 sm:grid-cols-4 sm:gap-5 sm:pb-6">
          {featureHighlights.map((item) => (
            <div
              key={item.title}
              className="flex min-w-0 items-start gap-2.5 sm:gap-3"
            >
              <span
                aria-hidden="true"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#3a2418]/20 text-lg text-[#8b4a28]"
              >
                {item.icon}
              </span>

              <div className="min-w-0">
                <h3 className="text-[9px] font-semibold leading-4 tracking-[0.06em] sm:text-[10px]">
                  {item.title}
                </h3>
                <p className="mt-0.5 text-[11px] leading-4 text-[#756356] sm:text-xs">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Introduction and service cards */}
        <div className="grid gap-7 pt-7 sm:pt-8 lg:grid-cols-[0.78fr_2fr] lg:items-center lg:gap-8 lg:pt-8">
          {/* Left introduction */}
          <div
  ref={introRef}
  className="flex min-w-0 flex-col items-start justify-center"
>
            <p className="services-intro-item mb-3 -mt-5 ml-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#a8663f] sm:-mt-8 sm:ml-2">
  DISCOVER OUR SERVICES
</p>

            <h2
              id="featured-services-heading"
              className="services-intro-item max-w-sm text-[30px] font-semibold leading-[1.12] tracking-[-0.035em] sm:text-4xl lg:text-[40px]"
            >
              Beauty for your most{" "}
              <span className="text-[#8b4a28]">
                special moments.
              </span>
            </h2>

            <p className="services-intro-item mt-3 max-w-sm text-sm leading-6 text-[#756356] sm:text-[15px]">
              From bridal makeovers to everyday beauty care, discover
              services designed around you.
            </p>

           <Link
  href="/services"
  className="services-intro-item group relative isolate mt-20 inline-flex items-center gap-2 overflow-hidden rounded-full border border-[#b18a5b]/50 bg-gradient-to-br from-white/80 via-[#f7f1e9]/70 to-[#d8b98f]/35 px-5 py-3 text-xs font-semibold tracking-[0.04em] text-[#8b4a28] shadow-[inset_0_1px_2px_rgba(255,255,255,0.95),inset_0_-3px_8px_rgba(139,74,40,0.08),0_0_12px_rgba(201,164,119,0.2),0_5px_16px_rgba(45,27,19,0.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-[#b18a5b] hover:shadow-[inset_0_1px_2px_rgba(255,255,255,1),0_0_18px_rgba(201,164,119,0.5),0_8px_22px_rgba(45,27,19,0.12)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8b4a28] ml-12"
>
  <span>VIEW ALL SERVICES</span>

</Link>
          </div>

       
{/* FOUR SERVICE CARDS — HORIZONTAL SCROLL */}
<div className="relative min-w-0">

  {/* Carousel viewport */}
  <div className="relative">

    {/* LEFT ARROW */}
    <button
      type="button"
      onClick={() => scrollServices("left")}
      disabled={!canScrollLeft}
      aria-label="Scroll to previous services"
      className={`absolute left-0 top-[40%] z-20 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#8b4a28]/25 bg-[#f7f1e9] text-lg text-[#8b4a28] shadow-md transition-all duration-300 hover:bg-[#8b4a28] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8b4a28] ${
        canScrollLeft
          ? "pointer-events-auto scale-100 opacity-100"
          : "pointer-events-none scale-90 opacity-0"
      }`}
    >
      <span aria-hidden="true">←</span>
    </button>

    {/* RIGHT ARROW */}
    <button
      type="button"
      onClick={() => scrollServices("right")}
      disabled={!canScrollRight}
      aria-label="Scroll to next services"
      className={`absolute right-0 top-[40%] z-20 flex h-10 w-10 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#8b4a28]/25 bg-[#f7f1e9] text-lg text-[#8b4a28] shadow-md transition-all duration-300 hover:bg-[#8b4a28] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8b4a28] ${
        canScrollRight
          ? "pointer-events-auto scale-100 opacity-100"
          : "pointer-events-none scale-90 opacity-0"
      }`}
    >
      <span aria-hidden="true">→</span>
    </button>

    {/* SCROLLABLE CARDS */}
    <div
      ref={carouselRef}
      onScroll={updateScrollButtons}
      className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      {services.map((service, index) => (
        <motion.article
          key={service.number}
          data-service-card
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.45,
            delay: index * 0.1,
            ease: "easeOut",
          }}
          className="group w-[82%] min-w-0 shrink-0 snap-start sm:w-[calc(50%-10px)] md:w-[calc(50%-10px)] lg:w-[31%]"
        >
          <Link
            href="/bridal-gallery"
            aria-label={`View the bridal gallery for ${service.title}`}
            className="group relative block overflow-hidden rounded-[13px] border border-[#3a2418]/10 bg-[#e8dccd] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8b4a28]"
          >
            {/* Service image */}
            <div className="relative aspect-[4/3] overflow-hidden md:aspect-[3/3.7] lg:aspect-[4/4.5]">
              <img
                src={service.image}
                alt={service.imageAlt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transition-none"
              />

              {/* Image gradient */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#2d1b13]/65 via-transparent to-transparent opacity-80" />

              {/* Category badge */}
              <span className="absolute left-2.5 top-2.5 max-w-[calc(100%-1.25rem)] rounded-full border border-white/40 bg-[#f7f1e9]/95 px-2.5 py-1.5 text-[8px] font-semibold tracking-[0.07em] text-[#3a2418] sm:text-[9px]">
                {service.tag}
              </span>

              {/* Enquire label */}
              <span className="absolute inset-x-3 bottom-3 flex translate-y-0 items-center justify-center opacity-100 transition-all duration-300 ease-out sm:translate-y-3 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100 sm:group-focus-within:translate-y-0 sm:group-focus-within:opacity-100">
                <span className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full border border-[#e7c9a0]/70 bg-[#2d1b13]/80 px-5 py-2.5 text-[10px] font-semibold tracking-[0.09em] text-[#fff5e6] shadow-[0_0_12px_rgba(231,201,160,0.2),inset_0_1px_2px_rgba(255,255,255,0.12)] backdrop-blur-xl transition-all duration-300 group-hover:border-[#e7c9a0] group-hover:shadow-[0_0_18px_rgba(231,201,160,0.4)]">
                  ENQUIRE
                </span>
              </span>
            </div>
          </Link>

          {/* Service details */}
          <div className="pt-3">
            <h3 className="mt-1.5 text-base font-semibold leading-snug tracking-[-0.015em] sm:text-[15px] lg:text-base">
              {service.title}
            </h3>

            <p className="mt-1.5 text-xs leading-[1.65] text-[#756356] sm:text-[12px]">
              {service.description}
            </p>
          </div>
        </motion.article>
      ))}
    </div>
  </div>
</div>
        </div>
      </div>
    </section>
  );
}
