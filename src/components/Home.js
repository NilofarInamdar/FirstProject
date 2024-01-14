import React from 'react'

const Home = () => {
  return (
    <div className='px-7 md:px-10 my-14 md:h-screen bg-[#1a1a29]'>
      <div>
     
        <div className='w-full flex flex-col md:flex-row items-center justify-between'>
        
          <div className='text-white ml-32'>
            <h6 className='text-3xl mt-12'>Hello I'm</h6>
            <h1 className='font-semibold text-3xl md:text-5xl my-4'>Willie Garrett</h1>
            <p className='md:w-96'>Freelance UI designer, Fullstack developer, & Data Miner, I  create seamless web experiences
              for end-users.
            </p>


            <div className='mt-5'>
              <button className='btn bg-purple-900 py-2 px-4 text-white rounded hover:bg-white
              hover:text-purple-900 transition-all duration-500'>About me</button>
              <button className='btn outline px-6 py-1.5 rounded border-none text-white hover:text-purple-900 ml-5'>projects</button>

              </div>
            </div>
            <div className='justify-center mr-32'>
              <img src="/assets/img2.png" alt="model"/>
            </div>

           
          </div>
        </div>
        <div className='w-full h-24 bg-[#181824] mx-auto absolute left-0 hidden md:block'>
          
      </div>
      
    </div>
  )
}

export default Home
