import React from 'react';
import HeroSlider from './HeroSlider';

const Hero = () => {
    return (
        <div className=' container mx-auto'>
            <div className='lg:py-24 py-16 lg:px-24 md:px-8 px-5 md:rounded-lg flex flex-col lg:flex-row items-center justify-center gap-10 bg-violet-700/10'>
                <div className=''>
                    <h2 className='font-bold lg:leading-snug text-4xl lg:text-6xl mb-4 text dark:text-white'>
                        <span className='bg-gradient-to-l from-red-600 to-violet-600 text-transparent bg-clip-text'>Buy, sell, </span>
                        and
                        <br />
                        showcase NFTs
                    </h2>
                    <p className='text-lg max-w-xl dark:text-white'>We are a huge marketplace dedicated to connecting great artists of all Giglink with their fans and unique token collectors!</p>
                    <div className='mt-6'>
                        <a href="#" className="bg-violet-600 px-5 py-3 border hover:bg-violet-800 border-violet-600 hover:border-violet-700 text-white rounded-full me-2 mt-2 duration-500">Explore Now</a>
                        <a href="#" className="px-5 py-3  border bg-transparent hover:bg-violet-600 border-violet-600 text-violet-600 hover:text-white rounded-full mt-2 duration-500">Sell Now</a>
                    </div>
                </div>

                <div className='xl:max-w-lg lg:max-w-lg md:max-w-md sm:max-w-sm max-w-sm relative '>
                    <HeroSlider/>
                </div>
            </div>
        </div>
    );
};

export default Hero;