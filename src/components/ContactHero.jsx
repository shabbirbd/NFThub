import React from 'react';
import { FaPhone } from "react-icons/fa6";
import { MdOutlineLocationOn, MdOutlineMailOutline } from "react-icons/md";




const ContactHero = () => {
    const contactData = [
        {
            title: "Phone",
            contact: "+152 534-468-854",
            icon: <FaPhone />
        },
        {
            title: "Email",
            contact: "contact@example.com",
            icon: <MdOutlineMailOutline />
        },
        {
            title: "Location",
            contact: "View on Google map",
            icon: <MdOutlineLocationOn />
        }
    ]

    return (
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 py-16'>
            {
                contactData?.map((item, i)=>(
                    <div className='flex flex-col items-center py-10 text-center' key={i}>
                        <p className=' p-6 rounded-full shadow bg-violet-600/5 dark:shadow-white text-2xl font-bold text-violet-600'>
                            {item.icon}
                        </p>
                        <h3 className='mt-10 text-xl font-semibold dark:text-white'>{item.title}</h3>
                        <p className="text-slate-400 mt-3 max-w-xs">The phrasal sequence of the is now so that many campaign and benefit</p>
                        <a href="#" className='mt-3 font-semibold text-md text-violet-600 group'>
                            {item.contact}
                            <div className='h-[2px] bg-violet-600 transition-all duration-500 group-hover:w-full w-0 '></div>
                        </a>
                    </div>
                ))
            }
        </div>
    );
};

export default ContactHero;