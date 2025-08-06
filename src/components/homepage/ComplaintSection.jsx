"use client";

import { FaSearch } from "react-icons/fa";
import Image from "next/image";
import React from "react";

const cards = [
  { src: "/e-chalan.jpeg", label: "Pay e-Challan" },
  { src: "/lost-map.webp", label: "Report Lost/Found Information" },
  {
    src: "/malware-android-dangerous-common.jpg",
    label: "Block Stolen/Lost Mobile",
  },
  { src: "/cash.jpg", label: "Report Financial Fraud" },
  { src: "/tenent.jpg", label: "Register Tenant Information" },
  {
    src: "/Crime-against-children.jpg",
    label: "Report Crime Against Women/Children",
  },
  { src: "/track-phone.webp", label: "Notify Lost Mobile" },
  {
    src: "/cyber-crime.avif",
    label: "Report Other Cyber Crimes",
  },
];

const ComplaintSection = () => {
  return (
    <div className="bg-white w-full flex flex-col items-center px-4 md:px-6 lg:px-12 py-12">
      <h1 className="text-[34px] md:text-[36px] lg:text-[48px] text-black mb-2 text-left lg:text-center">
        Complaint, Information & Security - At One Click
      </h1>
      <p className="text-gray-800 max-w-xl text-left lg:text-center text-[20px] md:text-base mb-8">
        They perform many important tasks for the safety and order of society.
        Their responsibilities span across various sectors.
      </p>

      {/* Search bar */}
      <div className="relative w-full max-w-3xl mb-12">
        <input
          type="text"
          placeholder="Search for Pay e-Challan, Missing Person, Download Forms, Unidentified Dead Bodies, FIR"
          className="w-full px-5 py-3 rounded-full border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
        />
        <FaSearch className="absolute top-3.5 right-4 text-gray-500" />
      </div>

      {/* Main Content: Sidebar + Cards */}
      <div className="flex flex-col lg:flex-row w-full max-w-6xl gap-8">
        {/* Sidebar */}
        <div className="w-full lg:w-1/3 space-y-4 text-center lg:text-left hidden md:block">
          <h2 className="text-[#57462a] text-[20px] md:text-[24px] cursor-pointer">
            Online Services & Forms ▾
          </h2>
          <h2 className="text-[#57462a] text-[20px] md:text-[24px] cursor-pointer">
            Popular Information ▾
          </h2>
          <h2 className="text-[#57462a] text-[20px] md:text-[24px] cursor-pointer">
            What’s New? ▾
          </h2>
        </div>

        {/* Cards */}
        <div className="w-full lg:w-3/4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden shadow-md relative group ${
                index === 7 ? "row-span-1 md:row-span-2" : ""
              }`}
            >
              <Image
                src={card.src}
                alt={card.label}
                width={400}
                height={250}
                className="w-full h-[180px] object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Yellow gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-300 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300" />

              <div className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-white px-2 py-1 text-sm rounded">
                {card.label}
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <div
          className="w-full lg:w-1/3 space-y-4 text-left block md:hidden
"
        >
          <h2 className="text-[#57462a] text-[20px] md:text-[24px] cursor-pointer">
            Online Services & Forms ▾
          </h2>
          <h2 className="text-[#57462a] text-[20px] md:text-[24px] cursor-pointer">
            Popular Information ▾
          </h2>
          <h2 className="text-[#57462a] text-[20px] md:text-[24px] cursor-pointer">
            What’s New? ▾
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ComplaintSection;
