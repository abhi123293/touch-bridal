"use client";

import Link from "next/link";
import { motion } from "motion/react";

const services = [
  {
    number: "01",
    title: "Bridal Makeovers",
    description:
      "Beautifully personalized bridal looks for your special day.",
    image: "/images/bridal-01.jpg",
    tag: "BRIDAL BEAUTY",
  },
  {
    number: "02",
    title: "Beauty & Grooming",
    description:
      "Beauty and grooming services designed around you.",
    image: "/images/bridal-02.jpg",
    tag: "EVERYDAY CARE",
  },
  {
    number: "03",
    title: "Wedding Styling",
    description:
      "Elegant hairstyling and finishing touches for every occasion.",
    image: "/images/bridal-03.jpg",
    tag: "SPECIAL OCCASIONS",
  },
];

const whatsappLink =
  "https://wa.me/919789376174?text=" +
  encodeURIComponent(
    "Hi, I would like to enquire about your salon services."
  );

export default function FeaturedServices() {
  return (
   <section
  id="featured-services"
  className="bg-transparent px-2 pb-2 sm:px-3 sm:pb-3 lg:px-4 lg:pb-4"
>
 <div className="mx-auto max-w-[1320px] overflow-hidden rounded-[26px] bg-[#f7f1e9] px-5 py-7 font-sans text-[#2d1b13] sm:rounded-[34px] sm:px-8 sm:py-9 lg:px-10 lg:py-10">

    {/* Feature highlights */}
    <div className="grid grid-cols-2 gap-x-5 gap-y-5 border-b border-[#3a2418]/15 pb-6 sm:grid-cols-4 sm:gap-5 sm:pb-7">
      {[
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
      ].map((item) => (
        <div key={item.title} className="flex items-start gap-3">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#3a2418]/20 text-lg text-[#8b4a28]">
            {item.icon}
          </span>
          <div>
            <h3 className="text-[9px] font-semibold tracking-[0.08em] sm:text-[10px]">
              {item.title}
            </h3>
            <p className="mt-1 text-[11px] leading-4 text-[#756356] sm:text-xs">
              {item.text}
            </p>
          </div>
        </div>
      ))}
    </div>

    {/* Editorial services layout */}
    <div className="grid gap-6 pt-7 sm:pt-8 lg:grid-cols-[0.72fr_2fr] lg:gap-8 lg:pt-9">

      {/* Left-side heading */}
      <div className="flex flex-col items-start justify-center">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#a47b4e]">
          DISCOVER OUR SERVICES
        </p>

        <h2 className="max-w-sm text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl lg:text-[38px]">
          Our most loved
          <span className="block text-[#8b4a28]">
            beauty services.
          </span>
        </h2>

        <p className="mt-3 max-w-xs text-sm leading-6 text-[#756356]">
          Thoughtful beauty, bridal artistry and styling for your special moments.
        </p>

        <Link
          href="/services"
          className="mt-5 inline-flex items-center gap-2 border-b border-[#8b4a28]/50 pb-1 text-xs font-semibold text-[#8b4a28] transition-colors hover:text-[#2d1b13]"
        >
          VIEW ALL SERVICES <span aria-hidden="true">↗</span>
        </Link>
      </div>

      {/* Three compact service cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-4">
        {services.map((service, index) => (
          <motion.article
            key={service.number}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.45,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            className="min-w-0"
          >
            <Link
              href="/bridal-gallery"
              aria-label={`Explore ${service.title}`}
              className="group relative block overflow-hidden rounded-[12px] bg-[#e8dccd]"
            >
              <div className="aspect-[4/3] overflow-hidden sm:aspect-[3/3.5] lg:aspect-[4/4.5]">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <span className="absolute left-2 top-2 rounded-full bg-[#f7f1e9]/90 px-2 py-1 text-[8px] font-semibold tracking-[0.08em] text-[#3a2418] sm:left-2.5 sm:top-2.5">
                {service.tag}
              </span>
            </Link>

            <div className="pt-3">
              <p className="text-[9px] font-medium tracking-[0.12em] text-[#a47b4e]">
                SERVICE {service.number}
              </p>

              <h3 className="mt-1 text-sm font-semibold leading-snug sm:text-[15px]">
                {service.title}
              </h3>

              <p className="mt-1 text-xs leading-5 text-[#756356]">
                {service.description}
              </p>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#8b4a28] hover:text-[#2d1b13]"
              >
                Enquire <span aria-hidden="true">↗</span>
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </div>
</section>
  );
}