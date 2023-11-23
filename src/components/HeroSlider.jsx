import React from 'react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import avater from '../assets/avater.png';
import nft1 from '../assets/nft1.jpg';
import nft2 from '../assets/nft2.jpg';
import nft3 from '../assets/nft3.jpg';
import nft4 from '../assets/nft4.jpg';
import nft5 from '../assets/nft5.jpg';

const HeroSlider = () => {
    const nfts = [
        {nft: nft1, author: "ButterFly", avater: avater, title: "The Windchimp"},
        {nft: nft2, author: "ButterFly", avater: avater, title: "The Windchimp"},
        {nft: nft3, author: "ButterFly", avater: avater, title: "The Windchimp"},
        {nft: nft4, author: "ButterFly", avater: avater, title: "The Windchimp"},
        {nft: nft5, author: "ButterFly", avater: avater, title: "The Windchimp"},
    ];

    return (
        <Swiper

        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        
        {
            nfts?.map((item, i)=>(
                    <SwiperSlide key={i}> 
                        <div className='relative'>
                            <img src={item.nft} className='rounded-xl object-contain' alt="nft" />
                        </div>
                    </SwiperSlide>
            ))
        }
      </Swiper>
    );
};

export default HeroSlider;