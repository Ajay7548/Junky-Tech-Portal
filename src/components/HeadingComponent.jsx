import React from 'react'

const HeadingComponent = ({title,desc}) => {
  return (
    <div className='flex flex-col p-4 mt-16'>
        <h1 className='text-4xl dark:text-white  font-bold text-gray-900 text-center mb-2'>{title}</h1>
        <p className='text-gray-800 dark:text-gray-400 text-lg text-center '>{desc}</p>
    </div>
  )
}

export default HeadingComponent