import { post as postlogin } from '@/actions/App/Http/Controllers/LoginController';
import { post as postregister } from '@/actions/App/Http/Controllers/RegisterController';
import { Checkbox } from '@/components/ui/checkbox';
import { Form, Link } from '@inertiajs/react';
import { X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useScrollDirection } from '../hooks/useScrollDirection';

export default function Nav({ prodNum, cartProd = [], modal = false, errors = {}, isLoggedIn = false }) {
    //must remove isLoggedIn later from props list because the default value is not usefull is isLoggedIn must be set at all times for Nav
    const [cartDrop, setCartDrop] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(modal);
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);
    console.log(isRegisterOpen);
    const currentURL = '/';
    const currentPath = window.location.pathname;
    console.log(currentPath);

    const scrollDirection = useScrollDirection();
    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
            setIsRegisterOpen(false);
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isModalOpen]);
    function showModal() {
        setIsModalOpen(true);
    }
    function hideModal() {
        setIsModalOpen(false);
    }
    function toggleRegisterModal() {
        setIsRegisterOpen((prev) => !prev);
    }

    return (
        <>
            <nav
                id="navbar"
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
                    <span className="absolute top-6 right-39 cursor-default text-lg text-gray-600">
                        <i class="fas fa-search"></i>
                    </span>
                    <div id="nav-right" className="flex gap-5 text-lg text-gray-600">
                        {!isLoggedIn ? (
                            <span className="cursor-pointer text-2xl" onClick={showModal}>
                                <i class="fa-regular fa-user"></i>
                            </span>
                        ) : (
                            <Link className="cursor-pointer text-2xl" href="/account">
                                <i class="fa-regular fa-user"></i>
                            </Link>
                        )}
                        <Link href="/wishlists" className="cursor-pointer">
                            <span className="cursor-pointer text-2xl">
                                <i class="fa-regular fa-heart"></i>
                            </span>
                            <span className="absolute top-5 right-[48px] flex w-4 justify-center rounded-full bg-gray-700 text-xs text-white opacity-80">
                                12
                            </span>
                        </Link>

                        <Link onMouseEnter={() => setCartDrop(true)} onMouseLeave={() => setCartDrop(false)} href="/cart" className="cursor-pointer">
                            <span className="text-2xl">
                                <i class="fas fa-bag-shopping"></i>
                            </span>
                            <span className="absolute top-5 right-3 flex w-4 justify-center rounded-full bg-gray-700 text-xs text-white opacity-80">
                                {prodNum}
                            </span>
                        </Link>
                        {cartDrop && cartProd.length == 0 && (
                            <div
                                onMouseEnter={() => setCartDrop(true)}
                                onMouseLeave={() => setCartDrop(false)}
                                className="absolute top-12 right-2 w-55 overflow-auto rounded-xs border-1 bg-white px-4 py-3 text-base font-semibold"
                            >
                                <p>Your Cart is Empty!</p>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
            {isModalOpen && (
                <>
                    {!isRegisterOpen ? (
                        <>
                            <div id="loginmodalbg" className="fixed inset-0 z-100 flex h-full items-center justify-center bg-black opacity-60"></div>
                            <div
                                id="loginmodal"
                                onClick={hideModal}
                                className="fixed top-0 z-100 flex h-full w-full items-center justify-center gap-3 overflow-auto"
                            >
                                <Form
                                    {...postlogin.form()}
                                    resetOnSuccess={['password']}
                                    className="relative top-0 flex max-w-md flex-col gap-6 overflow-auto"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <div className="sticky z-106 flex h-auto w-95 flex-col gap-10 rounded-md bg-white p-3">
                                        <div className="flex items-center justify-between text-lg">
                                            <span className="font-bold">Sign in</span>
                                            <button
                                                className="cursor-pointer rounded-md bg-black px-2 py-1 text-white hover:bg-gray-700"
                                                onClick={() => toggleRegisterModal()}
                                                type="button"
                                            >
                                                Register
                                            </button>
                                        </div>
                                        <div className="flex w-full flex-col gap-2">
                                            <input
                                                type="email"
                                                tabIndex={1}
                                                placeholder="Email address"
                                                className="rounded-md border-1 bg-white px-2 py-3"
                                                id="register-email"
                                                name="email"
                                                required
                                                autoFocus
                                                autoComplete="email"
                                            />
                                            {errors.email && <p className="text-red-600">{errors.email}</p>}
                                            <input
                                                type="password"
                                                tabIndex={2}
                                                placeholder="Password"
                                                className="rounded-md border-1 bg-white px-2 py-3"
                                                id="password"
                                                name="password"
                                                required
                                                autoComplete="current-password"
                                            />
                                        </div>

                                        <div className="flex justify-between">
                                            <span className="flex items-center gap-2">
                                                <Checkbox id="staysignedin" name="remember" className="h-5 w-5 border-2 border-black" tabIndex={3} />
                                                <label htmlFor="staysignedin">Stay signed in</label>
                                            </span>
                                            <a href="#">Forgot your password?</a>
                                        </div>
                                        <div className="flex flex-col gap-4">
                                            <button
                                                type="submit"
                                                className="cursor-pointer rounded-lg bg-black p-4 text-white hover:bg-gray-700"
                                                tabIndex={4}
                                            >
                                                Sign in
                                            </button>
                                            <div className="flex justify-center">
                                                <span className="text-lg font-bold">OR</span>
                                            </div>
                                            <a href="/auth/redirect" className="w-full">
                                                <button type="button" className="w-full cursor-pointer rounded-md border-2 px-4 py-2 font-semibold">
                                                    <span className="flex items-center justify-center gap-3">
                                                        <img src="/images/googleicon.svg" className="h-7 w-7" alt="" /> Continue with Google
                                                    </span>
                                                </button>
                                            </a>
                                            <div className="text-sm">
                                                <p>
                                                    By clicking Sign in, Continue with Google, Facebook, or Apple, you agree to Product Africa's{' '}
                                                    <a href="#" className="text-blue-500 underline hover:text-black">
                                                        Terms of Use
                                                    </a>{' '}
                                                    and{' '}
                                                    <a href="#" className="text-blue-500 underline hover:text-black">
                                                        Privacy Policy
                                                    </a>
                                                    .
                                                </p>
                                                <p>
                                                    Product Africa may send you communications; you may change your preferences in your account
                                                    settings. We'll never post without your permission.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Form>
                                <X color="white" className="relative bottom-74 z-100 cursor-pointer" onClick={hideModal} />
                            </div>
                        </>
                    ) : (
                        <>
                            <div id="loginmodalbg" className="fixed inset-0 z-100 flex h-full items-center justify-center bg-black opacity-60"></div>
                            <div
                                id="loginmodal"
                                onClick={hideModal}
                                className="fixed top-0 z-100 flex h-full w-full items-center justify-center gap-3 overflow-auto"
                            >
                                <Form
                                    {...postregister.form()}
                                    className="relative top-0 flex max-w-md flex-col gap-6 overflow-auto"
                                    onClick={(e) => e.stopPropagation()}
                                    resetOnSuccess={['password', 'password_confirmation']}
                                >
                                    <div className="sticky z-106 flex h-auto w-95 flex-col gap-10 rounded-md bg-white p-3">
                                        <div className="flex items-center justify-between text-lg">
                                            <span className="font-bold">Create Account</span>
                                            <button
                                                className="cursor-pointer rounded-md bg-black px-2 py-1 text-white hover:bg-gray-700"
                                                onClick={() => setIsRegisterOpen((prev) => !prev)}
                                                type="button"
                                            >
                                                Sign-in
                                            </button>
                                        </div>
                                        <div className="flex w-full flex-col gap-2">
                                            <input
                                                type="text"
                                                tabIndex={1}
                                                placeholder="Full name"
                                                className="rounded-md border-1 bg-white px-2 py-3"
                                                id="name"
                                                name="name"
                                                required
                                                autoFocus
                                                data-slot="input"
                                                autoComplete="name"
                                            />
                                            <input
                                                type="email"
                                                tabIndex={2}
                                                placeholder="Email address"
                                                className="rounded-md border-1 bg-white px-2 py-3"
                                                id="login-email"
                                                name="email"
                                                required
                                                autoComplete="email"
                                            />

                                            <input
                                                type="password"
                                                tabIndex={3}
                                                placeholder="Password"
                                                className="rounded-md border-1 bg-white px-2 py-3"
                                                id="password"
                                                name="password"
                                                required
                                                autoComplete="new-password"
                                            />
                                            <input
                                                type="password"
                                                tabIndex={3}
                                                placeholder="Confirm password"
                                                className="rounded-md border-1 bg-white px-2 py-3"
                                                id="password_confirmation"
                                                name="password_confirmation"
                                                required
                                                autoComplete="new-password"
                                            />
                                        </div>

                                        <div className="flex flex-col gap-4">
                                            <button
                                                type="submit"
                                                className="cursor-pointer rounded-lg bg-black p-4 text-white hover:bg-gray-700"
                                                tabIndex={4}
                                            >
                                                Register
                                            </button>
                                            <div className="flex justify-center">
                                                <span className="text-lg font-bold">OR</span>
                                            </div>
                                            <a href="/auth/redirect" className="w-full">
                                                <button className="w-full cursor-pointer rounded-md border-2 px-4 py-2 font-semibold">
                                                    <span className="flex items-center justify-center gap-3">
                                                        <img src="/images/googleicon.svg" className="h-7 w-7" alt="" /> Continue with Google
                                                    </span>
                                                </button>
                                            </a>
                                            <div className="text-sm">
                                                <p>
                                                    Product Africa may send you communications; you may change your preferences in your account
                                                    settings. We'll never post without your permission.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Form>
                                <X color="white" className="relative bottom-74 z-100 cursor-pointer" onClick={hideModal} />
                            </div>
                        </>
                    )}
                </>
            )}
        </>
    );
}
