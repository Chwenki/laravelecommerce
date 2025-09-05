import { Link } from '@inertiajs/react';

export default function ProductCard({ category = '', item, index }) {
    return (
        <Link className="swiper-slide" href={`${category}/products/${item.Id}`}>
            <div className="relative">
                <img key={index} className="h-65 w-65" src={item.Image_url} alt="" />
                <span className="absolute top-2 right-2 origin-top-left cursor-pointer text-2xl transition-transform duration-50 ease-in-out hover:text-red-900">
                    <i class="fa-regular fa-heart"></i>
                </span>
            </div>
            <div className="mt-5 flex flex-col gap-2 text-sm">
                <p className="pb-2 font-bold">{item.Price}FCFA</p>
                <p>{item.Name}</p>
                <p>{item.Colors} Colour(s)</p>
            </div>
        </Link>
    );
}
