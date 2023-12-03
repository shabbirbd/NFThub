import React from 'react';

const FeaturedCard = ({data}) => {
    return (
        <div className='border border-slate-300 dark:border-slate-700 max-w-sm w-full rounded-xl p-5 transition-shadow hover:shadow-lg'>
            <a href="#" className='grid grid-cols-3 gap-3 grid-rows-3 justify-items-center hover:gap-1 hover:scale-105 duration-300'>
                <img src={data.banner} alt="banner" className='h-full object-cover rounded-md row-span-3 col-span-2' />
                {
                    data?.images?.map((item, i)=>(
                        <img src={item} alt="nft" key={i} className='w-full h-full object-cover rounded-md' />
                    ))
                }
            </a>

            <a className="font-semibold hover:text-violet-600 duration-500 text-slate-700 dark:text-slate-200 dark:hover:text-violet-600 mt-4 block text-base " href="#">{data.title}</a>

            <div className="mt-2 flex items-center justify-between text-sm font-medium tracking-tight">
                <div className="flex flex-wrap items-center dark:text-slate-400">
                    <a className="mr-2 shrink-0" href="#">
                        <img alt="owner" className="h-5 w-5 rounded-full" src={data.avater}/>
                    </a>
                    <span className=" mr-1">by</span>
                    <a className="text-violet-600" href="#">
                        <span>{data.author}</span>
                    </a>
                </div>
                <span className=" text-sm dark:text-slate-400">{data.quantity} Items</span>
            </div>
        </div>
    );
};

export default FeaturedCard;