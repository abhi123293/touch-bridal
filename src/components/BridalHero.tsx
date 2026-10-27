"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { Open_Sans } from "next/font/google";


gsap.registerPlugin(useGSAP);

// Tall, condensed display font for the headline (like the reference design).
const display = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});


const bridalImages = [
  {
    src: "/images/bridal-01.jpg",
    alt: "Traditional bridal makeup",
    label: "Bridal Makeup",
  },
  {
    src: "/images/bridal-02.jpg",
    alt: "Elegant bridal look",
    label: "Bridal Beauty",
  },
  {
    src: "/images/bridal-03.jpg",
    alt: "Bridal hairstyle",
    label: "Hair & Styling",
  },
  {
    src: "/images/bridal-04.jpg",
    alt: "Wedding reception makeup",
    label: "Reception Looks",
  },
];

const paragraphText =
  "From bridal makeovers to everyday beauty and grooming, we make every occasion special.";

// TODO: replace these placeholder details with your real information.
const happyCount = "500+";
const trustPoints = [
  { title: "Free Consultation", detail: "before your big day" },
  { title: "Premium Products", detail: "skin-safe & long lasting" },
];

const navLinks = [
  { name: "Home", href: "/", chevron: false },
  { name: "Services", href: "/services", chevron: true },
  { name: "Bridal Gallery", href: "/bridal-gallery", chevron: false },
];

const services = [
  { number: "01", title: "Bridal Makeup", detail: "Your signature look" },
  { number: "02", title: "Hair Styling", detail: "Beautifully finished" },
  { number: "03", title: "Beauty Services", detail: "Care made personal" },
  { number: "04", title: "Bridal Gallery", detail: "Explore our work" },
];

/* ---------- Small inline icons ---------- */

type IconProps = { className?: string };

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

function SearchIcon({ className }: IconProps) {
  return (
    <svg {...iconProps} className={className}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m20 20-4-4" />
    </svg>
  );
}

function HeartIcon({ className }: IconProps) {
  return (
    <svg {...iconProps} className={className}>
      <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z" />
    </svg>
  );
}

