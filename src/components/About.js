import React from 'react'

const About = () => {
  return (
    <div className='px-7 md:px-10 sm:-mt-24'>
      <h1 className='text-3xl mt-5 text-purple-900 font-semibold'> About me</h1>
      <p className='text-white my-2 md:w-2/3 leading-[2]'>
        Hi , my name is Jayjay Dinero Dinero, i am a Fullstack web developer, UI designer,
        and Mobile developer. I jhava honed my skills in web Development and advance i have core
        understaing of advance UI design principles. Here are the major skills.
      </p>
      <div className='md:flex items-center my-7'>
        <p className='text-purple-900  text-8xl font-bold'>5+</p>
        <p className='text-white text-2xl md:ml-5'>Years of experience. Specialised in building apps, while ensuring a seamless 
          web experience for end users.
        </p>
      </div>

      <div className='flex  md:flex-row '>
       <div className='skills md:w-[256px] md:h-[254px] bg-purple-400 hover:bg-purple-900
        flex flex-col items-baseline justify-end my-3 md:m-3 p-5 shadow-sm transition-all duration-500'>
      <img src="/assets/ruler-pen.png" alt="model" />
      <p className='text-2xl mt-3 text-white font-semibold'>UI & UXDESIGNING</p>
      </div>
      <div className='skills md:w-[256px] md:h-[254px] bg-purple-400 hover:bg-purple-900
        flex flex-col items-baseline justify-end my-3 md:m-3 p-5 shadow-sm transition-all duration-500'>
      <img src="/assets/code.png" alt="model"/>
      <p className='text-2xl mt-3 text-white font-semibold'>WEB DEVELOPMENT</p>
       </div>
       <div className='skills md:w-[256px] md:h-[254px] bg-purple-400 hover:bg-purple-900
        flex flex-col items-baseline justify-end my-3 md:m-3 p-5 shadow-sm transition-all duration-500'>
      <img src="/assets/android.png" alt="model"/>
      <p className='text-2xl mt-3 text-white font-semibold'>MOBILE DEVELOPMENT</p>
      </div>
      <div className='skills md:w-[256px] md:h-[254px] bg-purple-400 hover:bg-purple-900
        flex flex-col items-baseline justify-end my-3 md:m-3 p-5 shadow-sm transition-all duration-500'>
      <img src="/assets/web-scraping.png" alt="model"/>
      <p className='text-2xl mt-3 text-white font-semibold'>WEB SCRAPING WITH PYTHON</p>
      </div>
    </div>
     </div>
    
  
  )
}

export default About
