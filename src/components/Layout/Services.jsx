import React from 'react'
import ConsultantBtn from '../ConsultantBtn'
import FirstBtnPage from '../FirstBtnPage'
import ServiceComponent from '../ServiceComponent'
import { ArrowRight, BookHeadphonesIcon, Brain, ChartArea, ChartCandlestickIcon, Cloud, CodeIcon, MessageCircleMoreIcon, Palette, Phone, Shield } from 'lucide-react'
import Courses from '../Courses'
import HeadingComponent from '../HeadingComponent'
import Metrics from '../Metrics'

const Services = () => {

  // const devleopment = Courses.filter((service)=>(service.section ==='development'))

  return (
    <div className='flex dark:bg-gray-900 bg-gray-50 flex-col min-h-screen  justify-baseline items-center  py-16  gap-2  px:2 lg:px-4 '>
      <div className='flex flex-col gap-4 justify-center items-center max-w-4xl px-2 mb-8 lg:px-4'>
        <FirstBtnPage text1={``} text2={`Our Services`} />

        <h1 className='text-6xl text-blue-500  font-bold text-center mb-2'>Comprehensive IT Solutions</h1>
        <p className='text-xl max-w-4xl leading-8 text-gray-500 text-center mt-2'>From web development to AI integration, we provide end-to-end technology solutions that drive business growth and digital transformation.</p>

        <ConsultantBtn />
      </div>

      <div>
        <HeadingComponent title={"Development Services"} desc={"Full-stack development solutions for modern businesses"} />
        <Courses category={'development'} />
      </div>
      <div className='flex  flex-col justify-center items-center'>
        <HeadingComponent title={"Quality & Intelligence"} desc={"Ensuring reliability and smart solutions"} />
        <Courses category={'quality'} />
      </div>
      <div className=''>
        <HeadingComponent title={"Infrastructure & Support"} desc={"Reliable hosting and ongoing maintenance"} />
        <Courses category={'business'} />
      </div>
      <div className='bg-gray-100 dark:bg-gray-900 w-full mt-6  pb-16'>
        <HeadingComponent title={"Our Development Process"} desc={"A  proven methodology that ensures project success from concept to deployment"} />
         <div className='flex justify-between items-center gap-6 p-6 mt-4'>
           <div className='flex flex-col gap-3 justify-center items-center '>
              <p className='text-white bg-blue-500 w-fit px-6 py-5 rounded-full font-bold'>
                <p>01</p>
              </p>
            <p className='font-semibold dark:text-white text-gray-900 text-center  mt-2 text-lg'>Discovery & Planning</p>
            <p className='text-gray-500 text-sm text-center'>Understanding your requirements and creating a detailed project roadmap</p>
          </div>
          <div className='flex flex-col gap-3 justify-center items-center'>
              <p className='text-white bg-blue-500 w-fit px-6 py-5 rounded-full font-bold'>
                <p>02</p>
              </p>
            <p className='font-semibold dark:text-white text-gray-900 text-center  mt-2 text-lg'>Design & Prototype</p>
            <p className='text-gray-500 text-sm text-center'>Creating user-centered designs and interactive prototypes for validation</p>
          </div>
          <div className='flex flex-col gap-3 justify-center items-center'>
              <p className='text-white bg-blue-500 w-fit px-6 py-5 rounded-full font-bold'>
                <p>03</p>
              </p>
            <p className='font-semibold dark:text-white text-gray-900 text-center  mt-2 text-lg'>Development & Testing</p>
            <p className='text-gray-500 text-sm text-center'>Agile development with continuous testing and quality assurance</p>
          </div>
          <div className='flex flex-col gap-3 justify-center items-center'>
              <p className='text-white bg-blue-500 w-fit px-6 py-5 rounded-full font-bold'>
                <p>04</p>
              </p>
            <p className='font-semibold dark:text-white text-gray-900 text-center  mt-2 text-lg'>Deployment & Support</p>
            <p className='text-gray-500 text-sm text-center'>Seamless deployment with ongoing maintenance and support services</p>
          </div>
         </div>
      </div>
         <div className="flex flex-col gap-4 justify-center items-center max-w-4xl px-2 mt-16 mb-14 lg:px-4">
          <h1 className="text-4xl dark:text-white font-bold text-left mb-2">
            Ready to Transform Your Business?
          </h1>
          
          <p className="text-gray-500 text-lg text-center max-w-2xl mb-2">
           Let's discuss your project requirements and create a solution that drives results.

           <div className='flex justify-center items-center gap-4  mt-6'>

              <div className='px-8 py-2 gap-4 items-center flex text-md cursor-pointer bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors duration-300'>
                <p className='text-sm'>
                  Get Started Today
                </p>
                <ArrowRight className='w-4 h-4' />
              </div>

              <div className='px-8 py-2 text-sm dark:bg-black dark:text-white hover:dark:bg-blue-900 gap-4 items-center flex text-md cursor-pointer bg-white text-gray-700 font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-300 border border-blue-200'>
                <Phone className="h-4 w-4" />
                <p >
                  Schedule Free Consultation
                </p>
              </div>
            </div>
          </p>
        </div>

    </div>
  )
}

export default Services