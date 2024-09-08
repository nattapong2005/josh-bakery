import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="p-4">
      <div className="relative container mx-auto flex flex-col py-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center text-2xl font-black space-x-2" href="/">
          <img className='w-12' src="https://cdn3d.iconscout.com/3d/premium/thumb/cake-3d-icon-download-in-png-blend-fbx-gltf-file-formats--delicious-logo-dessert-sweet-food-bakery-pack-icons-4923210.png?f=webp" alt="" />
          <span className='text-gray-600'>JOSH Bakery</span>
        </div>
        <input className="peer hidden" type="checkbox" id="navbar-open" />
        <label className="absolute right-0 mt-1 cursor-pointer text-xl sm:hidden" for="navbar-open">
          <svg xmlns="http://www.w3.org/2000/svg" width="0.88em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 448 512"><path fill="currentColor" d="M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z" /></svg>
        </label>
        <nav className="peer-checked:block hidden  py-6 sm:block sm:py-0 ">
          <ul className="flex flex-col gap-y-3 sm:flex-row sm:gap-x-8 sm:items-center ">
            <li><NavLink to="/" className="flex items-center gap-2 hover:text-red-800 text-gray-600" ><i className="fa-solid fa-house"></i> หน้าหลัก</NavLink></li>
            <li><NavLink to="/product" className="flex items-center gap-2 hoverz  :text-red-800 text-gray-600" ><i className="fa-solid fa-cart-shopping"></i> สินค้า</NavLink></li>
            <li><NavLink to="/about" className="flex items-center gap-2 hover:text-red-800 text-gray-600" ><i className="fa-solid fa-address-card"></i> เกี่ยวกับ</NavLink></li>
            <li><NavLink to="/contact" className="flex items-center gap-2 hover:text-red-800 text-gray-600" ><i className="fa-solid fa-phone"></i> ติดต่อ</NavLink></li>
            <li className="mt-2 sm:mt-0"><NavLink to="/signin" className="flex items-center gap-2 rounded-full bg-secondary text-white px-4 py-2 " ><i className="fa-solid fa-right-to-bracket"></i> Sign In</NavLink></li>
          </ul>
        </nav>

      </div>
    </div>

  )
}

export default Navbar