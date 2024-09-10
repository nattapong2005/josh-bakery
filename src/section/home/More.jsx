import React from "react";
import CountUp from "react-countup";

const More = () => {
  return (
    <section className="w-full py-28 mt-28 mb-36 flex flex-col items-center ">
      <h1 className="text-center mb-20 text-4xl font-bold">
        รายละเอียดเพิ่มเติม
      </h1>
      <div
        data-aos="zoom-in-up"
        data-aos-duration="1500"
        className="flex gap-10 flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-48"
      >
        {/* Menu Section */}
        <div className="flex flex-col items-center">
          <div className="bg-white p-6 rounded-full shadow-md">
            <i className="fa-solid fa-cake-candles text-5xl"></i>
          </div>
          <p className="text-3xl font-bold text-black  mt-4">
            <CountUp className="font-bold" start={1} end={50} duration={20} />+
          </p>
          <p className="text-xl text-black ">MENU</p>
        </div>

        {/* Years of Experience Section */}
        <div className="flex flex-col items-center">
          <div className="bg-white p-6 rounded-full shadow-md">
            <i className="fa-solid fa-shield text-5xl"></i>
          </div>
          <p className="text-3xl font-bold text-black  mt-4">
            <CountUp className="font-bold" start={1} end={10} duration={20} />+
          </p>
          <p className="text-xl text-black ">YEARS OF EXPERIENCE</p>
        </div>

        {/* Baker Section */}
        <div className="flex flex-col items-center">
          <div className="bg-white p-6 rounded-full shadow-md">
            <i className="fa-solid fa-bread-slice text-5xl"></i>
          </div>
          <p className="text-3xl font-bold text-black  mt-4">
            <CountUp className="font-bold" start={1} end={3} duration={20} />
          </p>
          <p className="text-xl text-black ">BAKER</p>
        </div>
      </div>
    </section>
  );
};

export default More;
