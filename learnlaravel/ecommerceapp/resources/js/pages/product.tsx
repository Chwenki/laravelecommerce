import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { Form, Head, Link } from '@inertiajs/react';
import { useState } from 'react';
import Footer from './footer';
import Nav from './nav';

export default function Product(props) {
    const [isLiked, setIsLiked] = useState(false);

    console.log(props);
    const prodimg = document.getElementById('prodimg');
    prodimg?.addEventListener('mouseover', function () {
        prodimg.classList.add('hover:scale-110');
    });

    const thumbs = document.querySelectorAll('.thumb');
    thumbs.forEach((thumb) => {
        thumb.addEventListener('click', function () {
            prodimg?.setAttribute('src', (thumb as HTMLImageElement).src);
        });
    });

    const currentURL = window.location.href;
    const urlSegments = currentURL.split('/');

    return (
        <>
            <Head title="Product Details | ProdAfrica"></Head>
            <Nav prodNum={props['prodNum']} />
            <Breadcrumb className="my-4 flex list-none flex-row items-center">
                <BreadcrumbList>
                    <BreadcrumbLink asChild>
                        <Link href="/">Home</Link>
                    </BreadcrumbLink>
                </BreadcrumbList>
                <BreadcrumbSeparator />
                <BreadcrumbList>
                    <BreadcrumbLink asChild>
                        <Link href="/">Home</Link>
                    </BreadcrumbLink>
                </BreadcrumbList>
                <BreadcrumbSeparator />
                <BreadcrumbList>
                    <BreadcrumbLink asChild>
                        <Link href="/">Home</Link>
                    </BreadcrumbLink>
                </BreadcrumbList>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                </BreadcrumbItem>
            </Breadcrumb>
            <div className="mx-12 my-30 grid grid-cols-3 gap-2">
                <div className="col-span-2 flex flex-row gap-2">
                    <div className="flex flex-col gap-2">
                        {props['thumbnails'].map((item, index) => (
                            <img className="thumb h-30 w-110" src={item} key={index} alt="" />
                        ))}
                    </div>

                    <div className="overflow-hidden">
                        <img
                            id="prodimg"
                            className="z--1 h-full w-full transition-transform duration-300 ease-in-out hover:scale-210"
                            src={props['product'].Image_url}
                            alt=""
                        />
                        <p className="text-md text-gray-600">{props['product'].Description}</p>
                    </div>
                </div>
                <div className="col-span-1 font-bold">
                    <h1 className="pb-5 text-2xl">{props['product'].Name}</h1>
                    <p className="text-black-600 text-sm font-extrabold">{props['product'].Price.toLocaleString()} FCFA</p>
                    <p className="my-5">Promo codes will not apply to this product.</p>
                    <div className="relative flex flex-row gap-2">
                        <Form
                            className="flex w-90 cursor-pointer flex-col justify-start gap-2"
                            method="post"
                            href={currentURL}
                            transform={(data) => ({ ...data, prodId: props['product'].Id })}
                        >
                            {({ errors, processing, wasSuccessful }) => (
                                <>
                                    <div className="flex flex-row gap-2">
                                        <Button
                                            className="flex h-full w-full cursor-pointer justify-between rounded-none p-4 hover:bg-gray-700"
                                            type="submit"
                                            disabled={processing}
                                        >
                                            <span className="text-left text-white">{processing ? 'Adding...' : 'Add to bag'}</span>
                                            <span className="text-right text-white">
                                                <i class="fa-solid fa-bag-shopping"></i>
                                            </span>
                                        </Button>
                                        <span
                                            className="cursor-pointer border-1 bg-white p-4 text-black hover:bg-gray-200"
                                            onClick={() => setIsLiked((prev) => !prev)}
                                        >
                                            {isLiked ? (
                                                <span className="text-red-800">
                                                    <i class="fa-solid fa-heart"></i>
                                                </span>
                                            ) : (
                                                <i class="fa-regular fa-heart"></i>
                                            )}
                                        </span>
                                    </div>
                                    {wasSuccessful && <div className="cursor-default text-red-800">Product Added To Bag Successfully!</div>}
                                </>
                            )}
                        </Form>
                    </div>
                    <div className="mt-15">
                        <h2>Sizes</h2>
                        <div className="my-5 grid grid-cols-5 gap-2 text-sm">
                            <button className="cursor-pointer bg-black p-4 text-white hover:bg-gray-700">5</button>
                            <button className="cursor-pointer bg-black p-4 text-white hover:bg-gray-700">5.5</button>
                            <button className="cursor-pointer bg-black p-4 text-white hover:bg-gray-700">6</button>
                            <button className="cursor-pointer bg-black p-4 text-white hover:bg-gray-700">6.5</button>
                            <button className="cursor-pointer bg-black p-4 text-white hover:bg-gray-700">7</button>
                            <button className="cursor-pointer bg-black p-4 text-white hover:bg-gray-700">7.5</button>
                            <button className="cursor-pointer bg-black p-4 text-white hover:bg-gray-700">8</button>
                            <button className="cursor-pointer bg-black p-4 text-white hover:bg-gray-700">8.5</button>
                            <button className="cursor-pointer bg-black p-4 text-white hover:bg-gray-700">9</button>
                            <button className="cursor-pointer bg-black p-4 text-white hover:bg-gray-700">9.5</button>
                            <button className="cursor-pointer bg-black p-4 text-white hover:bg-gray-700">10</button>
                            <button className="cursor-pointer bg-black p-4 text-white hover:bg-gray-700">10.5</button>
                            <button className="cursor-pointer bg-black p-4 text-white hover:bg-gray-700">11</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
