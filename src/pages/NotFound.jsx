import React from 'react'
import { NavLink } from 'react-router-dom'


const NotFound = () => {
  return (
    <div>
        <div className='flex flex-col items-center justify-center h-screen text-center bg-slate-50'>
        <h1 className='text-4xl font-bold  text-red-800'>ไม่พบหน้านี้</h1>
        <NavLink to='/' className='font-bold bg-secondary px-5 py-2 cursor-pointer rounded-lg'>ย้อนกลับ</NavLink>
        </div>
    </div>
  )
}

export default NotFound