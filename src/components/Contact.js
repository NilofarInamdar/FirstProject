import React from 'react'

const Contact = () => {
  return (
    <div className='px-7 md:px-10 my-10'>
      <div className='flex flex-col md:flex-row'>
        <div className='md:w-1/2'>
          <h1 className='text-3xl mt-16 text-purple-900 font-semibold'>Connect with me:</h1>
            <p className='text-white my-2 md:w-2/3 leading-[2]'>
              Satisfied with me? please contact me
            </p>
            <div className='flex ml-4 gap-2'>
              <img src="/assets/facebook.png" alt=""/>
              <img src="/assets/instagram.png" alt=""/>
              <img src="/assets/dribbble.png" alt=""/>
              <img src="/assets/sms.png" alt=""/>

            </div>
        </div>
      <div className='md:w-1/2'>
        <p className='mt-16 text-white text-2xl mb-6'>Contact me, let's make magic together</p>
        <form >
          <input type="text" name="name" placeholder='Name' className='bg-[#F5F5F5]
          bg-opacity-10 py-3 px-3 md:w-3/4 w-full roundeds my-3 '/>
           <input type="email" name="email" placeholder='Email' className='bg-[#F5F5F5]
          bg-opacity-10 py-3 px-3 md:w-3/4 w-full roundeds my-3'/>
          <textarea name="message" id="message" placeholder='Message'  className='bg-[#F5F5F5]
          bg-opacity-10 py-3 px-3 md:w-3/4 w-full roundeds my-3'></textarea>
          <button className='btn bg-purple-900 py-2 px-12 text-white hover:bg-white hover:text-purple-900
          block transition-all duration-500'>Send</button>
        </form>
      </div>
      </div>
    </div>
  )
}

export default Contact
