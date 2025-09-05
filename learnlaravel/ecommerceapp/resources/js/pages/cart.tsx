import { Button } from '@/components/ui/button';
import { Form } from '@inertiajs/react';
import Footer from './footer';
import Nav from './nav';

export default function Cart(props) {
    const currentURL = window.location.href;
    console.log(props);

    return (
        <>
            <Nav prodNum={props['prodNum']} />
            <div className="mx-12 my-20 mt-45 grid grid-cols-3 gap-8">
                {props['prodNum'] > 0 ? (
                    <>
                        <div className="col-span-2">
                            <h1 className="text-2xl font-bold">Your Bag</h1>
                            <p>
                                TOTAL: ({props['prodNum']} Items) <span className="text-bold">{props['totalPrice']}FCFA</span>
                            </p>
                            <p>Items in your bag are not reserved — check out now to make them yours.</p>
                            <div className="mt-3 flex flex-col gap-2">
                                {props['cart_products'].map((item, index) => (
                                    <div className="flex flex-row gap-3 border-2 border-gray-700 p-2" key={index}>
                                        <img src={item.Image_url} className="h-30 w-30" alt="" />
                                        <div className="flex flex-row justify-between">
                                            <span>{item.Name}</span>
                                            <Form
                                                className="w-90"
                                                method="post"
                                                href={currentURL}
                                                transform={(data) => ({ ...data, cprodId: item.Id })}
                                            >
                                                {({ processing }) => (
                                                    <>
                                                        {processing ? (
                                                            <button type="submit" className="animate-spin text-white"></button>
                                                        ) : (
                                                            <button type="submit" className="cursor-pointer text-lg">
                                                                <i class="fa-solid fa-trash"></i>
                                                            </button>
                                                        )}
                                                    </>
                                                )}
                                            </Form>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <p className="text-2xl font-bold">ORDER SUMMARY</p>
                            <div className="flex justify-between">
                                <div>
                                    <p>{props['prodNum']} Item(s)</p>
                                    <p>Sales Tax</p>
                                    <p>Delivery</p>
                                    <p>Total</p>
                                </div>
                                <div>
                                    <p>{props['totalPrice']}FCFA</p>
                                    <p>{props['totalPrice'] * 0.1925}FCFA</p>
                                    <p>2000FCFA</p>
                                    <p>{props['totalPrice'] * 0.1925 + 2000}FCFA</p>
                                </div>
                            </div>
                            <p>From $17.30/month, or 4 payments at 0% interest with Klarna Check purchase power</p>
                            <Button
                                className="flex h-20 w-full cursor-pointer justify-between rounded-none p-4 text-white hover:bg-gray-700"
                                type="submit"
                            >
                                <span className="text-left text-lg font-bold">Checkout</span>
                                <span className="text-right">
                                    <i class="fa-solid fa-arrow-right"></i>
                                </span>
                            </Button>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="col-span-2 flex flex-col gap-3">
                            <h1 className="mb-5 text-2xl font-extrabold">Your Cart Is Empty!</h1>
                            <p className="mb-3">The Moment you shall add a product, it shall appear here! So. Ready?</p>
                            <Button
                                className="flex h-10 w-30 cursor-pointer justify-between rounded-none p-4 text-white hover:bg-gray-700"
                                type="submit"
                            >
                                Shop!
                            </Button>
                        </div>
                    </>
                )}
            </div>
            <Footer />
        </>
    );
}
