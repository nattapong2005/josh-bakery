import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import CookieDetail from "./pages/Detail/CookieDetail";
import CakeDetail from "./pages/Detail/CakeDetail";
import CroissantDetail from "./pages/Detail/CroissantDetail";
import FixedTop from './FixedTop';

// Libraries
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {

  useEffect(() => {
    AOS.init();
  })

  //  ===============================================================

  // ข้อมูลเค้ก
  const cake = [
    {
        id: 1,
        name: "เค้กนมสดวนิลาแบบที่ 01",
        score: 254,
        price: 200,
        url: "https://kingbakeryhouse.com/upload-img/round.gif",
        description: "มีเนื้อเค้กนุ่มละมุนรสวานิลลา พร้อมด้วยครีมนมสดที่หวานหอม"
    },
    {
        id: 2,
        name: "เค้กนมสดวนิลาแบบที่ 02",
        score: 176,
        price: 220,
        url: "https://kingbakeryhouse.com/upload-img/vanilla-1.gif",
        description: "มีความหวานนุ่ม พร้อมกับรสชาติของวนิลลาที่ลงตัว"
    },
    {
        id: 3,
        name: "เค้กนมสดวนิลาแบบที่ 03",
        score: 198,
        price: 240,
        url: "https://kingbakeryhouse.com/upload-img/duck.gif",
        description: "มีรสชาติวนิลลาที่เข้มข้น พร้อมครีมนมสดที่อร่อยและเย้ายวนใจ"
    },
    {
        id: 4,
        name: "เค้กนมสดช็อคโกแลต",
        score: 211,
        price: 300,
        url: "https://kingbakeryhouse.com/upload-img/Chocolate.gif",
        description: "เค้กนมสดช็อคโกแลตมีรสช็อคโกแลตเข้มข้นและเนื้อเค้กนุ่มละมุน"
    },
    {
        id: 5,
        name: "เค้กนมสดช็อคโกแลตเดวิล",
        score: 284,
        price: 350,
        url: "https://kingbakeryhouse.com/upload-img/Devil.gif",
        description: "คือการรวมกันของช็อคโกแลตเข้มข้นและครีมนมสดที่ยอดเยี่ยม"
    },
    {
        id: 6,
        name: "มูสทรีโอช็อคโกแลต",
        score: 232,
        price: 200,
        url: "https://kingbakeryhouse.com/upload-img/choc-trio.gif",
        description: "มูสทรีโอช็อคโกแลตประกอบด้วยสามชั้นของช็อคโกแลตที่เข้มข้น"
    }
];

// ข้อมูลคุกกี้
const cookie = [
    {
        id: 1,
        name: "ดูโอ้ ช็อคโก้",
        score: 200,
        price: 35,
        url: "https://www.cookiesjeab.com/home/th/images/k3.png?v=5435",
        description: "คุกกี้ดูโอ้ ช็อคโก้ มีช็อคโกแลตสองแบบที่ผสมผสานกันอย่างลงตัว"
    },
    {
        id: 2,
        name: "สตรอเบอรี่นมสด",
        score: 142,
        price: 29,
        url: "https://www.cookiesjeab.com/home/th/images/k4.png?v=5435",
        description: "คุกกี้สตรอเบอรี่นมสดกลิ่นหอมสตรอเบอรี่และรสชาติของนมสดที่นุ่มละมุน"
    },
    {
        id: 3,
        name: "มัทฉะ",
        score: 192,
        price: 39,
        url: "https://www.cookiesjeab.com/home/th/images/k5.png?v=5435",
        description: "คุกกี้มัทฉะมีรสชาติเข้มข้นของผงชาเขียวมัทฉะ "
    },
    {
        id: 4,
        name: "ดาร์กช็อกโก",
        score: 142,
        price: 29,
        url: "https://www.cookiesjeab.com/home/th/images/k6.png?v=5435",
        description: "คุกกี้ดาร์กช็อกโกมีความเข้มข้นของช็อคโกแลตดำ"
    },
    {
        id: 5,
        name: "มอคคาชิโน้",
        score: 173,
        price: 25,
        url: "https://www.cookiesjeab.com/home/th/images/k7.png?v=5435",
        description: "คุกกี้มอคคาชิโน้มีรสชาติของกาแฟและช็อคโกแลตที่ผสมผสานอย่างลงตัว"
    },
    {
        id: 6,
        name: "ช็อคโกแลตชิป",
        score: 164,
        price: 39,
        url: "https://www.cookiesjeab.com/home/th/images/k6.png?v=5435",
        description: "คุกกี้ช็อคโกแลตชิปเป็นคุกกี้ที่มีช็อคโกแลตชิปกระจายอยู่ทั่วทั้งชิ้น"
    }
];
// ข้อมูลครัวซองต์
const croissant = [
    {
        id: 1,
        name: "Ruby Croissant",
        score: 172,
        price: 119,
        url: "https://susancroissant.com/wp-content/uploads/2023/04/Ruby-Croissant-324x324.jpg",
        description: "ครัวซองต์ Ruby มีรสชาติหอมหวานและเนื้อสัมผัสกรอบนอกนุ่มใน"
    },
    {
        id: 2,
        name: "Vanille Croissant",
        score: 220,
        price: 125,
        url: "https://susancroissant.com/wp-content/uploads/2022/05/Vanille-Croissant-324x324.jpg",
        description: "ครัวซองต์ Vanille หอมหวานและเนื้อสัมผัสที่กรอบนอกนุ่มใน"
    },
    {
        id: 3,
        name: "Cocoa Croissant",
        score: 245,
        price: 149,
        url: "https://susancroissant.com/wp-content/uploads/2022/05/rich-cocoa-croissant-324x324.jpg",
        description: "ครัวซองต์ Cocoa มีรสชาติเข้มข้นของโกโก้ที่ผสมผสานได้อย่างลงตัว"
    }
];

//  ===============================================================

  return (
    <>
      <Router>
        <FixedTop/>
        <Routes>
          <Route path="/" element={<Home/>}  />
          <Route path="/product" element={<Product cake={cake} cookie={cookie} croissant={croissant} />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/cake/:id" element={<CakeDetail cake={cake} />} />
          <Route path="/cookie/:id" element={<CookieDetail cookie={cookie} />} />
          <Route path="/croissant/:id" element={<CroissantDetail croissaint={croissant} />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
