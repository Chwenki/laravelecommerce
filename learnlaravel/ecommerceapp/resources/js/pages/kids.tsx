import { Head } from '@inertiajs/react';
import Footer from './footer';
import Header from './header';
import Nav from './nav';
import ProductScroll from './productscroll';
export default function Kids(props) {
    const category = 'kids';
    return (
        <>
            <Head title="Kids Wear |ProdAfrica">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
                <script src="https://kit.fontawesome.com/2139c11586.js" crossOrigin="anonymous"></script>
            </Head>
            <Nav prodNum={props['prodNum']} />
            <Header
                homePageImg={'/images/homepagekids.jpg'}
                homePageText={'Bright colors, big smiles! Discover kids’ fashion and essentials made for every adventure, every day.'}
                homePageBtnText={'Now'}
            />
            <ProductScroll items={props['products']} category={category} />
            <Footer />
        </>
    );
}
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

// export default () => {
//   return (
//     <Swiper
//       // install Swiper modules
//       modules={[Navigation, Pagination, Scrollbar, A11y]}
//       spaceBetween={50}
//       slidesPerView={3}
//       navigation
//       pagination={{ clickable: true }}
//       scrollbar={{ draggable: true }}
//       onSwiper={(swiper) => console.log(swiper)}
//       onSlideChange={() => console.log('slide change')}
//     >
//       <SwiperSlide>Slide 1</SwiperSlide>
//       <SwiperSlide>Slide 2</SwiperSlide>
//       <SwiperSlide>Slide 3</SwiperSlide>
//       <SwiperSlide>Slide 4</SwiperSlide>
//     </Swiper>
//   );
// };
