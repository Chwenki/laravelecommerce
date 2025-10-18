import { Form, Link } from '@inertiajs/react';
import { Heart, LoaderCircle, X } from 'lucide-react';
import Footer from './footer';
import Nav from './nav';
import QuantitySelector from './quantityselector';

export default function Cart(props) {
    const currentURL = window.location.href;
    console.log(props);

    return (
        <>
            <Nav prodNum={props['prodNum']} />
            <div className="mx-12 my-20 mt-45 grid grid-cols-5 gap-8">
                {props['prodNum'] > 0 ? (
                    <>
                        <div className="col-span-3">
                            <h1 className="text-2xl font-bold">Your Bag</h1>
                            <p>
                                TOTAL: ({props['prodNum']} Items) <span className="text-bold">{props['totalPrice']}FCFA</span>
                            </p>
                            <p>Items in your bag are not reserved — check out now to make them yours.</p>
                            <div className="mt-3 flex flex-col gap-2">
                                {props['cart_products'].map((item, index) => (
                                    <div className="flex flex-row gap-3 border-2 border-gray-700 p-2" key={index}>
                                        <img src={item.Image_url} className="h-55 w-55" alt="" />
                                        <div className="flex w-full flex-col gap-3">
                                            <Form
                                                className="flex w-full flex-row justify-between gap-5"
                                                method="post"
                                                href={currentURL}
                                                transform={(data) => ({ ...data, cprodId: item.id })}
                                            >
                                                {({ processing }) => (
                                                    <div className="flex size-full flex-1 justify-between">
                                                        <span>{item.Name}</span>
                                                        {processing ? (
                                                            <LoaderCircle className="h-4 w-4 animate-spin" />
                                                        ) : (
                                                            <>
                                                                <div className="flex items-center gap-1">
                                                                    {item.Price.toLocaleString()} FCFA
                                                                    <button type="submit" className="cursor-pointer text-lg">
                                                                        <X />
                                                                    </button>
                                                                </div>
                                                            </>
                                                        )}
                                                    </div>
                                                )}
                                            </Form>
                                            <div className="flex justify-end">
                                                <button className="cursor-pointer">
                                                    <Heart />
                                                </button>
                                            </div>
                                            <QuantitySelector />
                                            {/* <input type="number" className="h-14 w-30 border-2 border-black px-2 text-base" min={1} /> */}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-span-2 flex flex-col gap-3">
                            <p className="text-2xl font-bold">ORDER SUMMARY</p>
                            <div className="flex justify-between">
                                <div>
                                    <p>{props['prodNum']} Item(s)</p>
                                    <p>Sales Tax</p>
                                    <p>Delivery</p>
                                    <p className="mt-4 font-bold">Total</p>
                                </div>
                                <div className="relative right-0 text-right">
                                    <p>{props['totalPrice']}FCFA</p>
                                    <p>{props['totalPrice'] * 0.1925}FCFA</p>
                                    <p>2000FCFA</p>
                                    <p className="mt-4 font-bold">{props['totalPrice'] * 0.1925 + props['totalPrice'] + 2000}FCFA</p>
                                </div>
                            </div>
                            <p>From $17.30/month, or 4 payments at 0% interest with Klarna Check purchase power</p>
                            <Link
                                className="flex h-20 w-full cursor-pointer items-center justify-between rounded-none bg-gray-700 p-4 text-white hover:bg-gray-500"
                                type="submit"
                                href="/checkout"
                            >
                                <span className="text-left text-lg font-bold">Checkout</span>
                                <span className="text-right">
                                    <i class="fa-solid fa-arrow-right"></i>
                                </span>
                            </Link>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="col-span-2 flex flex-col gap-3">
                            <h1 className="mb-5 text-2xl font-extrabold">Your Cart Is Empty!</h1>
                            <p className="mb-3">The Moment you shall add a product, it shall appear here! So. Ready?</p>
                            <Link
                                className="flex h-10 w-30 cursor-pointer items-center justify-between rounded-none bg-gray-800 p-4 text-white hover:bg-gray-700"
                                type="submit"
                                href="/productspage"
                            >
                                Shop!
                            </Link>
                        </div>
                    </>
                )}
            </div>
            <Footer />
        </>
    );
}
