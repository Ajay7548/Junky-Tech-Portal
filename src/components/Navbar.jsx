import { Menu, SunIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {

  const [scrolled , setScrolled ] = useState(false)

  useEffect(()=>{
    const handleScroll = ()=>{
      setScrolled(window.scrollY < 20)
    }

    window.addEventListener("scroll",handleScroll)

    return ()=> window.removeEventListener('scroll',handleScroll)
  },[])

 
  return (
    <div>

      <nav className=
      {`fixed top-0 left-0 right-0 z-50 lg:px-8 lg:py-2 p-2 ${scrolled ? "":"shadow-lg  shadow-blue-200"}
       flex  items-center justify-between bg-white`}
      >
        <Link to='/' className='text-xl lg:text-2xl text-blue-500 font-bold '>
          Junky Tech
        </Link>
        
        <ul className='lg:flex ml-10 space-x-12  hidden'>
          <NavLink to='/'
            className={({ isActive }) => `text-sm hover:scale-105 hover:duration-300 font-semibold hover:text-blue-600 ${isActive ? "text-blue-500 font-semibold " : ""}`}  >Home</NavLink>
         
          <NavLink to='/services'
            className={({ isActive }) => `text-sm hover:scale-105 hover:duration-300 font-semibold hover:text-blue-600 ${isActive ? "text-blue-500 font-semibold" : ""}`}  >Services</NavLink>
           <NavLink to='/about'
            className={({ isActive }) => `text-sm hover:scale-105 hover:duration-300 font-semibold hover:text-blue-600 ${isActive ? "text-blue-500 font-semibold" : ""}`}  >About</NavLink>
            <NavLink to='/contact' className={({ isActive }) => `text-sm hover:scale-105 hover:duration-300 font-semibold hover:text-blue-600 ${isActive ? "text-blue-500 font-semibold" : ""}`}  >Contact</NavLink>
          <NavLink to='/career'
            className={({ isActive }) => `text-sm hover:scale-105 hover:duration-300 font-semibold hover:text-blue-600 ${isActive ? "text-blue-500 font-semibold" : ""}`}  >Career</NavLink>

        </ul>
       
        <div className='flex items-center p-2  lg:px-4 lg:py-2  space-x-2 lg:space-x-4'>
          <span className='p-2 rounded-xl cursor-pointer hover:bg-sky-600  hover:text-white transition-colors duration-300  '>
            <SunIcon className='lg:w-4 h:3  lg:h-4 w:3 ' />
          </span>
          <span className='p-3 rounded-xl lg:hidden cursor-pointer hover:bg-sky-600  hover:text-white transition-colors duration-300  '>

            <Menu className=' h:3  w:3  lg:hidden  cursor-pointer' />
          </span>
          <button className='bg-blue-500 lg:block hidden text-sm font-semibold cursor-pointer text-white px-4 py-2 rounded-xl hover:bg-blue-600'>Get Started</button>
        </div>

      </nav>
    </div>
  )
}

export default Navbar