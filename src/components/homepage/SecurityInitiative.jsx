// components/SecurityInitiative.jsx
"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const SecurityInitiative = () => {
  const initiatives = [
    {
      imgSrc: "/police-team.webp", // Replace with actual image if split required
      title: "2. CCTV Surveillance Expansion",
      description:
        "CCTV surveillance in Nashik being rapidly expanded via CSR funds for public places’ cameras installation and via CCTV Expos for private camera integration. Impact: Camera network expanding from a mere 600 (since 2018) to 1,948 boosting citywide surveillance and crime deterrence capacity.",
    },
    {
      imgSrc: "/cyber-patrolling.webp",
      title: "3. Cyber Patrolling",
      description:
        "Citizens are urged to report objectionable reels glorifying on-record criminals or old crime, flaunting sharp weapons and abusive content. Impact: Reels with 27.6 million views & 1.3 million likes were removed in 1.5 years curbing glorification of crime & online nuisance significantly in a city of 2.5 million.",
    },
    {
      imgSrc: "/aiml-group.webp",
      title: "4. AI/ML enabled Ground Presence System - Surakshit Nashik",
      description:
        "Ground Presence Monitoring system was launched that auto-reads and analyses geotagged images reported by on field staff for beat patrolling and stop&search. Impact: 1,716 key spots mapped citywide with 24x7 monitoring ensuring zero lull time in patrolling & uninterrupted police presence across 24 time slots of a day.",
    },
  ];
  return (
    <>
      {" "}
      <section className=" flex flex-col md:flex-row bg-white items-start justify-center px-6 md:px-20 py-10 gap-4">
        {/* Left Section */}
        <div className="md:w-[35vw] space-y-6">
          <h2 className="text-[34px] md:text-5xl  text-[#1e1e1e]">
            Security and Service Initiatives
          </h2>

          <div>
            <div className="md:w-[35vw] w-full pb-4">
              <Image
                src="/conference.webp"
                alt="Police training for AI/ML crowd control"
                width={500}
                height={400}
                className=" w-full h-auto block md:hidden"
              />
            </div>
            <h3 className="text-[16px] md:text-2xl font-semibold  text-[#1e1e1e] mb-4">
              1. Use of AI/ML for Crowd Control & Staff Training
            </h3>

            <p className="text-gray-700 text-[16px] leading-relaxed">
              In preparation for Kumbh 2027, an AI/ML-based video analytics
              pilot started for crowd counting, stampede alerts, and real-time
              zone analysis along with staff training to embrace latest tech,
              for accurate crowd management and early detection of potential
              hazards for public safety
            </p>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="md:w-[35vw] w-full">
          <Image
            src="/conference.webp"
            alt="Police training for AI/ML crowd control"
            width={500}
            height={400}
            className=" w-full h-auto md:block hidden"
          />
        </div>
      </section>
      <section className=" w-full   px-6 md:px-20 py-6 bg-white">
        <div className="flex justify-center ">
          <div className="lg:w-[70vw] grid grid-cols-1 md:grid-cols-3  gap-10">
            {initiatives.map((item, index) => (
              <div key={index} className="space-y-4">
                <div className="w-full h-[220px] relative rounded-xl overflow-hidden">
                  <Image
                    src={item.imgSrc}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-[16px] font-bold text-[#1e1e1e]">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-[16px] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <Link href="https://nashikcitypolice.gov.in/initiatives">
            {" "}
            <button className="bg-[#57462a] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#473c29] transition cursor-pointer">
              Read More
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default SecurityInitiative;
