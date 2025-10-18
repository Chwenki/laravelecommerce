import { Head } from '@inertiajs/react';
import Footer from './footer';
import Nav from './nav';
import ProductCard from './productcard';
import {Form} from '@inertiajs/react';

export default function Wishlist(props) {
    return (
        <>
            <Head title="Wishlists |ProdAfrica">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
                <script src="https://kit.fontawesome.com/2139c11586.js" crossOrigin="anonymous"></script>
            </Head>
            <Nav prodNum={props['prodNum']} />
            <div>
                <h1 className="mx-12 mt-40 mb-10 text-4xl font-bold">My Wishlist</h1>

                <div className="mx-12 mb-20">
                    {props['wishlistprod'] ? (
                        <>
                            <span>{props['wishlistprod'].length} ITEMS</span>
                            <div className="mt-8 grid grid-cols-4 gap-4">
                                {props['wishlistprod'].map((item, index) => (
                                    <ProductCard item={item} index={index} />
                                ))}
                            </div>
                        </>
                    ) : (
                        <>
                            <p>0 ITEMS</p>
                            <p>You haven't saved any items to your wishlist yet. Start shopping and add your favorite items to your wishlist.</p>
                        </>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
}
