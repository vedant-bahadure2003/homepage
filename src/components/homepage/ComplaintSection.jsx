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
    <div className="bg-white w-full flex flex-col items-center px-6 py-12">
      <h1 className="text-[48px]   text-black mb-2">
        Complaint, Information & Security - At One Click
      </h1>
      <p className="text-gray-800  max-w-xl mb-8">
        They perform many important tasks for the safety and order of society.
        Their responsibilities span across various sectors.
      </p>

      {/* Search bar */}
      <div className="relative w-full max-w-3xl mb-12">
        <input
          type="text"
          placeholder="Search for Pay e-Challan, Missing Person, Download Forms, Unidentified Dead Bodies, FIR"
          className="w-full px-5 py-3 rounded-full border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <FaSearch className="absolute top-3 right-4 text-gray-500" />
      </div>

      <div className="flex w-full max-w-5xl">
        {/* Sidebar Menu */}
        <div className="w-1/3   text-left space-y-2">
          <div>
            <h2 className="text-blue-700 text-[24px]  cursor-pointer">
              Online Services & Forms ▾
            </h2>
          </div>
          <div>
            <h2 className="text-blue-700 text-[24px] cursor-pointer">
              Popular Information ▾
            </h2>
          </div>
          <div>
            <h2 className="text-blue-700 text-[24px] cursor-pointer">
              What’s New? ▾
            </h2>
          </div>
        </div>

        {/* Card Grid */}
        <div className="w-3/4 grid grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden shadow-md relative group ${
                index === 7 ? "col-span-1 row-span-2" : ""
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
      </div>
    </div>
  );
};

export default ComplaintSection;
