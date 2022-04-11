import React from 'react'
import Slider from "react-slick";
const Banner = () => {

    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 8,
        autoplay: true,
        
        autoplaySpeed:2200,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          }
          ]
       
      };
  return (
    <div className='h-24 md:h-44 mt-28'>
         <Slider {...settings}>
          <div className='portfo cursor-pointer w-24 h-24 md:w-44 md:h-44 relative before:bg-gradient-to-t before:opacity-0 before:from-red-700 before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10  transition-all  hover:z-10 hover:before:opacity-50 duration-300  overflow-hidden '>
            <img className='w-24 h-24 md:w-44 md:h-44  object-cover m-0 ' src="https://images.unsplash.com/photo-1562514947-bf9cf8e45d4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
          </div>

          <div className=' portfo cursor-pointer w-24 h-24 md:w-44 md:h-44 relative before:bg-gradient-to-t before:opacity-0 before:from-red-700 before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10  transition-all  hover:z-10 hover:before:opacity-50 duration-300  overflow-hidden'>
            <img className=' w-24 h-24 md:w-44 md:h-44 object-cover   ' src="https://images.unsplash.com/photo-1597938430467-c7a5f65c24f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
          </div>

          <div className=' portfo cursor-pointer w-24 h-24 md:w-44 md:h-44 relative before:bg-gradient-to-t before:opacity-0 before:from-red-700 before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10  transition-all  hover:z-10 hover:before:opacity-50 duration-300  overflow-hidden'>
            <img className=' w-24 h-24 md:w-44 md:h-44 object-cover  '  src="https://images.unsplash.com/photo-1508285296015-c0b524447532?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=401&q=80" alt="" />
          </div>

          <div className=' portfo cursor-pointer w-24 h-24 md:w-44 md:h-44 relative before:bg-gradient-to-t before:opacity-0 before:from-red-700 before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10  transition-all  hover:z-10 hover:before:opacity-50 duration-300  overflow-hidden'>
            <img  className=' w-24 h-24 md:w-44 md:h-44 object-cover  ' src="https://images.unsplash.com/photo-1558742619-fd82741daa99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
          </div>

          <div className=' portfo cursor-pointer w-24 h-24 md:w-44 md:h-44 relative before:bg-gradient-to-t before:opacity-0 before:from-red-700 before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10  transition-all  hover:z-10 hover:before:opacity-50 duration-300  overflow-hidden'>
            <img className=' w-24 h-24 md:w-44 md:h-44 object-cover  '  src="https://images.unsplash.com/photo-1595744043037-68de3376ed59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80" alt="" />
          </div>

          <div className=' portfo cursor-pointer w-24 h-24 md:w-44 md:h-44 relative before:bg-gradient-to-t before:opacity-0 before:from-red-700 before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10  transition-all  hover:z-10 hover:before:opacity-50 duration-300  overflow-hidden'>
            <img className=' w-24 h-24 md:w-44 md:h-44 object-cover ' src="https://images.unsplash.com/photo-1509198397868-475647b2a1e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=347&q=80" alt="" />
          </div>

          <div className=' portfo cursor-pointer w-24 h-24 md:w-44 md:h-44 relative before:bg-gradient-to-t before:opacity-0 before:from-red-700 before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10  transition-all  hover:z-10 hover:before:opacity-50 duration-300  overflow-hidden'>
            <img className=' w-24 h-24 md:w-44 md:h-44 object-cover  '  src="https://images.unsplash.com/photo-1567027757540-7b572280fa22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
          </div>
          {/* return */}
          <div className=' portfo cursor-pointer w-24 h-24 md:w-44 md:h-44 relative before:bg-gradient-to-t before:opacity-0 before:from-red-700 before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10  transition-all  hover:z-10 hover:before:opacity-50 duration-300  overflow-hidden'>
            <img className=' w-24 h-24 md:w-44 md:h-44 object-cover  '  src="https://images.unsplash.com/photo-1595744043037-68de3376ed59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80" alt="" />
          </div>

          <div className=' portfo cursor-pointer w-24 h-24 md:w-44 md:h-44 relative before:bg-gradient-to-t before:opacity-0 before:from-red-700 before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10  transition-all  hover:z-10 hover:before:opacity-50 duration-300  overflow-hidden'>
            <img className=' w-24 h-24 md:w-44 md:h-44 object-cover ' src="https://images.unsplash.com/photo-1509198397868-475647b2a1e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=347&q=80" alt="" />
          </div>

          <div className=' portfo cursor-pointer w-24 h-24 md:w-44 md:h-44 relative before:bg-gradient-to-t before:opacity-0 before:from-red-700 before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10  transition-all  hover:z-10 hover:before:opacity-50 duration-300  overflow-hidden'>
            <img className=' w-24 h-24 md:w-44 md:h-44 object-cover  '  src="https://images.unsplash.com/photo-1567027757540-7b572280fa22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
          </div>
          
          
        </Slider>
    </div>
  )
}

export default Banner