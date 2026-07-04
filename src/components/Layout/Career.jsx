import React from 'react'
import HeadingComponent from '../HeadingComponent'

const Career = () => {
  return (
    <div>
      <div className='flex flex-col dark:bg-gray-900 justify-center items-center p-3'>
        <div className='flex  justify-center items-baseline flex-col p-4 mt-16'>
          <h1 className='text-4xl font-bold text-blue-500 text-left mb-2'>{"Careers at Junky Tech"}</h1>
          <p className='text-gray-500  text-lg text-center mt-3 '>Join our team! Explore open opportunities below and apply directly for your desired role.</p>

          <div className='w-full py-8'>
            <h2 className='text-2xl dark:text-white font-semibold mb-4'>Open Positions</h2>

            <div className='flex flex-col gap-6'>
              <div className='p-8 border-2 dark:border-gray-950 border-gray-100 max-w-4xl rounded-xl'>
              <div className='flex items-center justify-between'>
                <h2 className='text-xl dark:text-white  font-semibold'>Frontend Developer</h2>
                <p>Remote . Full time</p>
              </div>
              <p className='text-gray-500 mt-3 text-md'>Build beautiful, performant UIs with React and TypeScript.</p>
            </div>
            <div className='p-8 border-2 dark:border-gray-950 border-gray-100 max-w-4xl rounded-xl'>
              <div className='flex items-center  justify-between'>
                <h2 className='text-xl dark:text-white  font-semibold'>Backend Developer</h2>
                <p>Remote . Full time</p>
              </div>
              <p className='text-gray-500 mt-3 text-md'>Design scalable APIs and services using Node.js and cloud technologies.

              </p>
            </div>
            <div className='p-8 border-2 dark:border-gray-950 border-gray-100 max-w-4xl rounded-xl'>
              <div className='flex items-center justify-between'>
                <h2 className='text-xl  dark:text-white font-semibold'>UI/UX Designer </h2>
                <p>Remote . Full time</p>
              </div>
              <p className='text-gray-500 mt-3 text-md'>Craft intuitive, delightful user experiences for web and mobile.

              </p>
            </div>
            </div>

          </div>

          <div className='mt-4 w-full'>
            <h2 className='text-2xl dark:text-white font-semibold mb-4'>Apply Now</h2>

            <form className='max-w-4xl flex flex-col mb-8 gap-4 border-2 dark:border-gray-950 border-gray-100 rounded-xl p-7 '>
              <div className='flex flex-col gap-1 items-baseline justify-baseline'>
                <label className='font-semibold dark:text-white'>Name</label>
                <input type='text' className='w-full  dark:bg-gray-800 outline-none bg-gray-100 py-2 px-5 rounded-lg'/>
              </div>
              <div className='flex flex-col gap-1 items-baseline justify-baseline'>
                <label className='font-semibold dark:text-white'>Email</label>
                <input type="email" className='w-full outline-none dark:bg-gray-800  bg-gray-100 py-2 px-5 rounded-lg'/>
              </div>
              <div className='flex flex-col gap-1 items-baseline justify-baseline'>
                <label className='font-semibold dark:text-white'>Position</label>
                <select className='w-full dark:text-white outline-none dark:bg-gray-800  bg-gray-100 py-2 px-5 rounded-lg'>
                  <option className='dark:text-white'>Select Poistion</option>
                  <option className='dark:text-white'>Frontend Developer</option>
                  <option className='dark:text-white'>Backend Developer</option>
                  <option className='dark:text-white'>UI/UX Designer</option>
                </select>
              </div>
              <div className='flex flex-col gap-1 items-baseline justify-baseline'>
                <label className='font-semibold'>Message</label>
                <textarea rows={5} className='w-full outline-none dark:bg-gray-800 bg-gray-100 py-2 px-5 rounded-lg'/>
              </div>
              
              <button className='bg-blue-500  font-semibold text-center w-full py-2 text-white rounded-xl'>Submit Application</button>
            </form>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Career