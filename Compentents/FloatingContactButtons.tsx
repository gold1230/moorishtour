"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import {
  EnvelopeIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M16.04 3C9.02 3 3.32 8.68 3.32 15.68c0 2.23.58 4.41 1.69 6.33L3 29l7.18-1.88a12.7 12.7 0 0 0 5.85 1.49h.01c7.01 0 12.72-5.69 12.72-12.69C28.76 8.91 23.05 3 16.04 3Zm0 23.46h-.01a10.52 10.52 0 0 1-5.36-1.47l-.38-.23-4.26 1.12 1.14-4.15-.25-.4a10.47 10.47 0 0 1-1.6-5.65c0-5.82 4.76-10.55 10.62-10.55 5.85 0 10.61 4.73 10.61 10.55 0 5.82-4.76 10.78-10.51 10.78Zm5.82-7.89c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.71.16-.21.32-.82 1.04-1 1.25-.18.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.6-.95-.85-1.59-1.89-1.78-2.21-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.18.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.71-.98-2.34-.26-.62-.52-.54-.71-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.65 0 1.56 1.14 3.07 1.3 3.28.16.21 2.24 3.42 5.42 4.79.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.89-.77 2.15-1.51.27-.74.27-1.37.19-1.5-.08-.14-.29-.22-.61-.38Z" />
    </svg>
  );
}

