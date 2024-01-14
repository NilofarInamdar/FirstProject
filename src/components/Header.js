import React from 'react'


const Header = () => {
  return (
    <div>
      <div className='font-bold text-3xl cursor-pointer flex item-center gap-1'>
        <span className='text-purple-900 hover:text-black mt-8 ml-16'>Willie Garrett</span>
        </div>
        <div className=''>
  
        </div>
        <ul className='flex flex-row-reverse space-x-4 space-x-reverse text-2xl font-semibold text-white hover:text-purple-900 mr-32'>
          <li>contacts</li>
          <li>Projects</li>
          <li>About</li>
          <li>Home</li>
        </ul>
    </div>
  )
}

export default Header
