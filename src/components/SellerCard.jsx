import React from 'react';
import { FaUserPlus } from "react-icons/fa";
import { MdVerified } from "react-icons/md";



const SellerCard = ({seller}) => {
    return (
        <div className="flex justify-between items-center p-3 rounded-md bg-white shadow">
            <div className="flex items-center">
                <div className="relative inline-block">
                    <img src={seller.avater} className="h-16 rounded-md" alt="avater"/>
                    <MdVerified className="text-emerald-600 text-lf absolute -top-2 -end-2"/>
                </div>

                <div className="ms-3">
                    <a href="#" className="font-semibold block hover:text-violet-600">{seller.name}</a>
                    <span className="text-slate-400 text-sm block mt-0.5">{seller.username}</span>
                </div>
            </div>

            <a href="#" className="rounded-full border-2 border-green-400 cursor-pointer bg-violet-600/5 hover:bg-violet-600 border-violet-600/10 hover:border-violet-600 text-violet-600 hover:text-white p-2 duration-300">
                <FaUserPlus  className='text-lg'/>
            </a>
        </div>
    );
};

export default SellerCard;