import React, { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import Hamburger from 'hamburger-react'


const Header = () => {
const[modal,setModal] = useState(false)

  return (
    <div className='bg-backcolor text-white '>
      <div className='container h-20 mx-auto px-16 flex justify-between items-center' >
        <div className="logo">
          <a href="#">
            <img src="https://wp.nkdev.info/redlens/dark/wp-content/themes/redlens/assets/images/logo-night.svg" alt="" />

          </a>
        </div>
        <div className="icons flex items-center gap-x-6 ">
          <a href="#" className='transition-all hover:text-redhover'><FiSearch size={25} /></a>
          <a href="#" className='transition-all hover:text-redhover'><HiOutlineShoppingBag size={25} /></a>
          <a href="#" className='transition-all hover:text-redhover'><Hamburger size={25} onToggle={toggle => {

          }} /></a>

        </div>
       
      </div>
    </div>
  )
}

export default Header