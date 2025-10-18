import { post } from '@/actions/App/Http/Controllers/SubscribeController';
import { Form, Head, Link } from '@inertiajs/react';

export default function Footer(props) {
    console.log(props);
    const currentURL = window.location.href;

    return (
        <>
            <Head>
                <script src="https://kit.fontawesome.com/2139c11586.js" crossorigin="anonymous"></script>
            </Head>
            <footer>
                <div className="p-10">
                    <ul className="grid grid-cols-5 justify-between gap-5">
                        <li className="text-center">
                            <span className="text-5xl">
                                <i class="fas fa-location-dot"></i>
                            </span>
                            <h2 className="mt-5">Available in Stores</h2>
                            <p>Shop in one of our stores or at a wholesaler</p>
                        </li>
                        <li className="text-center">
                            <span className="text-4xl">
                                <i class="fas fa-truck"></i>
                            </span>
                            <h2 className="mt-5">Free Shipping</h2>
                            <p>For ProdAfrica Collective members on US orders $50+</p>
                        </li>
                        <li className="text-center">
                            <span className="text-4xl">
                                <i class="fas fa-lock"></i>
                            </span>
                            <h2 className="mt-5">Secure Payment</h2>
                            <p>Safe Shopping Guaranteed</p>
                        </li>
                        <li className="text-center">
                            <span className="text-4xl">
                                <i class="fas fa-arrows-rotate"></i>
                            </span>
                            <h2 className="mt-5">Free Returns & Exchanges</h2>
                            <p>For US orders within 30 days of purchase</p>
                        </li>
                        <li className="text-center">
                            <span className="text-4xl">
                                <i class="fas fa-people-group"></i>
                            </span>
                            <h2 className="mt-5">Support Mental Health</h2>
                            <p>Every purchase supports Foundation 43's mission to expand access to effective mental health care.</p>
                        </li>
                    </ul>
                    <ul className="grid grid-cols-5 justify-between gap-5">
                        <li className="text-center text-sm hover:underline">
                            <Link href="/our-stores">Our Stores</Link>
                        </li>

                        <li className="text-center text-sm hover:underline">
                            <Link href="/free-shipping">Free Shipping</Link>
                        </li>

                        <li className="text-center text-sm hover:underline">
                            <Link href="/secure-payment">Secure Payment</Link>
                        </li>

                        <li className="text-center text-sm hover:underline">
                            <Link href="/returns-exchange">Returns & Exchange</Link>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col gap-8 bg-gray-800 px-10 py-10 text-white">
                    <Form {...post.form()} className="flex w-90 cursor-pointer flex-col justify-start gap-2" options={{ preserveScroll: true }}>
                        {({ processing, wasSuccessful }) => (
                            <>
                                {wasSuccessful ? (
                                    <div className="flex h-20 w-200 cursor-default items-center text-lg font-bold text-green-500">
                                        Great! We've sent you an email to confirm your subscription.
                                    </div>
                                ) : (
                                    <>
                                        <div>
                                            <h1 className="text-3xl font-extrabold">THE WEEKEND AWAITS</h1>
                                            <p>Sign up now to get alerts for new product drops and rad promotions</p>
                                        </div>
                                        <div className="inline-flex gap-3">
                                            <input
                                                className="w-70 rounded-md bg-gray-200 p-3 text-black placeholder:text-gray-800"
                                                type="email"
                                                placeholder="Enter your email address"
                                                name="email"
                                                id="email"
                                                required
                                            />
                                            <button type="submit" className="cursor-pointer rounded-md bg-black p-4 hover:bg-gray-700">
                                                SUBSCRIBE
                                            </button>
                                        </div>
                                    </>
                                )}
                            </>
                        )}
                    </Form>
                </div>
                <div className="bg-gray-900 px-10 py-10 text-white">
                    <ul className="mb-5 grid grid-cols-4 text-sm">
                        <ul className="flex flex-col gap-2">
                            <li className="text-md mb-3 font-bold text-white">Shop By Category</li>
                            <li>
                                <Link className="hover:underline">Swim Trunks</Link>
                            </li>
                            <li>
                                <Link className="hover:underline">Athletic Shorts</Link>
                            </li>
                            <li>
                                <Link className="hover:underline">Casual Shorts</Link>
                            </li>
                            <li>
                                <Link className="hover:underline">Khaki Shorts</Link>
                            </li>
                            <li>
                                <Link className="hover:underline">Lounge Shorts</Link>
                            </li>
                            <li>
                                <Link className="hover:underline">Performance Polos</Link>
                            </li>
                            <li>
                                <Link className="hover:underline">Clearance</Link>
                            </li>
                            <li>
                                <Link className="hover:underline">Gift Cards</Link>
                            </li>
                        </ul>

                        <ul className="flex flex-col gap-2">
                            <li className="text-md mb-3 font-bold text-white">ProdAfrica Resources</li>
                            <li>
                                <Link className="hover:underline">Help Center</Link>
                            </li>
                            <li>
                                <Link className="hover:underline">Returns & Exchanges</Link>
                            </li>
                            <li>
                                <Link className="hover:underline">Shipping & Delivery</Link>
                            </li>
                            <li>
                                <Link className="hover:underline">Group Discounts</Link>
                            </li>
                            <li>
                                <Link className="hover:underline">Military Discount</Link>
                            </li>
                            <li>
                                <Link className="hover:underline">Size & Length Guide</Link>
                            </li>
                            <li>
                                <Link className="hover:underline">Contact Us</Link>
                            </li>
                            <li>
                                <Link className="hover:underline">Loyalty Program</Link>
                            </li>
                            <li>
                                <Link className="hover:underline">The Weekender Blog</Link>
                            </li>
                        </ul>

                        <ul className="flex flex-col gap-2">
                            <li className="text-md mb-3 font-bold text-white">About ProdAfrica</li>
                            <li>
                                <Link className="hover:underline">About Us</Link>
                            </li>
                            <li>
                                <Link className="hover:underline">Our Stores</Link>
                            </li>
                            <li>
                                <Link className="hover:underline">Foundation 43 by ProdAfrica</Link>
                            </li>
                            <li>
                                <Link className="hover:underline">Prospective Wholesalers</Link>
                            </li>
                            <li>
                                <Link className="hover:underline">CA Transparency Act</Link>
                            </li>
                            <li>
                                <Link className="hover:underline">Accessibility Statement</Link>
                            </li>
                            <li>
                                <Link className="hover:underline">Careers</Link>
                            </li>
                        </ul>
                        <ul className="flex flex-col gap-2">
                            <li className="text-md mb-3 font-bold text-white">Need Help?</li>
                            <li>We're here to help you with your order!</li>
                            <li>
                                <Link>
                                    <button className="rounded-md bg-black p-3 hover:bg-gray-700">Text (237) 655555555</button>
                                </Link>
                            </li>
                            <li>Text us anytime and we'll respond within 24 hours! Or you can chat with us during business hours.</li>
                        </ul>
                    </ul>
                    <ul class="flex flex-row justify-between gap-5 text-sm">
                        <li>© 2025 ProdAfrica Inc. - The Weekend Has Arrived - All Rights Reserved</li>
                        <li>Terms of Use</li>
                        <li>Privacy Policy</li>
                        <li>Do Not Sell My Info</li>
                        <li>Cookie Preferences</li>
                    </ul>
                </div>
            </footer>
        </>
    );
}
