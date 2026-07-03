import React from 'react'

const Metrics = ({title,desc,icon}) => {
  return (
    <div className='flex items-center  gap-2  justify-center flex-col'>
        <div className=' border-2 border-gray-100 bg-blue-100  flex  rounded-full flex-col justify-center transition-all hover:duration-300
                hover:-translate-y-1
                hover:shadow-blue-200
                hover:shadow-xl items-center p-5 gap-3'>{icon}</div>
        <span className='text-2xl font-bold text-blue-500'>{title}</span>
        <p className='text-md text-center font-semibold text-gray-400'>{desc}</p>
    </div>
  )
}

export default Metrics