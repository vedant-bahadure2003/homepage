import Image from "next/image";
import React from "react";

const Kumbh = () => {
  return (
    <>
      <div className="w-full lg:min-h-screen bg-white flex  justify-center ">
        <Image
          src="/kumbh-2027.svg"
          alt="Kumbh"
          width={900}
          height={900}
          className=" h-full md:w-[80%]"
        />
      </div>
    </>
  );
};

export default Kumbh;
