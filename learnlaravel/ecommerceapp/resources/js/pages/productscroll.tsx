import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import ProductCard from './productcard';

export default function ProductScroll({ category, items, wishlistprod }) {
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
                            nextEl: '#nextRefId',
                            prevEl: '#prevRefId',
                        }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        {items.map((item, index) => (
                            <SwiperSlide>
                                <>
                                    <ProductCard category={category} item={item} wishlist={wishlistprod} index={index} />
                                </>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <button
                    id="nextRefId"
                    className={`absolute top-1/2 right-0 z-10 h-14 w-14 cursor-pointer rounded-full bg-gray-600 p-3 text-white hover:bg-gray-400 [&.swiper-button-disabled]:hidden`}
                >
                    <span className="text-white">
                        <i class="fas fa-chevron-right"></i>
                    </span>
                </button>
                <button
                    id="prevRefId"
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
