import React from "react";
import Layout from "../components/Layout";

const About = () => {
  return (
    <Layout>
      {/* Section 1 */}
      <section className="container mx-auto mt-32">
        <div className="flex flex-col justify-center text-center">
          <h1 className="text-xl">เกี่ยวกับเรา</h1>
          <h1 className="text-4xl font-bold">ABOUT US</h1>
        </div>
        <div  className="flex flex-wrap items-center justify-center">
          <img data-aos="fade-right" data-aos-duration="1500"  className="" src="./img/baker/josh-about.png" alt="" />
          <h1 data-aos="fade-left" data-aos-duration="1500"  className="text-sm  sm:text-lg sm:max-w-[71ch] ">
            JOSH Bakery เป็นร้านเบเกอรี่ที่ได้รับความนิยมในกลุ่มนักชิม
            ด้วยขนมปังและเค้กที่ทำด้วยมือจากวัตถุดิบคุณภาพสูงทุกวัน
            ร้านมีเมนูหลากหลาย ตั้งแต่ขนมปังสดใหม่ เค้กสวยงาม ไปจนถึงขนมอบต่างๆ
            ที่มีรสชาติอร่อยและโดดเด่น นอกจากนี้
            บรรยากาศภายในร้านยังเป็นกันเองและอบอุ่น
            เหมาะสำหรับการพักผ่อนและสนทนากับเพื่อนฝูง
            ที่ตั้งของร้านสะดวกสบายและการบริการของทีมงานก็เป็นมิตรและเอาใจใส่ลูกค้าอย่างดี
          </h1>
        </div>
      </section>
      {/* ======================*/}

      {/* Section 2 */}
      <section className="container mx-auto mb-10">
        <div className="flex flex-col mt-32 text-center sm:text-left">
          <h1 className="text-xl">การทำงานของเรา</h1>
          <h1 className="text-4xl font-bold">OUR PROCESS</h1>
        </div>
        <div data-aos="fade-down" data-aos-duration="1500"  className="flex flex-wrap justify-center gap-28 mt-10">
          <div className="max-w-sm text-center ">
            <img src="./img/our_process/prepare.jpg" alt="" />
            <h1 className="text-xl">การทำขนม</h1>
          </div>
          <div className="max-w-sm text-center ">
            <img src="./img/our_process/packing.jpg" alt="" />
            <h1 className="text-xl">บรรจุสินค้า</h1>
          </div>
          <div className="max-w-sm text-center ">
            <img src="./img/our_process/deliver.jpg" alt="" />
            <h1 className="text-xl">จัดส่งสินค้า</h1>
          </div>
        </div>
      </section>

      {/* ======================*/}
    </Layout>
  );
};

export default About;
