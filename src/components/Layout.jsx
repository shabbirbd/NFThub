import React from 'react';
import Navbar from './Navbar/Navbar';

const Layout = ({children}) => {
    return (
        <>
            <Navbar/>
            <div className='border-2 border-slate-600 container space-y-10 mx-auto'>
                {children}
            </div>
        </>
    );
};

export default Layout;