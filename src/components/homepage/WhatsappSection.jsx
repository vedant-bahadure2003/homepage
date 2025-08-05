"use client";

import Image from "next/image";

const WhatsappSection = () => {
  return (
    <div className="bg-[#03045E] min-h-[80vh] flex flex-col justify-center items-center text-white ">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center justify-between w-[90%] md:w-[80%] border-b border-gray-600 pb-12">
        <div className="text-center md:text-left">
          <h1 className="text-[48px]">Click HERE to send your suggestions</h1>
          <p className="text-[48px] mt-4">on CP WhatsApp Number</p>
        </div>

        <div className="flex items-center mt-6 md:mt-0">
          <Image
            src="/WhatsApp.svg.webp"
            alt="WhatsApp"
            width={50}
            height={50}
            className="mr-4"
          />
          <span className="text-[48px] ">9923323311</span>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row items-center justify-between w-[90%] md:w-[80%] pt-12">
        <h2 className="text-[48px] mb-8 md:mb-0">
          Scan to Follow our WhatsApp Channel
        </h2>

        <div className="flex justify-center">
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
