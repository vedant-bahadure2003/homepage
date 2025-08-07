import React from "react";

const PoliceStationLocator = () => {
  const dropdownData = [
    {
      label: "Police Stations",
      options: ["Station A", "Station B", "Station C", "Station D"],
    },
    {
      label: "CP Office",
      options: ["Office A", "Office B", "Office C", "Office D"],
    },
    {
      label: "Divisional Office",
      options: ["Division A", "Division B", "Division C", "Division D"],
    },
    {
      label: "ACP Office",
      options: ["ACP A", "ACP B", "ACP C", "ACP D"],
    },
    {
      label: "Traffic Department",
      options: ["Traffic A", "Traffic B", "Traffic C", "Traffic D"],
    },
  ];

  return (
    <div className="w-full flex flex-col items-center px-4 md:px-16 py-10 bg-white">
      {/* Heading Section */}
      <div className="w-[90vw] md:w-[80vw] flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
        <div className="flex-1">
          <h1 className="text-[34px] md:text-[48px] text-[#121D33] mb-2 text-left">
            Find Your Police Station
          </h1>
          <p className="text-base md:text-lg text-[#374151] text-left">
            Get information about the nearest police station and seek necessary
            help.
          </p>
        </div>

        <p className="text-[#121D33] text-[16px] md:text-base max-w-full lg:max-w-[30%] text-left">
          Click on the desired location on the map. An icon will appear - click
          on it. Then click on the submit button to suggest a spot.
        </p>

        <button className="bg-[#57462a] hover:bg-[#605036] flex justify-between  text-white px-5 py-3 rounded-lg font-semibold shadow-md w-full sm:w-auto">
          Suggest Patrolling Spot Below{" "}
          <span className="bg-orange-400 text-white px-2 py-1 rounded ml-2 text-sm">
            AI ML
          </span>
        </button>
      </div>

      {/* Dropdowns */}
      <div className="bg-[#F5F7FA] w-[90vw] md:w-[80vw] mt-10 p-2 md:p-8 rounded-xl shadow-sm flex flex-col gap-4 ">
        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          {dropdownData.map((dropdown, index) => (
            <select
              key={index}
              defaultValue=""
              className="p-2 rounded-full border border-gray-400 shadow-sm w-full sm:w-[220px] text-gray-700"
            >
              <option value="" disabled>
                {dropdown.label}
              </option>
              {dropdown.options.map((item, idx) => (
                <option key={idx} value={item}>
                  {item}
                </option>
              ))}
            </select>
          ))}
        </div>

        <div className="text-start mt-2 text-[#374151] text-sm md:text-base pl-1">
          Nashik, Maharashtra 422010
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-8 rounded-2xl overflow-hidden shadow-md w-[90vw] md:w-[80vw] h-[400px] md:h-[600px] lg:h-[700px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60240.51706674984!2d73.7090569!3d20.0008744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeba784db1713%3A0xcbefc4db81cc2644!2sNashik%20Taluka%20Police%20Station!5e0!3m2!1sen!2sin!4v1691422599777!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default PoliceStationLocator;
