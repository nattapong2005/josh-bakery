import React from "react";

const Main = () => {
  return (
    <section className="container max-w-screen-xl mx-auto mt-28">
      <div className="flex flex-col sm:flex-row md:flex-row justify-between items-center">
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

      <div
        data-aos="zoom-in-down"
        data-aos-duration="1500"
        className="flex flex-wrap gap-40 justify-center items-center text-center mt-36"
      >
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
  );
};

export default Main;
