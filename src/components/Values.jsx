import { Award, Heart, icons, LucideCircleDot, Users2 } from 'lucide-react'
import React from 'react'


const values = [
    {
        icon: <LucideCircleDot className="w-7 h-7 text-blue-500" />,
        title: "Innovation",
        description: "We embrace cutting-edge technology to drive progress and deliver exceptional results."
    },
    {
        icon: <Heart className="w-7 h-7 text-blue-500" />,
        title: "Client Centricity",
        description: "We prioritize our clients' needs and work collaboratively to exceed their expectations."
    },
    {
        icon: <Award className="w-7 h-7 text-blue-500" />,
        title: "Quality Excellence",
        description: "We maintain the highest standards in every project we undertake."
    },
    {
        icon: <Users2 className="w-7 h-7 text-blue-500" />,
        title: "Sustainability",
        description: "We are committed to creating solutions that are environmentally responsible and socially conscious."
    }
]


const Values = () => {
    return (
        <div className='flex justify-center items-center  gap-6 mt-8'>
            {values.map((item, index) => (
                <div className=' border-2 dark:border-gray-950 border-gray-50  flex  rounded-2xl flex-col justify-center transition-all hover:duration-300
                hover:-translate-y-1 
                hover:shadow-blue-200 dark:hover:shadow-blue-950
                hover:shadow-xl items-center p-5 gap-3'>
                    <div className="w-fit rounded-full hover:bg-blue-50 bg-blue-100 shadow-lg hover:animate-pulse hover:shadow-blue-400 p-4">
                        {item.icon}
                    </div>
                    <h1 className='text-center dark:text-white text-black text-xl font-semibold mt-2'>{item.title}</h1>
                    <p className='text-center text-gray-400'>{item.description}</p>
                </div>
            ))}
        </div>
    )
}

export default Values