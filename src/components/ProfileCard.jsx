import React from 'react';
import { AiOutlineSetting } from "react-icons/ai";
import { BsCopy } from "react-icons/bs";
import { GoPerson } from "react-icons/go";
import { IoLogOutOutline } from "react-icons/io5";
import avater from '../assets/avater.png';





const ProfileCard = () => {
    return (
        <div className='relative'>
            <div className='py-8 bg-gradient-to-tr from-red-600 to-violet-600'></div>

            <div className='bg-white dark:bg-black'>
                <div className='flex flex-row items-center px-3 transform -translate-y-5'>
                    <img src={avater} alt="avater" className='h-12 w-12 object-cover rounded-full' />
                    <p className='dark:text-white inline-block text-sm ml-2 translate-y-2 font-bold'>Selena Gomez</p>
                </div>

                <div className='flex items-center justify-between px-3'>
                    <div>
                        <p className='dark:text-white'>Wallet:</p>
                        <span className='text-sm text-slate-400'>qhut0...hfteh45</span>
                    </div>
                    <BsCopy className='text-violet-600 font-bold cursor-pointer translate-y-2'/>
                </div>

                <div className='flex flex-row items-center my-3'>
                    <p className='font-normal ml-3 mr-1 dark:text-white'>Balance: </p>
                    <span className='text-sm text-violet-600'> 256.009 ETH</span>
                </div>

                <div className='flex flex-col w-full'>
                    <p className='flex flex-row items-center px-3 my-1 cursor-pointer hover:text-violet-600 dark:text-white dark:hover:text-violet-600 text-sm font-semibold'>
                        <span className='mr-2'>
                            <GoPerson />
                        </span>
                        Profile
                    </p>
                    <p className='flex flex-row items-center px-3 my-1 cursor-pointer hover:text-violet-600 dark:text-white dark:hover:text-violet-600 text-sm font-semibold'>
                        <span className='mr-2'>
                            <AiOutlineSetting />
                        </span>
                        Settings
                    </p>
                    <p className='w-full border-b border-slate-200  dark:border-slate-700 mt-3'></p>
                    <p className='flex flex-row items-center px-3 my-1 cursor-pointer hover:text-violet-600 dark:text-white dark:hover:text-violet-600 text-sm font-semibold py-2'>
                        <span className='mr-2'>
                            <IoLogOutOutline />
                        </span>
                        Logout
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;