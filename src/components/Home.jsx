import { ArrowBigRight, Award, Clock, Globe, Users2Icon } from 'lucide-react'
import React from 'react'
import ConsultantBtn from './ConsultantBtn'
import FirstBtnPage from './FirstBtnPage'
import Courses from './Courses'
import Values from './Values'
import Metrics from './Metrics'

const Home = () => {
  return (
    <div className='flex   flex-col items-baseline justify-between gap-4 px-4 lg:px-8 '>
      {/* left side  */}
      <div className=' max-w-xl min-h-screen  flex flex-col items-baseline justify-center gap-3'>
        <FirstBtnPage text1={`<>`} text2={`Full-Service IT Solutions`} />

        <div className='flex flex-col pt-3 items-baseline justify-center gap-2'>
          <h1 className='text-6xl font-bold text-left'>Transforming Ideas into</h1>
          <p className='text-6xl font-bold text-blue-500 text-center'>Digital Reality</p>
        </div>

        <p className='text-lg leading-8 text-gray-500 text-left mt-2'>Junky Tech delivers cutting-edge technology solutions that drive innovation and business growth. From web development to AI/ML, we're your trusted partner in digital transformation.</p>

        <div className='flex px-4 flex-col lg:flex-row items-center justify-between gap-6 '>
          <div className='flex px-4   flex-col items-center justify-center mt-4'>
            <span className='text-2xl font-bold text-blue-500'>150+</span>
            <p className='text-md text-center font-semibold text-gray-400'>Project Delivered</p>
          </div>
          <div className='flex px-4  flex-col items-center justify-center mt-4'>
            <span className='text-2xl font-bold text-blue-500'>98%</span>
            <p className='text-md font-semibold text-gray-400'>Client Satisfaction</p>
          </div>
          <div className='flex px-4  flex-col items-center justify-center mt-4'>
            <span className='text-2xl font-bold text-blue-500'>24/7</span>
            <p className='text-md font-semibold text-gray-400'>Support Available</p>
          </div>
        </div>

        <ConsultantBtn />

      </div>
      {/* Right Side  */}
      <div>
      </div>
      <div className='flex flex-wrap w-full gap-4 items-baseline justify-center mb-8 mt-20'>
        <div className='flex flex-col gap-4 justify-center items-center max-w-4xl px-2 mb-8 lg:px-4'>
          <FirstBtnPage text1={``} text2={`Our Services`} />

          <h1 className='text-5xl text-black font-bold text-center '>Comprehensive IT Solutions for</h1>
          <p className='text-5xl  text-blue-500  font-bold text-center '>Modern Business</p>
          <p className='text-xl max-w-4xl leading-8 text-gray-500 text-center'>From concept to deployment, we provide end-to-end technology services that drive innovation and accelerate your business growth.</p>

        </div>
        <Courses />
      </div>
      <div className='flex flex-col gap-4 justify-center items-center mt-20 px-2 mb-8 lg:px-4'>
        <FirstBtnPage text1={``} text2={`About Junky Tech`} />
        <h1 className='text-5xl text-black font-bold text-center '>Building the Future with</h1>
        <p className='text-5xl  text-blue-500  font-bold text-center '>Technology & Innovation</p>

        <div className=' flex  w-full   gap-8  mt-16'>
          <div className='flex w-1/2  justify-center items-center   mb-8'>
            <img src="/public/tech2.jpg" alt="AI" className='object-cover rounded-3xl w-full h-125' />
          </div>
          <div className='flex w-1/2 flex-col gap-4 py-4  px-8 '>
            <h1 className='text-3xl text-black font-bold text-left'>Your Trusted Technology Partner
            </h1>
            <p className='text-gray-400 text-base leading-7 mt-2'>At Junky Tech, we believe technology should be a catalyst for growth, not a barrier. Founded with a vision to democratize access to cutting-edge IT solutions, we've been helping businesses of all sizes transform their operations through innovative technology.
            </p>
            <p className='text-gray-400 text-base leading-7 mt-2'> Our team of expert developers, designers, and strategists brings together decades of combined experience in delivering solutions that not only meet today's needs but anticipate tomorrow's challenges.
            </p>
            <p className='text-gray-400 text-base leading-7 mt-2'> From startups to enterprises, we've partnered with organizations across the globe to build scalable, secure, and sustainable technology solutions that drive real business outcomes.</p>
          
              <ConsultantBtn />
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-4 justify-center items-center mt-10 px-2 mb-8 lg:px-4'>
        <h1 className='text-3xl text-black font-bold text-center'>Our Core Values</h1>
        <p className='text-gray-500 text-center'>The principles that guide our work and define our commitment to excellence.</p>
        <Values/>

       <div className='flex gap-4 mb-7 mt-15 justify-between rounded-xl w-full items-center px-14 py-6 border-2 border-gray-50'>
         <Metrics 
        icon={<Users2Icon className='text-blue-500 w-8 h-8'/>}
         title={"50+"}
         desc={'Expert Developer'}
         />
        <Metrics 
        icon={<Globe className='text-blue-500 w-8 h-8'/>}
         title={"15+"}
         desc={'Countries Served'}
         />
        <Metrics 
        icon={<Award className='text-blue-500 w-8 h-8'/>}
         title={"150+"}
         desc={'Projects Completed'}
         />
        <Metrics 
        icon={<Clock className='text-blue-500 w-8 h-8'/>}
         title={"50+"}
         desc={'Years Experience'}
         />
       </div>
      </div>


    </div>
  )
}

export default Home