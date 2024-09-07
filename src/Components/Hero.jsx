import React, { useState, useEffect } from 'react';
import { assets } from '../assets/assets';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [ // This is a placeholder for the woman in the red dress image
    assets.home_page,
    assets.home_page1,
    assets.home_page2
   
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 1 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className='flex flex-col sm:flex-row border border-gray-400 mt-20'>
      {/* Hero Left Side */}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
        <div className='text-[#414141]'>
          <div className='flex items-center gap-2'>
            <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
            <p className='font-medium text-sm md:text-base'>OUR BESTSELLERS</p>
          </div>
          <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
          <div className='flex items-center gap-2'>
            <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
            <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
          </div>
        </div>
      </div>
      {/* Hero Right Side with Image Slider */}
      <div className='w-full sm:w-1/2 h-48 sm:h-64 md:h-80 lg:h-96 overflow-hidden'>
          <img 
            className='w-full h-full object-cover object-center'
            src={images[currentIndex]} 
            alt="Hero"
          />
        </div>
    </div>
  );
};

export default Hero;
