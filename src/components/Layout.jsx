import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar/Navbar';



const Layout = ({children}) => {
    

    return (
        <>
            <Navbar/>
            <div className={`bg-gradient-to-l h-auto from-white via-[#F5E9F1] to-white dark:from-black dark:via-[#3E1E47] dark:to-black space-y-10 mx-auto`}>
                {children}
            </div>
            <Footer/>
        </>
    );
};

export default Layout;