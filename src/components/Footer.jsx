import { MapPin, MoveLeft, MoveUp } from 'lucide-react'
import React from 'react'
import { Instagram, Linkedin, Mail, Map, Phone, Twitter } from 'react-feather'
import { Link } from 'react-router-dom'
import FooterContent from './FooterContent'


const Footer = () => {

   const scrollTop = () =>{
    console.log('clicked');
    
    window.scrollTo({top:0,behavior:'smooth'})
  }

  return (
    <div className='bg-gray-100 min-h-screen '>
        <div className='flex flex-col pt-20 gap-4'>
          <div className='flex  flex-col lg:flex-row justify-between items-baseline gap-6 px-8 py-4 '>
            <div className='flex max-w-md pb-16 flex-col gap-4  '>
              <Link to='/' className='text-lg lg:text-2xl text-blue-500 font-bold'>
                Junky Tech
              </Link>     
              <p className=' text-md leading-8 text-gray-500'>
                Transforming businesses through innovative technology solutions. Your trusted partner for web development, mobile apps, AI/ML, and comprehensive IT services.
              </p>       
              <div className='flex items-center gap-3'>
                <Mail className='w-4 h-4 text-blue-500 transition-colors duration-300' />
                <Link to='mailto:hello@junkeytech.com' className='text-md  text-gray-500 hover:text-blue-500 transition-colors duration-300'>
                  hello@junkeytech.com
                </Link>
              </div>
              <div className='flex items-center gap-3'>
                <Phone  className='w-4 h-4 text-blue-500 transition-colors duration-300' />
                <Link to='' className='text-md  text-gray-500 hover:text-blue-500 transition-colors duration-300'>
                  +91 8377753647
                </Link>
              </div>
              <div className='flex items-center gap-3 '>
                <MapPin  className='w-4 h-4 text-blue-500 transition-colors duration-300' />
                <p className='text-gray-500 text-md '>Junky Tech India Pvt Ltd, A 1004, iThum 62, Noida, UP, 201301</p>
              </div>
            </div>
            <div className='flex flex-col px-6 gap-4'>
              <h2 className='text-gray-900 text-md  font-semibold'>Service</h2>
              <div className='flex flex-col gap-2'>
                <FooterContent text='Web Developement'/>
                <FooterContent text='E-Commerce'/>
                <FooterContent text='AI/ML Solutions'/>
                <FooterContent text='UI/UX Design'/>
                <FooterContent text='Cloud Services'/>
                <FooterContent text='DICOM & PACS'/>
            </div>
              </div>
            <div className='flex  flex-col px-6 gap-4'>
              <h2 className='text-gray-900 text-md  font-semibold'>Company</h2>
              <div className='flex flex-col gap-2'>
                <FooterContent text='About'/>
                <FooterContent text='Our Teams'/>
                <FooterContent text='Career'/>
               
            </div>
              </div>
            <div className='flex  flex-col px-6 gap-4 lg:pr-16'>
              <h2 className='text-gray-900 text-md  font-semibold'>Service</h2>
              <div className='flex flex-col gap-2'>
                <FooterContent text='Contact Us'/>
                <FooterContent text='Help Center'/>
            </div>
              </div>
            
          </div>

          <div className='flex p-4 border-t-2  border-gray-200 justify-between items-center'>
            <p className='text-center font-semibold text-sm text-gray-400'>© 2026 Your Company. All rights reserved.</p>

            <div className='flex  items-center gap-3 pr-10 '>
              <div className=' hover:text-blue-500 hover:bg-blue-100 rounded-full p-3 transition-colors duration-300 cursor-pointer'>
                <Twitter className='w-4 h-4 text-gray-400 hover:text-blue-500' />
              </div>
              <div className=' hover:text-blue-500 hover:bg-blue-100 rounded-full p-3 transition-colors duration-300 cursor-pointer'>
                <Linkedin className='w-4 h-4 text-gray-400 hover:text-blue-500' />
              </div>
              <div className=' hover:text-blue-500 hover:bg-blue-100 rounded-full p-3 transition-colors duration-300 cursor-pointer'>
                <Instagram className='w-4 h-4 text-gray-400 hover:text-blue-500' />
              </div>
            </div>
            <button onClick={scrollTop} className='hover:text-blue-500 w-fit flex items-center gap-2 hover:bg-blue-50 rounded-full px-4 py-2 transition-colors duration-300 cursor-pointer'>
              <MoveUp className='w-6 h-4' />
              <p className='text-md hover:text-blue-400 font-semibold text-gray-400' >Back to Top</p>
            </button>
          </div>

        </div>

    </div>
  )
}

export default Footer