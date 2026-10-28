"use client";

import { useState } from "react";
import { Check } from "lucide-react";

const SERVICES = [
  "Bridal Makeup",
  "Hair Services",
  "Skin & Facial Services",
  "Beauty & Grooming Services",
  "Additional Services",
  "Appointment Enquiry",
];

interface ServiceSelectionProps {
  selectedServices?: string[];
  onToggleService?: (service: string) => void;
}

export default function ServiceSelectionSection({
  selectedServices: controlledSelectedServices,
  onToggleService,
}: ServiceSelectionProps = {}) {
  const [internalSelectedServices, setInternalSelectedServices] = useState<string[]>([]);

  const selectedServices = controlledSelectedServices ?? internalSelectedServices;

  const toggleService = (service: string) => {
    if (onToggleService) {
      onToggleService(service);
    } else {
      setInternalSelectedServices((prev) =>
        prev.includes(service)
          ? prev.filter((item) => item !== service)
          : [...prev, service]
      );
    }
  };

  return (
    <div
      aria-label="Service Selection Overlay"
      className="absolute inset-0 z-40 flex items-end justify-center pb-3 sm:pb-6 lg:pb-8 px-3 sm:px-6 lg:px-8 pointer-events-none"
    >
      {/* Translucent Brownish Glassmorphism Box at Bottom of Images */}
      <div className="pointer-events-auto relative w-full max-w-[96%] sm:max-w-[92%] lg:max-w-[1100px] overflow-hidden rounded-[20px] sm:rounded-[26px] border border-white/25 border-t-white/40 border-b-black/40 bg-gradient-to-b from-[#3d1f11]/45 via-[#261309]/50 to-[#140803]/55 py-3 px-3 sm:py-3.5 sm:px-6 lg:py-4.5 lg:px-8 backdrop-blur-xl backdrop-saturate-150 ring-1 ring-[#dfb76c]/40 shadow-[inset_0_1.5px_1.5px_0_rgba(255,255,255,0.35),inset_0_-1px_1px_0_rgba(0,0,0,0.4),0_20px_50px_rgba(0,0,0,0.55)]">
        {/* Specular Glass Sheen Top Edge */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"
        />

        {/* Ambient Subtle Warm Amber/Brownish Glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 h-20 w-3/4 rounded-full bg-[#dfb76c]/15 blur-2xl"
        />

        {/* Luxury Heading: PLEASE SELECT A SERVICE (MANDATORY) */}
        <div className="relative z-10 flex items-center justify-center gap-2 sm:gap-3 mb-2.5 sm:mb-3 pb-2.5 border-b border-[#dfb76c]/25 text-center">
          <span
            aria-hidden="true"
            className="hidden sm:inline-block h-px w-6 sm:w-12 bg-gradient-to-r from-transparent to-[#dfb76c]/70"
          />
          <h2 className="font-serif text-[12px] sm:text-sm lg:text-[15px] font-medium tracking-[0.18em] uppercase text-[#fdf0d5] drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)] flex items-center justify-center gap-2 flex-wrap">
            <span>PLEASE SELECT A SERVICE</span>
            <span className="text-[10px] sm:text-xs font-sans font-semibold tracking-wider text-[#dfb76c] bg-[#dfb76c]/20 border border-[#dfb76c]/40 px-2.5 py-0.5 rounded-full shadow-[0_0_10px_rgba(223,183,108,0.2)]">
              (MANDATORY)
            </span>
          </h2>
          <span
            aria-hidden="true"
            className="hidden sm:inline-block h-px w-6 sm:w-12 bg-gradient-to-l from-transparent to-[#dfb76c]/70"
          />
        </div>

        {/* 6 Selectable Service Checkboxes in 3 Columns on Desktop, 2 Columns on Mobile/Tablet */}
        <div
          role="listbox"
          aria-multiselectable="true"
          className="relative z-10 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-2.5 lg:gap-3.5 w-full"
        >
          {SERVICES.map((service) => {
            const isSelected = selectedServices.includes(service);

            return (
              <div
                key={service}
                role="option"
                aria-selected={isSelected}
                onClick={() => toggleService(service)}
                className={`group flex items-center gap-2.5 sm:gap-3 py-2 sm:py-2.5 px-3 sm:px-3.5 rounded-xl border transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "border-[#fdf0d5] bg-gradient-to-r from-[#dfb76c]/40 via-[#b58b66]/30 to-[#dfb76c]/20 shadow-[0_0_15px_rgba(223,183,108,0.3)] ring-1 ring-[#dfb76c]/60"
                    : "border-white/15 bg-white/[0.08] hover:border-[#dfb76c]/50 hover:bg-white/[0.16] hover:shadow-[0_4px_14px_rgba(0,0,0,0.25)]"
                }`}
              >
                {/* Small Gold-Outlined Glass Checkbox */}
                <div
                  aria-hidden="true"
                  className={`flex h-4 w-4 sm:h-4.5 sm:w-4.5 shrink-0 items-center justify-center rounded border transition-all duration-200 ${
                    isSelected
                      ? "border-[#fdf0d5] bg-gradient-to-br from-[#fdf0d5] via-[#dfb76c] to-[#cba879] shadow-[0_0_8px_rgba(223,183,108,0.7)]"
                      : "border-[#dfb76c]/70 bg-black/30 group-hover:border-[#dfb76c]"
                  }`}
                >
                  {isSelected && (
                    <Check className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#140804] stroke-[3]" />
                  )}
                </div>

                {/* Elegant Ivory Typography with High Readability over Glass */}
                <span
                  className={`text-[11px] sm:text-xs lg:text-sm tracking-wide transition-colors truncate drop-shadow-[0_1px_2px_rgba(0,0,0,0.85)] ${
                    isSelected
                      ? "font-semibold text-white drop-shadow-[0_1px_3px_rgba(0,0,0,1)]"
                      : "font-medium text-[#fff8f0] group-hover:text-white"
                  }`}
                >
                  {service}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
