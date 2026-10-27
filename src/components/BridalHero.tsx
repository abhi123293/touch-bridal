"use client";

import { Canvas } from "@react-three/fiber";
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

      {/* Dark burgundy lipstick bullet */}
      <mesh position={[0, 1.5, 0]}>
        <cylinderGeometry args={[0.31, 0.31, 1.25, 48, 1]} />
        <meshStandardMaterial
          color="#52131b"
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
  const heroRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".hero-entrance", {
        y: 46,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.12,
        delay: 0.15,
      });
    },
    { scope: heroRef },
  );

  return (
    <section className="relative">
      <div
        id="bridal-hero"
        ref={heroRef}
        className="relative isolate flex min-h-screen flex-col justify-between overflow-hidden bg-gradient-to-b from-[#f9f3ec] via-[#f3e6d8] to-[#eddccb] text-[#2b1713]"
      >
        {/* 3D Lipstick interactive model in Section 1 */}
        <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center md:justify-end md:pr-24 lg:pr-36">
          <div className="h-[460px] w-full max-w-[380px] lg:h-[540px] lg:max-w-[440px]">
            <Canvas
              camera={{ position: [0, 0, 8], fov: 35 }}
              dpr={[1, 1.5]}
              gl={{ alpha: true, antialias: true }}
            >
              <ambientLight intensity={1.8} />
              <directionalLight position={[4, 5, 6]} intensity={3} />
              <pointLight position={[-3, 2, 3]} intensity={30} color="#ffb65c" />

              <LipstickModel />
            </Canvas>
          </div>
        </div>

        {/* Navigation */}
        <header className="absolute left-0 right-0 top-0 z-20 flex items-center justify-between border-b border-[#8a5a24]/20 px-6 py-5 md:px-12">
          <Link
            href="/"
            className="font-serif text-xl font-medium tracking-[0.16em] text-[#52131b] md:text-2xl transition hover:opacity-90"
          >
            S TOUCH
            <span className="mt-1 block font-sans text-[9px] font-normal tracking-[0.3em] text-[#5c3b28]">
              BRIDAL & BEAUTY STUDIO
            </span>
          </Link>

          <nav className="hidden items-center gap-7 text-sm text-[#4a3226] lg:flex">
            <Link href="/" className="text-[#8a5a24]">
              Home
            </Link>
            <Link
              href="/services"
              className="transition hover:text-[#8a5a24]"
            >
              Services
            </Link>
            <Link
              href="#bridal-showcase"
              className="transition hover:text-[#8a5a24]"
            >
              Bridal Gallery
            </Link>
          </nav>

          <a
            href="https://wa.me/919789376174?text=Hello%2C%20I%20would%20like%20to%20book%20a%20bridal%20makeup%20appointment."
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[#8a5a24]/70 px-4 py-2.5 text-xs text-[#6f4a2e] transition hover:bg-[#8a5a24] hover:text-[#fdf6ec] md:px-6 md:text-sm"
          >
            Book Appointment ↗
          </a>
        </header>

        {/* Hero copy: Left bottom heading & Right bottom description and CTAs */}
        <div className="relative z-10 mt-auto flex w-full flex-col justify-end px-6 pb-12 pt-28 md:px-12 md:pb-16 lg:px-20">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between lg:gap-12">
            {/* Left under: Heading */}
            <div className="w-full md:max-w-[55%] lg:max-w-xl">
              <p className="hero-entrance mb-4 text-xs uppercase tracking-[0.35em] text-[#98713c]">
                Bridal Beauty • Elegance • You
              </p>

              <h1 className="hero-entrance font-serif text-4xl leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-[84px]">
                Where
                <span className="block italic text-[#a36b46]">Beauty</span>
                <span className="block">
                  Becomes <span className="italic text-[#a36b46]">Art.</span>
                </span>
              </h1>
            </div>

            {/* Right under: Description and Buttons */}
            <div className="w-full md:max-w-[42%] lg:max-w-md md:pb-2">
              <p className="hero-entrance text-sm leading-7 text-[#5c4033] md:text-base md:leading-relaxed">
                Timeless bridal makeup, hair & styling — designed for your
                special day. Your transformation begins at Touch Bridal.
              </p>

              <div className="hero-entrance mt-7 flex flex-wrap items-center gap-4">
                <a
                  href="https://wa.me/919789376174?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20salon%20services."
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-[#7d2b32] px-7 py-3.5 text-sm font-medium text-[#fdf3e7] shadow-sm transition hover:bg-[#5f1f25]"
                >
                  Book Your Glam ↗
                </a>

                <a
                  href="#bridal-intro"
                  className="text-sm font-medium text-[#5c4033] transition hover:text-[#a36b46]"
                >
                  Discover Touch ↓
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Next section */}
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
            className="mt-8 inline-block border-b border-[#98713c] pb-2 text-sm text-[#68452e] transition hover:text-[#52131b]"
          >
            Explore Our Services ↗
          </Link>
        </div>
      </section>
    </section>
  );
}
