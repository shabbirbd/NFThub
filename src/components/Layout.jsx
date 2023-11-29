import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar/Navbar';

const Layout = ({children, container}) => {
    return (
        <>
            <Navbar/>
            <div className={`border-2 border-slate-600  space-y-10 mx-auto ${container ? "container" : "w-full"}`}>
                {children}
            </div>
            <Footer/>
        </>
    );
};

export default Layout;