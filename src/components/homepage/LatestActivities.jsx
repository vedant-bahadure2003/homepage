"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const activities = [
  {
    src: "/activity5.webp",
    caption: "Discussing with attendees at the Commissioner of Police...",
  },
  { src: "/activity4.webp", caption: "Nashik Police Citizen Service Award" },
  {
    src: "/activity9.webp",
    caption: "Hon. Shri Girish Mahajan visited the CCTV Expo organized by...",
  },
  {
    src: "/activity14.webp",
    caption: "During the Nashik visit of Hon. Shri Yogesh Gaikwad, Minister...",
  },
  {
    src: "/activity8.webp",
    caption: "Discussing with attendees at the Commissioner of Police...",
  },
  {
    src: "/activity10.webp",
    caption: "On the occasion of International Women’s Day, gifts from the...",
  },
  {
    src: "/activity3.webp",
    caption: "Hon. Shri Girish Mahajan visited the CCTV Expo organized by...",
  },
  {
    src: "/activity6.webp",
    caption: "At the 25th Maharashtra State Police Sports Competition 202...",
  },
  {
    src: "/activity7.webp",
    caption: "On the occasion of International Women’s Day, gifts from the...",
  },
  {
    src: "/activity11.webp",
    caption: "On the occasion of International Women’s Day, gifts from the...",
  },
];

const LatestActivities = () => {
  return (
    <div className="min-h-[200vh] w-full bg-[#57462a] py-10 px-4 sm:px-6 text-white flex flex-col items-center">
      {/* Masonry Layout */}
      <div className=" max-w-5xl ">
        {/* Header */}
        <div className=" mb-10">
          <h2 className="text-[34px] md:text-[40px] mb-2">Latest Activities</h2>
          <p className=" text-[16px] md:text-[18px] text-gray-200 max-w-xl">
            Stay updated with the latest events and enthusiastic developments in
            the police force.
          </p>
        </div>{" "}
        <div className="columns-2 lg:columns-3 gap-4">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="mb-4 break-inside-avoid rounded-lg  overflow-hidden"
            >
              <img
                src={activity.src}
                alt={activity.caption}
                className="w-full h-auto object-cover"
              />
              <p className="text-[12px] md:text-[14px] text-white px-2 py-1">
                {activity.caption}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Read More Button */}
      <Link href="https://nashikcitypolice.gov.in/gallery">
        {" "}
        <button className="mt-10 px-6 py-2 bg-white text-[#57462a] text-sm font-semibold rounded-md shadow-md hover:bg-gray-100 transition cursor-pointer">
          Read More
        </button>
      </Link>
    </div>
  );
};

export default LatestActivities;
