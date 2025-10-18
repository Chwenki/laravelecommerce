import { Link } from '@inertiajs/react';
import { useEffect, useState } from 'react';

export default function ProductCard({ category = '', item, wishlist = '' }) {
    const [isLiked, setIsLiked] = useState(false);
    if (!item.Name) {
        item = item[0];
    }
    useEffect(() => {
        if (wishlist) {
            for (let i = 0; i < wishlist.length; i++) {
                if (wishlist[i] === item.id) {
                    setIsLiked(true);
                    break;
                }
            }
        }
    }, []);

    const currentURL = window.location.href;
    const categoryname = 'women';
    function UrlString(str) {
        return str.toLowerCase().replaceAll(' ', '-');
    }
    console.log(item);
    return (
        <>
            <div className="bg-gray-200 p-5">
                <div className="relative">
                    <Link className="bg-gray-200 p-5" href={`/products/${UrlString(item.Name)}`}>
                        <img className="h-65 w-65" src={item.Image_url} alt="" />
                    </Link>
                    <Link
                        className="flex w-90 cursor-pointer flex-col justify-start gap-2"
                        method="post"
                        data={{ prodId: item.id, prodLiked: !isLiked }}
                        onClick={() => setIsLiked(!isLiked)}
                        preserveScroll
                    >
                        <span>
                            {isLiked ? (
                                <span className="absolute top-2 right-2 origin-top-left cursor-pointer text-2xl text-red-600 transition-transform duration-50 ease-in-out hover:text-red-800">
                                    <i class="fa-solid fa-heart"></i>
                                </span>
                            ) : (
                                <span className="absolute top-2 right-2 origin-top-left cursor-pointer text-2xl transition-transform duration-50 ease-in-out hover:text-red-600">
                                    <i class="fa-regular fa-heart"></i>
                                </span>
                            )}
                        </span>
                    </Link>
                </div>
                {/* <Form
                        className="flex w-90 cursor-pointer flex-col justify-start gap-2"
                        method="post"
                        action="/cart"
                        transform={(data) => ({ ...data, prodId: item.id, prodLiked: isLiked })}
                        onClick={() => setIsLiked(!isLiked)}
                    >
                        {({ processing }) => (
                            <>
                                <span>
                                    {isLiked ? (
                                        <>
                                            {processing ? (
                                                <LoaderCircle className="h-4 w-4 animate-spin" />
                                            ) : (
                                                <span className="absolute top-2 right-2 origin-top-left cursor-pointer text-2xl text-red-600 transition-transform duration-50 ease-in-out hover:text-red-800">
                                                    <i class="fa-solid fa-heart"></i>
                                                </span>
                                            )}
                                        </>
                                    ) : (
                                        <>
                                            {processing ? (
                                                <LoaderCircle className="h-4 w-4 animate-spin" />
                                            ) : (
                                                <span className="absolute top-2 right-2 origin-top-left cursor-pointer text-2xl transition-transform duration-50 ease-in-out hover:text-red-600">
                                                    <i class="fa-regular fa-heart"></i>
                                                </span>
                                            )}
                                        </>
                                    )}
                                </span>
                            </>
                        )}
                    </Form> */}
                <div className="mt-5 flex flex-col gap-2 text-sm">
                    <Link className="bg-gray-200 p-5" href={`/products/${UrlString(item.Name)}`}>
                        <p className="pb-2 font-bold">{item.Price}FCFA</p>
                        <p>{item.Name}</p>
                        <p className="text-gray-500">{item.Colors} Colour(s)</p>
                    </Link>
                </div>
            </div>
        </>
    );
}
