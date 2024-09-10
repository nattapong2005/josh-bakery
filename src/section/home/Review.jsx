import React from "react";

const Review = () => {
    const customer = [
        {
          quote:
            "คุณทำให้มันง่ายมาก การสั่งขนมใหม่ของฉันรวดเร็วและสะดวกกว่าที่เคย ฉันแค่เลือกเมนูและทำการสั่งซื้อ",
          name: "มินิ จ๊อด",
          role: "ลูกค้า",
          avatar:
            "1.png",
        },
        {
          quote:
            "ดีที่สุดเลย ขนมที่นี่อร่อยกว่าที่อื่น ฉันขอแนะนำ JOSH Bakery ให้กับทั้งผู้เริ่มต้นและผู้ที่ชื่นชอบขนม",
          name: "เสี่ยมาด คลองเตย",
          role: "นักชิมขนม",
          avatar:
            "2.png",
        },
        {
          quote:
            "ฉันไม่อยากเชื่อว่าฉันสามารถได้รับเค้กใหม่จาก JOSH Bakery ได้ง่ายขนาดนี้ มันสะดวกและรวดเร็วในการสั่งซื้อและรับสินค้า",
          name: "ครูมาร์ก สุดเท่",
          role: "ลูกค้าประจำ",
          avatar:
            "3.png",
        },
        {
          quote:
            "ประสบการณ์การสั่งซื้อที่ JOSH Bakery เป็นสิ่งที่น่าประทับใจ ขนมทุกชิ้นสดใหม่และอร่อยมาก เหมือนมีความรักอยู่ในทุกคำ",
          name: "อั้ม บางบอน",
          role: "ลูกค้าใหม่",
          avatar:
            "4.png",
        },
        {
          quote:
            "JOSH Bakery ทำให้การสั่งขนมเป็นเรื่องง่ายและสนุกสนาน ขนมของพวกเขาไม่เพียงแต่รสชาติดี แต่ยังมีการบริการที่เยี่ยมยอด",
          name: "ขัน สามพัน",
          role: "ผู้รักขนม",
          avatar:
            "5.png",
        },
        {
          quote:
            "ทุกครั้งที่ฉันมาที่ JOSH Bakery ฉันรู้สึกเหมือนได้รับการต้อนรับอย่างอบอุ่น ขนมอร่อยทุกชิ้น แถมการบริการก็ดีเยี่ยม",
          name: "ช่างน็อต",
          role: "ลูกค้าประจำ",
          avatar:
            "6.png",
        },
      ];
      
  return (
    <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="text-center">
            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
              รีวิวจากลูกค้าจริง
            </h2>
          </div>
          <div data-aos="zoom-in-down" data-aos-duration="2000"  className="relative mt-10 md:mt-24 md:order-2">

            <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
              {customer.map((c, index) => (
                <div
                  key={index}
                  className="flex flex-col overflow-hidden shadow-lg"
                >
                  <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                    <div className="flex-1">
                      <div className="flex items-center">
                        {Array(5)
                          .fill()
                          .map((_, i) => (
                            <svg
                              key={i}
                              className="w-5 h-5 text-[#FDB241]"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                      </div>

                      <blockquote className="flex-1 mt-8">
                        <p className="text-lg leading-relaxed text-gray-900 font-pj">
                          {c.quote}
                        </p>
                      </blockquote>
                    </div>

                    <div className="flex items-center mt-8">
                      <img
                        className="flex-shrink-0 object-cover rounded-full w-11 h-11"
                        src={`/img/customer/${c.avatar}`}
                        alt=""
                      />
                      <div className="ml-4">
                        <p className="text-base font-bold text-gray-900 font-pj">
                          {c.name}
                        </p>
                        <p className="mt-0.5 text-sm font-pj text-gray-600">
                          {c.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
