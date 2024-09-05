import React from "react";
import Layout from "../components/Layout";

const Contact = () => {
  return (
    <Layout>
      {/* Section 1 */}
      <section className="container mx-auto mt-36">
        <h1 className="text-4xl font-bold text-center mb-10">
          ส่งข้อความหาเรา
        </h1>
        <form class="max-w-screen-sm mx-auto shadow-xl w-full h-full p-5 bg-primary rounded-md ">
            <div class="mb-5">
                <input type="text" className="bg-white border  text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-white  " placeholder="กรอกชื่อ" required />
            </div>
            <div class="mb-5">
                <input type="text" className="bg-white border  text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-white" placeholder="กรอกเบอร์โทร" required />
            </div>
            <div class="mb-5">
                {/* <input type="text" className="bg-white border h-52  text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-white" placeholder="ข้อความ ..." required /> */}
                <textarea class="w-full h-44 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 text-black" placeholder="ข้อความ ..."></textarea>
            </div>
            <button type="submit" className="bg-secondary rounded-xl w-full p-2">ส่งข้อมูล</button>
        </form>
      </section>

      {/* ==================== */}


      {/* Section 2 */}
      <section className="container mx-auto mt-52 max-w-3xl">
        <div className="flex flex-col items-center justify-center">
            <h1 className="font-bold text-4xl mb-6">ติดต่อเรา</h1>
            <h1 className="text-xl">เรายินดีรับฟังความคิดเห็นและข้อเสนอแนะจากท่าน หากท่านมีคำถาม หรือข้อสงสัยใด ๆ <br />โปรดอย่าลังเลที่จะติดต่อเรา เราพร้อมที่จะช่วยเหลือท่านเสมอ</h1>
        </div>


      <div className="flex flex-col md:flex-row justify-around items-center bg-gray-200 p-4 rounded-lg shadow-lg space-y-4 md:space-y-0 mt-10 mb-20">
      {/* Phone Section */}
      <div className="flex items-center space-x-2">
        <div className="bg-red-800 p-2 rounded-full">
        <svg className="text-white h-11 w-11" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/><path d="M14.05 2a9 9 0 0 1 8 7.94"/><path d="M14.05 6A5 5 0 0 1 18 10"/></svg>
        </div>
        <span className="text-black">0234522094</span>
      </div>

      {/* Facebook Section */}
      <div className="flex items-center space-x-2">
        <div className="bg-red-800 p-2 rounded-full">
        <svg className="text-white h-11 w-11" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
        </div>
        <span className="text-black">JOSH Bakery</span>
      </div>

      {/* YouTube Section */}
      <div className="flex items-center space-x-2">
        <div className="bg-red-800 p-2 rounded-full">
        <svg className="text-white h-11 w-11" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
        </div>
        <span className="text-black">JOSH Bakery</span>
      </div>
    </div>
      </section>
      
      {/* ==================== */}
    </Layout>
  );
};

export default Contact;
