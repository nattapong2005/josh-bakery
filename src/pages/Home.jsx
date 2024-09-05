import React from "react";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      {/* ========== Section-1 ========== */}
      
      <section className="mt-28 flex flex-wrap justify-evenly items-center mb-52">
        <div>
          <h1 className="text-3xl sm:text-6xl md:text-6xl lg:text-6xl font-bold">
            Welcome to{" "}
            <span className="font-bold text-red-600">JOSH Bakery</span>
          </h1>
          <p className="text-lg sm:text-lg md:text-lg lg:text-lg">
            ขนมอบแสนอร่อย ที่สร้างสรรค์จากใจ เต็มไปด้วย <br />{" "}
            ความรักและความใส่ใจทุุกรายละเอียด
          </p>
          <a href="#recommend" className="mt-2 w-40 flex gap-2 border border-red-600 text-red-600 rounded-full py-2 px-4 hover:bg-secondary hover:text-white ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-message-circle-more"
            >
              <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
              <path d="M8 12h.01" />
              <path d="M12 12h.01" />
              <path d="M16 12h.01" />
            </svg>{" "}
            ข้อมูลเพิ่มเติม
          </a>
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

      <section className="mt-24 mb-36 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-28">หมวดหมู่ยอดนิยม</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-20">
          <div className="card max-w-sm ">
            <img className="w-32" src="/img/icon/cake-icon.svg" alt="" />
            <h1 className="text-center text-lg font-bold mt-2 text-red-900">
              Cake
            </h1>
          </div>
          <div className="card max-w-sm ">
            <img className="w-32" src="/img/icon/cookie-icon.svg" alt="" />
            <h1 className="text-center text-lg font-bold mt-2 text-red-900">
              Cookie
            </h1>
          </div>
          <div className="card max-w-sm ">
            <img className="w-32" src="/img/icon/bread-icon.svg" alt="" />
            <h1 className="text-center text-lg font-bold mt-2 text-red-900">
              Breads
            </h1>
          </div>
          <div className="card max-w-sm ">
            <img className="w-32" src="/img/icon/drink-icon.svg" alt="" />
            <h1 className="text-center text-lg font-bold mt-2 text-red-900">
              Drinks
            </h1>
          </div>
        </div>
      </section>

      {/* ================================ */}

      {/* ========== Section-3 ========== */}

      <section id="recommend" className="w-full text-white py-14 mx-auto mt-28 mb-36 bg-red-800">
        <h1 className="text-center mb-10 text-5xl font-bold">สินค้าแนะนำ</h1>
        <div className="flex flex-wrap justify-evenly items-center">
          <img
            className="mb-5"
            src="https://kingbakeryhouse.com/upload-img/Strawberry1.gif"
            alt=""
          />
          <div className="flex flex-col">
            <h1 className="text-lg sm:text-2xl md:text-2xl lg:text-2xl">
              เค้กนมสดไขมันต่ำรสวนิลา สอดไส้สตรอเบอรี่ <br />{" "}
              และตกแต่งด้วยสตรอเบอรี่สด
            </h1>
            <button className="flex gap-2 w-36 mt-2 items-center border-2 p-3 rounded-full border-white hover:bg-white hover:text-red-800 hover:font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-shopping-cart"
              >
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>{" "}
              สั่งซื้อตอนนี้
            </button>
          </div>
        </div>
      </section>

      {/* ================================ */}


      {/* ========== Section-4 ========== */}
      <section className="mt-36 mb-36 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-28">ทีมทำขนมของเรา</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 gap-40">
          <div className="card max-w-sm">
            <img
              className="w-52 rounded-md h-52 object-cover cursor-pointer transition-transform ease-in-out hover:scale-105 hover:shadow-2xl"
              src="/img/baker/Lucy.jpg"
              alt=""
            />
            <h1 className="text-center text-lg font-bold mt-5 text-red-900">
              Lucy Clery
            </h1>
          </div>
          <div className="card max-w-sm">
            <img
              className="w-52 rounded-md h-52 object-cover cursor-pointer transition-transform ease-in-out hover:scale-105 hover:shadow-2xl"
              src="/img/baker/Josh.jpg"
              alt=""
            />
            <h1 className="text-center text-lg font-bold mt-5 text-red-900">
              Josh Mill
            </h1>
          </div>
          <div className="card max-w-sm">
            <img
              className="w-52 rounded-md h-52 object-cover cursor-pointer transition-transform ease-in-out hover:scale-105 hover:shadow-2xl"
              src="/img/baker/Kate.jpg"
              alt=""
            />
            <h1 className="text-center text-lg font-bold mt-5 text-red-900">
              Kate Smith
            </h1>
          </div>
        </div>
      </section>
      
      {/* ================================ */}



      {/* ========== Section-5 ========== */}

      <section className="w-full py-28 mt-28 mb-36 bg-slate-50 flex flex-col items-center ">
        <h1 className="text-center mb-20 text-4xl font-bold">
          รายละเอียดเพิ่มเติม
        </h1>
          <div className="flex gap-10 flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
            {/* Menu Section */}
            <div className="flex flex-col items-center">
              <div className="bg-white p-6 rounded-full shadow-lg">
                <svg className="text-red-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cake-slice"><circle cx="9" cy="7" r="2"/><path d="M7.2 7.9 3 11v9c0 .6.4 1 1 1h16c.6 0 1-.4 1-1v-9c0-2-3-6-7-8l-3.6 2.6"/><path d="M16 13H3"/><path d="M16 17H3"/></svg>
              </div>
              <p className="text-3xl font-bold text-red-700 mt-4">50</p>
              <p className="text-xl text-red-700">MENU</p>
            </div>

            {/* Years of Experience Section */}
            <div className="flex flex-col items-center">
              <div className="bg-white p-6 rounded-full shadow-lg">
                <svg className="text-red-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-check"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>
              </div>
              <p className="text-3xl font-bold text-red-700 mt-4">10</p>
              <p className="text-xl text-red-700">YEARS OF EXPERIENCE</p>
            </div>

            {/* Baker Section */}
            <div className="flex flex-col items-center">
              <div className="bg-white p-6 rounded-full shadow-lg">
                <svg className="text-red-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chef-hat"><path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"/><path d="M6 17h12"/></svg>
              </div>
              <p className="text-3xl font-bold text-red-700 mt-4">3</p>
              <p className="text-xl text-red-700">BAKER</p>
            </div>
          </div>

      </section>

      {/* ================================ */}



    </Layout>


  );
};

export default Home;
