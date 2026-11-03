import { Phone } from "lucide-react";
import { useState } from "react";

/**
 * Floating Call and WhatsApp action buttons fixed at the bottom right.
 * Features blinking / radar pulse animation, tooltips, and direct links.
 */
export function FloatingContact() {
  const [hovered, setHovered] = useState<"call" | "whatsapp" | null>(null);

  const phoneDisplay = "+91 76655 56786";
  const phoneHref = "tel:+917665556786";
  const whatsappHref =
    "https://wa.me/917665556786?text=Hi%20Mantuja,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project!";

  return (
    <aside
      aria-label="Quick contact options"
      className="fixed bottom-6 right-5 sm:bottom-8 sm:right-8 z-50 flex flex-col items-end gap-3.5 select-none"
    >
      {/* WhatsApp Floating Button */}
      <div className="relative flex items-center">
        {/* Tooltip */}
        <span
          className={`pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-card/95 border border-border px-3 py-1.5 text-xs font-semibold text-foreground shadow-lg backdrop-blur transition-all duration-200 ${
            hovered === "whatsapp" ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
          }`}
        >
          Chat on WhatsApp
        </span>

        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp with Mantuja Khan"
          onMouseEnter={() => setHovered("whatsapp")}
          onMouseLeave={() => setHovered(null)}
          onFocus={() => setHovered("whatsapp")}
          onBlur={() => setHovered(null)}
          className="group relative flex h-13 w-13 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl animate-blink-whatsapp focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366]"
        >
          {/* Subtle radar wave ripple */}
          <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-35 animate-ping" />

          {/* Official WhatsApp SVG Icon */}
          <svg
            className="relative h-7 w-7 fill-white transition-transform duration-300 group-hover:scale-110"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.173 8.173 0 0 1 2.41 5.82c0 4.54-3.7 8.24-8.24 8.24-1.42 0-2.82-.37-4.06-1.07l-.29-.17-3.12.82.83-3.04-.19-.3a8.19 8.19 0 0 1-1.26-4.48c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.59c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.24-.75-.67-1.25-1.49-1.39-1.74-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.72 4.31 3.81.6.26 1.07.41 1.44.53.61.19 1.16.17 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.22-.18-.47-.3z" />
          </svg>
        </a>
      </div>

      {/* Call Floating Button */}
      <div className="relative flex items-center">
        {/* Tooltip */}
        <span
          className={`pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-card/95 border border-border px-3 py-1.5 text-xs font-semibold text-foreground shadow-lg backdrop-blur transition-all duration-200 ${
            hovered === "call" ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
          }`}
        >
          Call: {phoneDisplay}
        </span>

        <a
          href={phoneHref}
          aria-label={`Call Mantuja Khan at ${phoneDisplay}`}
          onMouseEnter={() => setHovered("call")}
          onMouseLeave={() => setHovered(null)}
          onFocus={() => setHovered("call")}
          onBlur={() => setHovered(null)}
          className="group relative flex h-13 w-13 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl animate-blink-call focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
        >
          {/* Subtle radar wave ripple */}
          <span className="absolute -inset-1 rounded-full bg-primary opacity-30 animate-ping" />

          {/* Phone Icon */}
          <Phone className="relative h-6 w-6 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
        </a>
      </div>
    </aside>
  );
}
