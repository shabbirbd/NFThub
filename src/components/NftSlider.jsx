import React from 'react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { nfts } from '../data/nfts';

const NftSlider = () => {
    return (
        <>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                breakpoints={{
                    640: {
                      slidesPerView: 3,
                      spaceBetween: 10,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 10,
                    },
                    1024: {
                      slidesPerView: 4,
                      spaceBetween: 30,
                    },
                    1440:{
                        slidesPerView: 4,
                        spaceBetween: 40
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
                className="mySwiper  w-11/12 "
            >
                {
                    nfts?.map((item, i)=>(
                        <SwiperSlide key={i}>
                            <div className='h-auto max-w-sm relative flex items-center justify-center overflow-hidden group cursor-pointer'>
                                <img src={item.nft} className='rounded-lg' />
                                <div className='absolute -top-[100%] group-hover:top-[75%] duration-500 w-2/3 bg-slate-300 bg-opacity-60 rounded-xl px-5 py-2'>
                                    <h2 className='font-medium text-xl text-violet-600'>{item.title}</h2>
                                    <p className='text-sm font-base text-slate-600'>{item.author}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    );
};

export default NftSlider;