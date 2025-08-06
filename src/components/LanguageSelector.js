"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const GoogleTranslateScript = dynamic(() => import("./GoogleTranslateScript"), {
  ssr: false,
});

const languages = [
  { code: "mr", name: "Marathi" },
  { code: "en", name: "English" },
];

export default function LanguageSelector() {
  const [mounted, setMounted] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleLanguage = () => {
    const newLang =
      selectedLanguage.code === "mr" ? languages[1] : languages[0];

    setSelectedLanguage(newLang);

    const select = document.querySelector(".goog-te-combo");
    if (select) {
      select.value = newLang.code;
      select.dispatchEvent(new Event("change"));
    }
  };

  if (!mounted) return null;

  return (
    <div>
      <div
        id="google_translate_element"
        style={{ position: "absolute", left: "-9999px", top: "auto" }}
      />
      <GoogleTranslateScript />
      <button
        onClick={toggleLanguage}
        className="text-[16px] font-medium px-3 py-2 rounded bg-gray-100 text-gray-700 hover:bg-gray-200"
      >
        {selectedLanguage.name}
      </button>
    </div>
  );
}
