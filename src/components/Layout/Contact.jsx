import React from 'react'
import FirstBtnPage from '../FirstBtnPage'
import ConsultantBtn from '../ConsultantBtn'
import AboutValues from '../AboutValues'
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'
import HeadingComponent from '../HeadingComponent'

const Contact = () => {
  return (
    <div className='w-full flex flex-col items-center'>

      {/* Hero / intro section */}
      <div className='flex flex-col gap-4 items-center text-center mt-16 mb-16 px-4'>
        <FirstBtnPage text1={``} text2={`Get In Touch`} />

        <h1 className='text-4xl md:text-6xl font-bold text-blue-500 max-w-4xl'>
          Let's Build Something Amazing Together
        </h1>

        <p className='text-lg md:text-xl leading-8 text-gray-500 max-w-3xl'>
          Ready to transform your business with cutting-edge technology? We're here to help you succeed. Get in touch for a free consultation.
        </p>
      </div>

      {/* Contact info section */}
      <div className='flex pt-16 flex-col gap-3 items-center text-center w-full max-w-4xl px-4 pb-20'>
        <h2 className='text-3xl md:text-4xl font-bold text-gray-900'>
          Contact Information
        </h2>
        <p className='text-gray-500 text-base md:text-lg mb-6'>
          Choose the best way to reach us. We're always ready to help.
        </p>

        <div className='flex flex-col gap-4 w-full'>

          {/* Email + Contact side by side */}
          <div className='flex flex-col md:flex-row gap-4 w-full'>
            <div className='flex items-start gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors text-left flex-1'>
              <AboutValues
                icon={<Mail size={24} className='text-blue-600' />}
                title={'Email Us'}
                desc={'hello@junkytech.com'}
              />
            </div>

            <div className='flex items-start gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors text-left flex-1'>
              <AboutValues
                icon={<Phone size={24} className='text-blue-600' />}
                title={'Contact Us'}
                desc={'+91 8736373738'}
              />
            </div>
          </div>

          {/* Location below, centered */}
          <div className='flex items-start gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors text-left w-full md:w-2/3 mx-auto'>
            <AboutValues
              icon={<MapPin size={24} className='text-blue-600' />}
              title={'Visit Us'}
              desc={'Noida: Junky Tech India Pvt Ltd, A 1004, iThum 62, Noida, UP, 201301'}
            />
          </div>

        </div>
      </div>

      <div className='bg-gray-100 w-full mt-8'>
        <HeadingComponent title={"What Happens Next?"} desc={"Our streamlined process ensures you get the support you need quickly"}/>
     <div className='grid grid-cols-3 gap-6 p-8'>
      <div className='flex flex-col gap-3 border-2 border-gray-200 px-3 py-10 rounded-2xl w-fit justify-center items-center'>
        <div className='bg-blue-500 rounded-full px-7 py-4'><span className='text-white font-semibold text-lg'>1</span></div>
        <Mail className='text-blue-500 h-8 w-8'/>
        <h2 className='font-semibold text-xl'>Initial Response</h2>
        <p className='text-gray-400 text-sm px-7 text-center'>We'll acknowledge your message within 2 hours and schedule a call within 24 hours.</p>
     </div>
      <div className='flex flex-col gap-3 border-2 border-gray-200 px-3 py-10 rounded-2xl w-fit justify-center items-center'>
        <div className='bg-blue-500 rounded-full px-7 py-4'><span className='text-white font-semibold text-lg'>2</span></div>
        <Phone className='text-blue-500 h-8 w-8'/>
        <h2 className='font-semibold text-xl'>Discovery Call
</h2>
        <p className='text-gray-400 text-sm px-7 text-center'>We'll discuss your project requirements, timeline, and objectives in detail.</p>
     </div>
      <div className='flex flex-col gap-3 border-2 border-gray-200 px-3 py-10 rounded-2xl w-fit justify-center items-center'>
        <div className='bg-blue-500 rounded-full px-7 py-4'><span className='text-white font-semibold text-lg'>3</span></div>
        <ArrowRight className='text-blue-500 h-8 w-8'/>
        <h2 className='font-semibold text-xl'>Proposal & Start</h2>
        <p className='text-gray-400 text-sm px-7 text-center'>You'll receive a detailed proposal and we can start your project immediately.</p>
     </div>
     </div>
      </div>

    </div>
  )
}

export default Contact