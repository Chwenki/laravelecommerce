import { Head } from '@inertiajs/react';
import Footer from './footer';
import Header from './header';
import Nav from './nav';
import ProductScroll from './productscroll';

export default function Women(props) {
    const category = 'women';

    console.log(props);
    return (
        <>
            <Head title="Women Wear |ProdAfrica">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
                <script src="https://kit.fontawesome.com/2139c11586.js" crossOrigin="anonymous"></script>
            </Head>
            <Nav prodNum={props['prodNum']} />
            <Header
                category={category}
                homePageImg={'/images/homepagewoman.jpg'}
                homePageText={
                    'Redefine your style. Discover timeless fashion and everyday essentials made for women who love to shine.Effortless, bold, and iconic. Stand out this school year, no matter the moment.'
                }
            />
            <ProductScroll items={props['products']} category={category} />
            <Footer />
        </>
    );
}
