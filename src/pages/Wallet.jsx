import React from 'react';
import Layout from '../components/Layout';
import Process from '../components/Process';
import Wallets from '../components/Wallets';

const Wallet = () => {
    return (
        <Layout container>
            <div className='flex flex-col justify-between bg-gradient-to-l from-red-600/60 to-violet-600/60 animate-gradient items-center h-64 md:rounded-2xl w-full py-5'>
                <h3 className="md:text-4xl text-3xl md:leading-snug tracking-wide leading-snug font-medium text-violet-600 ">Wallet Connect</h3>
                <p className='text-white/50 hover:text-white duration-500 font-semibold cursor-pointer'>NFThub <span className='text-white'>{`> wallet`}</span></p>
            </div>

            <Wallets/>
            <Process/>
        </Layout>
    );
};

export default Wallet;