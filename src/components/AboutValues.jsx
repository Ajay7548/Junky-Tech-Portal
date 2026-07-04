import { Badge, CircleDotDashedIcon } from 'lucide-react'
import React from 'react'

const AboutValues = ({ icon, title, desc }) => {
    return (
        <div className='flex gap-4 rounded-xl bg-gray-50 p-6 items-start'>
            <div className='bg-blue-100 flex justify-center items-center w-12 h-12 rounded-2xl shrink-0'>
                <span  className='text-blue-600' >{icon}</span>
            </div>
            <div>
                <h3 className='text-xl font-bold text-gray-900 mb-3'>{title}</h3>
                <p className='text-gray-800'>{desc}
                </p>
            </div>
        </div>
    )
}

export default AboutValues