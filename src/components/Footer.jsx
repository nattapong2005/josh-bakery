import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-white p-14 ">
      <div className="flex flex-wrap justify-around items-center">
        <div className="flex flex-col text-sm sm:text-lg md:text-lg">
          <h1 className="font-bold text-xl">JOSH Bakery</h1>
          <h1>ร้านเบเกอรี่เปิดใหม่ มีขนมมากมายให้เลือกชิม</h1>
          <br />
          <h1>สดใหม่ เต็มไปด้วยความใส่ใจทุกรายละเอียด</h1>
        </div>
        <div className="flex flex-col text-sm sm:text-lg md:text-lg">
          <h1 className="font-bold text-xl">เมนู</h1>
          <NavLink to="/">- หน้าหลัก</NavLink>
          <NavLink to="/product">- สินค้า</NavLink>
          <NavLink to="/about">- เกี่ยวกับ</NavLink>
          <NavLink to="/contact">- ติดต่อ</NavLink>
        </div>
        <div className="flex flex-col text-sm sm:text-lg md:text-lg">
          <h1 className="font-bold">ช่องทางการติดต่อ</h1>
          <img
            className="w-1/4 cursor-pointer"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGPyRgrNmdWW5YWaengnNR9i1OPTgQlmu2SA&s"
            alt=""
          />
        </div>
      </div>
      
      <div className="container mx-auto">
      <hr className="mt-5 mb-5" />
      </div>
      <div className="flex justify-center items-center text-sm sm:text-lg md:text-lg lg:text-lg gap-2">
        <i class="fa-solid fa-copyright"></i>{" "}
        <span>Copyright 2024 JOSH Bakery All Rights Reserved</span>
      </div>
    </div>
  );
};

export default Footer;
