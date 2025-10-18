import { Head } from '@inertiajs/react';
import Footer from './footer';
import Nav from './nav';

export default function Checkout(props) {
    return (
        <>
            <Head title="Women Wear |ProdAfrica">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
                <script src="https://kit.fontawesome.com/2139c11586.js" crossOrigin="anonymous"></script>
            </Head>
            <Nav prodNum={props['prodNum']} />
            <div>
                <h1>CHECKOUT</h1>
            </div>
            <Footer />
        </>
    );
}
