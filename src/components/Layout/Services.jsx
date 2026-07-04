import React from 'react'
import ConsultantBtn from '../ConsultantBtn'
import FirstBtnPage from '../FirstBtnPage'
import ServiceComponent from '../ServiceComponent'
import { BookHeadphonesIcon, Brain, ChartArea, ChartCandlestickIcon, Cloud, CodeIcon, MessageCircleMoreIcon, Palette, Phone, Shield } from 'lucide-react'
import Courses from '../Courses'
import HeadingComponent from '../HeadingComponent'
import Metrics from '../Metrics'

const Services = () => {

  // const devleopment = Courses.filter((service)=>(service.section ==='development'))

  return (
    <div className='flex bg-gray-50 flex-col min-h-screen  justify-baseline items-center  py-16  gap-2  px:2 lg:px-4 '>
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
      <div className='bg-gray-100 w-full'>
        <HeadingComponent title={"Our Development Process"} desc={"A  proven methodology that ensures project success from concept to deployment"} />
        
      </div>

    </div>
  )
}

export default Services