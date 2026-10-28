"use client";

import { useEffect, useRef, useState } from "react";
import { Cormorant_Garamond, Open_Sans } from "next/font/google";
import {
  Check,
  Crown,
  Scissors,
  Sparkles,
  Heart,
  Layers,
  Phone,
  MessageCircle,
  Calendar,
  Clock,
  ArrowDown,
  ArrowRight,
  Send,
  X,
  CheckCircle2,
  ShieldCheck,
  User,
  Sparkle,
  ChevronDown,
  AlertCircle,
} from "lucide-react";


const serifFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const SALON_PHONE = "+919789376174";
const SALON_PHONE_DISPLAY = "+91 97893 76174";
const WHATSAPP_BASE = "https://wa.me/919789376174?text=";


const OVERLAY_SERVICES = [
  {
    id: "bridal",
    title: "Bridal Makeup",
    description: "Bridal, Reception & Special Occasion Looks",
    icon: Crown,
  },
  {
    id: "hair",
    title: "Hair Services",
    description: "Styling, Hair Spa, Smoothening & Colors",
    icon: Scissors,
  },
  {
    id: "skin",
    title: "Skin & Facial Services",
    description: "Hydra Facial, Bridal Radiance & D-Tan",
    icon: Sparkles,
  },
  {
    id: "beauty",
    title: "Beauty & Grooming Services",
    description: "Waxing, Threading, Manicure, Pedicure & Nail Art",
    icon: Heart,
  },
  {
    id: "additional",
    title: "Additional Services",
    description: "Saree Pre-Pleating & Box Folding Artistry",
    icon: Layers,
  },
];

