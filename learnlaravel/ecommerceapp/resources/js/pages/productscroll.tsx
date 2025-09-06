import { useRef } from 'react';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import ProductCard from './productcard';

// import Swiper styles

// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

export default function ProductScroll({ category, items }) {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    console.log(items);
    return (
        <>
            <div className="relative mx-12 my-10">
                <p className="mb-5 text-3xl font-extrabold">Top Picks For You</p>
                <div className="mx-10">
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        slidesPerView={4}
                        slidesPerGroup={4}
                        navigation={{
                            nextEl: nextRef.current,
                            prevEl: prevRef.current,
                        }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        {items.map((item, index) => (
                            <SwiperSlide>
                                <>
                                    <ProductCard category={category} item={item} index={index} />
                                </>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <button
                    ref={nextRef}
                    className={`absolute top-1/2 right-0 z-10 h-14 w-14 cursor-pointer rounded-full bg-gray-600 p-3 text-white hover:bg-gray-400 [&.swiper-button-disabled]:hidden`}
                >
                    <span className="text-white">
                        <i class="fas fa-chevron-right"></i>
                    </span>
                </button>
                <button
                    ref={prevRef}
                    className={`absolute top-1/2 left-0 z-10 h-14 w-14 cursor-pointer rounded-full bg-gray-600 p-3 text-white hover:bg-gray-400 [&.swiper-button-disabled]:hidden`}
                >
                    <span className="text-white">
                        <i class="fas fa-chevron-left"></i>
                    </span>
                </button>
            </div>
        </>
    );
}
