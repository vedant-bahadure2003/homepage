"use client";

import Image from "next/image";
import React from "react";

const GrievancePortals = () => {
  const portals = [
    {
      name: "Aaple Sarkar",
      image: "/Aaple-Sarkar.png",
    },
    {
      name: "P.G. Portal",
      image: "/pg-Portal.png",
    },
    {
      name: "Chief Minister's Secretariat",
      image: "/cm-Secretariat.png",
    },
    {
      name: "Citizen Portal Maharashtra Police",
      image: "/CitizenPortal-MaharashtraPolice.png",
    },
  ];

  return (
    <div className="w-full bg-white px-6 py-12 flex flex-col items-center">
      <h2 className=" text-[34px] lg:text-[48px] text-black text-start  mb-12 leading-snug">
        Key Central & State Government Citizen Grievance Redressal <br />{" "}
        Portals
      </h2>

      <div className="lg:flex lg:flex-wrap grid grid-cols-2 justify-center gap-4 md:gap-x-20 md:gap-y-20 max-w-6xl">
        {portals.map((portal, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="w-[180px] h-[50px] md:h-[160px] relative mb-4">
              <Image
                src={portal.image}
                alt={portal.name}
                layout="fill"
                objectFit="contain"
              />
            </div>
            <span className="text-[16px] lg:text-[20px] text-black ">
              {portal.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GrievancePortals;
