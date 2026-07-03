import { Quote, Star } from 'lucide-react'
import React from 'react'

const Testinomial = ({desc,name,role}) => {
    return (
        <div className=' '>
            <div className='flex rounded-2xl flex-col gap-4 p-6  hover:-translate-y-1
                hover:shadow-blue-200
                hover:shadow-xl justify-baseline items-baseline border-2 border-gray-50'>
                <div className='flex gap-3'>
                    <Quote className='text-blue-500 h-5 w-5' />
                <Star
                    className="w-5 h-5 text-orange-400"
                    fill="currentColor"
                />
                <Star
                    className="w-5 h-5 text-orange-400"
                    fill="currentColor"
                />
                <Star
                    className="w-5 h-5 text-orange-400"
                    fill="currentColor"
                />
                <Star
                    className="w-5 h-5 text-orange-400"
                    fill="currentColor"
                />
                </div>
                <p className='text-gray-400 text-base '>{desc}</p>
                <div className='flex flex-col items-center'>
                    <p className='text-gray-900 text-center font-medium'>{name}</p>
                    <p className='text-gray-400 text-center text-sm'>{role}</p>
                </div>
            </div>
        </div>
    )
}

export default Testinomial