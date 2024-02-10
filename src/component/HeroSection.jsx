import React from 'react'
import hero3 from "../assets/img/hero3.png";
import herogif from "../assets/img/herogif.gif";
const HeroSection = () => {
  return (
    <div className='lg:pt-20 w-4/6 m-auto'>
      <div className="items-center py-20">
          <div>
            <h1 className="lg:text-6xl font-garamond pb-10 text-4xl md:text-center">
              "MERDEKA dalam menulis, BEBAS dalam berpikir"
            </h1>
          </div>
          <div className="">
            <img src={hero3} alt="" className="items-center m-auto" />
          </div>
        </div>
        <hr className="px-6" />
      <div className="py-20">
        <img src={herogif} alt="" className="m-auto lg:w-2/6" />

        <h1 className="text-center font-kiw pt-5 text-xl font-bold">
          Well, you've come to the right place 😝
        </h1>
      </div>
    </div>
  )
}

export default HeroSection
