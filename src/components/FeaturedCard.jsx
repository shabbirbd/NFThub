import React from 'react';

const FeaturedCard = ({data}) => {
    return (
        <div className='border border-slate-300 max-w-sm w-full rounded-xl p-5 transition-shadow hover:shadow-lg'>
            <a href="#" className='grid grid-cols-3 gap-1 grid-rows-3 justify-items-center'>
                <img src={data.banner} alt="banner" className='h-full object-cover rounded-md row-span-3 col-span-2' />
                {
                    data?.images?.map((item, i)=>(
                        <img src={item} alt="nft" key={i} className='w-full h-full object-cover rounded-md' />
                    ))
                }
            </a>

            <a className="font-semibold hover:text-violet-600  text-slate-700 mt-4 block text-base " href="#">{data.title}</a>

            <div className="mt-2 flex items-center justify-between text-sm font-medium tracking-tight">
                <div className="flex flex-wrap items-center">
                    <a className="mr-2 shrink-0" href="#">
                        <img alt="owner" className="h-5 w-5 rounded-full" src={data.avater}/>
                    </a>
                    <span className=" mr-1">by</span>
                    <a className="text-violet-600" href="#">
                        <span>{data.author}</span>
                    </a>
                </div>
                <span className=" text-sm">{data.quantity} Items</span>
            </div>
        </div>
    );
};

export default FeaturedCard;