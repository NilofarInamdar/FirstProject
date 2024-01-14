import React from 'react'

const Services = () => {
  return (
     <div>
       <h1 className='text-purple-900 font-semibold text-3xl mt-14'>The Services i offer :</h1>

       <div className='grid md:grid-cols-3 gap-5 my-8 '>
       <div className='service-card flex flex-col justify-center items-center p-6 text-white border border-blue-500 rounded-md hover:bg-purple-900'>
        <img src="/assets/ruler-pen.png" alt="model" />
       <h6 className='text-2xl mb-4'>UI & UXDESIGNING</h6>
        <p className=''>I design beautiful web interfaces with Figma and adove XD.</p>
       </div>
         
       <div className='service-card flex flex-col justify-center items-center p-6 text-white border border-blue-500 rounded-md hover:bg-purple-900'>
       <img src="/assets/code.png" alt="model" />
       <h6 className='text-2xl mb-4'>WEB DEVELOPMENT</h6>
        <p className=''>I create beautiful interfaces with simple HTML, CSS  and Javascript and also frameworks like Angular and ReactJs.</p>
       </div>

       <div className='service-card flex flex-col justify-center items-center p-6 text-white border border-blue-500 rounded-md hover:bg-purple-900'>
       <img src="/assets/android.png" alt="model" />
       <h6 className='text-2xl mb-4'>MOBILE DEVELOPMENT</h6>
        <p className=''>I am an expert mobile developer. I have experience using Flutter and React Native.</p>
       </div>

       <div className='service-card flex flex-col justify-center items-center p-6 text-white border border-blue-500 rounded-md hover:bg-purple-900'>
       <img src="/assets/git-repo.png" alt="model" />
       <h6 className='text-2xl mb-4'>VERSION CONTROL</h6>
        <p className=''>I can use version control systems well, and Git & Mecurial are my go-to tool.</p>
       </div>

       <div className='service-card flex flex-col justify-center items-center p-6 text-white border border-blue-500 rounded-md hover:bg-purple-900'>
       <img src="/assets/javascript.png" alt="model" />
       <h6 className='text-2xl mb-4'>NPM AND NODEJS</h6>
        <p className=''>I have core understaing of NPM. I can also develop general purpose applications with NodeJs.</p>
       </div>

       <div className='service-card flex flex-col justify-center items-center p-6 text-white border border-blue-500 rounded-md hover:bg-purple-900 '>
       <img src="/assets/web-scraping.png" alt="model" />
       <h6 className='text-2xl mb-4'>WEB SCRAPING</h6>
        <p className='text-base'>I can collect content end data from the internet then manipulate and analyze as needed.</p>
       </div>
    </div>
    </div>
    
    
    
    
  )
}

export default Services
