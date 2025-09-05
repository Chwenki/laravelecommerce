import { Head } from '@inertiajs/react';
import Footer from './footer';
import Header from './header';
import Nav from './nav';

export default function Index() {
    return (
        <>
            <Head title="ProdAfrica">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
                <script src="https://kit.fontawesome.com/2139c11586.js" crossorigin="anonymous"></script>
            </Head>
            <Nav />
            <Header
                homePageImg={'/images/homepage1.png'}
                homePageText={
                    'Your style, your home, your life. At ProdAfrica, we bring you everyday essentials and unique finds designed to make living easier and brighter.'
                }
                homePageBtnText={'Now'}
            />
            <Footer />
        </>
    );
}
