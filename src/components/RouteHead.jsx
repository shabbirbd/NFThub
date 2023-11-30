import React from 'react';

const RouteHead = ({data}) => {
    return (
        <div>
            <div className='flex flex-col justify-between clip-div bg-routeHeader bg-cover bg-no-repeat bg-center items-center lg:h-96 md:h-80 sm:h-64 h-60 py-10'>
                <h3 className="md:text-4xl text-2xl md:leading-snug tracking-wide leading-snug font-medium text-violet-600 ">{data.title}</h3>
                <p className='text-white/50 hover:text-white duration-500 font-semibold cursor-pointer'>NFThub <span className='text-white'>{data.route}</span></p>
            </div>
        </div>
    );
};

export default RouteHead;