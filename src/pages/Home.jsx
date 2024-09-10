import React, { useEffect } from "react";
import Layout from "../components/Layout";
import toast from "react-hot-toast";
import CountUp from "react-countup";
import { NavLink } from "react-router-dom";

const Home = () => {

  function Operation() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("failed");
      }, 2000);
    });
  }
  function error(text) {
    toast.promise(Operation(), {
      loading: "กำลังดำเนินการ...",
      error: <b>{text}</b>,
      success: null,
    });
  }

  return (
    <Layout>
      {/* ========== Section-1 ========== */}

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

      {/* ================================ */}

      {/* ========== Section-2 ========== */}

      <section
        data-aos="fade-right"
        data-aos-duration="1500"
        className="mt-24 mb-80 flex flex-col items-center justify-center"
      >
        <h1 className="text-4xl font-bold mb-28">หมวดหมู่ยอดนิยม</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-40">
          <div className="card max-w-sm ">
            <img className="w-32" src="/img/icon/cake-icon.svg" alt="" />
            <h1 className="text-center text-lg font-bold mt-5 text-red-900">
              Cake
            </h1>
          </div>
          <div className="card max-w-sm ">
            <img className="w-32" src="/img/icon/cookie-icon.svg" alt="" />
            <h1 className="text-center text-lg font-bold mt-5 text-red-900">
              Cookie
            </h1>
          </div>
          <div className="card max-w-sm ">
            <img className="w-32" src="/img/icon/bread-icon.svg" alt="" />
            <h1 className="text-center text-lg font-bold mt-5 text-red-900">
              Breads
            </h1>
          </div>
          <div className="card max-w-sm ">
            <img className="w-32" src="/img/icon/drink-icon.svg" alt="" />
            <h1 className="text-center text-lg font-bold mt-5 text-red-900">
              Drinks
            </h1>
          </div>
        </div>
      </section>

      {/* ================================ */}

      {/* ========== Section-3 ========== */}

      <section
        id="recommend"
        className="w-full  py-14 container mx-auto  mt-28 mb-52 "
      >
        <h1 className="text-center mb-10 text-5xl font-bold">สินค้าแนะนำ</h1>
        <div
          data-aos="zoom-in"
          data-aos-duration="1500"
          className="flex flex-wrap justify-evenly items-center"
        >
          <img
            className="mb-5 w-2/4"
            src="https://png.pngtree.com/png-vector/20240813/ourmid/pngtree-flower-shaped-fresh-strawberry-vanilla-short-cake-png-image_13464202.png"
          />
          <div className="flex flex-col">
            <h1 className="text-lg sm:text-2xl md:text-2xl lg:text-2xl">
              เค้กนมสดไขมันต่ำรสวนิลา สอดไส้สตรอเบอรี่ <br />{" "}
              และตกแต่งด้วยสตรอเบอรี่สด
            </h1>
            <h1 className="text-2xl font-bold text-red-700">129 บาท / ปอนด์</h1>
            <button
              onClick={() => error("ขอภัย.. ขณะนี้สินค้าหมด!")}
              className="flex gap-2 w-36 mt-2 items-center border border-red-600 py-2 px-3 rounded-full text-red-600  hover:bg-secondary hover:text-white hover:font-bold"
            >
              <i class="fa-solid fa-cart-shopping"></i>
              พรีออเดอร์
            </button>
          </div>
        </div>
      </section>

      {/* ================================ */}

      {/* ========== Section-4 ========== */}
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

      {/* ================================ */}

      {/* ========== Section-5 ========== */}

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
              <CountUp className="font-bold" start={1} end={50} duration={20} />
              +
            </p>
            <p className="text-xl text-black ">MENU</p>
          </div>

          {/* Years of Experience Section */}
          <div className="flex flex-col items-center">
            <div className="bg-white p-6 rounded-full shadow-md">
              <i className="fa-solid fa-shield text-5xl"></i>
            </div>
            <p className="text-3xl font-bold text-black  mt-4">
              <CountUp className="font-bold" start={1} end={10} duration={20} />
              +
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

      {/* ================================ */}
    </Layout>
  );
};

export default Home;
