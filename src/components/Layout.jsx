import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar/Navbar';

const Layout = ({children, container}) => {
    return (
        <>
            <Navbar/>
            <div className={`bg-gradient-to-l h-auto from-white via-[#F5E9F1] to-white space-y-10 mx-auto ${container ? "container" : "w-full"}`}>
                {children}
            </div>
            <Footer/>
        </>
    );
};

export default Layout;