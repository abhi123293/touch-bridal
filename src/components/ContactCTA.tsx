
"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { Inter_Tight, Cormorant_Garamond } from "next/font/google";
import ServiceSelector from "@/components/ServiceSelector";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});


const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const whatsappNumber = "919789376174";
const phoneNumber = "+919789376174";

export default function ContactCTA() {
    const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
     if (selectedServices.length === 0) {
    alert("Please select at least one service.");
    return;
  }

    const formData = new FormData(event.currentTarget);

    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
  const service = selectedServices.join(", ");
    const eventDate = String(formData.get("eventDate") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const enquiry = [
      "Hello Touch Bridal Makeover Studio & Unisex Salon!",
      "",
      "I would like to enquire about an appointment.",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Service: ${service}`,
      `Event date: ${eventDate || "Not specified"}`,
      `Message: ${message || "Not provided"}`,
    ].join("\n");

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(enquiry)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
  <section
  id="booking"
  className={`${interTight.className} -mt-6 px-3 py-6 sm:-mt-8 sm:px-5 sm:py-8 lg:-mt-20 lg:px-8 lg:py-10`}
>
  <div className="mx-auto w-full max-w-[1320px]">
    <div className="grid overflow-hidden border-0 bg-white md:grid-cols-2">

          {/* LEFT: BRIDAL IMAGE PANEL */}

          <div className="relative flex min-h-[430px] flex-col justify-between overflow-hidden bg-[#3a2418] p-6 sm:min-h-[500px] sm:p-9 lg:min-h-[580px] lg:p-12">
            <img
              src="/servicesimg/black2.jpg"
              alt="Bridal makeup at Touch Bridal Makeover Studio"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />

            {/* Image overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#21150f]/90 via-[#21150f]/35 to-[#21150f]/10" />

            {/* Brand */}
            <div className="relative z-10">
              <span className="inline-flex rounded-full border border-white/40 bg-white/10 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.25em] text-white backdrop-blur-sm">
                Touch Bridal
              </span>
            </div>

            {/* Main message */}
            <div className="relative z-10 mt-16 max-w-md">
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#e5c99b] sm:text-xs">
                YOUR SPECIAL DAY STARTS HERE
              </p>

              <h2
                className={`${cormorant.className} mt-4 text-5xl italic leading-[1.05] text-white sm:text-6xl lg:text-7xl`}
              >
                Your beauty.
                <br />
                Your moment.
              </h2>

              <p className="mt-5 max-w-sm text-xs leading-7 text-white/85 sm:text-sm">
                Tell us about your special occasion. Let's create a look that
                reflects your personality and makes you feel beautiful.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello Touch Bridal Makeover Studio & Unisex Salon! I would like to book an appointment.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-full bg-[#f2e3c8] px-5 py-3 text-[11px] font-semibold text-[#3a2418] transition-colors hover:bg-white"
                >
                  Book on WhatsApp
                  
                </a>

                <a
                  href={`tel:${phoneNumber}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/50 px-5 py-3 text-[11px] font-semibold text-white transition-colors hover:bg-white/15"
                >
                  Call Us
                </a>
              </div>
            </div>

            {/* Decorative bottom label */}
            <div className="relative z-10 mt-12 border-t border-white/25 pt-4">
              <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-white/75">
                Bridal Makeup · Beauty · Styling
              </p>
            </div>
          </div>

          {/* RIGHT: BOOKING FORM PANEL */}

          <div className="flex flex-col justify-center bg-white px-5 py-9 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.23em] text-[#8b4a28]">
                LET'S TALK BEAUTY
              </p>

              <h3
                className={`${cormorant.className} mt-3 text-4xl font-semibold leading-tight text-[#2d1b13] sm:text-5xl`}
              >
                Book Your Appointment
              </h3>

              <p className="mt-3 text-xs leading-6 text-[#756356] sm:text-sm">
                Share a few details and send your appointment enquiry directly
                to our team through WhatsApp.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-7 space-y-5">
              {/* Name and phone */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="cta-name"
                    className="mb-2 block text-[11px] font-medium text-[#514034]"
                  >
                    Full name *
                  </label>

                  <input
                    id="cta-name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    autoComplete="name"
                    required
                    className="w-full border-b border-[#d8caba] bg-transparent px-0 py-3 text-xs text-[#2d1b13] outline-none placeholder:text-[#a3978d] focus:border-[#8b4a28] sm:text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="cta-phone"
                    className="mb-2 block text-[11px] font-medium text-[#514034]"
                  >
                    Phone number *
                  </label>

                  <input
                    id="cta-phone"
                    name="phone"
                    type="tel"
                    placeholder="Your phone number"
                    autoComplete="tel"
                    required
                    className="w-full border-b border-[#d8caba] bg-transparent px-0 py-3 text-xs text-[#2d1b13] outline-none placeholder:text-[#a3978d] focus:border-[#8b4a28] sm:text-sm"
                  />
                </div>
              </div>

              {/* Service and date */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                <label className="mb-2 block text-[11px] font-medium text-[#514034]">
  Service *
</label>

                 
  <ServiceSelector
    selectedServices={selectedServices}
    onChange={setSelectedServices}
  />
                </div>

                <div>
                  <label
                    htmlFor="cta-event-date"
                    className="mb-2 block text-[11px] font-medium text-[#514034]"
                  >
                    Event date
                  </label>

                  <input
                    id="cta-event-date"
                    name="eventDate"
                    type="date"
                    min={new Date().toLocaleDateString("en-CA")}
                    className="w-full border-b border-[#d8caba] bg-transparent px-0 py-3 text-xs text-[#756356] outline-none focus:border-[#8b4a28] sm:text-sm"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="cta-message"
                  className="mb-2 block text-[11px] font-medium text-[#514034]"
                >
                  Tell us about your occasion
                </label>

                <textarea
                  id="cta-message"
                  name="message"
                  rows={4}
                  placeholder="Your wedding date, preferred look, or other details..."
                  className="w-full resize-y rounded-[12px] border border-[#d8caba] bg-white/70 px-3 py-3 text-xs leading-6 text-[#2d1b13] outline-none placeholder:text-[#a3978d] focus:border-[#8b4a28] sm:text-sm"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group ml-40 flex w-fit items-center justify-center gap-3  bg-[#8D6CA3] px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-white transition-colors duration-300 hover:bg-[#8b4a28] sm:text-xs"
              >
                Send Appointment Enquiry
        
              </button>

              <p className="text-center text-[10px] leading-5 text-[#897b6f]">
                Your details will be prepared in WhatsApp for you to send.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
