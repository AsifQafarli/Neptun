import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Thumbs } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import { useState } from 'react';


export default ({ images }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null)
    return (
        <>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log('asif')}
                navigation={true}
                pagination={true}
                modules={[Navigation, Pagination, Thumbs]}
                thumbs={{ swiper: thumbsSwiper }}
            >
                {
                    images.map(img => {
                        return (<SwiperSlide>
                            <img src={img} alt="" className='modal-product-img' />
                        </SwiperSlide>)
                    })
                }
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={5}
                slidesPerView={2}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[Thumbs]}
                className="thumbs-slider"
            >
                {
                    images.map((img, index) => (
                        <SwiperSlide key={index}>
                            <img src={img} alt="" className='thumb-img' />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    );
};