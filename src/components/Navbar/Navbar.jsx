import React, { useState } from 'react';
import { FaWallet } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { TiThMenuOutline } from "react-icons/ti";
import avater from '../../assets/avater.png';
import logo from '../../assets/logo.png';
import Navlinks from './Navlinks';




const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className='border-b border-slate-200 py-4 sticky top-0 bg-gradient-to-l from-white via-[#F5E9F1] to-white z-50'>
            <div className='border-2 border-red-300 container mx-auto flex items-center justify-between px-8'>
                <a href="/" className=''>
                    <img src={logo} alt="logo" className='w-16'/>
                </a>

                <ul className='border-2 border-slate-400 md:flex hidden justify-between w-full max-w-2xl px-8'>
                    <Navlinks/>
                </ul>

                {/* mobile menu */}
                <ul className={`md:hidden fixed z-50 top-0 bg-white w-2/3 h-full shadow-2xl flex flex-col gap-10 text-medium p-7 pt-20 duration-500 ${open ? "left-0" : "left-[-100%]"}`}>
                    <Navlinks/>
                </ul>

                <div className='flex space-x-3 items-center'>
                    <a href="/" className='text-2xl'>
                        <FaWallet />    
                    </a>
                    <img src={avater} alt="avater" className='h-8 w-8 rounded-full object-cover' />
                    <button className='text-2xl md:hidden block z-50' onClick={()=>setOpen(!open)} >
                        {
                            open ? <ImCross /> : <TiThMenuOutline />
                        }
                    </button>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;