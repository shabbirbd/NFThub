import { ethers } from 'ethers';
import React, { useEffect, useRef, useState } from 'react';
import { FaWallet } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { TiThMenuOutline } from "react-icons/ti";
import avater from '../../assets/avater.png';
import logo from '../../assets/logo.png';
import ProfileCard from '../ProfileCard';
import Navlinks from './Navlinks';





const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);
    const [isConnected, setIsConnected] = useState(false);
    const [signer, setSigner] = useState();
    const profileCardref = useRef(null);
    const profileIconref = useRef(null);

    const walletConnect = async ()=>{
        if(typeof window.ethereum !== undefined){
            try{
                await window.ethereum.request({method: "eth_requestAccounts"})
                setIsConnected(true);
                let connectedProvider = new ethers.providers.Web3Provider(window.ethereum)
                setSigner(connectedProvider.getSigner())
            } catch(e){
                console.log("error:", e)
            }
        } else{
            setIsConnected(false)
        }
    };


    useEffect(() => {
        const handleClickOutside = (event) => {
          if (
              profileCardref.current && profileIconref.current && !profileCardref.current.contains(event.target) && !profileIconref.current.contains(event.target)) 
           {
            setProfileOpen(false); 
          }
        };
      
        document.addEventListener("click", handleClickOutside);
        
        return () => {
          document.removeEventListener("click", handleClickOutside);
        };
      }, [profileCardref, profileIconref]); 

    

 
    return (
        <nav className='border-b border-slate-200 dark:border-slate-700 py-4 sticky top-0 bg-gradient-to-l dark:from-black dark:via-[#3E1E47] dark:to-black from-white via-[#F5E9F1] to-white z-50'>
            <div className=' container mx-auto flex items-center justify-between px-8'>
                <a href="/" className=''>
                    <img src={logo} alt="logo" className='w-16'/>
                </a>

                <ul className=' md:flex hidden justify-between w-full max-w-2xl px-8'>
                    <Navlinks/>
                </ul>

                {/* mobile menu */}
                <ul className={`md:hidden fixed z-50 top-0 bg-white w-2/3 h-full shadow-2xl flex flex-col gap-10 text-medium p-7 pt-20 duration-500 ${open ? "left-0" : "left-[-100%]"}`}>
                    <Navlinks/>
                </ul>

                <div className='flex space-x-3 items-center'>
                    <button className='text-2xl dark:text-white hover:text-violet-600 dark:hover:text-violet-600 duration-500' onClick={()=> walletConnect()}>
                        <FaWallet />    
                    </button>
                    <div className='relative flex items-center justify-center ' onClick={()=>setProfileOpen(!profileOpen)} ref={profileIconref}>
                        <img src={avater} alt="avater" className='h-8 w-8 rounded-full object-cover cursor-pointer' />
                        <div className={`shadow dark:shadow-slate-500 absolute transform translate-y-48 -translate-x-16 rounded-xl overflow-hidden  w-48 ${profileOpen ? "block" : "hidden"} `} onClick={(e) => e.stopPropagation()} ref={profileCardref}>
                            <ProfileCard/>
                        </div>
                    </div>
                    <button className='text-2xl md:hidden block z-50 dark:text-white' onClick={()=>setOpen(!open)} >
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