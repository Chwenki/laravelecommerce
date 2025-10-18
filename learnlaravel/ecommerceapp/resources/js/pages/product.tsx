import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Breadcrumb, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { Form, Head, Link } from '@inertiajs/react';
import { useState } from 'react';
import Footer from './footer';
import Nav from './nav';

export default function Product(props) {
    const [isLiked, setIsLiked] = useState(false);

    console.log(props);
    const prodimg = document.getElementById('prodimg');

    let posX = 0;
    prodimg?.addEventListener('mouseover', function (e) {
        const posX = e.pageX;
        const posY = e.pageY;
        console.log(posX, posY);
        prodimg.classList.add('hover:scale-210', `relative`, `hover:top-${posY}`);
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
            <Breadcrumb className="mx-12 mt-25 mb-2 flex list-none flex-row items-center">
                <BreadcrumbList>
                    <BreadcrumbLink asChild>
                        <Link className="text-lg" href="/">
                            Home
                        </Link>
                    </BreadcrumbLink>
                </BreadcrumbList>
                <BreadcrumbSeparator />
                <BreadcrumbList>
                    <BreadcrumbLink asChild>
                        <Link className="text-lg" href={'/' + props['product']['Genre'].toLowerCase()}>
                            {props['product']['Genre']}
                        </Link>
                    </BreadcrumbLink>
                </BreadcrumbList>
                <BreadcrumbSeparator />
                <BreadcrumbList>
                    <BreadcrumbLink asChild>
                        <Link className="text-lg" href={'/' + props['product']['Genre'].toLowerCase() + '-' + props['product']['Type'].toLowerCase()}>
                            {props['product']['Type']}
                        </Link>
                    </BreadcrumbLink>
                </BreadcrumbList>
            </Breadcrumb>
            <div className="mx-12 mt-10 mb-30 grid grid-cols-3 gap-2">
                <div className="col-span-2 gap-2">
                    <div className="flex flex-row gap-2">
                        <div className="flex flex-col gap-2">
                            {props['thumbnails'].map((item, index) => (
                                <img className="thumb h-30 w-110" src={item} key={index} alt="" />
                            ))}
                        </div>
                        <div className="overflow-hidden">
                            <img
                                id="prodimg"
                                className="z--1 h-full w-full transition-transform duration-300 ease-in-out"
                                src={props['product'].Image_url}
                                alt=""
                            />
                            <p className="text-md text-gray-600">{props['product'].Description}</p>
                        </div>
                    </div>
                    <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-lg">Reviews</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <p className="text-base">
                                    Our flagship product combines cutting-edge technology with sleek design. Built with premium materials, it offers
                                    unparalleled performance and reliability.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="text-lg">Description</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-justify">
                                <div className="flex items-center gap-5">
                                    <p className="text-base">{props['product']['Description']}</p>
                                    <img className="h-80 w-80" src={props['thumbnails'][0]} alt="" />
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>

                <div className="sticky top-200 col-span-1 font-bold">
                    <h1 className="pb-5 text-2xl">{props['product'].Name}</h1>
                    <p className="text-black-600 text-sm font-extrabold">{props['product'].Price.toLocaleString()} FCFA</p>
                    <p className="my-5">Promo codes will not apply to this product.</p>
                    <div className="relative flex flex-row gap-2">
                        <Form
                            className="flex w-90 cursor-pointer flex-col justify-start gap-2"
                            method="post"
                            href={currentURL}
                            transform={(data) => ({ ...data, prodId: props['product'].id })}
                        >
                            {({ processing, wasSuccessful }) => (
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

export function AccordionDemo() {
    return (
        <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
            <AccordionItem value="item-1">
                <AccordionTrigger>Reviews</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                        Our flagship product combines cutting-edge technology with sleek design. Built with premium materials, it offers unparalleled
                        performance and reliability.
                    </p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>Description</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                        We offer worldwide shipping through trusted courier partners. Standard delivery takes 3-5 business days, while express
                        shipping ensures delivery within 1-2 business days.
                    </p>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
}