export default function FloatingContactButtons() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [demoRunning, setDemoRunning] = useState(false);

  const openTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // Defer the initial client-only portal setup until after mounting.
    const mountTimer = window.setTimeout(() => setMounted(true), 0);

    // =====================================================
    // FIRST VISIT AUTO DEMO
    // =====================================================

    const alreadySawDemo = localStorage.getItem(
      "moorish-contact-demo-seen"
    );

    if (!alreadySawDemo) {
      window.setTimeout(() => setDemoRunning(true), 0);

      // Pop contact buttons out after 1 second
      openTimer.current = setTimeout(() => {
        setOpen(true);
      }, 1000);

      // Bring them back inside after about 4 seconds
      closeTimer.current = setTimeout(() => {
        setOpen(false);
        setDemoRunning(false);

        localStorage.setItem(
          "moorish-contact-demo-seen",
          "true"
        );
      }, 4500);
    }

    return () => {
      window.clearTimeout(mountTimer);
      if (openTimer.current) {
        clearTimeout(openTimer.current);
      }

      if (closeTimer.current) {
        clearTimeout(closeTimer.current);
      }
    };
  }, []);

  // =====================================================
  // USER CLICK
  // =====================================================

  const handleToggle = () => {
    // If visitor clicks during automatic animation,
    // stop the automatic demo and give them control.

    if (openTimer.current) {
      clearTimeout(openTimer.current);
    }

    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
    }

    setDemoRunning(false);

    localStorage.setItem(
      "moorish-contact-demo-seen",
      "true"
    );

    setOpen((prev) => !prev);
  };

  if (!mounted) return null;

  return createPortal(
    <div
      className=" cursor-pointer 
        fixed
        bottom-6
        left-5
        z-[999999]
        flex
        flex-col
        items-center
        gap-3
        sm:bottom-8
        sm:left-7
      "
    >
      {/* =====================================================
          WHATSAPP BUTTON
      ===================================================== */}

      <a
        href="https://wa.me/212600000000"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
        className={`
          group
          relative
          flex
          h-[58px]
          w-[58px]
          items-center
          justify-center
          rounded-full
          bg-[#E68243]
          text-white
          shadow-[0_12px_35px_rgba(0,0,0,0.18)]
          transition-all
          duration-700
          ease-[cubic-bezier(0.34,1.56,0.64,1)]
          hover:-translate-y-1
          hover:scale-110
          hover:bg-[#d87538]
          active:scale-95
          sm:h-16
          sm:w-16

          ${
            open
              ? `
                pointer-events-auto
                translate-y-0
                rotate-0
                scale-100
                opacity-100
              `
              : `
                pointer-events-none
                translate-y-[145px]
                rotate-[20deg]
                scale-50
                opacity-0
              `
          }
        `}
        style={{
          transitionDelay: open ? "120ms" : "0ms",
        }}
      >
        {/* WhatsApp pulse */}

        <span
          className="
            absolute
            inset-0
            -z-10
            animate-ping
            rounded-full
            bg-[#E68243]/20
          "
        />

        <WhatsAppIcon className="h-8 w-8" />

        {/* Tooltip */}

        <span
          className="
            pointer-events-none
            absolute
            left-[calc(100%+12px)]
            hidden
            whitespace-nowrap
            rounded-xl
            bg-slate-950
            px-3
            py-2
            text-xs
            font-bold
            text-white
            opacity-0
            shadow-xl
            transition-all
            duration-300
            group-hover:translate-x-1
            group-hover:opacity-100
            sm:block
          "
        >
          WhatsApp
        </span>
      </a>

      {/* =====================================================
          EMAIL BUTTON
      ===================================================== */}

      <a
        href="mailto:your@email.com"
        aria-label="Send us an email"
        className={`
          group
          relative
          flex
          h-[58px]
          w-[58px]
          items-center
          justify-center
          rounded-full
          bg-[#E68243]
          text-white
          shadow-[0_12px_35px_rgba(0,0,0,0.18)]
          transition-all
          duration-700
          ease-[cubic-bezier(0.34,1.56,0.64,1)]
          hover:-translate-y-1
          hover:scale-110
          hover:bg-[#d87538]
          active:scale-95
          sm:h-16
          sm:w-16

          ${
            open
              ? `
                pointer-events-auto
                translate-y-0
                rotate-0
                scale-100
                opacity-100
              `
              : `
                pointer-events-none
                translate-y-[72px]
                -rotate-[20deg]
                scale-50
                opacity-0
              `
          }
        `}
        style={{
          transitionDelay: open ? "60ms" : "70ms",
        }}
      >
        <EnvelopeIcon className="h-8 w-8 stroke-[1.8]" />

        {/* Tooltip */}

        <span
          className="
            pointer-events-none
            absolute
            left-[calc(100%+12px)]
            hidden
            whitespace-nowrap
            rounded-xl
            bg-slate-950
            px-3
            py-2
            text-xs
            font-bold
            text-white
            opacity-0
            shadow-xl
            transition-all
            duration-300
            group-hover:translate-x-1
            group-hover:opacity-100
            sm:block
          "
        >
          Email Us
        </span>
      </a>

      {/* =====================================================
          MAIN CONTACT BUTTON
      ===================================================== */}

      <div className="relative flex items-center">

        {/* ===================================================
            CONTACT US LABEL
        =================================================== */}

        <div
          className={`
            pointer-events-none
            absolute
            left-[76px]
            whitespace-nowrap
            rounded-xl
            bg-slate-950
            px-4
            py-2.5
            text-sm
            font-bold
            text-white
            shadow-xl
            transition-all
            duration-500

            ${
              open
                ? `
                  -translate-x-3
                  scale-90
                  opacity-0
                `
                : `
                  translate-x-0
                  scale-100
                  opacity-100
                `
            }
          `}
        >
          Contact us

          <span
            className="
              absolute
              -left-1.5
              top-1/2
              h-3
              w-3
              -translate-y-1/2
              rotate-45
              bg-slate-950
            "
          />
        </div>

        {/* ===================================================
            BUTTON
        =================================================== */}

        <button
          type="button"
          onClick={handleToggle}
          aria-label={
            open
              ? "Close contact menu"
              : "Open contact menu"
          }
          aria-expanded={open}
          className={`
            cursor-pointer 
            group
            relative
            flex
            h-[64px]
            w-[64px]
            items-center
            justify-center
            rounded-full
            text-white
            transition-all
            duration-500
            ease-out
            hover:-translate-y-1
            hover:scale-105
            active:scale-95
            sm:h-[70px]
            sm:w-[70px]

            ${
              open
                ? `
                  bg-[#FF5C61]
                  shadow-[0_14px_40px_rgba(255,92,97,0.32)]
                `
                : `
                  bg-[#E68243]
                  shadow-[0_14px_40px_rgba(230,130,67,0.35)]
                `
            }
          `}
        >
          {/* =================================================
              CLOSED STATE ICONS
          ================================================= */}

          <span
            className={`
              absolute
              inset-0
              transition-all
              duration-500

              ${
                open
                  ? `
                    rotate-180
                    scale-50
                    opacity-0
                  `
                  : `
                    rotate-0
                    scale-100
                    opacity-100
                  `
              }
            `}
          >
            {/* MINI WHATSAPP */}

            <span
              className="
                absolute
                left-[10px]
                top-[10px]
                flex
                h-[32px]
                w-[32px]
                items-center
                justify-center
                rounded-full
                bg-white
                text-[#E68243]
                shadow-md
                transition-transform
                duration-300
                group-hover:-translate-x-0.5
                group-hover:-translate-y-0.5
              "
            >
              <WhatsAppIcon className="h-5 w-5" />
            </span>

            {/* MINI EMAIL */}

            <span
              className="
                absolute
                bottom-[9px]
                right-[8px]
                flex
                h-[32px]
                w-[32px]
                items-center
                justify-center
                rounded-full
                bg-white
                text-[#E68243]
                shadow-md
                transition-transform
                duration-300
                group-hover:translate-x-0.5
                group-hover:translate-y-0.5
              "
            >
              <EnvelopeIcon className="h-[19px] w-[19px] stroke-[2]" />
            </span>
          </span>

          {/* =================================================
              OPEN STATE X
          ================================================= */}

          <XMarkIcon
            className={`
              absolute
              h-9
              w-9
              stroke-[2.5]
              transition-all
              duration-500

              ${
                open
                  ? `
                    rotate-0
                    scale-100
                    opacity-100
                  `
                  : `
                    -rotate-180
                    scale-50
                    opacity-0
                  `
              }
            `}
          />

          {/* =================================================
              CONTACT COUNT
          ================================================= */}

          <span
            className={`
              absolute
              -right-1
              -top-1
              flex
              h-5
              min-w-5
              items-center
              justify-center
              rounded-full
              border-2
              border-white
              bg-slate-950
              px-1
              text-[10px]
              font-bold
              text-white
              transition-all
              duration-300

              ${
                open
                  ? "scale-0 opacity-0"
                  : "scale-100 opacity-100"
              }
            `}
          >
            2
          </span>

          {/* =================================================
              CLOSED PULSE
          ================================================= */}

          {!open && (
            <>
              <span
                className="
                  absolute
                  inset-0
                  -z-10
                  animate-ping
                  rounded-full
                  bg-[#E68243]/15
                "
              />

              <span
                className="
                  absolute
                  -inset-1
                  -z-20
                  rounded-full
                  border
                  border-[#E68243]/20
                "
              />
            </>
          )}
        </button>

        {/* ===================================================
            FIRST-TIME DEMO LABEL
        =================================================== */}

        {demoRunning && open && (
          <div
            className="
              pointer-events-none
              absolute
              left-[78px]
              animate-pulse
              whitespace-nowrap
              rounded-xl
              bg-white
              px-4
              py-2.5
              text-sm
              font-bold
              text-slate-800
              shadow-xl
              ring-1
              ring-slate-200
            "
          >
            Contact us anytime
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}