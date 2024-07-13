import React from 'react';
import { FiArrowRightCircle } from 'react-icons/fi';
import {Fade,Slide} from 'react-awesome-reveal'


function Banner() {
  return (
    <Slide triggerOnce>
    <div className='bg-red-500 m-3 grid grid-cols-2 p-6' >
      {/* 1st column */}
      <div>
        {/* 1st row */}
        <div> 
            <p className='text-3xl font-bold text-white'>Unlock the savings</p>
        </div>
        {/* 2ndRow
         */}
        <div>
            <p className='text-2xl font-semibold text-white'>
                Flat 50% off on everything
                </p>
                <button className= 'bg-white text-4xl px-4 py-2 text-red-500 flex items-center font-semibold   mt-5 h-20 hover:bg-black hover:text-blue-950'>
                    Shop Now <FiArrowRightCircle className='ml-2 animate-bounce' /> </button> </div>
      </div>
      {/* 2nd column */}
      <div>
        <div><p className='text-white font-bold text-8xl'>
            Flat <span className='underline '> 50% </span>off</p>
            <p className='text-white pt-5 text-2xl'>
                Available on our all store</p></div>
      </div>
    </div>
    </Slide>
  );
}

export default Banner;

// unlock the saving 
//flat 50% off on everthing