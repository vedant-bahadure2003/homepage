"use client";

import { useState } from "react";
import { FaChevronDown, FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import LanguageSelector from "./LanguageSelector";

const menuItems = [
  { label: "Home", link: "/" },
  {
    label: "About Us",
    dropdown: ["Department Overview", "History", "Vision"],
  },
  {
    label: "Special Units",
    dropdown: ["CCTNS", "Cyber Cell", "Intelligence Department"],
  },
  {
    label: "For Citizens",
    dropdown: ["File Complaint", "Complaint Status", "Terms of Service"],
  },
  {
    label: "Police Department",
    dropdown: ["Staff Directory", "Branch Info", "Home Department"],
  },
];

const helplineItems = [
  { label: "Control Room", number: "112" },
  { label: "Women Helpline", number: "1091" },
  { label: "Senior Citizens", number: "1090" },
  { label: "Childline", number: "1098" },
];

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isHelplineOpen, setIsHelplineOpen] = useState(false);

  const toggleDropdown = (itemLabel) => {
    setOpenDropdown(openDropdown === itemLabel ? null : itemLabel);
  };

  const toggleHelpline = () => {
    setIsHelplineOpen(!isHelplineOpen);
  };

  // Close mobile menu when clicking outside or on a link
  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
    setIsHelplineOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full px-4 z-50">
      <div className="max-w-[1260px] bg-white mx-auto flex items-center shadow-xl rounded-[15px] justify-between p-2 relative">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/nashik-police-logoo-modified.png"
            alt="Nashik Police"
            width={50}
            height={50}
            className="rounded-full"
          />
        </div>

        {/* Mobile - Language Selector + Hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <LanguageSelector />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-[#0A1C74] text-xl focus:outline-none"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Desktop Menu Items */}
        <div className="hidden md:flex gap-12 items-center">
          {menuItems.map((item) => (
            <div key={item.label} className="relative group">
              {item.dropdown ? (
                <div className="flex items-center gap-1 text-gray-700 hover:text-[#988e63] cursor-pointer">
                  <span>{item.label}</span>
                  <FaChevronDown className="w-3 h-3 mt-[2px] transform transition-transform duration-200 group-hover:rotate-180" />
                </div>
              ) : (
                <Link
                  href={item.link}
                  className={`${
                    item.label === "Home"
                      ? "text-[#988e63] border-b-2 border-[#988e63]"
                      : "text-gray-700 hover:text-[#988e63]"
                  }`}
                >
                  {item.label}
                </Link>
              )}

              {/* Desktop Dropdown */}
              {item.dropdown && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white border rounded-md shadow-md z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200">
                  {item.dropdown.map((subItem) => (
                    <div
                      key={subItem}
                      className="px-4 py-2 text-black hover:bg-gray-100 cursor-pointer"
                    >
                      {subItem}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop Right Side - Language + Phone */}
        <div className="hidden md:flex items-center gap-4">
          <span className="text-gray-700 cursor-pointer">
            <LanguageSelector />
          </span>
          <div className="relative group">
            <div className="flex items-center gap-3 bg-gray-200 rounded-full p-1 cursor-pointer">
              <FaPhoneAlt className="text-white bg-[#988e63] rounded-full p-1 w-8 h-8" />
              <FaChevronDown className="w-3 h-3 mt-[2px] text-[#988e63] transform transition-transform duration-200 group-hover:rotate-180" />
            </div>
            <div className="absolute right-0 mt-2 w-56 bg-white border rounded-md shadow-md z-20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200">
              {helplineItems.map((item, index) => (
                <div
                  key={item.label}
                  className={`px-4 py-2 text-black ${
                    index !== helplineItems.length - 1
                      ? "border-b border-gray-300"
                      : ""
                  }`}
                >
                  {item.label}: {item.number}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white rounded-b-[15px] shadow-lg p-4 z-40">
            <div className="flex flex-col gap-3">
              {menuItems.map((item) => (
                <div key={item.label}>
                  {item.dropdown ? (
                    <div>
                      <div
                        className="flex items-center justify-between text-gray-700 font-medium cursor-pointer py-2"
                        onClick={() => toggleDropdown(item.label)}
                      >
                        <span>{item.label}</span>
                        <FaChevronDown
                          className={`w-3 h-3 transform transition-transform duration-200 ${
                            openDropdown === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                      {openDropdown === item.label && (
                        <div className="ml-4 space-y-2 pb-2">
                          {item.dropdown.map((subItem) => (
                            <div
                              key={subItem}
                              className="text-sm text-gray-600 hover:text-[#988e63] cursor-pointer py-1"
                              onClick={closeMobileMenu}
                            >
                              {subItem}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.link}
                      className={`block py-2 ${
                        item.label === "Home"
                          ? "text-[#988e63] font-medium"
                          : "text-gray-700 hover:text-[#988e63]"
                      }`}
                      onClick={closeMobileMenu}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile Helpline Dropdown */}
              <div className="mt-2 border-t border-gray-200 pt-3">
                <div
                  className="flex items-center justify-between font-medium text-gray-700 cursor-pointer py-2"
                  onClick={toggleHelpline}
                >
                  <span>Helpline Numbers</span>
                  <FaChevronDown
                    className={`w-3 h-3 transform transition-transform duration-200 ${
                      isHelplineOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {isHelplineOpen && (
                  <div className="space-y-2 ml-4 pb-2">
                    {helplineItems.map((item) => (
                      <div
                        key={item.label}
                        className="text-sm text-gray-600 hover:text-[#988e63] py-1"
                      >
                        {item.label}: {item.number}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
