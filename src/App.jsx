import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import CookieDetail from "./pages/Detail/CookieDetail";
import CakeDetail from "./pages/Detail/CakeDetail";
import CroissantDetail from "./pages/Detail/CroissantDetail";


function App() {
  const [cake] = useState([
    {
      id: 1,
      name: "เค้กนมสดวนิลาแบบที่ 01",
      score: 254,
      price: 200,
      url: "https://kingbakeryhouse.com/upload-img/vanilla-macaron.gif",
    },
    {
      id: 2,
      name: "เค้กนมสดวนิลาแบบที่ 02",
      score: 176,
      price: 200,
      url: "https://kingbakeryhouse.com/upload-img/vanilla-1.gif",
    },
    {
      id: 3,
      name: "เค้กนมสดวนิลาแบบที่ 03",
      score: 198,
      price: 200,
      url: "https://kingbakeryhouse.com/upload-img/vanilla-2.gif",
    },
    // Cake section 2
    {
      id: 4,
      name: "เค้กนมสดช็อคโกแลต",
      score: 211,
      price: 300,
      url: "https://kingbakeryhouse.com/upload-img/Chocolate.gif",
    },
    {
      id: 5,
      name: "เค้กนมสดช็อคโกแลตเดวิล",
      score: 284,
      price: 350,
      url: "https://kingbakeryhouse.com/upload-img/Devil.gif",
    },
    {
      id: 6,
      name: "มูสทรีโอช็อคโกแลต ",
      score: 232,
      price: 200,
      url: "https://kingbakeryhouse.com/upload-img/choc-trio.gif",
    },
  ]);
  
// =============================================================

const [cookie] = useState([
  {
    id: 1,
    name: "ดูโอ้ ช็อคโก้",
    score: 200,
    price: 35,
    url: "https://www.cookiesjeab.com/home/th/images/k3.png?v=5435",
  },
  {
    id: 2,
    score: 172,
    name: "สตรอเบอรี่นมสด",
    score: 142,
    price: 29,
    url: "https://www.cookiesjeab.com/home/th/images/k4.png?v=5435",
  },
  {
    id: 3,
    name: "มัทฉะ",
    score: 192,
    price: 39,
    url: "https://www.cookiesjeab.com/home/th/images/k5.png?v=5435",
  },
  // Cookie Sectioh 2
  {
    id: 4,
    name: "ดาร์กช็อกโก",
    score: 142,
    price: 29,
    url: "https://www.cookiesjeab.com/home/th/images/k6.png?v=5435",
  },
  {
    id: 5,
    name: "มอคคาชิโน้",
    score: 173,
    price: 25,
    url: "https://www.cookiesjeab.com/home/th/images/k7.png?v=5435",
  },
  {
    id: 6,
    name: "ช็อคโกแลตชิป",
    score: 164,
    price: 39,
    url: "https://famouscookies.com/wp-content/uploads/2020/11/Famous-Cookie-Cocolate-Chip-21-1600x1600-1.png",
  },
]);

  // ==========================================================

  const [croissant] = useState([
  // Croissant
  {
    id: 1,
    name: "Ruby Croissant",
    score: 172,
    price: 119,
    url: "https://susancroissant.com/wp-content/uploads/2023/04/Ruby-Croissant-324x324.jpg",
  },
  {
    id: 2,
    name: "Vanille Croissant",
    score: 220,
    price: 125,
    url: "https://susancroissant.com/wp-content/uploads/2022/05/Vanille-Croissant-324x324.jpg",
  },
  {
    id: 3,
    name: "Cocoa Croissant",
    score: 245,
    price: 149,
    url: "https://susancroissant.com/wp-content/uploads/2022/05/rich-cocoa-croissant-324x324.jpg",
  },
]);


//  ===============================================================

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}  />
          <Route path="/product" element={<Product cake={cake} cookie={cookie} croissant={croissant} />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
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
