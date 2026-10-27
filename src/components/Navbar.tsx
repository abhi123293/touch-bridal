"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";

// Soft, elegant serif for the logo and menu headings.
const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

// Friendly, rounded sans for links and buttons.
const sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

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

  // Navbar becomes a little more solid once the page is scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`${sans.className} fixed inset-x-0 top-3 z-50 px-3 sm:top-5 sm:px-6`}
    >
      <nav
        className={`mx-auto max-w-[1280px] rounded-[28px] border border-[#a9844e]/25 text-[#3a2418] shadow-[0_14px_40px_-18px_rgba(45,27,19,0.55)] backdrop-blur-xl transition-all duration-500 ${
          scrolled ? "bg-[#f7f1e9]/95" : "bg-[#f7f1e9]/80"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-3 sm:px-7">
          {/* LOGO */}
          <Link href="/" className="group flex items-center gap-3">
            <span
              className={`${serif.className} flex h-10 w-10 items-center justify-center rounded-full bg-[#3a2418] text-xl font-semibold italic text-[#e7c9a0] transition-transform duration-500 group-hover:rotate-[-8deg]`}
            >
              T
            </span>
            <span className="leading-none">
              <span
                className={`${serif.className} block text-[26px] font-semibold tracking-wide`}
              >
                Touch
              </span>
              <span className="mt-0.5 block text-[10px] tracking-[0.08em] text-[#8a7566]">
                bridal &amp; unisex salon
              </span>
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
                  className={`group relative rounded-full px-4 py-2 text-[15px] transition-colors duration-300 ${
                    active
                      ? "font-semibold text-[#8b4a28]"
                      : "font-medium text-[#5b4334] hover:text-[#8b4a28]"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute inset-x-4 bottom-1 h-px origin-left bg-[#a8663f] transition-transform duration-500 ${
                      active
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* BOOKING BUTTON */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group hidden items-center gap-2.5 rounded-full bg-[#3a2418] py-2.5 pl-5 pr-2.5 text-sm font-medium text-[#f7f1e9] transition-colors duration-300 hover:bg-[#8b4a28] md:inline-flex"
          >
            Book a visit
            <span
              aria-hidden="true"
              className="flex h-7 w-7 items-center justify-center rounded-full bg-[#e7c9a0] text-sm text-[#3a2418] transition-transform duration-300 group-hover:rotate-45"
            >
              ↗
            </span>
          </a>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-[#3a2418]/15 md:hidden"
          >
            <span
              className={`h-px w-5 bg-[#3a2418] transition-transform duration-300 ${
                menuOpen ? "translate-y-[4px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-5 bg-[#3a2418] transition-transform duration-300 ${
                menuOpen ? "-translate-y-[3px] -rotate-45" : ""
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
            <div className="border-t border-[#a9844e]/20 px-6 pb-6 pt-5">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`${serif.className} text-3xl font-medium italic transition-colors ${
                      isActive(link.href)
                        ? "text-[#8b4a28]"
                        : "text-[#3a2418] hover:text-[#8b4a28]"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="mt-6 flex items-center justify-center gap-2 rounded-full bg-[#3a2418] px-6 py-3.5 text-sm font-medium text-[#f7f1e9] transition-colors hover:bg-[#8b4a28]"
              >
                Book a visit <span aria-hidden="true">↗</span>
              </a>

              <p className="mt-4 text-center text-xs text-[#8a7566]">
                We usually reply within a few hours.
              </p>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}