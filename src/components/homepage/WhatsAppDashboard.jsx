"use client";
import React, { useState, useEffect, useRef } from "react";

const WhatsAppDashboard = () => {
  const [hoveredBar, setHoveredBar] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const chartRef = useRef(null);

  const messageData = [
    { label: "Traffic", value: 904, color: "bg-blue-500" },
    { label: "Patrolling", value: 24, color: "bg-blue-500" },
    { label: "Women Safety", value: 75, color: "bg-blue-500" },
    { label: "Noise Pollution", value: 267, color: "bg-blue-500" },
    { label: "Police Station Related", value: 2514, color: "bg-blue-500" },
    { label: "Marcotics", value: 13, color: "bg-blue-500" },
  ];

  const messageeData = [
    { label: "प्रलंबित", value: 239, color: "bg-purple-300" },
    { label: "प्रक्रियेत", value: 40, color: "bg-gray-300" },
    { label: "निकल्ली काढलेले", value: 3556, color: "bg-purple-200" },
    { label: "कार्यक्षेत्राबाहेर", value: 429, color: "bg-purple-300" },
  ];

  const maxValue = Math.max(...messageeData.map((item) => item.value));

  const handleMouseMove = (e, value) => {
    if (!chartRef.current) return;
    const rect = chartRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const tooltipX = Math.max(0, Math.min(x, rect.width - 100));
    const tooltipY = Math.max(0, Math.min(y, rect.height - 80));
    setTooltipPosition({ x: tooltipX, y: tooltipY });
    setHoveredBar(value);
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full h-auto lg:h-[100vh] flex flex-col lg:flex-row justify-center items-center lg:gap-4 gap-6 bg-white rounded-xl  overflow-hidden">
        {/* Left Section */}
        <div className="w-full lg:w-1/4 flex flex-col justify-center gap-4 px-2 lg:h-[75vh]">
          <div className="bg-[#57462a] px-4  rounded-2xl">
            <h1 className="text-[48px] lg:text-[86px] text-white">
              <span className="text-[18px] lg:text-[24px]">
                Total WhatsApp Messages
              </span>
              <br /> 7476
            </h1>
          </div>

          <div className="p-4 bg-gray-100 rounded-2xl">
            <h2 className="text-[20px] font-semibold text-gray-700 mb-4">
              Important Messages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
              {messageData.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-gray-100 rounded-lg px-2"
                >
                  <span className="text-gray-500  text-[20px]">
                    {item.label}
                  </span>
                  <span className="text-[20px] text-gray-800">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section (Chart) */}
        <div className="w-full lg:w-2/4 px-2 ">
          <div className="p-4 bg-[#eef] rounded-2xl">
            <h2 className="text-[20px] lg:text-[24px] text-gray-700 mb-6">
              Total WhatsApp Messages
            </h2>

            <div
              ref={chartRef}
              className="relative w-full h-80 flex items-end justify-evenly gap-4 bg-[#eef] rounded-xl"
              onMouseLeave={() => setHoveredBar(null)}
            >
              {messageeData.map((item, index) => (
                <div
                  key={index}
                  className="relative flex flex-col items-center w-1/6 h-full cursor-pointer group"
                  onMouseMove={(e) => handleMouseMove(e, item)}
                >
                  <div className="w-full h-full flex items-end justify-center hover:bg-[#e0e0f5] p-2 rounded-md relative">
                    <div
                      className={`w-2/3 hover:bg-purple-800 transition-all duration-700 ease-out ${item.color}`}
                      style={{
                        height: isVisible
                          ? `${(item.value / maxValue) * 100}%`
                          : "0%",
                        opacity: hoveredBar?.label === item.label ? 1 : 0.6,
                      }}
                    ></div>
                  </div>

                  <span className="text-xs text-gray-700 mt-2 text-center">
                    {item.label}
                  </span>
                </div>
              ))}

              {hoveredBar !== null && (
                <div
                  className="absolute bg-[#57462a] text-white text-xs font-medium py-2 px-3 rounded-lg shadow-lg z-10 transition-all duration-100 ease-in-out pointer-events-none"
                  style={{
                    left: `${tooltipPosition.x}px`,
                    top: `${tooltipPosition.y}px`,
                    transform: "translate(-50%, -120%)",
                  }}
                >
                  <div className="flex flex-col items-center">
                    <span className="font-bold">{hoveredBar.label}</span>
                    <span>value : {hoveredBar.value}</span>
                  </div>
                  <div className="absolute left-1/2 -bottom-1 transform -translate-x-1/2 w-3 h-3 bg-[#57462a] rotate-45"></div>
                </div>
              )}
            </div>

            <p className="text-right text-xs text-gray-600 mt-4">
              🕒 Last Updated: 05-08-2025 04:14 PM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppDashboard;
