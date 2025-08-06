"use client";
import { useEffect, useRef } from "react";

export default function GoogleTranslateScript() {
  const scriptLoadedRef = useRef(false);
  const translateInitializedRef = useRef(false);

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .goog-te-banner-frame.skiptranslate,
      .goog-te-gadget-icon {
        display: none !important;
      }
      body {
        top: 0 !important;
      }
      .goog-tooltip,
      .goog-tooltip:hover {
        display: none !important;
      }
      .goog-text-highlight {
        background-color: transparent !important;
        box-shadow: none !important;
      }
      #goog-gt-tt, .goog-te-balloon-frame {
        display: none !important;
      }
      .goog-te-menu-frame {
        display: none !important;
      }
      .VIpgJd-ZVi9od-l4eHX-hSRGPd {
        display: none !important;
      }
    `;
    document.head.appendChild(style);

    window.googleTranslateElementInit = () => {
      if (translateInitializedRef.current) return;

      try {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,mr",
            layout:
              window.google.translate.TranslateElement.InlineLayout.HORIZONTAL,
            autoDisplay: false,
            multilanguagePage: true,
          },
          "google_translate_element"
        );
        translateInitializedRef.current = true;
      } catch (err) {
        console.error("Google Translate init error", err);
      }
    };

    if (
      !scriptLoadedRef.current &&
      !document.querySelector('script[src*="translate.google.com"]')
    ) {
      const script = document.createElement("script");
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
      scriptLoadedRef.current = true;
    }

    return () => {
      const addedStyles = document.querySelectorAll("style");
      addedStyles.forEach((style) => {
        if (style.innerHTML.includes("goog-te")) {
          style.remove();
        }
      });

      const banner = document.querySelector(".goog-te-banner-frame");
      if (banner) banner.remove();

      document.cookie =
        "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      translateInitializedRef.current = false;
      scriptLoadedRef.current = false;
    };
  }, []);

  return <div id="google_translate_element" className="hidden" />;
}
