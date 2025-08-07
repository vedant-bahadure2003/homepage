import Image from "next/image";
import Link from "next/link";
import React from "react";
import FloatingChatbot from "../FloatingChatbot";

const Homepage = () => {
  return (
    <>
      <div className="bg-white flex justify-center min-h-screen pt-20 w-full">
        <div
          className="flex flex-col md:flex-row bg-[#57462a] w-[95%] md:w-[90%] lg:w-[82%] h-auto md:h-[100vh] rounded-2xl overflow-visible"
          style={{
            backgroundImage:
              "linear-gradient(rgba(87, 70, 42, 0.7), rgba(87, 70, 42, 0.7)), url('/Geometric-Low-Poly.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Left Section */}
          <div className="text-white w-full md:w-1/2 flex flex-col justify-between  items-center md:mt-14 mt-0 py-6 md:p-0">
            <div className="flex flex-row-reverse lg:flex-col items-start p-3 ">
              <div className="mb-6">
                <Image
                  src="/nashik-police-logoo-modified.png"
                  alt="Nashik Police Logo"
                  width={100}
                  height={100}
                  className="mx-auto"
                />
              </div>
              <div className="w-full">
                <h1 className="text-[32px] md:text-[64px] mb-2">
                  Nashik City
                  {/* <br className="hidden md:block" />  */}
                  Police
                </h1>
                <p className="text-[24px] md:text-[48px] mb-2">
                  Shaasak Nahi, Sevak.
                </p>
                <button className="bg-white text-[#57462a] font-semibold px-8 py-4 rounded-lg text-sm sm:text-base">
                  Read More
                </button>
              </div>
            </div>
            <div className="flex items-end w-full ">
              <Image
                src="/chatbot-avatar.svg"
                alt="Nashik Police Logo"
                width={200}
                height={200}
                className="ml-6 hidden md:block"
              />
              <FloatingChatbot />
            </div>
          </div>

          {/* Right Section Desktop */}
          <div className="w-full md:w-1/2 py-6 px-4 md:px-0 justify-center hidden md:flex">
            <div className="w-full max-w-[500px] flex flex-col gap-2">
              {/* First Row */}
              <div className="flex flex-row gap-2 h-auto sm:h-[120px]">
                <div className="w-1/2 relative h-[150px] sm:h-auto hidden md:block">
                  <Image
                    src="/header01.webp"
                    alt="Citizens"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg "
                  />
                </div>

                <div className="w-full sm:w-1/2 bg-[#988e63] flex flex-col justify-center px-4 py-3 rounded-lg">
                  <Link
                    href="https://nashikcitypolice.gov.in/initiatives"
                    className=" cursor-pointer"
                  >
                    <h2 className="text-base sm:text-lg font-semibold text-white">
                      Our Initiatives for Citizens
                    </h2>
                    <div className="text-right mt-2">
                      <button className="bg-white text-[#988e63] px-3 py-1 rounded-full">
                        →
                      </button>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Second Row */}
              <div className="flex flex-row gap-2 h-auto sm:h-[180px]">
                <div className="w-1/3 bg-white text-black p-4 rounded-2xl flex flex-col items-start justify-start">
                  <Image
                    src="/header2.webp"
                    alt="Police Aayukt"
                    width={50}
                    height={50}
                    className="rounded-full mb-2 ml-2"
                  />
                  <h3 className="text-[16px] text-center ml-3">
                    Police Aayukt <br /> 'Aaplya Dari'
                  </h3>
                  <p className="text-[12px] text-gray-500 mt-1 ml-3">
                    Schedule E-Meet
                  </p>
                </div>

                {/* <Link
                  href="/https://nashikcitypolice.gov.in/assets/Nashik_City_Police.pdf"
                  className=" cursor-pointer"
                > */}
                <div className="w-full sm:w-2/3 bg-[#988e63] p-4 rounded-2xl text-white flex flex-col sm:flex-row items-center">
                  <div>
                    <p className="text-sm text-gray-300">
                      Nashik City Police's Action Plan Document
                    </p>
                    <h3 className="text-[16px] mt-2">
                      Hon. Chief Minister's <br /> 7-Point 100-Day Program
                    </h3>
                    <p className="text-[12px] mt-2 underline">Read More</p>
                  </div>
                  <div className="sm:ml-auto mt-4 sm:mt-0">
                    <Image
                      src="/header3.webp"
                      alt="CM"
                      width={300}
                      height={300}
                      className="rounded-lg sm:mb-[45px]"
                    />
                  </div>
                </div>
                {/* </Link> */}
              </div>

              {/* Third Row */}
              <div className="flex flex-row gap-2 h-auto sm:h-[160px]">
                <div className="w-2/3 relative h-[180px] sm:h-auto">
                  <Link
                    href="https://nashikcitypolice.gov.in/kumbhmela"
                    className="cursor-pointer"
                  >
                    {" "}
                    <Image
                      src="/kumbh-mela.webp"
                      alt="Kumbh"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-lg"
                    />
                  </Link>
                  <div className="absolute bottom-0 w-full bg-[#f0e68c] text-black py-2 px-3 rounded-b-lg text-[16px]">
                    About Simhastha Kumbh 2026-27
                  </div>
                </div>

                <div className="w-full sm:w-1/3 bg-white text-black rounded-lg flex flex-col items-center justify-center text-center py-4">
                  <Link
                    href="https://nashikcitypolice.gov.in/feedback"
                    className="cursor-pointer"
                  >
                    {" "}
                    <Image
                      src="/feedback.svg"
                      alt="Feedback"
                      width={80}
                      height={80}
                    />
                  </Link>
                  <p className="mt-2 text-[16px] bg-[#f0e68c] w-full py-1 rounded-b-lg">
                    Citizen Feedback Form
                  </p>
                </div>
              </div>

              {/* Fourth Row */}
              <div className="flex flex-row gap-2 h-auto sm:h-[120px]">
                <div className="w-1/2 bg-[#988e63] rounded-lg flex items-center justify-start px-4 py-4">
                  <Link
                    href="https://nashikcitypolice.gov.in/#search-police-station"
                    className="cursor-pointer"
                  >
                    {" "}
                    <h3 className="text-[20px] text-white">
                      Search Your Police Station
                    </h3>
                  </Link>
                </div>

                <div className="w-full sm:w-1/2 bg-white text-[#988e63] rounded-lg px-4 py-3 flex justify-between items-center">
                  <div>
                    <h4 className="text-[20px]">Ease Of Living</h4>
                    <p className="text-[14px]">
                      Police Verification [Passport] &<br /> Character
                      Certificate
                    </p>
                  </div>
                  <button className="bg-[#988e63] text-white px-3 py-1 rounded-full">
                    →
                  </button>
                </div>
              </div>

              {/* Fifth Row */}
              <div className="flex flex-row gap-2 h-auto sm:h-[120px]">
                <div className="w-2/3 relative h-[180px] sm:h-auto">
                  <Link
                    href="https://nashikcitypolice.gov.in/citizenCorner?section=PressRelease"
                    className="cursor-pointer"
                  >
                    <Image
                      src="/police-[ress.webp"
                      alt="Press"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </Link>
                  <div className="absolute bottom-0 left-0 text-[16px] bg-[#988e63] px-4 py-2 rounded-b-lg text-white">
                    Nashik City Police Press Releases
                  </div>
                </div>

                <div className="w-full sm:w-1/3 bg-[#988e63] text-white px-4 py-3 rounded-lg flex flex-col justify-center items-start">
                  <Link
                    href="https://nashikcitypolice.gov.in/seniorOfficers"
                    className="cursor-pointer"
                  >
                    {" "}
                    <p className="text-[16px]">Contact Senior Officers</p>
                    <button className="bg-white text-[#988e63] px-3 py-1 rounded-full">
                      →
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section Mobile */}
          <div className="w-full px-4 flex flex-col gap-2 md:hidden">
            {/* 1. Our Initiatives for Citizens */}
            <div className="bg-[#988e63] px-4 py-3 rounded-lg text-white flex justify-between items-center">
              <Link href="https://nashikcitypolice.gov.in/initiatives">
                <h2 className="text-base font-semibold">
                  Our Initiatives for Citizens
                </h2>
              </Link>
              <button className="bg-white text-[#988e63] px-3 py-1 rounded-full">
                →
              </button>
            </div>

            {/* 2. Simhastha Kumbh + Search Your Police Station */}
            <div className="flex gap-2">
              {/* About Simhastha Kumbh */}
              <div className="relative h-[140px] w-1/2 rounded-lg ">
                <Link href="https://nashikcitypolice.gov.in/kumbhmela">
                  <Image
                    src="/kumbh-mela.webp"
                    alt="Kumbh"
                    layout="fill"
                    objectFit="cover"
                  />
                </Link>
                <div className="absolute bottom-0 w-full bg-[#f0e68c] text-black py-2 px-2 text-[14px]">
                  About Simhastha Kumbh 2026-27
                </div>
              </div>

              {/* Search Your Police Station */}
              <div className="bg-[#988e63] text-white w-1/2 rounded-lg px-3 py-4 flex items-center justify-center text-left">
                <Link href="https://nashikcitypolice.gov.in/#search-police-station">
                  <h3 className="text-sm font-semibold">
                    Search Your Police Station
                  </h3>
                </Link>
              </div>
            </div>

            {/* 3. Citizen Feedback Form + Ease of Living */}
            <div className="flex gap-2 h-[140px] ">
              {/* Citizen Feedback Form */}
              <div className="bg-white text-black flex-1 rounded-lg flex flex-col items-center justify-end text-center ">
                <Link href="https://nashikcitypolice.gov.in/feedback">
                  <Image
                    src="/feedback.svg"
                    alt="Feedback"
                    width={100}
                    height={100}
                  />
                </Link>
                <p className="mt-2 text-sm bg-[#f0e68c] w-full py-1 rounded-b-lg">
                  Citizen Feedback Form
                </p>
              </div>

              {/* Ease Of Living */}
              <div className="bg-white text-[#988e63] rounded-lg  py-3 flex flex-1 justify-between items-center">
                <div className="p-1">
                  <h4 className="text-sm font-semibold">Ease Of Living</h4>
                  <p className="text-xs">
                    Police Verification [Passport] &<br /> Character Certificate
                  </p>
                </div>
                <button className="bg-[#988e63] text-white px-3 py-1 rounded-full">
                  →
                </button>
              </div>
            </div>

            {/* 4. CM 100-Day Program */}
            <div className="relative overflow-visible">
              <div className="bg-[#988e63] flex p-4 rounded-xl text-white justify-between items-center relative overflow-visible z-10">
                <div>
                  <p className="text-[12px] text-white">
                    Nashik City Police's Action Plan Document
                  </p>
                  <h3 className="text-[16px] mt-2">
                    Hon. Chief Minister's <br /> 7-Point 100-Day Program
                  </h3>
                  <p className="text-[12px] mt-2 underline">Read More</p>
                </div>

                <div className="relative w-[100px] h-[100px] z-20">
                  <Image
                    src="/header3.webp"
                    alt="CM"
                    fill
                    className="rounded-lg z-20 object-cover p-1 scale-[1.4] absolute top-[-20px] right-[-20px]"
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-3 pb-3 ">
              {/* Left: Police Aayukt */}
              <div className="bg-white text-black p-3 rounded-xl flex flex-col items-start w-1/2">
                <Image
                  src="/header2.webp"
                  alt="Police Aayukt"
                  width={40}
                  height={40}
                  className="rounded-full mb-1"
                />
                <h3 className="text-sm font-semibold">
                  Police Aayukt 'Aaplya Dari'
                </h3>
                <p className="text-xs text-gray-500 mt-1">Schedule E-Meet</p>
              </div>

              {/* Right: Press Releases + Contact Officers */}
              <div className="flex flex-col w-1/2 gap-2">
                {/* Press Releases */}
                <div className="relative w-full h-[85px] rounded-xl overflow-hidden">
                  <Link href="https://nashikcitypolice.gov.in/citizenCorner?section=PressRelease">
                    <Image
                      src="/police-[ress.webp"
                      alt="Press"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-xl"
                    />
                    <div className="absolute bottom-0 left-0 text-[12px] bg-[#988e63] px-2 py-1 text-white w-full">
                      Nashik City Police Press Releases
                    </div>
                  </Link>
                </div>

                {/* Contact Senior Officers */}
                <div className="bg-[#988e63] text-white px-3 py-3 rounded-xl flex justify-between items-center">
                  <Link href="https://nashikcitypolice.gov.in/seniorOfficers">
                    <p className="text-xs">Contact Senior Officers</p>
                  </Link>
                  <button className="bg-white text-[#988e63] px-2 py-1 rounded-full text-sm">
                    →
                  </button>
                </div>
              </div>
            </div>
            <div className="flex  items-start w-full">
              <Image
                src="/chatbot-avatar.svg"
                alt="Nashik Police Logo"
                width={150}
                height={150}
                className=" "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
