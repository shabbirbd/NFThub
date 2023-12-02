import React from 'react';
import { BsLightningFill } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import avater from "../assets/avater.png";



const NftCard = ({data}) => {
    return (
        <div className='border border-slate-200 relative rounded-xl p-3 duration-500 hover:shadow-xl  group'>
            <div className='relative overflow-hidden rounded-xl w-full cursor-pointer'>
                <img src={data.nft} alt="nft" className='w-full rounded-xl object-cover group-hover:scale-105 duration-500'/>
                <div className='absolute z-10 top-[100%] group-hover:top-[10%] flex items-center justify-center duration-500 w-full h-full'>
                    <a className='bg-violet-600 text-white px-5 py-2 rounded-full flex items-center' href='#'> 
                        <BsLightningFill /> 
                        <span>Buy Now</span>
                    </a>
                </div>
                <div className='h-8 w-8 rounded-full text-white bg-violet-600 opacity-0 duration-500 group-hover:opacity-100 flex items-center justify-center absolute z-10 top-5 right-5'>
                    <FaPlus />
                </div>
            </div>

            <div className='flex flex-row items-center mt-6 relative'>
                <img src={avater} alt="avater" className='h-10 w-10 object-cover rounded-full'/>
                <p>{data.author}</p>
            </div>
            
        </div>
    );
};

export default NftCard;