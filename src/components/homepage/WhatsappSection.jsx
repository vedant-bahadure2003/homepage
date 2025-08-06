"use client";

import Image from "next/image";

const WhatsappSection = () => {
  return (
    <div
      className="bg-[#57462a] min-h-[80vh] flex flex-col justify-center items-center text-white "
      style={{
        backgroundImage:
          "linear-gradient(rgba(87, 70, 42, 0.7), rgba(87, 70, 42, 0.7)), url('/Geometric-Low-Poly.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Top Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between w-[90%] md:w-[80%] border-b border-gray-600 pb-4 mt-8">
        <div className="text-left">
          <h1 className="lg:text-[48px] text-[34px]">
            Click HERE to send your suggestions
          </h1>
          <p className="lg:text-[48px] text-[34px] ">on CP WhatsApp Number</p>
        </div>

        <div className="flex items-center  mt-2 md:mt-0">
          <Image
            src="/WhatsApp.svg.webp"
            alt="WhatsApp"
            width={50}
            height={50}
            className="mr-4"
          />
          <span className="lg:text-[48px] text-[34px] ">9923323311</span>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between w-[90%] md:w-[80%] pt-12 mb-8">
        <h2 className="lg:text-[48px] text-[34px] mb-8 md:mb-0">
          Scan to Follow our WhatsApp Channel
        </h2>

        <div className="flex md:justify-center w-36 h-36 md:w-52 md:h-52 ">
          <Image
            src="/whatsapp-channel-qr.webp"
            alt="Nashik Police QR Code"
            width={250}
            height={250}
          />
        </div>
      </div>
    </div>
  );
};

export default WhatsappSection;
