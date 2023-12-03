import React from 'react';
import { FaEthereum, FaRegHeart } from "react-icons/fa";
import nft1 from '../assets/nft1.jpg';
import nft3 from '../assets/nft3.jpg';
import nft5 from '../assets/nft5.jpg';



const Auction = () => {
    return (
        <div className='container relative flex flex-col items-center space-y-10'>
            <h2 className='font-bold text-3xl md:text-4xl dark:text-white'>Most Liked Auction</h2>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 md:p-10 lg:p-14'>
                <a href="#" className='max-w-xl w-full justify-self-end'>
                    <img src={nft5} alt="auction" className='h-full w-full object-cover rounded-xl'/>
                </a>

                <div>
                    <h5 className='font-semibold text-2xl mb-6 dark:text-white'>Marching Struniawski</h5>

                    <p className='text-md font-normal text-slate-500 leading-snug w-full max-w-2xl mb-10'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum.</p>

                    <div className='flex flex-nowrap space-x-3'>
                        <div className='flex flex-nowrap  space-x-3 items-center'>
                            <img src={nft1} alt="avater" className='h-10 w-10 object-cover rounded-full' />
                            <div className='flex flex-col justify-center dark:text-white'>
                                <p className='text-slate-500 font-bold'>Creator</p>
                                <p className='font-base text-md'>0XANC1ΞX</p>
                            </div>
                        </div>
                        <div className='flex flex-nowrap  space-x-3 items-center'>
                            <img src={nft3} alt="avater" className='h-10 w-10 object-cover rounded-full' />
                            <div className='flex flex-col justify-center dark:text-white'>
                                <p className='text-slate-500 font-bold'>Creator</p>
                                <p className='font-base text-md'>0XANC1ΞX</p>
                            </div>
                        </div>
                    </div>

                    <div className='w-full border-b border-slate-200 mt-6'></div>

                    <div className='flex mt-6 space-x-5'>
                        <div>
                            <p className='text-slate-400'>Auction ends in</p>
                            <div className='flex flex-row flex-nowrap my-3 space-x-2'>
                                <p className='flex flex-col px-3 py-2 items-center rounded-lg bg-slate-100'>
                                    <span className='font-bold text-md'>34</span>
                                    <span className='text-slate-500'>Days</span>
                                </p>
                                <p className='flex flex-col px-3 py-2 items-center rounded-lg bg-slate-100'>
                                    <span className='font-bold text-md'>4</span>
                                    <span className='text-slate-500'>Hours</span>
                                </p>
                                <p className='flex flex-col px-3 py-2 items-center rounded-lg bg-slate-100'>
                                    <span className='font-bold text-md'>34</span>
                                    <span className='text-slate-500'>Minutes</span>
                                </p>
                            </div>
                        </div>

                        <div className='space-y-5'>
                            <p className='text-slate-400'>Current Bid</p>
                            <div className='flex flex-nowrap items-center text-2xl font-bold dark:text-white'>
                                <p>
                                    <FaEthereum />
                                </p>
                                <p> 356 ETH</p>
                            </div>
                        </div>
                    </div>

                    <div className='mt-5 flex items-center space-x-3'>
                        <p className='border flex-shrink-0 border-slate-300 h-10 w-10 flex items-center justify-center rounded-full hover:bg-violet-600 hover:text-white duration-300 dark:text-white'>
                            <FaRegHeart />
                        </p>
                        <a href="#" className='w-full border border-slate-300 text-center py-2 rounded-full bg-violet-600 text-white'>Buy Now</a>
                        <a href="#" className='w-full border border-slate-300 text-center py-2 rounded-full hover:bg-violet-600 hover:text-white dark:text-white dark:border-slate-700 duration-300'>Place Bid</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Auction;