import { Head } from '@inertiajs/react';
import Footer from './footer';
import Header from './header';
import Nav from './nav';
import ProductScroll from './productscroll';

export default function Men(props) {
    const category = 'men';
    return (
        <>
            <Head title="Men Wear |ProdAfrica">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
                <script src="https://kit.fontawesome.com/2139c11586.js" crossOrigin="anonymous"></script>
            </Head>
            <Nav prodNum={props['prodNum']} />
            <Header
                homePageImg={'/images/homepageman1.jpg'}
                homePageText={'Effortless, bold, and iconic. Stand out this school year, no matter the moment.'}
                homePageBtnText={'Now'}
            />
            <ProductScroll items={props['products']} category={category} />
            <Footer />
        </>
    );
}
