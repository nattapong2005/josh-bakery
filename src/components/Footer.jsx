import React from 'react'

const Footer = () => {
  return (
    <div className=' p-10'>
        <hr className='mb-10' />
        <div className='flex justify-center items-center text-sm sm:text-lg md:text-lg lg:text-lg gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copyright"><circle cx="12" cy="12" r="10"/><path d="M14.83 14.83a4 4 0 1 1 0-5.66"/></svg> 
            Copyright 2024 JOSH Bakery All Rights Reserved
        </div>
    </div>
  )
}

export default Footer