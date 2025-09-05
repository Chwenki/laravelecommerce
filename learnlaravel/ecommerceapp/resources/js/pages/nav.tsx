import { Link } from '@inertiajs/react';
import { useScrollDirection } from '../hooks/useScrollDirection';

export default function Nav({ prodNum }) {
    const scrollDirection = useScrollDirection();
    return (
        <>
            <nav
                className={`fixed top-0 z-10 flex w-full items-center justify-between bg-white p-4 shadow-md transition-all duration-300 ${scrollDirection === 'down' ? '-translate-y-20' : 'translate-y-0'}`}
            >
                <Link href="/" className="text-3xl font-black">
                    ProdAfrica
                </Link>
                <ul className="flex gap-5 text-gray-500">
                    <ul className="flex gap-5 font-bold text-black">
                        <li>
                            <Link href="/men">Men</Link>
                        </li>
                        <li>
                            <Link href="/women">Women</Link>
                        </li>
                        <li>
                            <Link href="/kids">Kids</Link>
                        </li>
                    </ul>
                    <li>
                        <Link href="/back_to_school">Back To School</Link>
                    </li>
                    <li>
                        <Link href="/sale">Sale</Link>
                    </li>
                    <li>
                        <Link href="/new_trending">New & Trending</Link>
                    </li>
                </ul>
                <div className="flex items-center gap-5">
                    <input type="text" placeholder="Search..." className="bg-gray-200 p-2 pl-4" />
                    <span className="absolute top-6 right-34 cursor-default text-lg text-gray-600">
                        <i class="fas fa-search"></i>
                    </span>
                    <div className="flex gap-5 text-lg text-gray-600">
                        <span className="cursor-pointer">
                            <i class="fa-regular fa-user"></i>
                        </span>
                        <span className="cursor-pointer">
                            <i class="fa-regular fa-heart"></i>
                        </span>
                        <Link href="/cart" className="cursor-pointer">
                            <i class="fas fa-bag-shopping"></i>
                            <span className="absolute top-5 right-1 flex w-4 justify-center rounded-full bg-gray-700 text-xs text-white">
                                {prodNum}
                            </span>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
}
