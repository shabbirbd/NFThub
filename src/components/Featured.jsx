import React from 'react';
import { featured } from '../data/featured';
import FeaturedCard from './FeaturedCard';

const Featured = () => {

    return (
        <div className='py-24 relative '>
            <div className='container mx-auto'>
                <div>
                    <h2 className="font-bold text-slate-700 dark:text-slate-200 mb-8 text-center text-3xl lg:text-4xl">🚀 Featured collections</h2>
                </div>
                 
                 <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10  px-6 md:px-14 lg:px-24 justify-items-center'> 
                    {
                        featured?.map((item, i)=>(
                            <FeaturedCard data={item} key={i}/>
                        ))
                    }
                 </div>
            </div>
        </div>
    );
};

export default Featured;