"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

const sampleTweets = [
  "Huge National Level Recognition awarded to Nashik Police.",
  "Nashik Police helps solve 17-year-old kidnapping case.",
  "Proud of those who got laurels for India in USA Fire Games.",
  "Cyber Crime Awareness Week launched successfully.",
  "Traffic awareness drive yields great response.",
  "Commendation letter to the Anti-Narcotics squad.",
  "Senior officer felicitated for exemplary service.",
  "Training program for cybercrime awareness concluded.",
  "Nashik Police launches safety campaign for women.",
  "Anti-drug awareness rally flagged off.",
];

const sampleFacebookPosts = [
  "#updates2025 #police #Commissioner",
  "Nashik CP initiates new safety drive.",
  "Photos from the safety awareness event.",
  "New forensics vans introduced.",
  "Joint action by police and local volunteers.",
  "Commissioner visits traffic control center.",
  "Press conference on upcoming initiatives.",
  "Meeting with cyber experts to tackle frauds.",
  "Public helpline launch for women safety.",
  "Highlights from recent community engagement.",
];

const pressReleases = [
  "नाशिक क्र. 1 पोलिसांची ही कामगिरी",
  "अठरा तासात सुटलेली एक गुन्ह्याची गुंतागुंत",
  "माझगावमधील गुन्ह्याबाबत ठोस निर्णय",
  "पोलिस दलाचे शंभर दिवसांचे आराखडा सादर",
  "शाळकरी मुलांसाठी नवीन मोहीम राबविली",
  "गुन्हेगारांच्या मुसक्या आवळण्यात आले",
  "सर्वोत्कृष्ट तपास कामगिरीसाठी पुरस्कार",
  "सर्व विभाग प्रमुखांची संयुक्त बैठक",
  "अल्पवयीन मुलीच्या बचावासाठी विशेष मोहिम",
  "आरटीआयचा योग्य वापर करून प्राप्त माहिती.",
  "पोलिस दलाचे शंभर दिवसांचे आराखडा सादर",
  "शाळकरी मुलांसाठी नवीन मोहीम राबविली",
  "गुन्हेगारांच्या मुसक्या आवळण्यात आले",
  "सर्वोत्कृष्ट तपास कामगिरीसाठी पुरस्कार",
  "सर्व विभाग प्रमुखांची संयुक्त बैठक",
  "अल्पवयीन मुलीच्या बचावासाठी विशेष मोहिम",
  "आरटीआयचा योग्य वापर करून प्राप्त माहिती.",
];

const SocialMediaFeed = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({
          top: 80,
          behavior: "smooth",
        });
        if (
          scrollRef.current.scrollTop + scrollRef.current.clientHeight >=
          scrollRef.current.scrollHeight
        ) {
          scrollRef.current.scrollTo({ top: 0, behavior: "smooth" });
        }
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="w-full flex justify-center p-3 md:p-10 bg-white min-h-[80vh] pt-16 ">
        <div className=" w-full lg:w-[75%]   ">
          <h2 className="text-[34px] text-black  mb-2">
            Social Media Feed & Updates
          </h2>
          <p className="text-[16px] text-gray-900 mb-8">
            Get the latest happenings and important updates from the official
            social media feed of the police department.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Twitter Feed */}
            <div className="border rounded-xl shadow p-4 max-h-[400px] overflow-y-auto">
              <h3 className=" flex items-center gap-2 text-xl text-gray-800 font-semibold mb-4">
                <Image
                  src="/twitter-logo.png"
                  alt="Twitter-logo"
                  width={30}
                  height={30}
                  className=" "
                />{" "}
                Tweets by nashikpolice
              </h3>
              {sampleTweets.map((tweet, i) => (
                <div key={i} className="mb-4 p-3 bg-gray-100 rounded">
                  <p className="text-black">{tweet}</p>
                  <p className="text-[#57462a] text-sm mt-1">
                    {" "}
                    <Link
                      href={`https://x.com/nashikpolice`}
                      className="cursor-pointer"
                    >
                      View on Twitter
                    </Link>{" "}
                  </p>
                </div>
              ))}
            </div>

            {/* Facebook Feed */}
            <div className="border rounded-xl shadow p-4 max-h-[400px] overflow-y-auto">
              <h3 className=" flex items-center gap-2 text-xl text-gray-800 font-semibold mb-4">
                <Image
                  src="/facebook-logo.png"
                  alt="Facebook-logo"
                  width={40}
                  height={40}
                  className=" "
                />{" "}
                Facebook posts by nashikpolice
              </h3>
              <div className="mb-4">
                <div className="w-full h-40 bg-gray-200 rounded flex items-center justify-center">
                  <span className="text-sm text-gray-600">
                    <Image
                      src="/Facebook-page.png"
                      alt="Nashik-Police-Facebook-Page"
                      width={500}
                      height={400}
                      className=" w-full h-auto"
                    />
                  </span>
                </div>
              </div>
              {sampleFacebookPosts.map((post, i) => (
                <div key={i} className="mb-4 p-3 bg-gray-100 rounded">
                  <p className="text-black">{post}</p>
                </div>
              ))}
            </div>

            {/* Press Releases */}
            <div className="border rounded-xl shadow p-4 max-h-[400px] overflow-hidden">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded">
                  Press Releases
                </span>
              </h3>
              <div
                ref={scrollRef}
                className="overflow-hidden max-h-[500px] space-y-4"
              >
                {pressReleases.map((release, i) => (
                  <div
                    key={i}
                    className="bg-blue-50 p-3 text-black rounded shadow text-sm leading-relaxed"
                  >
                    {release}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialMediaFeed;
