import React from "react";

const Category = () => {
  return (
    <section
      data-aos="fade-right"
      data-aos-duration="1500"
      className="mt-32 mb-80 flex flex-col items-center justify-center"
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
  );
};

export default Category;
