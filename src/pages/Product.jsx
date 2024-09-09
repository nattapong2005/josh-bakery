import React, { useState } from "react";
import Layout from "../components/Layout";
import { NavLink } from "react-router-dom";

const Product = ({ cake,cookie,croissant}) => {
  return (
    <Layout>
      {/* ========== Section-1 ========== */}

      <section className="container max-w-screen-xl mx-auto mt-20">
        <div  className="flex flex-col sm:flex-row md:flex-row justify-between items-center">
          <div className="flex flex-col">
            <h1 className="text-red-800 text-2xl">แนะนำ</h1>
            <h1 className="text-4xl font-bold">สินค้าขายดี</h1>
          </div>
          <div class="relative w-64">
            <input
              type="text"
              placeholder="ค้นหา .."
              className="pr-10 pl-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent w-full"
            />
          <i class="fa-solid fa-magnifying-glass absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 cursor-pointer"></i>
          </div>
        </div>

        <div data-aos="zoom-in-down" data-aos-duration="1500"  className="flex flex-wrap gap-40 justify-center items-center text-center mt-20">
          <div className="max-w-sm w-72">
            <img
              src="https://cdn3d.iconscout.com/3d/premium/thumb/cake-3d-icon-download-in-png-blend-fbx-gltf-file-formats--delicious-logo-dessert-sweet-food-bakery-pack-icons-4923210.png?f=webp"
              alt=""
            />
            <h1 className="text-2xl text-red-900 ">เค้กช็อคโกแลต</h1>
          </div>
          <div className="max-w-sm w-72">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/013/453/720/small_2x/cookies-3d-rendering-isometric-icon-png.png"
              alt=""
            />
            <h1 className="text-2xl text-red-900 ">คุกกี้ช็อคโกแลต</h1>
          </div>
          <div className="max-w-sm w-72">
            <img
              src="https://cdn-icons-png.freepik.com/512/8613/8613918.png"
              alt=""
            />
            <h1 className="text-2xl text-red-900 ">ครัวซองต์</h1>
          </div>
        </div>
      </section>
      {/* ================================ */}


      {/* ========== Section-2 ========== */}

      <section data-aos="fade-up" data-aos-duration="1500"  className="container max-w-screen-xl  mx-auto mt-72">
        <div className="flex flex-col text-center sm:text-left">
          <h1 className="text-red-800 text-2xl">เลือกเมนู</h1>
          <h1 className="text-4xl font-bold mb-5">Cake เค้ก</h1>
          <hr />
        </div>
        <div className="flex justify-center items-center mt-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-36 gap-y-7">
            {cake.map((item) => (
              <div className="max-w-sm shadow-lg p-5 ">
                <img className="w-72" src={item.url} alt="" />
                <h1 className="text-xl">{item.name}</h1>
                <h1 className="font-bold text-xl">{item.price} บาท</h1>
                <NavLink to={`/cake/${item.id}`} className="bg-primary w-full block py-2 text-center mt-2 rounded-lg hover:bg-secondary">สั่งซื้อ</NavLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section data-aos="fade-up" data-aos-duration="1500"  className="container max-w-screen-xl  mx-auto mt-16">
        <div className="flex flex-col text-center sm:text-left">
          <h1 className="text-red-800 text-2xl">เลือกเมนู</h1>
          <h1 className="text-4xl font-bold mb-5">Cookie คุกกี้</h1>
          <hr />
        </div>
        <div className="flex justify-center items-center mt-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-36 gap-y-7">
            {cookie.map((item) => (
              <div className="max-w-sm shadow-lg p-5 ">
                <img className="w-72" src={item.url} alt="" />
                <h1 className="text-xl">{item.name}</h1>
                <h1 className="font-bold text-xl">{item.price} บาท</h1>
                <NavLink to={`/cookie/${item.id}`} className="bg-primary w-full block py-2 text-center mt-2 rounded-lg hover:bg-secondary">สั่งซื้อ</NavLink>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section data-aos="fade-up" data-aos-duration="1500"  className="container max-w-screen-xl  mx-auto mt-16">
        <div className="flex flex-col text-center sm:text-left">
          <h1 className="text-red-800 text-2xl">เลือกเมนู</h1>
          <h1 className="text-4xl font-bold mb-5">Croissant ครัวซองต์</h1>
          <hr />
        </div>
        <div className="flex justify-center items-center mt-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-36 gap-y-7">
            {croissant.map((item) => (
              <div className="max-w-sm shadow-lg p-5 ">
                <img  className="w-72 rounded-full" src={item.url} alt="" />
                <h1 className="text-xl">{item.name}</h1>
                <h1 className="font-bold text-xl">{item.price} บาท</h1>
                <NavLink to={`/croissant/${item.id}`} className="bg-primary w-full block py-2 text-center mt-2 rounded-lg hover:bg-secondary">สั่งซื้อ</NavLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================ */}
    </Layout>
  );
};

export default Product;
