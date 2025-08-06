"use client";

import Image from "next/image";
import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const CommissionerMessage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-6">
      <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between w-full max-w-7xl  p-8 ">
        {/* Image Section */}
        <div className="md:w-1/2 w-full  flex flex-col items-center">
          <div className="rounded-[40px]  overflow-hidden w-[350px] md:w-[400px]">
            <Image
              src="/commissioner-officer-nashik.webp"
              alt="Commissioner of Police"
              width={400}
              height={400}
              className="object-cover"
            />
          </div>
          <p className="text-center text-gray-700 text-[16px] mt-4">
            Visiting hours [Without prior appointment]:
            <br />
            <span className="text-[#57462a] text-[16px] font-medium">
              11:00 AM to 1:00 PM
            </span>
          </p>
        </div>

        {/* Message Section */}
        <div className="md:w-[55%] w-full mt-8 md:mt-0 ">
          <h2 className="text-[48px] text-gray-900 mb-6 leading-tight">
            Message from the Commissioner of Police
          </h2>

          <div className="text-2xl text-gray-800 leading-relaxed relative pl-6">
            <FaQuoteLeft className="text-[#57462a] absolute left-0 top-1 text-xl" />
            <p>
              Through citizen-centric policing, our primary goal is to deliver
              high-quality services to the specific needs and concerns of
              Nashik’s regions. Understanding citizens' needs, core policing
              will be implemented and reviewed periodically. Necessary changes
              will be made continuously based on feedback to ensure the best
              service to Nashik residents. Jai Hind!
            </p>
          </div>

          <div className="mt-6">
            <p className="text-gray-700 text-[16px] ">Sandeep Karnik (IPS)</p>
            <p className="text-gray-600 text-[16px]">
              Commissioner of Police, Nashik City
            </p>
          </div>

          <button className="mt-6 bg-[#57462a] hover:bg-[#604f34] text-white px-6 py-3 rounded-xl font-semibold text-sm">
            Connect via E-Meet
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommissionerMessage;
