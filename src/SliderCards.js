
import React from "react";
import Slider from "react-slick";

const SliderCards = () => {
  const settings = {
    dots: true,
    dots: 3,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed:2500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      }
      ]
   
  };
  return (
    <div className="h-[510px] mt-[1110px] md:mt-0">
       <Slider {...settings}>
          <div className="opa cursor-pointer w-[340px] h-[510px] relative before:bg-gradient-to-t before:from-black before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10 transition-all  hover:before:opacity-0    ">
          <h3 className="text-white text-3xl  whitespace-nowrap font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">GRAND THEFT AUTO V</h3>
            <img className="md:w-[340px] w-full h-full  object-cover  " src="https://wp.nkdev.info/redlens/dark/wp-content/uploads/sites/2/2020/09/post-3-768x543.jpg" alt="" />
            
          </div>
          <div className="opa cursor-pointer w-[340px] h-[510px] relative before:bg-gradient-to-t before:from-black before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10  transition-all  ">
          <h3 className="text-white text-3xl  whitespace-nowrap font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">FORTNITE</h3>

            <img className="md:w-[340px] w-full h-[510px] object-cover " src="https://wp.nkdev.info/redlens/dark/wp-content/uploads/sites/2/2020/09/post-5-768x530.jpg" alt="" />
          </div>
          <div className="opa cursor-pointer w-[340px] h-[510px] relative before:bg-gradient-to-t before:from-black before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10  transition-all  hover:z-10 hover:before:opacity-0">
                      <h3 className="text-white text-3xl  whitespace-nowrap font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">LEAGUE OF LEGENDS </h3>

            <img className="md:w-[340px] w-full h-[510px] object-cover " src="https://wp.nkdev.info/redlens/dark/wp-content/uploads/sites/2/2020/09/post-1-768x518.jpg" alt="" />
          </div>
          <div className="opa cursor-pointer w-[340px] h-[510px] relative before:bg-gradient-to-t before:from-black before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10  transition-all  hover:z-10 hover:before:opacity-0">
          <h3 className="text-white text-3xl  whitespace-nowrap font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">HEROES WARCRAFT</h3>

            <img className="md:w-[340px] w-full h-[510px] object-cover " src="https://wp.nkdev.info/redlens/dark/wp-content/uploads/sites/2/2020/09/post-9-768x531.jpg" alt="" />
          </div>

        {/* return */}
        <div className="opa cursor-pointer w-[340px] h-[510px] relative before:bg-gradient-to-t before:from-black before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10  transition-all  hover:z-10 hover:before:opacity-0">
                      <h3 className="text-white text-3xl  whitespace-nowrap font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">LEAGUE OF LEGENDS </h3>

            <img className="md:w-[340px] w-full h-[510px] object-cover " src="https://wp.nkdev.info/redlens/dark/wp-content/uploads/sites/2/2020/09/post-1-768x518.jpg" alt="" />
          </div>
          <div className="opa cursor-pointer w-[340px] h-[510px] relative before:bg-gradient-to-t before:from-black before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10  transition-all  hover:z-10 hover:before:opacity-0">
          <h3 className="text-white text-3xl  whitespace-nowrap font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">HEROES WARCRAFT</h3>

            <img className="md:w-[340px] w-full h-[510px] object-cover " src="https://wp.nkdev.info/redlens/dark/wp-content/uploads/sites/2/2020/09/post-9-768x531.jpg" alt="" />
          </div>
        </Slider>
    </div>
  )
}

export default SliderCards