function ChevronDownIcon({ className }: IconProps) {
  return (
    <svg {...iconProps} className={className}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function ArrowIcon({ className, direction = "right" }: IconProps & { direction?: "left" | "right" }) {
  return (
    <svg {...iconProps} className={className}>
      {direction === "right" ? (
        <path d="M5 12h14m-6-6 6 6-6 6" />
      ) : (
        <path d="M19 12H5m6-6-6 6 6 6" />
      )}
    </svg>
  );
}

function CalendarIcon({ className }: IconProps) {
  return (
    <svg {...iconProps} className={className}>
      <rect x="4" y="5" width="16" height="15" rx="2.5" />
      <path d="M8 3v4m8-4v4M4 10h16" />
    </svg>
  );
}

function ShieldIcon({ className }: IconProps) {
  return (
    <svg {...iconProps} className={className}>
      <path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function SparkIcon({ className }: IconProps) {
  return (
    <svg {...iconProps} className={className}>
      <path d="M12 3c.6 4.2 2.8 6.4 7 7-4.2.6-6.4 2.8-7 7-.6-4.2-2.8-6.4-7-7 4.2-.6 6.4-2.8 7-7Z" />
    </svg>
  );
}

/* ---------- Component ---------- */

export default function BridalHero() {
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState(0);

  const nextIndex = (active + 1) % bridalImages.length;

  const goPrev = () =>
    setActive((current) =>
      current === 0 ? bridalImages.length - 1 : current - 1,
    );
  const goNext = () => setActive((current) => (current + 1) % bridalImages.length);

  // Gentle parallax on the main arch image while scrolling.
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const archY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.fromTo(
          ".hero-eyebrow",
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.7 },
          0.1,
        );

       // Heading: blur-to-sharp reveal, one line at a time
tl.fromTo(
  ".hero-line",
  {
    opacity: 0,
    filter: "blur(18px)",
    y: 30,
  },
  {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    duration: 1.1,
    stagger: 0.18,
    ease: "power3.out",
  },
  0.2,
);

        tl.fromTo(
          ".hero-description",
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.8 },
          0.7,
        );


        // CTA buttons: reveal individually with a soft blur
tl.fromTo(
  ".hero-cta",
  {
    opacity: 0,
    filter: "blur(12px)",
    y: 18,
    scale: 0.97,
  },
  {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    scale: 1,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out",
  },
  1.5,
);
        tl.fromTo(
          ".hero-fade",
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.12 },
          0.9,
        );

        tl.fromTo(
          ".hero-visual",
          { opacity: 0, y: 30, scale: 0.97 },
          { opacity: 1, y: 0, scale: 1, duration: 1.1 },
          0.3,
        );

        // The floating info cards drift softly up and down.
        gsap.to(".float-card", {
          y: -8,
          duration: 2.6,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          stagger: 0.5,
        });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
       gsap.set(
  ".hero-eyebrow, .hero-line, .hero-description, .hero-fade, .hero-cta, .hero-visual",
  {
    opacity: 1,
    filter: "none",
    y: 0,
    scale: 1,
  },
);
      });

      return () => mm.revert();
    },
    { scope: contentRef },
  );

  const whatsappLink =
    "https://wa.me/919789376174?text=" +
    encodeURIComponent(
      "Hi, I would like to enquire about bridal makeup and salon appointments.",
    );

  return (
    <section
  ref={heroRef}
  className="relative overflow-hidden bg-[radial-gradient(ellipse_at_top_left,#b58b66_0%,#6a4430_42%,#2f1d14_100%)] px-2 pb-2 pt-4 sm:px-3 sm:pb-3 sm:pt-5 lg:px-4 lg:pb-4 lg:pt-26"
>
      {/* Rounded cream frame, like a browser card */}
      <div
        ref={contentRef}
        className="relative mx-auto max-w-[1320px] overflow-hidden rounded-[26px] bg-[#f7f1e9] text-[#2d1b13] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.65)] sm:rounded-[34px]"
      >
    
     
        {/* HERO */}
<div className="px-5 pb-3 pt-8 sm:px-8 sm:pb-4 sm:pt-10 lg:px-12 lg:pb-4 lg:pt-10">
          <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-6">
            {/* LEFT: HEADLINE AND BOOKING */}
            <div className="relative z-10 flex flex-col items-start">
              <p className="hero-eyebrow mb-6 flex items-center gap-3 text-[9px] font-medium uppercase tracking-[0.22em] text-[#a8663f] opacity-0 sm:text-[10px]">
                <span className="h-px w-8 bg-[#a8663f]" />Touch Bridal Makeover Studio & Unisex Salon
              </p>

              <h1
                className={`${display.className} text-[clamp(2.3rem,4.8vw,4.5rem)] font-bold uppercase leading-[1] tracking-[-0.02em] text-[#2d1b13]`}
              >
                <span className="hero-line block opacity-0">
  Your Dream Bridal
</span>

<span className="hero-line block opacity-0">
  Look, Beautifully
</span>

<span className="hero-line block text-[#8b4a28] opacity-0">
  Brought to Life.
</span>
              </h1>

              <p className="hero-description mt-7 max-w-[400px] text-sm leading-7 text-[#6e5b4e] opacity-0 sm:text-[15px]">
                {paragraphText}
              </p>

             <div className="mt-8 flex flex-wrap items-center gap-4">

  {/* PRIMARY: Neon Glass Book Appointment */}
  <a
    href={whatsappLink}
    target="_blank"
    rel="noopener noreferrer"
    className="hero-cta opacity-0 group relative isolate inline-flex min-h-12 items-center justify-center gap-2.5 overflow-hidden rounded-full border border-white/50 bg-gradient-to-br from-[#cba879] via-[#8b4a28] to-[#382319] px-7 text-xs font-semibold tracking-[0.04em] text-white shadow-[inset_0_1px_2px_rgba(255,255,255,0.7),inset_0_-5px_12px_rgba(45,27,19,0.35),0_0_14px_rgba(201,164,119,0.35),0_8px_24px_rgba(45,27,19,0.2)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-[#f4d7a8] hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.8),0_0_24px_rgba(201,164,119,0.75),0_12px_30px_rgba(45,27,19,0.3)]"
  >
    {/* Glass highlight */}
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-gradient-to-b from-white/25 via-transparent to-black/10"
    />

    <span className="relative">
      Book an Appointment
    </span>

  </a>

  {/* SECONDARY: Frosted Glass Gallery */}
  <Link
    href="/bridal-gallery"
    className="hero-cta opacity-0 group relative isolate inline-flex min-h-12 items-center justify-center gap-2.5 overflow-hidden rounded-full border border-[#b18a5b]/40 bg-gradient-to-br from-white/85 via-white/55 to-[#d8b98f]/30 px-7 text-xs font-semibold tracking-[0.04em] text-[#3a2418] shadow-[inset_0_1px_2px_rgba(255,255,255,0.95),inset_0_-3px_8px_rgba(139,74,40,0.08),0_0_12px_rgba(201,164,119,0.18),0_6px_20px_rgba(45,27,19,0.1)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-[#b18a5b] hover:shadow-[inset_0_1px_2px_rgba(255,255,255,1),0_0_22px_rgba(201,164,119,0.5),0_10px_26px_rgba(45,27,19,0.15)]"
  >
    {/* Glossy overlay */}
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-gradient-to-b from-white/65 via-transparent to-[#b18a5b]/10"
    />

    <span className="relative">
      Explore Bridal Gallery
    </span>

  </Link>

</div>

              <div className="hero-fade mt-8 flex items-center gap-3 opacity-0">
                <div className="flex -space-x-2.5">
                  {bridalImages.map((image) => (
                    <img
                      key={image.src}
                      src={image.src}
                      alt=""
                      loading="lazy"
                      className="h-9 w-9 rounded-full border-2 border-[#f7f1e9] object-cover"
                    />
                  ))}
                </div>
                <div className="leading-tight">
                  <p
                    className={`${display.className} text-lg font-semibold text-[#2d1b13]`}
                  >
                    {happyCount}
                  </p>
                  <p className="text-[10px] text-[#8a7566]">Happy Brides</p>
                </div>
              </div>
            </div>

            {/* RIGHT: ARCH IMAGE WITH FLOATING CARDS */}
            <div className="hero-visual relative mx-auto h-[430px] w-full max-w-[560px] opacity-0 sm:h-[540px] lg:h-[580px] lg:max-w-none">
              {/* Soft backdrop shape */}
              <div className="absolute inset-x-[8%] bottom-0 top-[14%] rounded-[44px] bg-[#eadfce]" />

              {/* Main arch image (parallax) */}
              <motion.div
                style={{ y: archY }}
                className="absolute right-[8%] top-[2%] h-[88%] w-[60%]"
              >
                <div className="relative h-full w-full overflow-hidden rounded-b-[32px] rounded-t-[999px] bg-[#e0d1bd] shadow-[0_30px_60px_-30px_rgba(45,27,19,0.6)]">
                  {bridalImages.map((image, index) => (
                    <img
                      key={image.src}
                      src={image.src}
                      alt={image.alt}
                      loading={index === 0 ? "eager" : "lazy"}
                      className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out ${
                        index === active ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  ))}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#24150e]/35 via-transparent to-transparent" />
                </div>
              </motion.div>

              {/* Small overlapping photo */}
              <div className="float-card absolute bottom-[3%] left-[1%] w-[30%] max-w-[170px]">
                <div className="aspect-[3/4] overflow-hidden rounded-2xl border-[5px] border-[#f7f1e9] shadow-[0_18px_36px_-18px_rgba(45,27,19,0.55)]">
                  <img
                    src={bridalImages[(active + 2) % bridalImages.length].src}
                    alt={bridalImages[(active + 2) % bridalImages.length].alt}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* Top-right card: featured look with arrows */}
              <div className="float-card absolute right-0 top-[5%] w-[46%] max-w-[215px]">
                <div className="rounded-2xl bg-white/90 p-3 shadow-[0_18px_40px_-20px_rgba(45,27,19,0.5)] backdrop-blur">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={bridalImages[nextIndex].src}
                      alt=""
                      loading="lazy"
                      className="h-11 w-11 shrink-0 rounded-lg object-cover sm:h-12 sm:w-12"
                    />
                    <div className="min-w-0 leading-tight">
                      <p className="text-[8px] uppercase tracking-[0.14em] text-[#8a7566] sm:text-[9px]">
                        Featured Look
                      </p>
                      <p className="truncate text-[11px] font-semibold text-[#2d1b13] sm:text-xs">
                        {bridalImages[active].label}
                      </p>
                      <p className="mt-0.5 text-[8px] text-[#8a7566] sm:text-[9px]">
                        Now booking
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center justify-end gap-2">
                    <button
                      type="button"
                      aria-label="Previous look"
                      onClick={goPrev}
                      className="flex h-6 w-6 items-center justify-center rounded-full border border-[#2d1b13]/15 text-[#2d1b13] transition-colors hover:bg-[#2d1b13] hover:text-white"
                    >
                      <ArrowIcon direction="left" className="h-3 w-3" />
                    </button>
                    <button
                      type="button"
                      aria-label="Next look"
                      onClick={goNext}
                      className="flex h-6 w-6 items-center justify-center rounded-full border border-[#2d1b13]/15 text-[#2d1b13] transition-colors hover:bg-[#2d1b13] hover:text-white"
                    >
                      <ArrowIcon className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Bottom-right card: trust points */}
              <div className="float-card absolute bottom-[4%] right-0 w-[48%] max-w-[225px]">
                <div className="space-y-3 rounded-2xl bg-white/90 p-3.5 shadow-[0_18px_40px_-20px_rgba(45,27,19,0.5)] backdrop-blur">
                  {trustPoints.map((point, index) => (
                    <div key={point.title} className="flex items-center gap-2.5">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#f1e6d6] text-[#8b4a28]">
                        {index === 0 ? (
                          <CalendarIcon className="h-4 w-4" />
                        ) : (
                          <ShieldIcon className="h-4 w-4" />
                        )}
                      </span>
                      <div className="min-w-0 leading-tight">
                        <p className="text-[10px] font-semibold text-[#2d1b13] sm:text-[11px]">
                          {point.title}
                        </p>
                        <p className="text-[8px] text-[#8a7566] sm:text-[9px]">
                          {point.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* SERVICES STRIP */}
          <div className="mt-10 rounded-2xl border border-[#2d1b13]/10 bg-white/50 px-5 py-5 sm:mt-12 sm:px-7">
            <div className="grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-4">
              {services.map((item) => (
                <div key={item.number} className="flex gap-3">
                  <span
                    className={`${display.className} pt-0.5 text-sm text-[#a8663f]`}
                  >
                    {item.number}
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-[#2d1b13] sm:text-sm">
                      {item.title}
                    </p>
                    <p className="mt-1 text-[10px] text-[#8a7566] sm:text-xs">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FOOTER NOTE */}
          <div className="flex items-center justify-between gap-4 pt-5">
        
          </div>
        </div>
      </div>
    </section>
  );
}
