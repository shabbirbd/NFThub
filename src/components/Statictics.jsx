import React from 'react';

const Statictics = () => {
    return (
        <div className='container mx-auto grid grid-cols-1 gap-10 justify-items-center py-10 lg:py-14'>
            <div className='text-center pb-8'>
                <h3 className="mb-4 md:text-3xl text-2xl md:leading-snug leading-snug font-semibold text-black dark:text-white">Trusted by more than 20K users</h3>
                <p className="text-slate-400 max-w-xl mx-auto px-5">We are a huge marketplace dedicated to connecting great artists of all NFThub with their fans and unique token collectors!</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-5xl dark:text-white'>
                <div className="text-center">
                    <h1 className="lg:text-5xl text-4xl font-semibold mb-2">$40M</h1>
                    <h5 className="text-lg font-medium text-slate-400">Trading volume</h5>
                </div>
                <div className="text-center">
                    <h1 className="lg:text-5xl text-4xl font-semibold mb-2">200+</h1>
                    <h5 className="text-lg font-medium text-slate-400">NFTs created</h5>
                </div>
                <div className="text-center">
                    <h1 className="lg:text-5xl text-4xl font-semibold mb-2">250K</h1>
                    <h5 className="text-lg font-medium text-slate-400">Total users</h5>
                </div>
            </div>
        </div>
    );
};

export default Statictics;