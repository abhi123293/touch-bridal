"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Bridal Gallery", href: "/bridal-gallery" },
];

const whatsappLink =
  "https://wa.me/919789376174?text=" +
  encodeURIComponent("Hi Touch! I'd love to book an appointment.");

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);



return (
  <header className="fixed inset-x-0 top-3 z-50 px-0 sm:top-5 sm:px-0 -mt-4">
    <nav
      className="w-full border border-black/10 bg-white/85 text-black shadow-[0_10px_35px_-18px_rgba(0,0,0,0.12)] backdrop-blur-2xl transition-all duration-500"
    >
      {/* NAVBAR MAIN */}
      <div className="flex items-center justify-between gap-3 px-4 py-3 sm:px-7 sm:py-3.5">

        {/* BRAND */}
       <Link
  href="/"
  className="group flex min-w-0 shrink items-center gap-3 sm:gap-4"
>
  {/* BRAND NAME */}
  <span className="shrink-0 text-[17px] font-semibold uppercase leading-none tracking-[0.12em] text-black transition-colors duration-300 group-hover:text-black/70 sm:text-[19px]">
    TOUCH
  </span>

  {/* BRAND DESCRIPTION */}
  <span className="border-l border-black/15 pl-3 text-left text-[9px] font-medium leading-tight tracking-[0.08em] text-black/60 sm:pl-4 sm:text-[11px]">
    Bridal Makeover Studio
    <br />
    &amp; Unisex Salon
  </span>
</Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const active = isActive(link.href);

            return (
              <Link
                key={link.name}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`group relative whitespace-nowrap rounded-full px-3 py-2 text-sm transition-colors duration-300 lg:px-4 lg:text-[14px] ${
                  active
                    ? "font-semibold text-black"
                    : "font-medium text-black/65 hover:text-black"
                }`}
              >
                {link.name}

                {/* MINIMAL BLACK UNDERLINE */}
                <span
                  className={`absolute inset-x-4 bottom-1 h-px origin-left bg-black transition-transform duration-500 ${
                    active
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* DESKTOP BOOKING BUTTON */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative hidden shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full border border-black bg-black px-5 py-2.5 text-xs font-semibold tracking-[0.04em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-black lg:inline-flex"
        >
          <span className="relative">
            Book an Appointment
          </span>

          <span className="relative transition-transform duration-300 group-hover:translate-x-1">
            ↗
          </span>
        </a>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          aria-label={
            menuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-1.5 rounded-full border border-black/15 bg-white/60 transition-colors duration-300 hover:bg-black/5 md:hidden"
        >
          <span
            className={`h-px w-5 bg-black transition-transform duration-300 ${
              menuOpen
                ? "translate-y-[4px] rotate-45"
                : ""
            }`}
          />

          <span
            className={`h-px w-5 bg-black transition-transform duration-300 ${
              menuOpen
                ? "-translate-y-[3px] -rotate-45"
                : ""
            }`}
          />
        </button>
      </div>

      {/* MOBILE NAVIGATION */}
      <div
        className={`grid transition-all duration-500 ease-out md:hidden ${
          menuOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-black/10 px-6 pb-6 pt-5">

            {/* MOBILE LINKS */}
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-xl font-medium transition-colors duration-300 ${
                    isActive(link.href)
                      ? "text-black"
                      : "text-black/65 hover:text-black"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* MOBILE BOOKING BUTTON */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="group relative mt-6 flex items-center justify-center gap-2 overflow-hidden rounded-full border border-black bg-black px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white hover:text-black"
            >
              <span className="relative">
                Book an Appointment
              </span>

              <span className="relative transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </a>

            {/* RESPONSE NOTE */}
            <p className="mt-4 text-center text-xs text-black/50">
              We usually reply within a few hours.
            </p>
          </div>
        </div>
      </div>
    </nav>
  </header>
);


}
