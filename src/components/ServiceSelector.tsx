
"use client";

import { useState, useEffect, useRef } from "react";
import { salonServices } from "@/data/salonServices";

type ServiceSelectorProps = {
  selectedServices: string[];
  onChange: (services: string[]) => void;
};

export default function ServiceSelector({
  selectedServices,
  onChange,
}: ServiceSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleService = (service: string) => {
    if (selectedServices.includes(service)) {
      onChange(selectedServices.filter((item) => item !== service));
    } else {
      onChange([...selectedServices, service]);
    }
  };

  const toggleCategory = (categoryId: string) => {
    setActiveCategory((current) =>
      current === categoryId ? null : categoryId
    );
  };

  const activeServices = salonServices.find(
    (category) => category.id === activeCategory
  );

  return (
    <div ref={dropdownRef} className="relative w-full">

      {/* DROPDOWN TRIGGER */}
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="flex w-full items-center justify-between rounded-xl border border-[#3a2418]/15 bg-white px-4 py-3.5 text-left text-sm text-[#2d1b13] transition hover:border-[#8b4a28]/50"
        aria-expanded={isOpen}
      >
        <span className="truncate">
          {selectedServices.length > 0
            ? `${selectedServices.length} service(s) selected`
            : "Select your services"}
        </span>

        <svg
          className={`h-4 w-4 shrink-0 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {/* DROPDOWN CONTENT */}
      {isOpen && (
        <div className="absolute bottom-full left-0 z-50 -mb-50 w-[min(600px,calc(100vw-32px))] translate-x-2 rounded-2xl border border-[#3a2418]/10 bg-white p-3 shadow-2xl">

          {/* CATEGORY + SERVICES */}
          <div className="grid grid-cols-2 gap-3">

            {/* MAIN CATEGORIES */}
            <div className="max-h-[300px] overflow-y-auto pr-1">
              {salonServices.map((category) => {
                const isActive = activeCategory === category.id;

                return (
                  <button
                    key={category.id}
                    type="button"
                    onMouseEnter={() =>
                      window.matchMedia("(min-width: 768px)").matches &&
                      setActiveCategory(category.id)
                    }
                    onClick={() => toggleCategory(category.id)}
                    className={`flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-sm transition ${
                      isActive
                        ? "bg-[#f5f0e8] font-semibold text-[#8b4a28]"
                        : "text-[#2d1b13] hover:bg-[#faf7f0]"
                    }`}
                  >
                    <span>{category.label}</span>

                    <svg
                      className={`h-4 w-4 shrink-0 transition-transform ${
                        isActive ? "rotate-90" : ""
                      }`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      aria-hidden="true"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </button>
                );
              })}
            </div>

            {/* SUB-SERVICES */}
            <div className="max-h-[300px] overflow-y-auto rounded-xl bg-[#faf7f0] p-2">

              {activeServices ? (
                <>
                  <p className="px-2 py-2 text-xs font-semibold uppercase tracking-wider text-[#8b4a28]">
                    {activeServices.label}
                  </p>

                  {activeServices.services.map((service, index) => {
                    const checked = selectedServices.includes(service);

                    return (
                      <label
                        key={`${activeServices.id}-${service}-${index}`}
                        className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-[#2d1b13] transition hover:bg-[#eee1ca]"
                      >
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => toggleService(service)}
                          className="h-4 w-4 accent-[#8b4a28]"
                        />

                        {service}
                      </label>
                    );
                  })}
                </>
              ) : (
                <p className="px-3 py-4 text-xs leading-5 text-[#756356]">
                  Select a category to view its available services.
                </p>
              )}
            </div>
          </div>

          {/* SELECTED SERVICES INSIDE DROPDOWN */}
          {selectedServices.length > 0 && (
            <div className="mt-3 border-t border-[#3a2418]/10 pt-3">
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-[#8b4a28]">
                Selected Services ({selectedServices.length})
              </p>

              <div className="flex max-h-[90px] flex-wrap gap-2 overflow-y-auto">
                {selectedServices.map((service) => (
                  <button
                    key={service}
                    type="button"
                    onClick={() => toggleService(service)}
                    className="inline-flex items-center gap-2 rounded-full bg-[#eee1ca] px-3 py-1.5 text-xs font-medium text-[#70472f] transition hover:bg-[#e5d2b1]"
                  >
                    {service}
                    <span aria-hidden="true">×</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* DONE BUTTON */}
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="mt-3 w-full rounded-lg bg-[#3a2418] px-4 py-3 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-[#8b4a28]"
          >
            Done
          </button>
        </div>
      )}
    </div>
  );
}
