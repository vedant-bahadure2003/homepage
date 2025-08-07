"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { BsCalendar2Date } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-white pt-12 pb-3 border-t border-gray-200 text-[#1c1c1c] ">
      {/* Top Logos */}
      <div className="flex justify-center flex-wrap gap-6 md:gap-10 px-4">
        {[
          "image1.webp",
          "image2.webp",
          "image3.webp",
          "image4.webp",
          "image5.webp",
          "image6.webp",
          "image7.webp",
          "image8.webp",
          "image9.webp",
        ].map((img, idx) => (
          <Image
            key={idx}
            src={`/footer/${img}`}
            alt={`logo-${idx}`}
            width={80}
            height={80}
            className="object-contain h-12"
          />
        ))}
      </div>

      {/* Main Footer Content */}
      <div className="w-[90%] md:w-[70%] mx-auto mt-14">
        <h2 className="text-[#57462a] text-[24px] font-semibold ">
          Nashik City Police
        </h2>
        <div className=" mx-auto mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 text-sm">
          {/* Column 1 */}
          <div>
            <h3 className="text-[20px] font-medium mb-4">
              General Information
            </h3>
            <ul className="space-y-2 text-gray-500 text-[14px] ">
              <li>
                <Link href="#">Press Releases</Link>
              </li>
              <li>
                <Link href="#">FAQs</Link>
              </li>
              <li>
                <Link href="#">Gallery</Link>
              </li>
              <li>
                <Link href="#">Senior Officer List</Link>
              </li>
              <li>
                <Link href="#">Police Recruitment</Link>
              </li>
              <li>
                <Link href="#">Disclaimer</Link>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-[20px] font-medium mb-4">Citizen Guidance</h3>
            <ul className="space-y-2 text-gray-500 text-[14px]">
              <li>
                <Link href="#">Safety Tips</Link>
              </li>
              <li>
                <Link href="#">Citizen Alert Wall</Link>
              </li>
              <li>
                <Link href="#">Initiatives</Link>
              </li>
              <li>
                <Link href="#">Arm License Form</Link>
              </li>
              <li>
                <Link href="#">Unidentified Dead Bodies</Link>
              </li>
              <li>
                <Link href="#">Useful Websites</Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-[20px] font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-500 text-[14px]">
              <li>
                <Link href="#">Tenders</Link>
              </li>
              <li>
                <Link href="#">Online Complaint</Link>
              </li>
              <li>
                <Link href="#">Lost and Found</Link>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-[20px] font-medium mb-4">
              Important Emergency Contacts
            </h3>
            <ul className="space-y-2 text-gray-500 text-[14px]">
              <li>Women Helpline: 1091</li>
              <li>Control Room: 100/112</li>
              <li>Senior Citizens: 1090</li>
              <li>Childline: 1098</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-[70%] mx-auto mt-10 border-t border-gray-300 pt-6 pb-10 text-sm text-[#1c1c1c] flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© 2025 Nashik City Police</p>
        <div className="flex gap-6">
          <Link href="#">Sitemap</Link>
          <Link href="#">Disclaimer</Link>
        </div>
        <div className="flex gap-4 text-[#57462a] text-lg">
          <Link href="#">
            <Image src="/footer/twitter-x.png" alt="X" width={20} height={20} />
          </Link>
          <Link href="#">
            <FaFacebookF />
          </Link>
          <Link href="#">
            <FaInstagram />
          </Link>
        </div>
        <div className="flex flex-col gap-4 items-center text-[#57462a] font-medium">
          <span>Visitor Count : 450601</span>
          <span className="flex items-center gap-1">
            <BsCalendar2Date /> Page updated : 5 August 2025
          </span>
        </div>
      </div>

      {/* Tagline and Compliance Buttons */}
      <div className="w-[70%] mx-auto mt-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xl text-gray-400">New Identity, New Presence</p>
        <div className="flex gap-4">
          <button className="bg-[#57462a] text-white px-4 py-1 rounded-full text-xs font-semibold hover:opacity-90">
            ACCESSIBILITY COMPLIANT
          </button>
          <button className="bg-[#57462a] text-white px-4 py-1 rounded-full text-xs font-semibold hover:opacity-90">
            CARBON COMPLIANT
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
