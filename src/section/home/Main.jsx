import React from "react";
import { NavLink } from "react-router-dom";


const Main = () => {
  return (
    <section
      data-aos="fade-right"
      data-aos-duration="1500"
      className="mt-28 flex flex-wrap justify-between container mx-auto items-center mb-52"
    >
      <div>
        <h1 className="text-3xl  sm:text-6xl md:text-6xl lg:text-6xl font-bold">
          Welcome to{" "}
          <span className="font-bold bg-gradient-to-r from-red-600 to-pink-300 inline-block text-transparent bg-clip-text">
            JOSH Bakery
          </span>
        </h1>
        <p className="text-lg sm:text-lg md:text-lg lg:text-lg ">
          ขนมอบแสนอร่อย ที่สร้างสรรค์จากใจ เต็มไปด้วย <br />{" "}
          ความรักและความใส่ใจทุุกรายละเอียด
        </p>
        <NavLink
          to="/product"
          className="mt-2 w-fit flex items-center gap-2 border border-red-600 text-red-600 rounded-full py-2 px-4 hover:bg-secondary hover:text-white hover:font-bold "
        >
          <i class="fa-solid fa-cart-shopping"></i>
          สั่งซื้อตอนนี้
        </NavLink>
      </div>

      <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3">
        <img
          src="https://static.vecteezy.com/system/resources/previews/045/931/711/non_2x/strawberry-cake-3d-item-free-png.png"
          alt=""
        />
      </div>
    </section>
  );
};

export default Main;
