import { Cormorant_Garamond, Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// Same heading font as the other sections of the site.
const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const salonAddress =
  "215 B Sargunaveethi, Pothys Backside, Ramavarmapuram, Nagercoil-1";

const phoneNumbers = [
  {
    display: "+91 97893 76174",
    link: "+919789376174",
  },
  {
    display: "+91 97896 76174",
    link: "+919789676174",
  },
];

const mapSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${salonAddress}, Tamil Nadu, India`,
)}`;

const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  `${salonAddress}, Tamil Nadu, India`,
)}`;

// Tip: for a more exact pin, replace this with the "Embed a map" link
// from your studio's Google Maps page (Share > Embed a map).
const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
  `${salonAddress}, Tamil Nadu, India`,
)}&z=15&output=embed`;

export default function LocationContact() {
  return (
   <section
  id="location-contact"
  className={`${openSans.className} scroll-mt-28 -mt-4 px-3 py-6 sm:-mt-6 sm:px-5 sm:py-8 lg:-mt-16 lg:px-8 lg:py-10`}
>
      <div className="mx-auto w-full max-w-[1320px] overflow-hidden rounded-[28px] border border-[#3a2418]/10 bg-[#f7f1e9] sm:rounded-[36px]">
        {/* CONTACT DETAILS */}
        <div className="grid grid-cols-1 gap-8 px-5 py-10 sm:px-8 sm:py-12 lg:grid-cols-[1fr_0.8fr] lg:gap-16 lg:px-14 lg:py-14">
          {/* LEFT: SALON INFORMATION */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8b4a28] sm:text-xs">
              WE WOULD LOVE TO WELCOME YOU
            </p>

            <h2
              className={`${serif.className} mt-4 text-5xl font-semibold leading-[1.02] tracking-tight text-[#241811] sm:text-6xl lg:text-7xl`}
            >
              Location &amp; Contact
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-7 text-[#6b5a4d]">
              Visit Touch Bridal Makeover Studio &amp; Unisex Salon for bridal
              makeovers, beauty services, and your special occasion needs.
            </p>

            {/* ADDRESS */}
            <div className="mt-8 border-t border-[#3a2418]/15 pt-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#eee1ca] text-[#8b4a28]">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    aria-hidden="true"
                  >
                    <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-[#7a5a3b]">
                    Our Address
                  </h3>

                  <p className="mt-2 text-sm font-medium leading-7 text-[#2d1b13] sm:text-base">
                    {salonAddress}
                  </p>

                  <a
                    href={mapSearchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#8b4a28] transition-colors hover:text-[#3a2418]"
                  >
                    View location <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            </div>

            {/* PHONE NUMBERS */}
            <div className="mt-6 border-t border-[#3a2418]/15 pt-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#eee1ca] text-[#8b4a28]">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    aria-hidden="true"
                  >
                    <path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 11.2 19a19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.8 2Z" />
                  </svg>
                </div>

                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-[#7a5a3b]">
                    Call Us
                  </h3>

                  <div className="mt-2 space-y-2">
                    {phoneNumbers.map((phone) => (
                      <a
                        key={phone.link}
                        href={`tel:${phone.link}`}
                        className="block w-fit text-base font-semibold text-[#2d1b13] transition-colors hover:text-[#8b4a28] sm:text-lg"
                      >
                        {phone.display}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* PROPRIETOR */}
            <div className="mt-6 border-t border-[#3a2418]/15 pt-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#eee1ca] text-[#8b4a28]">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
                  </svg>
                </div>

                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-[#7a5a3b]">
                    Proprietor
                  </h3>

                  <p className="mt-2 text-base font-medium text-[#2d1b13]">
                    C. Stephy Sahayaraj
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: LOCATION & GOOGLE MAP */}
        <div className="flex min-h-[440px] flex-col rounded-[24px] border border-[#d6b27b]/20 bg-[#2d1b13] p-5 shadow-[0_12px_35px_rgba(45,27,19,0.15)] sm:p-7 lg:min-h-[520px]">
  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#d6b27b]">
    FIND US HERE
  </span>

  <h3
    className={`${serif.className} mt-3 text-4xl font-semibold leading-tight text-[#fff7ec] sm:text-5xl`}
  >
    Visit Our Studio
  </h3>

  <p className="mt-2 text-sm leading-6 text-[#e2d3c5]/80">
    Find Touch Bridal Makeover Studio &amp; Unisex Salon in Nagercoil.
  </p>

  {/* GOOGLE MAP PREVIEW */}
  <div className="mt-5 min-h-[260px] flex-1 overflow-hidden rounded-[18px] border border-[#d6b27b]/25 bg-white shadow-inner">
    <iframe
      title="Touch Bridal Makeover Studio location"
      src={mapEmbedUrl}
      className="h-full min-h-[260px] w-full lg:min-h-[300px]"
      style={{ border: 0 }}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
    />
  </div>

  {/* DIRECTIONS BUTTON */}
 <a
  href={directionsUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="group relative mt-5 inline-flex w-fit items-center gap-3 overflow-hidden rounded-full border border-[#d6b27b]/40 bg-white/[0.08] px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#f5dfbd] shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_8px_24px_rgba(0,0,0,0.15)] backdrop-blur-xl transition-all duration-500 ease-out hover:-translate-y-0.5 hover:border-[#f0d2ad]/80 hover:bg-[#d6b27b]/15 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_10px_30px_rgba(214,178,123,0.15)] active:translate-y-0"
>
  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent transition-transform duration-700 group-hover:translate-x-full" />

  <span className="relative">Get Directions</span>

</a>
</div>
        </div>
      </div>
    </section>
  );
}