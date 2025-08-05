import Image from "next/image";
import React from "react";

const Homepage = () => {
  return (
    <>
      <div className="bg-white flex justify-center min-h-screen pt-24 w-full">
        <div className="flex flex-col md:flex-row bg-[#0302a6] w-[95%] md:w-[90%] lg:w-[82%] h-auto md:h-[100vh] rounded-4xl">
          {/* Left Section */}
          <div className="text-white w-full md:w-1/2 flex justify-center items-start md:mt-14 mt-0  p-6 md:p-0">
            <div className="flex flex-col items-start">
              <div className="mb-6">
                <Image
                  src="/Nashik-Police-logo.webp"
                  alt="Nashik Police Logo"
                  width={100}
                  height={100}
                  className="mx-auto"
                />
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-[64px] leading-snug mb-2">
                Nashik City <br /> Police
              </h1>
              <p className="text-2xl sm:text-3xl md:text-[48px] mb-6">
                Shaasak Nahi, Sevak.
              </p>
              <button className="bg-white text-[#000080] font-semibold px-4 py-2 rounded-lg text-sm sm:text-base">
                Read More
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2 py-6 px-4 md:px-0 flex justify-center">
            <div className="w-full max-w-[500px] flex flex-col gap-2">
              {/* First Row */}
              <div className="flex flex-col sm:flex-row gap-2 h-auto sm:h-[120px]">
                <div className="w-full sm:w-1/2 relative h-[150px] sm:h-auto">
                  <Image
                    src="/header01.webp"
                    alt="Citizens"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>

                <div className="w-full sm:w-1/2 bg-[#1B1CE2] flex flex-col justify-center px-4 py-3 rounded-lg">
                  <h2 className="text-base sm:text-lg font-semibold text-white">
                    Our Initiatives for Citizens
                  </h2>
                  <div className="text-right mt-2">
                    <button className="bg-white text-[#1B1CE2] px-3 py-1 rounded-full">
                      →
                    </button>
                  </div>
                </div>
              </div>

              {/* Second Row */}
              <div className="flex flex-col sm:flex-row gap-2 h-auto sm:h-[180px]">
                <div className="w-full sm:w-1/3 bg-white text-black p-4 rounded-2xl flex flex-col items-start justify-start">
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

                <div className="w-full sm:w-2/3 bg-[#1B1CE2] p-4 rounded-2xl text-white flex flex-col sm:flex-row items-center">
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
                      className="rounded-lg sm:mb-[52px]"
                    />
                  </div>
                </div>
              </div>

              {/* Third Row */}
              <div className="flex flex-col sm:flex-row gap-2 h-auto sm:h-[160px]">
                <div className="w-full sm:w-2/3 relative h-[180px] sm:h-auto">
                  <Image
                    src="/kumbh-mela.webp"
                    alt="Kumbh"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                  <div className="absolute bottom-0 w-full bg-yellow-400 text-black py-2 px-3 rounded-b-lg text-[16px]">
                    About Simhastha Kumbh 2026-27
                  </div>
                </div>

                <div className="w-full sm:w-1/3 bg-white text-black rounded-lg flex flex-col items-center justify-center text-center py-4">
                  <Image
                    src="/feedback.svg"
                    alt="Feedback"
                    width={80}
                    height={80}
                  />
                  <p className="mt-2 text-[16px] bg-yellow-400 w-full py-1 rounded-b-lg">
                    Citizen Feedback Form
                  </p>
                </div>
              </div>

              {/* Fourth Row */}
              <div className="flex flex-col sm:flex-row gap-2 h-auto sm:h-[120px]">
                <div className="w-full sm:w-1/2 bg-[#0D1B90] rounded-lg flex items-center justify-start px-4 py-4">
                  <h3 className="text-[20px] text-white">
                    Search Your Police Station
                  </h3>
                </div>

                <div className="w-full sm:w-1/2 bg-white text-[#0D1B90] rounded-lg px-4 py-3 flex justify-between items-center">
                  <div>
                    <h4 className="text-[20px]">Ease Of Living</h4>
                    <p className="text-[14px]">
                      Police Verification [Passport] &<br /> Character
                      Certificate
                    </p>
                  </div>
                  <button className="bg-[#0D1B90] text-white px-3 py-1 rounded-full">
                    →
                  </button>
                </div>
              </div>

              {/* Fifth Row */}
              <div className="flex flex-col sm:flex-row gap-2 h-auto sm:h-[140px]">
                <div className="w-full sm:w-2/3 relative h-[180px] sm:h-auto">
                  <Image
                    src="/police-[ress.webp"
                    alt="Press"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                  <div className="absolute bottom-0 left-0 text-[16px] bg-[#0D1B90] px-4 py-2 rounded-b-lg text-white">
                    Nashik City Police Press Releases
                  </div>
                </div>

                <div className="w-full sm:w-1/3 bg-[#1B1CE2] text-white px-4 py-3 rounded-lg flex flex-col justify-between items-start">
                  <p className="text-[16px]">Contact Senior Officers</p>
                  <button className="bg-white text-[#1B1CE2] px-3 py-1 rounded-full">
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
