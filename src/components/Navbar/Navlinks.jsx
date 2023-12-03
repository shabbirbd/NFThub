import React from 'react';
import { Link } from 'react-router-dom';

const Navlinks = () => {
    const navlinks = [
        {
            name: "Home",
            link: "/"
        },
        {
            name: "Explore",
            link: "/explore"
        },
        {
            name: "Wallet",
            link: "/wallet"
        },
        {
            name: "About",
            link: "/about"
        },
        {
            name: "Contact",
            link: "/contact"
        },
    ]
    return (
        <>
            {
                navlinks?.map((item, i)=>(
                    <li key={i} className='hover:text-violet-600 text-black dark:hover:text-violet-600 duration-500 font-semibold dark:text-white'>
                        <Link to={item.link}>{item.name}</Link>
                    </li>
                ))
            }
        </>
    );
};

export default Navlinks;