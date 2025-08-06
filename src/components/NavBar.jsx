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

        {/* Hamburger Icon - Mobile */}
        <div className="md:hidden">
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

              {/* Dropdown */}
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

        {/* Right Side - Language + Phone */}
        <div className="hidden md:flex items-center gap-4">
          <span className="text-gray-700 cursor-pointer ">
            {" "}
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
            <div className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <div key={item.label}>
                  <div className="text-gray-700 font-medium mb-1">
                    {item.label}
                  </div>
                  {item.dropdown && (
                    <div className="ml-4 space-y-1">
                      {item.dropdown.map((subItem) => (
                        <div
                          key={subItem}
                          className="text-sm text-gray-600 hover:text-[#988e63] cursor-pointer"
                        >
                          {subItem}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile Helpline Dropdown */}
              <div className="mt-4">
                <div className="font-medium text-gray-700 mb-2">
                  Helpline Numbers
                </div>
                <div className="space-y-1 ml-2">
                  {helplineItems.map((item) => (
                    <div
                      key={item.label}
                      className="text-sm text-gray-600 hover:text-[#988e63]"
                    >
                      {item.label}: {item.number}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
