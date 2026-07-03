import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/Layout/About'
import Contact from './components/Layout/Contact'
import Services from './components/Layout/Services'
import Career from './components/Layout/Career'
import Layout from './Layout'

const App = () => {
  return (

    <div className='bg-gray-100 text-gray-900 min-h-screen  '>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/services' element={<Services />} />
          <Route path='/career' element={<Career />} />
        </Route>
      </Routes>


    </div>
  )
}

export default App