export default function ServicesPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const enquirySectionRef = useRef<HTMLElement>(null);
  const selectorContainerRef = useRef<HTMLDivElement>(null);

  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [validationError, setValidationError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    preferredDate: "",
    preferredTime: "Morning (9:00 AM - 1:00 PM)",
    notes: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState("");

  // Ensure video autoplays safely and permanently muted
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.defaultMuted = true;
      video.load();
      video.play().catch(() => {});
    }
  }, []);

  const toggleOverlayService = (serviceTitle: string) => {
    setValidationError("");
    setSelectedServices((prev) =>
      prev.includes(serviceTitle)
        ? prev.filter((item) => item !== serviceTitle)
        : [...prev, serviceTitle]
    );
  };

  const clearAllOverlayServices = () => {
    setValidationError("");
    setSelectedServices([]);
  };

  const handleContinueFromVideo = () => {
    if (selectedServices.length === 0) {
      setValidationError("Please select at least one service.");
      return;
    }

    setValidationError("");
    scrollToEnquiry();
  };

  const removeService = (serviceName: string) => {
    setSelectedServices((prev) => prev.filter((s) => s !== serviceName));
  };

  const scrollToEnquiry = () => {
    enquirySectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Generate WhatsApp message with all selected services
  const generateWhatsAppMessage = (customNotes = "") => {
    let msg = "Hello S Touch Studio! ";
    if (formData.name) {
      msg += `My name is ${formData.name}. `;
    }
    if (selectedServices.length > 0) {
      msg += `I am interested in booking the following services:\n`;
      selectedServices.forEach((s, idx) => {
        msg += `${idx + 1}. ${s}\n`;
      });
    } else {
      msg += `I would like to enquire about your bridal and salon services.\n`;
    }

    if (formData.preferredDate) {
      msg += `Preferred Date: ${formData.preferredDate}\n`;
    }
    if (formData.preferredTime) {
      msg += `Preferred Slot: ${formData.preferredTime}\n`;
    }
    if (customNotes || formData.notes) {
      msg += `Notes: ${customNotes || formData.notes}\n`;
    }
    msg += `Please let me know your available slots and package pricing.`;
    return msg;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setFormError("Please enter your name.");
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 7) {
      setFormError("Please enter a valid phone or WhatsApp number.");
      return;
    }
    setFormError("");
    setFormSubmitted(true);

    // Open WhatsApp with prefilled enquiry
    const message = generateWhatsAppMessage();
    const url = `${WHATSAPP_BASE}${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="relative min-h-screen w-full bg-[radial-gradient(ellipse_at_top_left,#b58b66_0%,#6a4430_42%,#2f1d14_100%)] text-[#2d1b13]">
      {/* ============================================================== */}
      {/* 1. TOP VIDEO SHOWCASE SECTION (Full Desktop Size with Brown Shade) */}
      {/* ============================================================== */}
      <section
        aria-label="S Touch Services Video Showcase"
        className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-[#2f1d14]"
      >
        <video
          ref={videoRef}
          key="/videos/service.mp4"
          src="/videos/service.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          className="pointer-events-none h-full w-full object-cover object-center"
        >
          <source src="/videos/service.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Soft Bottom Grounding Shade (Enhances the floating glassmorphic selector while keeping service.mp4 completely clear) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1b0c05]/60 via-transparent via-40% to-transparent"
        />



        {/* ============================================================== */}
        {/* OVERLAY: WIDE GLASSMORPHIC SERVICE SELECTOR (Inside Video Section) */}
        {/* ============================================================== */}
        <div className="absolute inset-x-0 bottom-6 z-20 flex flex-col items-center justify-center px-3 sm:bottom-8 sm:px-6 lg:px-8">
          <div
            ref={selectorContainerRef}
            className={`relative w-full max-w-[1240px] rounded-[28px] sm:rounded-[36px] transition-all duration-500 ${
              validationError
                ? "ultra-glass-panel-error animate-luxury-shake"
                : "ultra-glass-panel"
            } p-5 sm:p-7 lg:px-10 lg:py-8`}
          >
            {/* Subtle Top Glass Sheen Line with Brilliant Golden Cream Sheen */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#fff5df] via-45% via-[#f5d094] via-65% to-transparent"
            />

            {/* Header: * Please Select a Service * */}
            <div className="flex flex-col items-center justify-center text-center">
              <div
                id="service-selector-label"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.26em] text-[#fff8f0] sm:text-sm drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)] select-none"
              >
                <span
                  className="text-[#fcd692] font-bold text-base sm:text-lg leading-none animate-pulse"
                  aria-hidden="true"
                >
                  *
                </span>
                <span className="font-sans">Please Select a Service</span>
                <span
                  className="text-[#fcd692] font-bold text-base sm:text-lg leading-none animate-pulse"
                  aria-hidden="true"
                >
                  *
                </span>
              </div>
              <p className="mt-1 text-[11px] sm:text-xs text-[#f5e6d3] drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
                Tap any service to personalize your bridal &amp; salon appointment
              </p>
            </div>

            {/* Clickable Pill Buttons (Wide Horizontal Row on Desktop) */}
            <div
              role="group"
              aria-labelledby="service-selector-label"
              className="mt-5 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 lg:gap-4"
            >
              {OVERLAY_SERVICES.map((item) => {
                const isSelected = selectedServices.includes(item.title);
                const Icon = item.icon;

                return (
                  <button
                    key={item.id}
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => toggleOverlayService(item.title)}
                    className={`group relative flex items-center gap-2.5 sm:gap-3 rounded-full px-4 py-2.5 sm:px-5 sm:py-3 text-xs sm:text-[13px] tracking-wide transition-all duration-300 select-none cursor-pointer whitespace-nowrap ${
                      isSelected
                        ? "border border-[#fff0d0] bg-gradient-to-r from-[#9e5229] via-[#c68443] to-[#e6b46e] text-[#fffdfa] shadow-[0_0_30px_rgba(235,185,110,0.65),inset_0_1.5px_2px_rgba(255,255,255,0.7)] ring-2 ring-[#fde6b8]/75 scale-[1.04] font-semibold"
                        : "ultra-glass-pill-inactive text-[#fbf6ef] font-medium hover:scale-[1.02]"
                    }`}
                  >
                    <span
                      className={`flex h-6 w-6 sm:h-7 sm:w-7 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isSelected
                          ? "bg-white/30 text-[#fffdfa] shadow-xs"
                          : "bg-black/35 text-[#fde4ba] group-hover:bg-black/50 group-hover:text-white"
                      }`}
                    >
                      <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </span>
                    <span>{item.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Validation Message (Required field error) */}
            {validationError && (
              <div
                role="alert"
                className="mt-4 flex items-center justify-center gap-2 rounded-2xl border border-red-400/80 bg-red-950/85 px-4 py-2 text-xs font-medium text-red-200 shadow-lg backdrop-blur-xl animate-luxury-shake"
              >
                <AlertCircle className="h-4 w-4 shrink-0 text-red-300 animate-pulse" />
                <span>{validationError}</span>
              </div>
            )}

            {/* Bottom Actions Row (Spaced across the wide box) */}
            <div className="mt-5 flex flex-col items-center justify-between gap-3 border-t border-white/20 pt-3.5 sm:flex-row">
              <div className="flex items-center gap-2 text-[11px] sm:text-xs text-[#f5e6d3] drop-shadow-xs">
                {selectedServices.length === 0 ? (
                  <span className="text-[#fcd692] font-medium">
                    * Required: tap one or more services
                  </span>
                ) : (
                  <span className="text-[#fde6b8] font-semibold">
                    ✓ {selectedServices.length} {selectedServices.length === 1 ? "service" : "services"} selected
                  </span>
                )}
                {selectedServices.length > 0 && (
                  <>
                    <span className="text-white/30">•</span>
                    <button
                      type="button"
                      onClick={clearAllOverlayServices}
                      className="text-[#fcd692] hover:underline cursor-pointer transition-colors hover:text-white"
                    >
                      Clear selections
                    </button>
                  </>
                )}
              </div>

              <button
                type="button"
                onClick={handleContinueFromVideo}
                className="group relative isolate inline-flex w-full sm:w-auto items-center justify-center gap-2 overflow-hidden rounded-full border border-[#fff0d4]/70 bg-gradient-to-br from-[#dfb679] via-[#9e552a] to-[#3a1f12] px-8 py-3 text-xs sm:text-[13px] font-semibold tracking-wider text-white shadow-[0_10px_30px_rgba(45,27,19,0.55),inset_0_1px_1.5px_rgba(255,255,255,0.5)] transition-all duration-300 hover:scale-105 hover:border-[#ffe7bd] hover:shadow-[0_0_32px_rgba(235,190,120,0.7)] cursor-pointer"
              >
                <span>Continue to Enquiry</span>
                <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. APPOINTMENT ENQUIRY SECTION                                  */}
      {/* ============================================================== */}
      <section
        id="appointment-enquiry"
        ref={enquirySectionRef}
        aria-labelledby="enquiry-heading"
        className="relative z-10 px-2 pb-8 sm:px-4 sm:pb-12 lg:px-6 lg:pb-16"
      >
        <div className="mx-auto max-w-[1320px] overflow-hidden rounded-[26px] border border-[#3a2418]/[0.08] bg-[#f7f1e9] px-5 py-8 text-[#2d1b13] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.65)] sm:rounded-[34px] sm:px-8 sm:py-12 lg:px-12 lg:py-14">
          
          {/* Header */}
          <div className="text-center">
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-8 bg-[#a8663f]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#a8663f] sm:text-xs">
                CONFIRM &amp; CONNECT
              </span>
              <span className="h-px w-8 bg-[#a8663f]" />
            </div>

            <h2
              id="enquiry-heading"
              className={`${serifFont.className} mt-3 text-4xl font-normal tracking-tight text-[#2d1b13] sm:text-5xl lg:text-[54px]`}
            >
              Appointment Enquiry
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-[#6e5b4e] sm:text-base">
              Review your chosen services below and connect directly with our salon team through WhatsApp, a direct phone call, or our quick enquiry form.
            </p>

            <div className="mx-auto mt-5 flex items-center justify-center gap-2">
              <span className="h-[1.5px] w-12 bg-[#b58750]" />
              <span className="h-1 w-1 rounded-full bg-[#b58750]" />
              <span className="h-[1px] w-20 bg-[#d8c3af]" />
            </div>
          </div>

          {/* Selected Services Summary Box */}
          <div className="mt-10 rounded-3xl border border-[#3a2418]/12 bg-white/90 p-5 shadow-sm sm:p-7">
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-[#8b4a28]">
                  Selected Services Summary ({selectedServices.length})
                </h3>
                <p className="mt-0.5 text-xs text-[#756356]">
                  {selectedServices.length === 0
                    ? "No services selected yet. Click any tag above to add, or submit a general enquiry."
                    : "Click any tag below to remove it from your selection."}
                </p>
              </div>

              {selectedServices.length > 0 && (
                <button
                  type="button"
                  onClick={() => setSelectedServices([])}
                  className="self-start text-[11px] font-semibold text-[#8b4a28] hover:underline sm:self-auto"
                >
                  Clear all selections
                </button>
              )}
            </div>

            {/* Selected Tags Chips */}
            {selectedServices.length > 0 ? (
              <div className="mt-4 flex flex-wrap gap-2 pt-2">
                {selectedServices.map((service) => (
                  <span
                    key={service}
                    className="inline-flex items-center gap-1.5 rounded-full border border-[#b58750]/40 bg-[#f7efe4] px-3.5 py-1.5 text-xs font-semibold text-[#2d1b13] shadow-2xs"
                  >
                    <span>{service}</span>
                    <button
                      type="button"
                      aria-label={`Remove ${service}`}
                      onClick={() => removeService(service)}
                      className="flex h-4 w-4 items-center justify-center rounded-full text-[#8b4a28] hover:bg-[#8b4a28] hover:text-white transition-colors"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                ))}
              </div>
            ) : (
              <div className="mt-4 rounded-xl border border-dashed border-[#3a2418]/20 bg-[#fcf9f5] p-4 text-center">
                <p className="text-xs italic text-[#8a7566]">
                  Tip: Scroll up to tick services like Bridal Makeup, Hair Spa, Hydra Facial, etc.
                </p>
              </div>
            )}
          </div>

          {/* Contact Methods Grid & Enquiry Form */}
          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12">
            
            {/* Left Column: Direct WhatsApp & Phone Call Action Cards */}
            <div className="flex flex-col justify-between gap-6 lg:col-span-5">
              {/* WhatsApp Card */}
              <div className="rounded-3xl border border-[#b58750]/35 bg-gradient-to-br from-[#f8f2e9] to-[#eedbc6] p-6 shadow-sm sm:p-7">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#25d366]/20 text-[#128c7e]">
                    <MessageCircle className="h-6 w-6" />
                  </span>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-[#2d1b13]">
                      WhatsApp Instant Booking
                    </h4>
                    <p className="text-xs text-[#756356]">
                      Fastest response for bridal appointments
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-xs leading-relaxed text-[#4a3327]">
                  Opens WhatsApp with your selected services ready to send. We typically reply within a few hours.
                </p>

                <div className="mt-6">
                  <a
                    href={`${WHATSAPP_BASE}${encodeURIComponent(
                      generateWhatsAppMessage()
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative isolate flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-full border border-white/50 bg-gradient-to-br from-[#cba879] via-[#8b4a28] to-[#382319] py-3.5 text-xs font-semibold tracking-wider text-white shadow-md transition-all duration-300 hover:scale-[1.02] hover:border-[#f4d7a8]"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>Book via WhatsApp ({SALON_PHONE_DISPLAY})</span>
                  </a>
                </div>
              </div>

              {/* Direct Phone Call Card */}
              <div className="rounded-3xl border border-[#3a2418]/12 bg-white/90 p-6 shadow-sm sm:p-7">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#f4ebe0] text-[#8b4a28]">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-[#2d1b13]">
                      Direct Telephone Call
                    </h4>
                    <p className="text-xs text-[#756356]">
                      Speak with our salon consultation desk
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-xs leading-relaxed text-[#4a3327]">
                  Need immediate confirmation or custom trousseau advice? Call us directly during studio hours.
                </p>

                <div className="mt-6">
                  <a
                    href={`tel:${SALON_PHONE}`}
                    className="flex w-full items-center justify-center gap-2.5 rounded-full border border-[#b18a5b]/40 bg-[#fbf8f3] py-3.5 text-xs font-semibold tracking-wider text-[#8b4a28] transition-all duration-300 hover:border-[#8b4a28] hover:bg-[#2d1b13] hover:text-[#fff5e6]"
                  >
                    <Phone className="h-4 w-4" />
                    <span>Call Now ({SALON_PHONE_DISPLAY})</span>
                  </a>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="rounded-2xl border border-[#3a2418]/8 bg-[#f5ede1]/60 p-4">
                <div className="flex items-center gap-3 text-xs text-[#6e5b4e]">
                  <ShieldCheck className="h-5 w-5 shrink-0 text-[#8b4a28]" />
                  <span>
                    <strong>100% Skin-Safe &amp; Premium Products</strong> • Certified Master Makeover Artists
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Appointment Enquiry Form */}
            <div className="rounded-3xl border border-[#3a2418]/12 bg-white p-6 shadow-sm sm:p-8 lg:col-span-7">
              <h4 className={`${serifFont.className} text-2xl font-semibold text-[#2d1b13] sm:text-3xl`}>
                Send Online Enquiry
              </h4>
              <p className="mt-1 text-xs text-[#756356]">
                Fill out the form below. We will reach out to confirm your booking and quote.
              </p>

              {formSubmitted ? (
                <div className="mt-6 rounded-2xl border border-[#25d366]/40 bg-[#25d366]/10 p-6 text-center">
                  <CheckCircle2 className="mx-auto h-12 w-12 text-[#128c7e]" />
                  <h5 className="mt-3 text-base font-bold text-[#2d1b13]">
                    Thank You, {formData.name || "Bride"}!
                  </h5>
                  <p className="mt-1 text-xs text-[#4a3327]">
                    Your appointment enquiry with {selectedServices.length} selected services has been sent. Our team will contact you shortly to confirm your slot.
                  </p>
                  <button
                    type="button"
                    onClick={() => setFormSubmitted(false)}
                    className="mt-5 rounded-full border border-[#8b4a28] px-5 py-2 text-xs font-semibold text-[#8b4a28] hover:bg-[#8b4a28] hover:text-white transition-colors"
                  >
                    Edit / Send Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="mt-6 space-y-4">
                  {formError && (
                    <div className="rounded-xl border border-red-300 bg-red-50 p-3 text-xs text-red-700">
                      {formError}
                    </div>
                  )}

                  {/* Name Input */}
                  <div>
                    <label
                      htmlFor="client-name"
                      className="block text-[11px] font-semibold uppercase tracking-wider text-[#5b4334]"
                    >
                      Your Full Name *
                    </label>
                    <div className="relative mt-1.5">
                      <input
                        id="client-name"
                        type="text"
                        required
                        placeholder="e.g. Priya Sundaram"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full rounded-xl border border-[#3a2418]/20 bg-[#faf7f2] px-4 py-3 text-xs text-[#2d1b13] placeholder-[#9a8678] transition-all focus:border-[#8b4a28] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#8b4a28]"
                      />
                    </div>
                  </div>

                  {/* Phone Input */}
                  <div>
                    <label
                      htmlFor="client-phone"
                      className="block text-[11px] font-semibold uppercase tracking-wider text-[#5b4334]"
                    >
                      Phone / WhatsApp Number *
                    </label>
                    <div className="relative mt-1.5">
                      <input
                        id="client-phone"
                        type="tel"
                        required
                        placeholder="e.g. 9876543210"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full rounded-xl border border-[#3a2418]/20 bg-[#faf7f2] px-4 py-3 text-xs text-[#2d1b13] placeholder-[#9a8678] transition-all focus:border-[#8b4a28] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#8b4a28]"
                      />
                    </div>
                  </div>

                  {/* Date & Time Row */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="client-date"
                        className="block text-[11px] font-semibold uppercase tracking-wider text-[#5b4334]"
                      >
                        Preferred Date (Optional)
                      </label>
                      <input
                        id="client-date"
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            preferredDate: e.target.value,
                          })
                        }
                        className="mt-1.5 w-full rounded-xl border border-[#3a2418]/20 bg-[#faf7f2] px-4 py-2.5 text-xs text-[#2d1b13] transition-all focus:border-[#8b4a28] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#8b4a28]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="client-time"
                        className="block text-[11px] font-semibold uppercase tracking-wider text-[#5b4334]"
                      >
                        Preferred Time Slot
                      </label>
                      <select
                        id="client-time"
                        value={formData.preferredTime}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            preferredTime: e.target.value,
                          })
                        }
                        className="mt-1.5 w-full rounded-xl border border-[#3a2418]/20 bg-[#faf7f2] px-4 py-2.5 text-xs text-[#2d1b13] transition-all focus:border-[#8b4a28] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#8b4a28]"
                      >
                        <option value="Morning (9:00 AM - 1:00 PM)">
                          Morning (9:00 AM - 1:00 PM)
                        </option>
                        <option value="Afternoon (1:00 PM - 5:00 PM)">
                          Afternoon (1:00 PM - 5:00 PM)
                        </option>
                        <option value="Evening (5:00 PM - 8:30 PM)">
                          Evening (5:00 PM - 8:30 PM)
                        </option>
                        <option value="Bridal Muhurtham (Early Morning)">
                          Bridal Muhurtham (Early Morning)
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Notes & Special Requests */}
                  <div>
                    <label
                      htmlFor="client-notes"
                      className="block text-[11px] font-semibold uppercase tracking-wider text-[#5b4334]"
                    >
                      Additional Requests / Venue Details (Optional)
                    </label>
                    <textarea
                      id="client-notes"
                      rows={3}
                      placeholder="e.g. Wedding venue location, guest makeup requirements, specific hairstyle preferences..."
                      value={formData.notes}
                      onChange={(e) =>
                        setFormData({ ...formData, notes: e.target.value })
                      }
                      className="mt-1.5 w-full rounded-xl border border-[#3a2418]/20 bg-[#faf7f2] px-4 py-3 text-xs text-[#2d1b13] placeholder-[#9a8678] transition-all focus:border-[#8b4a28] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#8b4a28]"
                    />
                  </div>

                  {/* Submit CTA */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="group relative isolate flex w-full items-center justify-center gap-2 overflow-hidden rounded-full border border-white/40 bg-gradient-to-br from-[#cba879] via-[#8b4a28] to-[#382319] py-3.5 text-xs font-semibold tracking-wider text-white shadow-md transition-all duration-300 hover:scale-[1.01] hover:border-[#f4d7a8]"
                    >
                      <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      <span>
                        Submit &amp; Connect via WhatsApp (
                        {selectedServices.length > 0
                          ? `${selectedServices.length} Selected`
                          : "General Enquiry"}
                        )
                      </span>
                    </button>
                    <p className="mt-2 text-center text-[10px] text-[#8a7566]">
                      Your details are safe with us. We do not spam.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Floating Bottom Quick Bar when services are selected */}
      {selectedServices.length > 0 && (
        <aside
          aria-label="Selection summary bar"
          className="fixed inset-x-3 bottom-4 z-40 sm:bottom-6 sm:px-6"
        >
          <div className="mx-auto flex max-w-[850px] items-center justify-between gap-3 rounded-full border border-[#b58750]/40 bg-[#2d1b13]/95 px-5 py-3 text-white shadow-[0_16px_40px_rgba(0,0,0,0.5)] backdrop-blur-xl">
            <div className="flex items-center gap-2.5 min-w-0">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#8b4a28] text-xs font-bold text-white">
                {selectedServices.length}
              </span>
              <span className="truncate text-xs font-medium text-[#f7efe4]">
                {selectedServices.length === 1 ? "service" : "services"} selected
              </span>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={scrollToEnquiry}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-gradient-to-r from-[#cba879] to-[#8b4a28] px-4 py-2 text-xs font-semibold text-white transition-all hover:scale-105"
              >
                <span>Continue to Enquiry</span>
                <ArrowDown className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </aside>
      )}

      {/* Footer */}
      <footer className="border-t border-[#3a2418]/15 bg-[#ede1d3] px-6 py-8 text-center text-xs text-[#6c554a] md:px-12">
        <p className="font-serif text-lg tracking-widest text-[#52131b]">
          TOUCH BRIDAL MAKEOVER STUDIO &amp; UNISEX SALON
        </p>
        <p className="mt-2 text-[11px] tracking-wider text-[#8a6a55]">
          © {new Date().getFullYear()} Touch Bridal Solution. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
