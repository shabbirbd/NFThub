import 'swiper/css';
import 'swiper/css/effect-cards';
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import nft1 from '../assets/nft1.jpg';
import nft2 from '../assets/nft2.jpg';
import nft3 from '../assets/nft3.jpg';
import nft4 from '../assets/nft4.jpg';
import nft5 from '../assets/nft5.jpg';



const HeroSlider = () => {
    const nfts = [
        {nft: nft1},
        {nft: nft2},
        {nft: nft3},
        {nft: nft4},
        {nft: nft5},
    ];
    



    return (
    <>
        
         {
            Swiper && <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            className='mySwiper'
            observeParents={true}
            observer={true}
            >

            {
                nfts.map((item, i)=>(
                    <SwiperSlide key={i}> 
                            <div className='relative'>
                                <img src={item.nft} className='rounded-xl w-full object-fit' alt="nft" />  
                            </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
         }
    
    </>
    );
};

export default HeroSlider;