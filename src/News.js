
import React from 'react'
import {AiFillYoutube} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {FaStaylinked} from 'react-icons/fa'



const News = () => {
  return (
    <div className=''>
        <div className='relative h-[2300px] md:h-[950px] '>
        <h1 className='text-latest text-center font-bold text-[90px] md:text-[300px] mt-20'>NEWS</h1>
        <div className='container absolute mb-8 top-20 md:top-64 flex-col md:flex md:flex-row md:gap-x-8  left-0 md:left-10  mx-auto items-center justify-center'>
            <div className='flex flex-col px-7 md:p-0 md:w-[360px] w-full'>
            <img className='w-full md:w-[360px]  h-[420px] object-cover transition-all duration-700 cursor-pointer hover:scale-105' src="https://wp.nkdev.info/redlens/dark/wp-content/uploads/sites/2/2020/09/post-8-768x513.jpg" alt="" />
<h6 className='text-gray-500  mb-4 mt-8 font-bold transition cursor-pointer hover:text-white'>FOOD</h6>
<h3 className='text-white text-xl font-bold mb-4 transition cursor-pointer hover:text-redhover'>Metal Gear Solid – First Time Playing</h3>

<p className='text-gray-400 text-lg font-semibold mb-4'>As collected deficient objection by it discovery <br /> sincerity curiosity. Quiet decay who round three <br /> world…</p>
<span className='text-white font-bold mb-7 md:mb-0 text-lg transition cursor-pointer hover:text-redhover'>Read More</span>
            </div>
            <div className='flex flex-col px-7 md:p-0 md:w-[360px] w-full'>
            <img className='w-full md:w-[360px]  h-[420px] object-cover transition-all duration-700 cursor-pointer hover:scale-105' src="https://wp.nkdev.info/redlens/dark/wp-content/uploads/sites/2/2020/09/post-7-1024x479.jpg" alt="" />
            <h6 className='text-gray-500  mb-4 mt-8 font-bold transition cursor-pointer hover:text-white'>FOOD</h6>
<h3 className='text-white text-xl font-bold mb-4 transition cursor-pointer hover:text-redhover'>The Witcher Comics</h3>

<p className='text-gray-400 text-lg font-semibold mb-4'>As collected deficient objection by it discovery <br /> sincerity curiosity. Quiet decay who round three <br /> world…</p>
<span className='text-white font-bold mb-7 md:mb-0 text-lg transition cursor-pointer hover:text-redhover'>Read More</span>
            </div>
            <div className='flex flex-col px-7 md:p-0 md:w-[360px] w-full'>
            <img className='w-full md:w-[360px]  h-[420px] object-cover transition-all duration-700 cursor-pointer hover:scale-105' src="https://wp.nkdev.info/redlens/dark/wp-content/uploads/sites/2/2020/09/post-6-1280x735.jpg" alt="" />
            <h6 className='text-gray-500  mb-4 mt-8 font-bold transition cursor-pointer hover:text-white'>FOOD</h6>
<h3 className='text-white text-xl font-bold mb-4 transition cursor-pointer hover:text-redhover'>Horizon Forbidden West – Announcement</h3>

<p className='text-gray-400 text-lg font-semibold mb-4'>As collected deficient objection by it discovery <br /> sincerity curiosity. Quiet decay who round three <br /> world…</p>
<span className='text-white font-bold mb-7 md:mb-0 text-lg transition cursor-pointer hover:text-redhover'>Read More</span>
            </div>
        </div>
      
        </div>
        <div>
            <h4 className='text-xl mt-10 mb-10 font-bold text-white text-center'>Want to see all posts? Follow me on:</h4>
<div className='flex gap-x-3 container mx-auto justify-center'>
    <div className='h-11 w-11 rounded-full bg-redd flex items-center justify-center transition duration-300  cursor-pointer hover:scale-105'>
<AiFillYoutube size={20} color='white' />
    </div>

    <div className='h-11 w-11 rounded-full bg-blue-600 flex items-center justify-center transition duration-300  cursor-pointer hover:scale-105'>
<AiOutlineTwitter size={20} color='white' />
    </div>

    <div className='h-11 w-11 rounded-full bg-rose-600 flex items-center justify-center transition duration-300  cursor-pointer hover:scale-105'>
<AiOutlineInstagram size={20} color='white' />
    </div>

    
    <div className='h-11 w-11 rounded-full bg-green-600 flex items-center justify-center transition duration-300 cursor-pointer  hover:scale-105'>
<FaStaylinked size={20} color='white' />
    </div>
</div>
        </div>
    </div>
  )
}

export default News