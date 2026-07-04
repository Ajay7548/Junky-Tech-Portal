import { ArrowBigRight, ArrowRight } from 'lucide-react'
import React from 'react'

const ConsultantBtn = () => {
  return (
    <div>
      <div className='flex  gap-4  mt-6'>
       
        <div className='px-8 py-2 gap-4 items-center flex text-md cursor-pointer bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors duration-300'>
          <p className='text-sm'>
            Start Your Project
          </p>
          <ArrowRight className='w-4 h-4' />
        </div>

        <p className='px-8 py-2 text-sm gap-4 flex text-md cursor-pointer dark:bg-gray-950 dark:text-white dark:hover:bg-blue-950 bg-white text-gray-700 font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-300 border border-blue-200'>
          Schedule Consultation
        </p>
      </div>
    </div>
  )
}

export default ConsultantBtn