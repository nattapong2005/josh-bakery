import React from "react";

const Process = () => {
  return (
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
  );
};

export default Process;
