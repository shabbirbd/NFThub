import React from 'react';
import { FaRegEnvelope } from "react-icons/fa6";
import nft3 from '../assets/nft3.jpg';



const AboutHero = () => {
    return (
        <div className='container mx-auto border-2 border-slate-600 py-10 grid grid-cols-1 lg:grid-cols-2'>
            <div className='p-6'>
                <img src={nft3} alt="about" className='w-full object-cover rounded-2xl border-l-8 border-b-8 border-violet-600/60 duration-500 hover:scale-95 hover:border-red-500' />
            </div>

            <div className='px-6 py-10'>
                <span className="text-violet-600 font-medium">Creative Vision & Mission</span>
                <h3 className="mb-4 md:text-3xl text-2xl md:leading-snug leading-snug font-semibold">We develop & create <br/> digital art.</h3>
                <p className="text-slate-400 max-w-xl">We are a huge marketplace dedicated to connecting great artists of all Giglink with their fans and unique token collectors!</p>
                <p className="text-slate-400 max-w-xl mt-4">It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text. This might also explain why one can now find slightly different versions.</p>
                <div className="mt-6">
                    <a href="/contact" className="flex w-36 items-center space-x-3 flex-nowrap py-2 px-3 duration-300 bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-full me-2 mt-2">
                        <FaRegEnvelope />
                        <span>Contact us</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default AboutHero;