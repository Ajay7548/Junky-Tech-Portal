import React from 'react'
import { Link } from 'react-router-dom'

const FooterContent = ({text}) => {
  return (
    <div>
        <Link className='text-gray-500 cursor-pointer text-sm hover:text-blue-500 '>{text}</Link>
    </div>
  )
}

export default FooterContent