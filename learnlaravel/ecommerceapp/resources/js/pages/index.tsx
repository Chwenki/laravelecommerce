import { Head, Link } from '@inertiajs/react';
import { MoveRight } from 'lucide-react';
import Footer from './footer';
import Nav from './nav';

export default function Index(props) {
    console.log(props);
    return (
        <>
            <Head title="ProdAfrica">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
                <script src="https://kit.fontawesome.com/2139c11586.js" crossorigin="anonymous"></script>
            </Head>
            <Nav cartProd={props['cartProd']} errors={props['errors']} isLoggedIn={props['isLoggedIn']} />
            <div className="relative mt-15">
                <img className="w-full" src="/images/homepage1.png" alt="" />
                <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-gray-900 to-transparent"></div>
                <div className="absolute top-35 p-10">
                    <h1 className="mb-9 text-7xl font-extrabold text-wrap text-white">African Shopping</h1>
                    <p className="text-md mb-15 w-150 text-white">
                        Redefine your style. Discover timeless fashion and everyday essentials made for women who love to shine.Effortless, bold, and
                        iconic. Stand out this school year, no matter the moment.
                    </p>

                    <div className="flex flex-row gap-2">
                        <Link
                            href="/men-sale"
                            className="mt-5 flex flex-row gap-1 rounded-xs bg-gray-900 px-4 py-2 font-bold text-white hover:bg-gray-700"
                        >
                            Men
                            <MoveRight size={20} />
                        </Link>
                        <Link
                            href="/women-sale"
                            className="mt-5 flex flex-row gap-1 rounded-xs bg-gray-900 px-4 py-2 font-bold text-white hover:bg-gray-700"
                        >
                            Women
                            <MoveRight size={20} />
                        </Link>
                        <Link
                            href="/kids-sale"
                            className="mt-5 flex flex-row gap-1 rounded-xs bg-gray-900 px-4 py-2 font-bold text-white hover:bg-gray-700"
                        >
                            Kids
                            <MoveRight size={20} />
                        </Link>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
