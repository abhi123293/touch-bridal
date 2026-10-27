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
    <header className="fixed inset-x-0 top-3 z-50 px-3 sm:top-5 sm:px-6">
      <nav
        className={`mx-auto max-w-[1320px] rounded-[28px] border border-[#a9844e]/25 text-[#3a2418] shadow-[0_14px_40px_-18px_rgba(45,27,19,0.25)] backdrop-blur-xl transition-all duration-500 ${
          scrolled ? "bg-[#f7f1e9]/95" : "bg-[#f7f1e9]/80"
        }`}
      >
        <div className="flex items-center justify-between gap-3 px-4 py-3 sm:px-7">
          {/* FULL BRAND NAME */}
          <Link
            href="/"
            className="group flex min-w-0 shrink items-center"
          >
            <span className="flex min-w-0 flex-col">
          

             <span className="mt-0.5 block text-center text-[12px] font-medium leading-tight tracking-[0.04em] text-[#8a7566] sm:text-[14px]">
  Bridal Makeover Studio
  <br />
  &amp; Unisex Salon
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
                  className={`group relative whitespace-nowrap rounded-full px-3 py-2 text-sm transition-colors duration-300 lg:px-4 lg:text-[15px] ${
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
  className="group hidden shrink-0 items-center gap-2 rounded-full border border-[#e7c9a0]/50 bg-black/80 px-5 py-2.5 text-xs font-semibold text-[#fff5e6] shadow-[0_0_12px_rgba(231,201,160,0.18),inset_0_0_12px_rgba(255,255,255,0.05)] backdrop-blur-xl transition-all duration-300 hover:border-[#e7c9a0] hover:bg-black hover:shadow-[0_0_10px_rgba(231,201,160,0.45),0_0_25px_rgba(231,201,160,0.25),inset_0_0_12px_rgba(255,255,255,0.08)] lg:inline-flex"
>
  <span className="transition-all duration-300 group-hover:drop-shadow-[0_0_6px_rgba(231,201,160,0.9)]">
    Book an Appointment
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
            className="flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-1.5 rounded-full border border-[#3a2418]/15 md:hidden"
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
                    className={`text-2xl font-medium transition-colors ${
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
                Book an Appointment <span aria-hidden="true">↗</span>
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
