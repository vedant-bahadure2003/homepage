import Link from "next/link";
import React from "react";

const JusticeHelpSecurityDashboard = () => {
  return (
    <div className="min-h-screen pt-10 md:pt-0 bg-gray-50 p-4 md:p-6 lg:p-8">
      {/* Header */}
      <div className="text-center mb-6 md:mb-8">
        <h1 className="text-[32px] md:text-[36px] lg:text-[48px] text-gray-900 mb-4">
          Justice, Help & Security
        </h1>
        <p className="text-gray-800 text-[16px] md:text-[18px] lg:text-[20px] max-w-lg mx-auto">
          Citizen services performance snapshot showcasing speed and
          transparency. Every complaint counts, every action reflects our
          commitment to Nashikkars.
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-center md:h-[25vh] gap-6 lg:gap-8 mb-8">
          {/* Left Side - Dial 112 */}
          <div className="flex  lg:flex-row bg-white rounded-lg gap-2 md:gap-4 shadow-sm items-center px-4 py-6 md:py-4 w-full lg:w-1/2">
            <div className="text-[34px] md:text-[60px] lg:text-[85px] font-medium text-[#57462a] text-center lg:text-left">
              Dial 112
            </div>
            <p className="text-[#57462a] text-[24px] md:text-[24px] lg:text-[30px] text-left">
              6.03 minutes average response time
            </p>
          </div>

          {/* Right Side - 100% Resolved */}
          <div
            className="bg-[#57462a] rounded-2xl px-4 py-6  md:p-8 text-white w-full lg:w-3/4"
            style={{
              backgroundImage:
                "linear-gradient(rgba(87, 70, 42, 0.7), rgba(87, 70, 42, 0.7)), url('/Geometric-Low-Poly.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="flex  lg:flex-row items-center  justify-between gap-4">
              <p className="text-[16px] md:text-[20px] lg:text-[24px] text-left">
                PG Portal, Aapla Sarkar Portal, Visitor Meetings, and Democracy
                Day Complaints
              </p>
              <div className="text-center lg:text-left">
                <div className="text-[32px] md:text-[40px] lg:text-[48px] font-bold mb-1">
                  100%
                </div>
                <div className="text-[18px] md:text-[22px] lg:text-[24px] font-semibold">
                  Resolved
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Three Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-1 lg:gap-6 mb-8">
          {/* CP Card */}
          <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm">
            <div className="text-left">
              <div className="text-[20px] md:text-[40px] lg:text-[48px] text-[#57462a] mb-2">
                93.56% CP
              </div>
              <p className="text-[#57462a] text-[14px] md:text-[24px] lg:text-[30px]">
                WhatsApp complaint resolution complete
              </p>
            </div>
          </div>

          {/* Passport Card */}
          <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm">
            <div className="text-left">
              <div className="text-[20px] md:text-[40px] lg:text-[48px] text-[#57462a] mb-2">
                95.41 % Passport
              </div>
              <p className="text-[#57462a] text-[14px] md:text-[24px] lg:text-[30px]">
                Police verification of passport applications complete
              </p>
            </div>
          </div>

          {/* Police Card */}
          <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm">
            <div className="text-left">
              <div className="text-[20px] md:text-[40px] lg:text-[48px] text-[#57462a] mb-2">
                95.85% Police
              </div>
              <p className="text-[#57462a] text-[14px] md:text-[24px] lg:text-[30px]">
                Police Clearance Certificate (PCC) verification complete
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col items-end gap-4 lg:gap-10">
          <div className="text-[20px] text-gray-800">
            Last Updated: 05-08-2025 04:13 PM
          </div>
          <Link
            href="https://surakshitnashik.com/sign-in?redirectUrl=/"
            className="cursor-pointer"
          >
            {" "}
            <button className="bg-[#57462a] text-white px-6 py-4 md:px-6 md:py-3 rounded-lg font-semibold hover:bg-[#988e63] transition-colors text-sm md:text-base cursor-pointer">
              Full Dashboard
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JusticeHelpSecurityDashboard;
