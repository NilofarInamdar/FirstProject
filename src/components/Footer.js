import React from 'react'

const Contact = () => {
  return (
    <div className='md:px-10 px-7 mt-24'>
      <div className='text-white opacity-50 flex flex-col md:flex-row justify-between items-center my-5'>
       <p>@ Copyright 2022 | Willie Garrett</p>
       <p className='hidden sm:block'>Fullstack Developer</p>
       <p className='hidden sm:block'>UI Designer</p>
       <p className='hidden sm:block'>Data Analyst</p>
       <p className='hidden sm:block'>Designed by @ernestechie</p>

       

      </div>
      <div className='flex ml-4 gap-2'>
              <img src="/assets/facebook.png" alt=""/>
              <img src="/assets/instagram.png" alt=""/>
              <img src="/assets/dribbble.png" alt=""/>
              <img src="/assets/sms.png" alt=""/>

            </div>
      
    </div>
  )
}

export default Contact
