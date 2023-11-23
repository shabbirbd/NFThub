import React from 'react';
import Navbar from './Navbar/Navbar';

const Layout = ({children}) => {
    return (
        <>
            <Navbar/>
            <div className='border-2 border-slate-600 container mx-auto'>
                {children}
            </div>
        </>
    );
};

export default Layout;