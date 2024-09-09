import React from "react";
import Layout from "../components/Layout";

const Contact = () => {
  return (
    <Layout>
      {/* Section 1 */}
      <section data-aos="fade-up" data-aos-duration="2000" className="container mx-auto mt-32">
        <div className="flex flex-col justify-center text-center mb-5">
          <h1 className="text-xl">เกี่ยวกับเรา</h1>
          <h1 className="text-4xl font-bold">CONTACT US</h1>
        </div>

        <div className="flex justify-center items-center max-w-screen-md mx-auto mb-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 w-full gap-2">
            <div style={{ transition: 'transform 0.4s ease' }} className="flex flex-col items-center shadow-md border-t-4 border-red-600 p-5 gap-y-5 bg-white hover:scale-105 transition-transform cursor-pointer">
              <i class="fa-solid fa-phone text-5xl mt-2 text-red-800"></i>
              <h1 className="text-xl">024564788</h1>
            </div>
            <div style={{ transition: 'transform 0.4s ease' }} className="flex flex-col items-center shadow-md border-t-4 border-blue-600 p-5 gap-y-5 bg-white hover:scale-105 transition-transform cursor-pointer">
            <i class="fa-solid fa-location-dot text-5xl mt-2 text-red-800"></i>
              <h1 className="text-xl">123 Example dot dot</h1>
            </div>
            <div style={{ transition: 'transform 0.4s ease' }} className="flex flex-col items-center shadow-md border-t-4 border-lime-600 p-5 gap-y-5 bg-white hover:scale-105 transition-transform cursor-pointer">
            <i class="fa-solid fa-envelope text-5xl mt-2 text-red-800"></i>
              <h1 className="text-xl">joshbakery@hotmail.com</h1>
            </div>
          </div>
        </div>

        <form class="max-w-screen-md mx-auto shadow-xl w-full h-full p-10  rounded-md bg-white">
          <div class="mb-5">
            <input
              type="text"
              className="bg-white border  text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:outline-none shadow-md focus:ring-2 focus:ring-white  "
              placeholder="กรอกชื่อ"
              required
            />
          </div>
          <div class="mb-5">
            <input
              type="text"
              className="bg-white border  text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:outline-none shadow-md focus:ring-2 focus:ring-white"
              placeholder="กรอกเบอร์โทร"
              required
            />
          </div>
          <div class="mb-5">
            {/* <input type="text" className="bg-white border h-52  text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:outline-none shadow-md focus:ring-2 focus:ring-white" placeholder="ข้อความ ..." required /> */}
            <textarea
              class="w-full h-44 px-3 py-2 rounded-md focus:outline-none shadow-md focus:ring-2 focus:ring-red-600 text-black"
              placeholder="ข้อความ ..."
            ></textarea>
          </div>
          <button type="submit" className="bg-secondary rounded-xl w-full p-2">
            ส่งข้อมูล
          </button>
        </form>
      </section>
    </Layout>
  );
};

export default Contact;
