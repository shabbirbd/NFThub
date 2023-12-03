import React from 'react';
import { BsLightningFill } from "react-icons/bs";
import { FaEthereum } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import avater from "../assets/avater.png";




const NftCard = ({data}) => {
    return (
        <div className='border border-slate-200 dark:border-slate-700 relative rounded-xl p-3 hover:-translate-y-1 hover:shadow-xl  group transform transition duration-500'>
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
                <p className='text-slate-500 px-3'>{data.author}</p>
            </div>

            <h2 className='mt-3 font-semibold dark:text-white text-lg'>{data.title}</h2>

            <div className='flex flex-row items-center justify-between bg-slate-100 dark:bg-slate-700 p-3 rounded-xl shadow mt-3'>
                <div className='flex flex-col items-start'>
                    <p className='text-slate-400'>Price</p>
                    <p className='flex items-center dark:text-white'>
                        <FaEthereum />
                        <span>{data.price}</span>
                        <span> ETH</span>
                    </p>
                </div>
                <div className='flex flex-col juatify-start'>
                    <p className='text-slate-400'>Highest Bid</p>
                    <p className='flex items-center dark:text-white'>
                        <FaEthereum />
                        <span>{data.highBid}</span>
                        <span> ETH</span>
                    </p>
                </div>
            </div>
            
        </div>
    );
};

export default NftCard;