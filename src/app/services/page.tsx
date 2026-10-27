"use client";

import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col justify-between bg-[#f7f0e6] text-[#2b1713]">
      {/* Header Navigation */}
      <header className="sticky top-0 z-30 flex items-center justify-between border-b border-[#8a5a24]/20 bg-[#f7f0e6]/95 px-6 py-5 backdrop-blur-md md:px-12">
        <Link
          href="/"
          className="font-serif text-xl font-medium tracking-[0.16em] text-[#52131b] transition hover:opacity-90 md:text-2xl"
        >
          S TOUCH
          <span className="mt-1 block font-sans text-[9px] font-normal tracking-[0.3em] text-[#5c3b28]">
            BRIDAL & BEAUTY STUDIO
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-[#4a3226] lg:flex">
          <Link href="/" className="transition hover:text-[#8a5a24]">
            Home
          </Link>
          <Link
            href="/services"
            className="border-b-2 border-[#8a5a24] pb-0.5 font-medium text-[#8a5a24]"
          >
            Services
          </Link>
          <Link
            href="/#bridal-intro"
            className="transition hover:text-[#8a5a24]"
          >
            Philosophy
          </Link>
        </nav>

        <a
          href="https://wa.me/919789376174?text=Hello%2C%20I%20would%20like%20to%20book%20a%20bridal%20appointment."
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-[#8a5a24]/70 px-4 py-2 text-xs font-medium text-[#52131b] transition hover:bg-[#52131b] hover:text-[#fdf6ec] md:px-6 md:text-sm"
        >
          Book Appointment ↗
        </a>
      </header>

      {/* Hero Showcase with Bride girl.jpg */}
      <section
        id="services-showcase"
        className="relative isolate min-h-[calc(100vh-80px)] flex-1 w-full overflow-hidden bg-[#f3e6d8]"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/Bride%20girl.jpg"
          alt="S Touch Bridal Showcase"
          draggable={false}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </section>

      {/* Footer */}
      <footer className="border-t border-[#8a5a24]/20 bg-[#ede1d3] px-6 py-6 text-center text-xs text-[#6c554a] md:px-12">
        <p className="font-serif text-base tracking-widest text-[#52131b]">
          TOUCH BRIDAL & BEAUTY STUDIO
        </p>
        <p className="mt-2 text-[11px] tracking-wider text-[#8a6a55]">
          © {new Date().getFullYear()} Touch Bridal Solution. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
