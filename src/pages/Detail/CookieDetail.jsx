import React from "react";
import { Navigate, NavLink, useParams } from "react-router-dom";
import Layout from "../../components/Layout";


const CookieDetail = ({ cookie }) => {
  const { id } = useParams();
  const item = cookie.find((item) => item.id === parseInt(id));

  if (!item) {
    return <Navigate to="*" />;
  }

  return (
    <Layout>
      <section className="container mx-auto mt-24">
        <div className="flex flex-wrap justify-evenly items-center">
        <div className="img">
            <img src={item.url} alt="" />
      </div>
        <div className="flex flex-col">
          <h1 className="text-xl font-medium dark:text-green-600">รายละเอียดสินค้า</h1>
          <h1 className="text-4xl font-bold">{item.name}</h1>
          <h1 className="text-sm sm:text-xl">
          {item.description}
          </h1>
          <h1 className="">คะแนนรีวิว : <span className="font-bold">{item.score}</span></h1>
         <div className="flex w-10 gap-2">
            <img src="https://t4.ftcdn.net/jpg/05/40/09/17/360_F_540091788_AvDyNUSbtnKQfNccukuFa3ZlsHFnMYrK.webp" alt="" />
            <img src="https://t4.ftcdn.net/jpg/05/40/09/17/360_F_540091788_AvDyNUSbtnKQfNccukuFa3ZlsHFnMYrK.webp" alt="" />
            <img src="https://t4.ftcdn.net/jpg/05/40/09/17/360_F_540091788_AvDyNUSbtnKQfNccukuFa3ZlsHFnMYrK.webp" alt="" />
            <img src="https://t4.ftcdn.net/jpg/05/40/09/17/360_F_540091788_AvDyNUSbtnKQfNccukuFa3ZlsHFnMYrK.webp" alt="" />
            <img src="https://t4.ftcdn.net/jpg/05/40/09/17/360_F_540091788_AvDyNUSbtnKQfNccukuFa3ZlsHFnMYrK.webp" alt="" />
         </div>
         <div className="flex gap-4 mt-3">
            <h1 className="text-xl">ชิ้น</h1>
            <h1 className="border-2 px-2 border-black hover:bg-black hover:text-white cursor-pointer">10</h1>
            <h1 className="border-2 px-2 border-black hover:bg-black hover:text-white cursor-pointer">20</h1>
            <h1 className="border-2 px-2 border-black hover:bg-black hover:text-white cursor-pointer">30</h1>
            <h1 className="border-2 px-2 border-black hover:bg-black hover:text-white cursor-pointer">40</h1>
         </div>
         <h1 className="mt-3 text-2xl">ราคา <span className="font-bold">{item.price}</span> บาท / ชิ้น</h1>
         <button className="bg-primary p-2 w-52 rounded-lg mt-2 hover:bg-secondary">ยืนยันการสั่งซื้อ</button>
         <NavLink className="text-center p-2 w-52 rounded-lg mt-2 " to="/product">ย้อนกลับ</NavLink>
        </div>
        </div>
      </section>
    </Layout>
  );
};

export default CookieDetail;
