import React from "react";

const OurTeam = () => {
  return (
    <section className="mt-36 mb-52 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-28">ทีมทำขนมของเรา</h1>
      <div
        data-aos="flip-left"
        data-aos-duration="2000"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 gap-40"
      >
        <div className="card max-w-sm">
          <img
            className="w-52 rounded-md h-52 object-cover cursor-pointer transition-transform ease-in-out hover:scale-105 hover:shadow-2xl"
            src="/img/baker/Lucy.jpg"
            alt=""
          />
          <h1 className="text-center text-lg font-bold mt-6">Lucy Clery</h1>
        </div>
        <div className="card max-w-sm">
          <img
            className="w-52 rounded-md h-52 object-cover cursor-pointer transition-transform ease-in-out hover:scale-105 hover:shadow-2xl"
            src="/img/baker/Josh.jpg"
            alt=""
          />
          <h1 className="text-center text-lg font-bold mt-6">Josh Mill</h1>
        </div>
        <div className="card max-w-sm">
          <img
            className="w-52 rounded-md h-52 object-cover cursor-pointer transition-transform ease-in-out hover:scale-105 hover:shadow-2xl"
            src="/img/baker/Kate.jpg"
            alt=""
          />
          <h1 className="text-center text-lg font-bold mt-6">Kate Smith</h1>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
