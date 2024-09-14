import React from "react";
import { NavLink } from "react-router-dom";

const AllProduct = ({cake, cookie, croissant}) => {
  return (
    <>
      <section
        data-aos="fade-up"
        data-aos-duration="1500"
        className="container max-w-screen-xl  mx-auto mt-72"
      >
        <div className="flex flex-col text-center sm:text-left">
          <h1 className="text-red-800 text-2xl">เลือกเมนู</h1>
          <h1 className="text-4xl font-bold mb-5">Cake เค้ก</h1>
          <hr />
        </div>
        <div className="flex justify-center items-center mt-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 w-full gap-x-10 gap-y-7">
            {cake.map((item,index) => (
              <div className="max-w-xl shadow-md transition-shadow duration-300 hover:shadow-lg hover:shadow-gray-400 bg-white p-5 rounded-lg" key={index}>
                <img className="w-72" src={item.url} alt="" />
                <h1 className="text-xl">{item.name}</h1>
                <div className="flex justify-between items-center">
                  <h1 className="font-bold text-2xl">฿{item.price} </h1>
                  <NavLink
                    to={`/cake/${item.id}`}
                    className="bg-primary rounded-md text-center py-1.5 px-2"
                  >
                    <i class="fa-solid fa-cart-shopping"></i> สั่งซื้อ
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        data-aos="fade-up"
        data-aos-duration="1500"
        className="container max-w-screen-xl  mx-auto mt-16"
      >
        <div className="flex flex-col text-center sm:text-left">
          <h1 className="text-red-800 text-2xl">เลือกเมนู</h1>
          <h1 className="text-4xl font-bold mb-5">Cookie คุกกี้</h1>
          <hr />
        </div>
        <div className="flex justify-center items-center mt-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 w-full gap-x-10 gap-y-7">
            {cookie.map((item,index) => (
              <div className="max-w-xl shadow-md transition-shadow duration-300 hover:shadow-lg hover:shadow-gray-400 bg-white p-5 rounded-lg" key={index}>
                <img className="w-72" src={item.url} alt="" />
                <h1 className="text-xl">{item.name}</h1>
                <div className="flex justify-between items-center">
                  <h1 className="font-bold text-2xl">฿{item.price} </h1>
                  <NavLink
                    to={`/cookie/${item.id}`}
                    className="bg-primary rounded-md text-center py-1.5 px-2"
                  >
                    <i class="fa-solid fa-cart-shopping"></i> สั่งซื้อ
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        data-aos="fade-up"
        data-aos-duration="1500"
        className="container max-w-screen-xl  mx-auto mt-16 mb-20"
      >
        <div className="flex flex-col text-center sm:text-left">
          <h1 className="text-red-800 text-2xl">เลือกเมนู</h1>
          <h1 className="text-4xl font-bold mb-5">Croissant ครัวซองต์</h1>
          <hr />
        </div>
        <div className="flex justify-center items-center mt-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 w-full gap-x-10 gap-y-7">
            {croissant.map((item,index) => (
              <div className="max-w-xl shadow-md transition-shadow duration-300 hover:shadow-lg hover:shadow-gray-400 bg-white p-5 rounded-lg" key={index}>
                <img className="w-72 rounded-full" src={item.url} alt="" />
                <h1 className="text-xl mt-2">{item.name}</h1>
                <div className="flex justify-between items-center">
                  <h1 className="font-bold text-2xl">฿{item.price} </h1>
                  <NavLink
                    to={`/croissant/${item.id}`}
                    className="bg-primary rounded-md text-center py-1.5 px-2"
                  >
                    <i class="fa-solid fa-cart-shopping"></i> สั่งซื้อ
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AllProduct;
