import React from 'react'
import ConsultantBtn from '../ConsultantBtn'
import FirstBtnPage from '../FirstBtnPage'
import HeadingComponent from '../HeadingComponent'
import AboutValues from '../AboutValues'
import { ArrowRight, Award, CircleDotDashed, Heart, Medal, Phone, Users2 } from 'lucide-react'

const About = () => {
  return (
    <div className='dark:bg-gray-900 '>
      <div className='flex gap-3 p-6 mt-8 mb-10 justify-center items-center'>

        <div className="flex gap-4 items-center">
          <div className=" max-w-xl   flex flex-col items-baseline justify-center gap-3">
            <FirstBtnPage text1={''} text2={`About Junky Tech`} />

            <div className="flex flex-col pt-3 items-baseline justify-center gap-2">
              <h1 className="text-6xl dark:text-white font-bold text-left">
                Transforming Ideas into
              </h1>
              <p className="text-6xl font-bold text-blue-500 text-center">
                Digital Reality
              </p>
            </div>

            <p className="text-lg leading-8 text-gray-500 text-left mt-2">
              We're a team of passionate technologists, designers, and strategists dedicated to helping businesses thrive in the digital age. With expertise across web development, mobile apps, AI/ML, and cloud solutions, we turn complex challenges into elegant solutions.
            </p>
          </div>
        </div>

        <div className='rounded-xl '>
          <img src='/public/aboutimg.avif' className=' rounded-xl shadow-lg dark:shadow-blue-950 shadow-blue-200' alt='no img' />
        </div>

       

      </div>
       <div className="flex px-12 py-14 pt-16 dark:bg-gray-900 bg-gray-100 w-full flex-col lg:flex-row items-center justify-between gap-6 ">
          <div className="flex px-4   flex-col items-center justify-center mt-4">
            <span className="text-4xl font-bold text-blue-500">150+</span>
            <p className="text-lg  dark:text-white text-center font-semibold text-gray-900">
              Project Delivered
            </p>
          </div>
          <div className="flex px-4  flex-col items-center justify-center mt-4">
            <span className="text-4xl font-bold text-blue-500">50+</span>
            <p className="text-lg  dark:text-white font-semibold text-gray-900">
              Happy Client 
            </p>
          </div>
          <div className="flex px-4  flex-col items-center justify-center mt-4">
            <span className="text-4xl font-bold text-blue-500">5+</span>
            <p className="text-lg dark:text-white  font-semibold text-gray-900">
              Year Experience
            </p>
          </div>
          <div className="flex px-4  flex-col items-center justify-center mt-4">
            <span className="text-4xl font-bold text-blue-500">24/7</span>
            <p className="text-lg  dark:text-white font-semibold text-gray-900">
              Support Available
            </p>
          </div>
          </div>

          <div className='flex pt-16 mt-10 mb-10 pb-20 flex-col items-center justify-center w-full  gap-5 '>
            <h1 className='text-4xl font-bold dark:text-white text-center mb-3'>Our Story</h1>
            <p className='text-gray-800 dark:text-gray-400  text-center max-w-4xl'>Founded in 2019, Junky Tech began with a simple mission: to bridge the gap between innovative technology and practical business solutions. What started as a small team of developers has grown into a full-service IT solutions company.</p>
            <p className='text-gray-800 dark:text-gray-400 text-center max-w-4xl'>Today, we're proud to serve clients across various industries, from startups looking to build their first digital product to established enterprises seeking digital transformation. Our diverse team brings together expertise in development, design, AI/ML, and cloud technologies.</p>
            <p className='text-gray-800 dark:text-gray-400 text-center max-w-4xl'>We believe that great technology should be accessible, reliable, and transformative. That's why we focus on building solutions that not only meet today's needs but are scalable for tomorrow's growth.</p>
          </div>

          <div className='flex flex-col justify-center dark:bg-gray-900 items-center p-4 gap-6 mt-8  pb-8 bg-gray-100'>
            <HeadingComponent title={"Our Values"} desc={"The principles that guide everything we do and shape how we work with our clients"}/>
            <div className='grid grid-cols-2 gap-6 mt-8 p-5 '>
              <AboutValues
              icon={<CircleDotDashed size={28} className='text-blue-500'/>}
              title={"Innovation"}
              desc={"We stay ahead of technology trends to deliver cutting-edge solutions that give you a competitive advantage."}
              />
              <AboutValues
              icon={<Heart size={28} className='text-blue-500'/>}
              title={"Client Centric"}
              desc={"Your success is our success. We build long-term partnerships based on trust, transparency, and results."}
              />
              <AboutValues
              icon={<Award size={28} className='text-blue-500'/>}
              title={"Excellence"}
              desc={"We maintain the highest standards in every project, ensuring quality, reliability, and performance."}
              />
              <AboutValues
              icon={<Users2 size={28} className='text-blue-500'/>}
              title={"Collaboration"}
              desc={"We work as an extension of your team, fostering open communication and collaborative problem-solving."}
              />
            </div>
          
          </div>

          <div className="flex flex-col gap-4 justify-center items-center w-full px-2 pb-10 pt-16 mt-16 mb-14 lg:px-4">
          <h1 className="text-4xl dark:text-white font-bold text-left mb-2">
            Ready to Work Together?
          </h1>
          
          <p className="text-gray-800 dark:text-gray-400 text-lg text-center max-w-4xl mb-2">
Let's discuss how we can help transform your business with innovative technology solutions.


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
                  Schedule  Consultation
                </p>
              </div>
            </div>
          </p>
        </div>
    </div>

  )
}

export default About