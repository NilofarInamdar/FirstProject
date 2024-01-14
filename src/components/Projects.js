import React from 'react'

const Projects = () => {
  return (
    <div className='px-7 md:px-10 my-8'>
       <h1 className='text-3xl mt-5 text-purple-900 font-semibold'> Featured projects</h1>
      <p className='text-white my-2 md:w-2/3 leading-[2]'>
       I have worked on many projects over the course of being a Web Developer, here are a few of my live,
       real-word projects.
      </p> 
       {/* <div className=' flex grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 my-6 items-center justify-center'> */}
      <div className='flex gap-8 pt-2 '>
      <div className=' shadow-sm md:w-[345px] bg-[#31313f] rounded '>
       <img src="/assets/img1.png" alt="model" />
       <h3 className='text-purple-900 font-semibold text-lg'>TWINDER</h3>
        <p className='text-white mt-1'>A live Geolocation app for finding tweets and twitter users around you.</p>
        <div className='mt-5 '>
              <button className='btn bg-purple-900 py-2 px-4 text-white rounded hover:bg-white
              hover:text-purple-900 transition-all duration-500'>About me</button>
              <button className='btn outline px-9 py-1.5 rounded border-none text-white hover:text-purple-900 ml-5'>projects</button>
              </div>
       
       </div>

       <div className=' shadow-sm md:w-[343px] bg-[#31313f] rounded'>
       <img src="/assets/img22.png" alt="model" />
       <h3 className='text-purple-900 font-semibold text-lg'>TWINDER</h3>
        <p className='text-white mt-1'>A live Geolocation app for finding tweets and twitter users around you.</p>
        <div className='mt-5'>
              <button className='btn bg-purple-900 py-2 px-4 text-white rounded hover:bg-white
              hover:text-purple-900 transition-all duration-500'>About me</button>
              <button className='btn outline px-9 py-1.5 rounded border-none text-white hover:text-purple-900 ml-5'>projects</button>
              </div>
       
       </div>


       <div className='shadow-sm md:w-[343px] bg-[#31313f] rounded'>
       <img src="/assets/img3.png" alt="model" />
       <h3 className='text-purple-900 font-semibold text-lg'>TWINDER</h3>
        <p className='text-white mt-1'>A live Geolocation app for finding tweets and twitter users around you.</p>
        <div className='mt-5'>
              <button className='btn bg-purple-900 py-2 px-4 text-white rounded hover:bg-white
              hover:text-purple-900 transition-all duration-500'>About me</button>
              <button className='btn outline px-9 py-1.5 rounded border-none text-white hover:text-purple-900 ml-5'>projects</button>
              </div>
       
       </div>
        </div>     
    </div>
    // </div>

  )
}

export default Projects
