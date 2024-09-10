import React from "react";
import toast from "react-hot-toast";

const RecommendProduct = () => {
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
    <section
      id="recommend"
      className="w-full  py-14 container mx-auto  mt-28 mb-52 "
    >
      <h1 className="text-center mb-10 text-4xl font-bold">สินค้าแนะนำ</h1>
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
  );
};

export default RecommendProduct;
