import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
import { wallets } from '../data/wallets';


const Wallets = () => {
    
    return (
        <div className='container mx-auto py-10 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 px-10'>
            {
                wallets?.map((item, i)=>(
                    <div className='group rounded-xl bg-white dark:bg-slate-700 shadow hover:shadow-md p-6 text-center mt-10 transition-all duration-500' key={i}>
                        <div className='relative -mt-16'>
                            <img src={item.icon} alt="icon" className='h-20 w-20 rounded-full shadow dark:shadow-white mx-auto p-3' />
                            <h5 className="text-lg font-semibold mt-5 dark:text-white">{item.name}</h5>
                            <p className="text-slate-400 max-w-xs mt-3">Learn about how to get the wallet and much more clicking 
                                <a href="#" className="cursor-pointer text-violet-600 hover:text-violet-600 after:bg-violet-600 duration-500 inline-flex items-center ease-in-out">{`_`}here <FaArrowRight />
                                </a>
                            </p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Wallets;