import { Head } from '@inertiajs/react';
import Footer from './footer';
import Nav from './nav';

import ProductCard from './productcard';

export default function ProductsPage(props) {
    console.log(props);
    const bcvalue = 'Products';
    const url = window.location.href;
    const spliturl = url.split('/');
    spliturl[3] = spliturl[3].charAt(0).toUpperCase() + spliturl[3].slice(1);
    const titlebefore = spliturl[3].split('-');
    const title1 = titlebefore[0] + "'s";
    const title2 = titlebefore[1];
    const title = title1 + ' ' + title2;
    console.log(title);
    return (
        <>
            <Head title="Women Wear |ProdAfrica">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
                <script src="https://kit.fontawesome.com/2139c11586.js" crossOrigin="anonymous"></script>
            </Head>
            <Nav prodNum={props['prodNum']} />
            <div className="mx-12 mt-30">
                {/* <Breadcrumb bcvalues={bcvalues} /> */}
                <h1 className="mb-6 text-3xl font-bold">{title}</h1>
                <div className="grid grid-cols-4 gap-4">
                    {props['products'].map((item, index) => (
                        <ProductCard key={index} item={item} wishlist={props['wishlistprod']} />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}
