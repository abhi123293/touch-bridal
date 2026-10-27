"use client";

import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Group } from "three";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function LipstickModel() {
  const lipstickRef = useRef<Group>(null);

  useGSAP(() => {
    const lipstick = lipstickRef.current;
    const hero = document.querySelector("#bridal-hero");

    if (!lipstick || !hero) return;

    const animation = gsap.to(lipstick.position, {
      y: -2.3,
      x: -0.5,
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "+=100%",
        scrub: 1,
        pin: true,
        invalidateOnRefresh: true,
      },
    });

    gsap.to(lipstick.rotation, {
      z: -0.25,
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "+=100%",
        scrub: 1,
      },
    });

    return () => {
      animation.scrollTrigger?.kill();
      animation.kill();
    };
  }, []);

  return (
    <group ref={lipstickRef} position={[0, 0, 0]}>
      {/* Gold lipstick casing */}
      <mesh position={[0, -0.15, 0]}>
        <cylinderGeometry args={[0.38, 0.38, 1.8, 48]} />
        <meshStandardMaterial
          color="#c99b45"
          metalness={0.95}
          roughness={0.2}
        />
      </mesh>

      {/* Gold upper rim */}
      <mesh position={[0, 0.82, 0]}>
        <cylinderGeometry args={[0.4, 0.4, 0.15, 48]} />
        <meshStandardMaterial
          color="#f6d58a"
          metalness={1}
          roughness={0.16}
        />
      </mesh>

      {/* Burgundy lipstick bullet */}
      <mesh position={[0, 1.5, 0]}>
        <cylinderGeometry args={[0.31, 0.31, 1.25, 48, 1]} />
        <meshStandardMaterial
          color="#780d2b"
          metalness={0.25}
          roughness={0.22}
        />
      </mesh>

      {/* Decorative gold band */}
      <mesh position={[0, 0.55, 0]}>
        <cylinderGeometry args={[0.405, 0.405, 0.09, 48]} />
        <meshStandardMaterial
          color="#ffe3a0"
          metalness={1}
          roughness={0.15}
        />
      </mesh>

      {/* Bottom cap */}
      <mesh position={[0, -1.15, 0]}>
        <cylinderGeometry args={[0.4, 0.4, 0.3, 48]} />
        <meshStandardMaterial
          color="#a77930"
          metalness={0.95}
          roughness={0.22}
        />
      </mesh>
    </group>
  );
}

export default function BridalHero() {
  return (
    <section className="relative">
      <div
        id="bridal-hero"
        className="relative isolate h-screen min-h-[650px] overflow-hidden bg-[#160b0b] text-[#fff4df]"
      >
        {/* Fixed hero background */}
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/bridal-hero.jpg')",
          }}
        />

        {/* Static dark overlay for text readability */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#100707]/95 via-[#180909]/55 to-[#160707]/20" />

        {/* Navigation */}
        <header className="absolute left-0 right-0 top-0 z-20 flex items-center justify-between border-b border-white/10 px-6 py-5 md:px-12">
          <Link
            href="/"
            className="font-serif text-xl tracking-[0.16em] text-[#e9c77f] md:text-2xl"
          >
            TOUCH
            <span className="mt-1 block font-sans text-[9px] tracking-[0.3em] text-white/80">
              BRIDAL & BEAUTY STUDIO
            </span>
          </Link>

          <nav className="hidden items-center gap-7 text-sm text-white/85 lg:flex">
            <Link href="/" className="text-[#e9c77f]">
              Home
            </Link>
            <Link href="/services" className="transition hover:text-[#e9c77f]">
              Services
            </Link>
            <Link
              href="/gallery-rentals"
              className="transition hover:text-[#e9c77f]"
            >
              Bridal Gallery
            </Link>
          </nav>

          <a
            href="https://wa.me/919789376174?text=Hello%2C%20I%20would%20like%20to%20book%20a%20bridal%20makeup%20appointment."
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[#d9b56d] px-4 py-2.5 text-xs text-[#f2d9a1] transition hover:bg-[#d9b56d] hover:text-[#160b0b] md:px-6 md:text-sm"
          >
            Book Appointment ↗
          </a>
        </header>

        {/* Static content */}
        <div className="relative z-10 flex h-full items-center px-6 pb-10 pt-28 md:px-16 lg:px-20">
          <div className="max-w-[570px]">
            <p className="mb-6 text-xs uppercase tracking-[0.35em] text-[#d7b36d]">
              Bridal Beauty • Elegance • You
            </p>

            <h1 className="font-serif text-5xl leading-[1.08] tracking-tight sm:text-6xl md:text-7xl lg:text-[88px]">
              Where
              <span className="block italic text-[#e7c17b]">Beauty</span>
              <span className="block">
                Becomes <span className="italic text-[#e7c17b]">Art.</span>
              </span>
            </h1>

            <p className="mt-7 max-w-md text-sm leading-7 text-white/75 md:text-base">
              Discover your bridal glow with Touch Bridal Makeover Studio
              &amp; Unisex Salon. Beautiful looks, thoughtful care, and
              elegance for your special moments.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/919789376174?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20salon%20services."
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#e4c17e] px-7 py-3.5 text-sm font-medium text-[#24130c] transition hover:bg-[#f4d99f]"
              >
                Book Your Glam ↗
              </a>

              <a
                href="#bridal-intro"
                className="text-sm text-white/80 transition hover:text-[#e7c17b]"
              >
                Discover Touch ↓
              </a>
            </div>

            <p className="mt-14 text-[10px] uppercase tracking-[0.28em] text-white/60">
              ↓ &nbsp; Scroll to explore
            </p>
          </div>
        </div>

        {/* Scroll-controlled 3D lipstick */}
        <div className="pointer-events-none absolute inset-y-0 right-[1%] z-10 w-[48%] md:right-[4%] md:w-[40%]">
          <Canvas
            camera={{ position: [0, 0, 8], fov: 35 }}
            dpr={[1, 1.5]}
            gl={{ alpha: true, antialias: true }}
          >
            <ambientLight intensity={1.5} />
            <directionalLight position={[4, 5, 6]} intensity={3} />
            <pointLight position={[-3, 2, 3]} intensity={30} color="#ffb65c" />

            <LipstickModel />

            <Environment preset="studio" />
          </Canvas>
        </div>

        {/* Static decorative label */}
        <div className="absolute bottom-12 right-6 z-10 hidden border-l border-[#c9a15d]/60 pl-4 text-sm md:right-12 md:block">
          <p className="font-serif text-lg text-[#e7c17b]">
            Signature Beauty
          </p>
          <p className="mt-2 leading-6 text-white/70">
            Bridal
            <br />
            Elegant
            <br />
            Timeless
          </p>
        </div>
      </div>

      {/* Next section: the lipstick animation finishes before this content */}
      <section
        id="bridal-intro"
        className="relative z-0 flex min-h-[360px] items-center justify-center bg-[#f7f0e6] px-6 py-24 text-center text-[#2b1713]"
      >
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-[#98713c]">
            The art of bridal beauty
          </p>

          <h2 className="mt-5 font-serif text-4xl leading-tight md:text-6xl">
            Your Special Day.
            <span className="block italic text-[#a36b46]">
              Our Expertise.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#6c554a] md:text-base">
            From traditional bridal makeovers to contemporary beauty looks,
            discover services created for your celebrations and special
            occasions.
          </p>

          <Link
            href="/services"
            className="mt-8 inline-block border-b border-[#98713c] pb-2 text-sm text-[#68452e]"
          >
            Explore Our Services ↗
          </Link>
        </div>
      </section>
    </section>
  );
}