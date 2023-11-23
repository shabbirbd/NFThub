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
                    <li key={i}>
                        <Link to={item.link}>{item.name}</Link>
                    </li>
                ))
            }
        </>
    );
};

export default Navlinks;