import { Link } from '@inertiajs/react';

export default function Header({ category = '', homePageImg, homePageText }) {
    return (
        <div className="relative mt-15">
            <img className="w-full" src={homePageImg} alt="" />
            <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-gray-900 to-transparent"></div>
            <div className="absolute top-35 p-10">
                <h1 className="mb-9 text-7xl font-extrabold text-wrap text-white">African Shopping</h1>
                <p className="text-md mb-15 w-150 text-white">{homePageText}</p>

                <Link href={`${category}-sale`} className="mt-5 rounded-md bg-gray-900 p-4 font-extrabold text-white hover:bg-gray-700">
                    Shop Now!
                </Link>
            </div>
        </div>
    );
}
