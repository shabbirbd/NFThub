import React from 'react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { nfts } from '../data/nfts';

const NftSlider = () => {
    return (
        <div className='text-center py-10 space-y-10'>
            <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold uppercase leading-snug bg-gradient-to-r from-red-600 to-violet-600 text-transparent bg-clip-text animate-gradient'>Hot Collections</h2>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                breakpoints={{
                    640: {
                      slidesPerView: 3,
                    },
                    768: {
                      slidesPerView: 3,
                    },
                    1024: {
                      slidesPerView: 4,
                    },
                    1440:{
                        slidesPerView: 4,
                    }
                  }}
                coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper  w-11/12 mx-auto"
            >
                {
                    nfts?.map((item, i)=>(
                        <SwiperSlide key={i}>
                            <div className='h-auto max-w-sm relative flex items-center justify-center overflow-hidden group cursor-pointer'>
                                <img src={item.nft} className='rounded-lg' />
                                <div className='absolute -top-[100%] group-hover:top-[75%] duration-500 w-2/3 bg-slate-300 bg-opacity-60 rounded-xl px-5 py-2 text-left'>
                                    <h2 className='font-medium text-xl text-violet-600'>{item.title}</h2>
                                    <p className='text-sm font-base text-slate-600'>{item.author}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default NftSlider;