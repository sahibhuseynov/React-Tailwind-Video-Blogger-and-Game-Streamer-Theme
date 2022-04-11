import React from 'react'
import {HiArrowRight} from 'react-icons/hi'
import {FaPlay} from 'react-icons/fa'


const Main = () => {



    
  return (
      <div className='relative before:bg-gradient-to-b before:from-gradientimg  before:to-transparent  before:inset-0 before:absolute before:z-10'>
      <img className='h-[898px] md:h-[617px] object-cover w-full ' src="https://wp.nkdev.info/redlens/dark/wp-content/uploads/sites/2/2020/09/header-1-1536x865.jpg" alt="" />
      <div className='container  absolute inset-0 items-center px-8 md:px-16 mt-20 md:mt-0   mx-auto flex-col md:flex md:flex-row justify-between z-50'>
      <section>
    <div className='flex gap-x-12 mb-6 '>
        <h6 className='text-base font-bold text-white '>1.2M followers</h6>
        <h6 className='text-base font-bold text-white '>88M views</h6>
    </div> 
    <h1 className='text-7xl text-white font-bold mb-14 leading-tight md:leading-0'> HELLO <br /> I’M RICHARD <br /> NORRIS</h1>
    <button className='w-[218px] h-14 py-8 md:p-0 bg-buttoncolor text-white font-bold flex items-center justify-center gap-x-4 transition-all hover:bg-redhover'>
        VIEW CHANNEL
        <HiArrowRight />
    </button>
    
</section>
<section className='w-80'>
    <a href="" className=''>
    <div  className='bg-redhover mb-7 mt-20 md:mt-0 w-24 h-24 rounded-full grid place-items-center  transition hover:scale-105 '>
    <FaPlay  size={25} color='white' />
    
   </div>
    </a>
    <h6 className='text-lg font-bold text-white mb-1'>HIGHLIGHTS OF 2019</h6>
    <h6 className='text-sm font-bold  text-white'>28:50</h6>
   
</section>
      </div>
      </div>
    
  )
}

export default Main