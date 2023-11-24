import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { sellers } from '../data/sellers';
import SellerCard from './SellerCard';


const TopSellers = () => {
    return (
        <div className='border-2 border-green-400 container py-14'>
            <div className='md:flex justify-between items-center px-10'>
                <div className="md:w-10/12 md:text-start text-center">
                    <h3 className="md:text-[30px] text-[26px] font-semibold mb-4">Best Creators & Sellers of 
                        <select className="z-2 text-violet-600 focus-visible:outline-none bg-transparent border-1 focus:ring-transparent" >
                            <option className="text-md font-medium">Week</option>
                            <option className="text-md font-medium">Month</option>
                            <option className="text-md font-medium">Year</option>
                        </select>
                    </h3>
                    <p className="text-slate-400">Best sellers of the week's NFTs</p>
                </div>

                <div className="md:w-2/12 md:block hidden ">
                    <a href="#" className="text-[16px] flex items-center gap-5 font-medium  hover:text-violet-600 duration-500 ease-in-out">
                        All Creators <FaArrowRight /> 
                    </a>
                </div>
            </div>
            
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-10 gap-8 px-8'>
                {
                    sellers?.map((seller, i)=>(
                        <SellerCard key={i} seller={seller}/>
                    ))
                }
            </div>
        </div>
    );
};

export default TopSellers;