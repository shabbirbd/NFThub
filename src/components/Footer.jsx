import React from 'react';
import { BsDiscord, BsInstagram } from "react-icons/bs";
import { FaSquareFacebook, FaTiktok } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import logo from '../assets/logo.png';







const Footer = () => {

    const social = [{link: "https://www.facebook.com", icon: <FaSquareFacebook />}, {link: "https://www.twitter.com", icon: <RxCross1 />},{link: "https://www.discord.com", icon: <BsDiscord />},{link: "https://www.instagram.com", icon: <BsInstagram />},{link: "https://www.tiktok.com", icon: <FaTiktok />},]
    
    const footerLinks = [
        {
            heading: "Marketplace",
            sublinks: ["All NFTs", "Art", "Music", "Domain Names", "Collections", "Virtual World"]
        },
        {
            heading: "Company", 
            sublinks: ["Explore", "About", "Contact Us", "Our Blog", "FAQ"]
        },
        {
            heading: "My Account",
            sublinks: ["Authors", "Collection", "Author Profile", "Create Item"]
        }
    ]

    return (
        <footer className='border-t border-slate-200 bg-gradient-to-l from-white via-[#F5E9F1] to-white'>
            <div className='container mx-auto'>
                <div className='grid grid-cols-6 gap-x-7 gap-y-14 pt-24 pb-12 md:grid-cols-12 px-6 md:px-8 lg:px-14'>
                    <div className='col-span-3 md:col-span-4'>
                        <a href="/" className='mb-6 inline-block'>
                            <img src={logo} alt="logo" className='h-16 object-cover' />
                        </a>
                        <p className="text-slate-600 mb-12">Create, sell and collect truly rare digital artworks. Powered by blockchain technology.</p>
                        <div className="flex space-x-5">
                            {
                                social?.map((item, i)=>(
                                    <a target="_blank" rel="noopener noreferrer" className="group cursor-pointer text-slate-500 hover:text-slate-900" href={item.link} key={i}>
                                        {item.icon}
                                    </a>
                                ))
                            }
                        </div>
                    </div>

                    {
                        footerLinks?.map((item, i)=>(
                            <div className={`col-span-full sm:col-span-3 md:col-span-2 ${item.heading === "Marketplace" ? "md:col-start-7" : ""}`} key={i}>
                                <h3 className="font-semibold text-slate-700 mb-6 text-md">{item.heading}</h3>
                                <ul className="text-slate-500 flex flex-col space-y-1">
                                    {
                                        item.sublinks?.map((link, i)=>(
                                            <li key={i}>
                                                <a className="hover:text-violet-600" href="/">{link}</a>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        ))
                    }
                </div>
            </div>
        </footer>
    );
};

export default Footer;