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
        <div
          data-aos="fade-right"
          data-aos-duration="1500"
          className="flex flex-wrap items-center justify-center"
        >
          <div class="relative lg:mb-12">
            <div class="pl-12 pr-6">
              <img class="relative" src="./img/baker/josh-about.png" alt="" />
            </div>
            <div class="absolute left-0 pr-12 bottom-8 xl:bottom-20">
              <div class="max-w-xs bg-slate-400 rounded-full sm:max-w-md xl:max-w-md">
                <div class="px-3 py-4 sm:px-5 sm:py-8">
                  <div class="flex items-start">
                    <blockquote class="ml-5">
                      <p class="text-sm font-medium text-white sm:text-lg">
                        “ผมไม่เคยพูดคำว่าท้อ เพราะผมพูดไทยไม่ได้”
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h1
            data-aos="fade-left"
            data-aos-duration="1500"
            className="text-md  sm:text-lg sm:max-w-[71ch] "
          >
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
      <section className="container mx-auto mb-20">
        <div className="flex flex-col mt-32 text-center sm:text-left">
          <h1 className="text-xl">การทำงานของเรา</h1>
          <h1 className="text-4xl font-bold">OUR PROCESS</h1>
        </div>
        <div
          data-aos="fade-down"
          data-aos-duration="1500"
          className="flex flex-wrap justify-center gap-28 mt-10"
        >
          <div className="max-w-sm text-center">
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
